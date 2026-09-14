import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { Pedido, Cliente, Producto } from '../../core/models';

export interface VendedorReport {
  vendedorId: number | string;
  nombreVendedor: string;
  totalVentas: number;
  cantidadPedidos: number;
  ticketPromedio: number;
  porcentajeTotal: number;
}

export interface ClienteReport {
  clienteId: number | string;
  nombreCliente: string;
  documento: string;
  totalCompras: number;
  cantidadPedidos: number;
  ticketPromedio: number;
  ultimaCompra?: string;
}

export interface DiaReport {
  fechaStr: string;
  diaNombre: string;
  totalMonto: number;
  cantidadPedidos: number;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, DecimalPipe, DatePipe],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {

  private readonly api = inject(ApiService);

  loading = true;
  activeTab: 'dia' | 'semana' | 'cliente' | 'vendedor' = 'dia';

  pedidos: Pedido[] = [];
  clientes: Cliente[] = [];
  productos: Producto[] = [];

  // Filtros
  fechaSeleccionada: string = new Date().toISOString().substring(0, 10);
  searchCliente: string = '';
  searchVendedor: string = '';

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.loading = true;

    this.api.get<Pedido[]>('/pedidos').subscribe({
      next: (peds) => {
        this.pedidos = this.mergeSharedOrders(peds || []);
        this.cargarOtrosDatos();
      },
      error: () => {
        this.pedidos = this.mergeSharedOrders(this.getDemoPedidos());
        this.cargarOtrosDatos();
      }
    });
  }

  private cargarOtrosDatos(): void {
    this.api.get<Cliente[]>('/clientes').subscribe({
      next: (clis) => {
        this.clientes = this.mergeRegisteredClients(clis || []);
        this.loading = false;
      },
      error: () => {
        this.clientes = this.mergeRegisteredClients(this.getDemoClientes());
        this.loading = false;
      }
    });
  }

  private mergeSharedOrders(base: Pedido[]): Pedido[] {
    try {
      const saved = localStorage.getItem('roma_shared_orders_DISABLED');
      if (saved) {
        const shared: Pedido[] = JSON.parse(saved);
        const map = new Map<string, Pedido>();
        shared.forEach(p => map.set(p.codigoPedido || String(p.idPedido), p));
        base.forEach(p => {
          const k = p.codigoPedido || String(p.idPedido);
          if (!map.has(k)) map.set(k, p);
        });
        return Array.from(map.values());
      }
    } catch (e) {
      console.warn('Error reading shared orders', e);
    }
    return base;
  }

  private mergeRegisteredClients(base: Cliente[]): Cliente[] {
    const list = [...base];
    try {
      const stored = localStorage.getItem('roma_registered_clients');
      if (stored) {
        const registered: Cliente[] = JSON.parse(stored);
        for (const reg of registered) {
          const regName = this.getClienteNombre(reg).toLowerCase();
          const exists = list.some(c => 
            (c.email && reg.email && c.email.toLowerCase() === reg.email.toLowerCase()) ||
            (this.getClienteNombre(c).toLowerCase() === regName)
          );
          if (!exists) list.unshift(reg);
        }
      }
    } catch {}
    return list;
  }

  // ── GETTERS Y CÁLCULOS ─────────────────────────────────────────────

  get totalGeneralMonto(): number {
    return +this.pedidos.reduce((s, p) => s + (p.total || p.montoTotal || 0), 0).toFixed(2);
  }

  get totalGeneralPedidos(): number {
    return this.pedidos.length;
  }

  get ticketPromedioGeneral(): number {
    if (this.totalGeneralPedidos === 0) return 0;
    return +(this.totalGeneralMonto / this.totalGeneralPedidos).toFixed(2);
  }

  // 1. INFORME POR DÍA
  get pedidosDia(): Pedido[] {
    if (!this.fechaSeleccionada) return this.pedidos;
    return this.pedidos.filter(p => {
      if (!p.fechaPedido) return true;
      const f = new Date(p.fechaPedido).toISOString().substring(0, 10);
      return f === this.fechaSeleccionada;
    });
  }

  get montoDia(): number {
    return +this.pedidosDia.reduce((s, p) => s + (p.total || p.montoTotal || 0), 0).toFixed(2);
  }

  get subtotalDia(): number {
    return +(this.montoDia / 1.18).toFixed(2);
  }

  get igvDia(): number {
    return +(this.montoDia - this.subtotalDia).toFixed(2);
  }

  // Desglose por días de los últimos 7 días
  get ultimos7Dias(): DiaReport[] {
    const res: DiaReport[] = [];
    const hoy = new Date();
    const diasNombres = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    for (let i = 6; i >= 0; i--) {
      const d = new Date(hoy);
      d.setDate(d.getDate() - i);
      const iso = d.toISOString().substring(0, 10);
      const diaNom = diasNombres[d.getDay()];

      const peds = this.pedidos.filter(p => {
        if (!p.fechaPedido) return false;
        return new Date(p.fechaPedido).toISOString().substring(0, 10) === iso;
      });

      const total = peds.reduce((s, p) => s + (p.total || p.montoTotal || 0), 0);

      res.push({
        fechaStr: iso,
        diaNombre: diaNom,
        totalMonto: +total.toFixed(2),
        cantidadPedidos: peds.length
      });
    }
    return res;
  }

  get maxMontoSieteDias(): number {
    const max = Math.max(...this.ultimos7Dias.map(d => d.totalMonto));
    return max > 0 ? max : 1;
  }

  // 2. INFORME POR SEMANA
  get ventasSemanaActual(): number {
    const hoy = new Date();
    const inicioSemana = new Date(hoy);
    inicioSemana.setDate(hoy.getDate() - hoy.getDay() + 1); // Lunes
    inicioSemana.setHours(0, 0, 0, 0);

    return +this.pedidos
      .filter(p => p.fechaPedido && new Date(p.fechaPedido) >= inicioSemana)
      .reduce((s, p) => s + (p.total || p.montoTotal || 0), 0)
      .toFixed(2);
  }

  get cantidadSemanaActual(): number {
    const hoy = new Date();
    const inicioSemana = new Date(hoy);
    inicioSemana.setDate(hoy.getDate() - hoy.getDay() + 1);
    inicioSemana.setHours(0, 0, 0, 0);

    return this.pedidos.filter(p => p.fechaPedido && new Date(p.fechaPedido) >= inicioSemana).length;
  }

  // 3. INFORME POR CLIENTE
  get reporteClientes(): ClienteReport[] {
    const map = new Map<string, { cliente: Cliente; total: number; cant: number; ultima: string }>();

    for (const p of this.pedidos) {
      const cli = p.cliente || { idCliente: p.idCliente, nombresRazonSocial: 'Cliente General' };
      const key = String(cli.idCliente || this.getClienteNombre(cli));

      const monto = p.total || p.montoTotal || 0;
      const fStr = p.fechaPedido ? new Date(p.fechaPedido).toISOString() : '';

      if (map.has(key)) {
        const item = map.get(key)!;
        item.total += monto;
        item.cant += 1;
        if (fStr > item.ultima) item.ultima = fStr;
      } else {
        map.set(key, { cliente: cli, total: monto, cant: 1, ultima: fStr });
      }
    }

    let list: ClienteReport[] = Array.from(map.values()).map(i => ({
      clienteId: i.cliente.idCliente || 0,
      nombreCliente: this.getClienteNombre(i.cliente),
      documento: i.cliente.numeroDocumento || 'S/N',
      totalCompras: +i.total.toFixed(2),
      cantidadPedidos: i.cant,
      ticketPromedio: +(i.total / i.cant).toFixed(2),
      ultimaCompra: i.ultima
    }));

    list.sort((a, b) => b.totalCompras - a.totalCompras);

    if (this.searchCliente.trim()) {
      const q = this.searchCliente.trim().toLowerCase();
      list = list.filter(c => c.nombreCliente.toLowerCase().includes(q) || c.documento.toLowerCase().includes(q));
    }

    return list;
  }

  // 4. INFORME POR VENDEDOR
  get reporteVendedores(): VendedorReport[] {
    const map = new Map<string, { nombre: string; total: number; cant: number }>();

    for (const p of this.pedidos) {
      const user = (p as any).usuario || (p as any).vendedor;
      const vName = user?.nombres || user?.username || (p.idUsuario === 1 ? 'Vendedor POS Principal' : 'Tienda Web / Sistema');
      const key = vName;

      const monto = p.total || p.montoTotal || 0;

      if (map.has(key)) {
        const item = map.get(key)!;
        item.total += monto;
        item.cant += 1;
      } else {
        map.set(key, { nombre: vName, total: monto, cant: 1 });
      }
    }

    const totGen = this.totalGeneralMonto || 1;
    let list: VendedorReport[] = Array.from(map.entries()).map(([k, v]) => ({
      vendedorId: k,
      nombreVendedor: k,
      totalVentas: +v.total.toFixed(2),
      cantidadPedidos: v.cant,
      ticketPromedio: +(v.total / v.cant).toFixed(2),
      porcentajeTotal: +((v.total / totGen) * 100).toFixed(1)
    }));

    list.sort((a, b) => b.totalVentas - a.totalVentas);

    if (this.searchVendedor.trim()) {
      const q = this.searchVendedor.trim().toLowerCase();
      list = list.filter(v => v.nombreVendedor.toLowerCase().includes(q));
    }

    return list;
  }

  getClienteNombre(c: any): string {
    if (!c) return 'Cliente General';
    return c.nombresRazónSocial || c.nombresRazonSocial || c.razonSocial || (c.nombres ? `${c.nombres} ${c.apellidos || ''}`.trim() : 'Cliente Registrado');
  }

  imprimirInforme(): void {
    window.print();
  }

  private getDemoPedidos(): Pedido[] {
    const hoy = new Date().toISOString();
    return [
      { idPedido: 101, codigoPedido: 'PED-2026-001', fechaPedido: hoy, montoTotal: 450.90, total: 450.90, idUsuario: 1, cliente: { idCliente: 1, nombresRazónSocial: 'Inversiones Licoreras SAC', numeroDocumento: '20601234567' }, estado: 'F' },
      { idPedido: 102, codigoPedido: 'PED-2026-002', fechaPedido: hoy, montoTotal: 129.90, total: 129.90, idUsuario: 1, cliente: { idCliente: 2, nombresRazónSocial: 'Juan Carlos Mendoza', numeroDocumento: '45891234' }, estado: 'F' },
      { idPedido: 103, codigoPedido: 'PED-2026-003', fechaPedido: hoy, montoTotal: 890.00, total: 890.00, idUsuario: 1, cliente: { idCliente: 3, nombresRazónSocial: 'Bodega Don Pepe EIRL', numeroDocumento: '20554433221' }, estado: 'A' }
    ];
  }

  private getDemoClientes(): Cliente[] {
    return [
      { idCliente: 1, nombresRazónSocial: 'Inversiones Licoreras SAC', numeroDocumento: '20601234567' },
      { idCliente: 2, nombresRazónSocial: 'Juan Carlos Mendoza', numeroDocumento: '45891234' },
      { idCliente: 3, nombresRazónSocial: 'Bodega Don Pepe EIRL', numeroDocumento: '20554433221' }
    ];
  }
}
