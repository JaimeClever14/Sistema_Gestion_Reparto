import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { Pedido } from '../../core/models';

@Component({
  selector: 'app-delivery-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, DecimalPipe, DatePipe],
  templateUrl: './delivery-panel.component.html',
  styleUrl: './delivery-panel.component.css'
})
export class DeliveryPanelComponent implements OnInit {

  private api = inject(ApiService);
  auth        = inject(AuthService);

  pedidos: Pedido[] = [];
  loading = true;
  filter: 'ALL' | 'PENDING' | 'ONWAY' | 'DONE' = 'ALL';
  search  = '';
  toast   = '';

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.loading = true;
    this.api.get<Pedido[]>('/pedidos').subscribe({
      next: d  => { this.pedidos = this.merge(d ?? []); this.loading = false; },
      error: () => { this.pedidos = this.merge([]);      this.loading = false; }
    });
  }

  private merge(base: Pedido[]): Pedido[] {
    try {
      const raw = localStorage.getItem('roma_shared_orders');
      if (!raw) return base.length ? base : this.demoData();
      const shared: Pedido[] = JSON.parse(raw);
      const map = new Map<string, Pedido>();
      base.forEach(p   => map.set(key(p), p));
      shared.forEach(p => { if (!map.has(key(p))) map.set(key(p), p); });
      const list = Array.from(map.values());
      return list.length ? list : this.demoData();
    } catch { return base.length ? base : this.demoData(); }
  }

  private saveShared(): void {
    try { localStorage.setItem('roma_shared_orders', JSON.stringify(this.pedidos)); } catch { /* noop */ }
  }

  // ── FILTROS ────────────────────────────────────────────────────────
  get pedidosFiltrados(): Pedido[] {
    return this.pedidos.filter(p => {
      if (this.filter === 'PENDING' && p.estado !== 'A') return false;
      if (this.filter === 'ONWAY'   && p.estado !== 'E') return false;
      if (this.filter === 'DONE'    && p.estado !== 'F') return false;
      if (this.search) {
        const q = this.search.toLowerCase();
        return (p.codigoPedido ?? '').toLowerCase().includes(q)
          || this.nombreCliente(p.cliente).toLowerCase().includes(q)
          || (p.direccionEntrega ?? '').toLowerCase().includes(q);
      }
      return true;
    });
  }

  // ── KPIs ──────────────────────────────────────────────────────────
  get kpiPending(): number { return this.pedidos.filter(p => p.estado === 'A').length; }
  get kpiOnWay():   number { return this.pedidos.filter(p => p.estado === 'E').length; }
  get kpiDone():    number { return this.pedidos.filter(p => p.estado === 'F').length; }
  get kpiCobrar():  number { return +this.pedidos.filter(p => p.estado !== 'F').reduce((s, p) => s + (p.montoTotal ?? 0), 0).toFixed(2); }

  // ── ACCIONES ──────────────────────────────────────────────────────
  iniciarRuta(p: Pedido): void {
    p.estado = 'E';
    this.saveShared();
    this.api.put(`/pedidos/${p.idPedido}`, p).subscribe();
    this.showToast(`🛵 Ruta iniciada — ${p.codigoPedido}`);
  }

  confirmarEntrega(p: Pedido): void {
    p.estado = 'F';
    this.saveShared();
    this.api.put(`/pedidos/${p.idPedido}`, p).subscribe();
    this.showToast(`✅ Entrega confirmada — ${p.codigoPedido}`);
  }

  private showToast(msg: string): void {
    this.toast = msg;
    setTimeout(() => { if (this.toast === msg) this.toast = ''; }, 4000);
  }

  abrirMapa(dir?: string): void {
    if (!dir) return;
    window.open(`https://maps.google.com?q=${encodeURIComponent(dir + ', Lima, Peru')}`, '_blank');
  }

  nombreCliente(c: any): string {
    return c?.nombresRazónSocial ?? c?.nombresRazonSocial ?? c?.razonSocial ?? 'Cliente';
  }

  logout(): void { this.auth.logout(); }

  // ── DEMO DATA ─────────────────────────────────────────────────────
  private demoData(): Pedido[] {
    return [
      {
        idPedido: 101, codigoPedido: 'PED-2026-881',
        cliente: { nombresRazónSocial: 'Juan Carlos Mendoza', numeroDocumento: '45891234', telefono: '912345678' } as any,
        montoSubtotal: 169.41, montoIgv: 30.49, montoTotal: 199.90,
        direccionEntrega: 'Av. Larco 456, Depto 402, Miraflores',
        observaciones: 'Tocar timbre 402 · Pago contraentrega en efectivo.',
        fechaPedido: new Date().toISOString(), estado: 'A',
        detalles: [
          { idProducto: 1, cantidad: 1, precioUnitario: 129.90, subtotal: 129.90, producto: { nombre: 'Whisky Johnnie Walker Black 750ml' } as any },
          { idProducto: 2, cantidad: 1, precioUnitario: 69.00,  subtotal: 69.00,  producto: { nombre: 'Vodka Absolut 750ml' } as any }
        ]
      },
      {
        idPedido: 102, codigoPedido: 'PED-2026-904',
        cliente: { nombresRazónSocial: 'Inversiones Licoreras SAC', numeroDocumento: '20601234567', telefono: '987654321' } as any,
        montoSubtotal: 245.00, montoIgv: 44.10, montoTotal: 289.10,
        direccionEntrega: 'Calle Los Olivos 123, San Isidro',
        observaciones: 'Entregar en recepción. Ya pagado con Yape.',
        fechaPedido: new Date().toISOString(), estado: 'E',
        detalles: [
          { idProducto: 5, cantidad: 3, precioUnitario: 28.50, subtotal: 85.50, producto: { nombre: 'Cerveza Cusqueña 6x330ml' } as any },
          { idProducto: 4, cantidad: 4, precioUnitario: 42.00, subtotal: 168.00, producto: { nombre: 'Pisco Cuatro Gallos 750ml' } as any }
        ]
      },
      {
        idPedido: 103, codigoPedido: 'PED-2026-720',
        cliente: { nombresRazónSocial: 'Bodega Don Pepe EIRL', numeroDocumento: '20554433221', telefono: '945678123' } as any,
        montoSubtotal: 80.50, montoIgv: 14.50, montoTotal: 95.00,
        direccionEntrega: 'Av. Javier Prado 1850, Lince',
        observaciones: 'Entregado conforme a las 15:30.',
        fechaPedido: new Date().toISOString(), estado: 'F'
      }
    ];
  }
}

function key(p: Pedido): string { return String(p.idPedido ?? p.codigoPedido); }
