import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { NotificationService } from '../../core/notification.service';
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
  notifService = inject(NotificationService);

  pedidos: Pedido[] = [];
  loading = true;
  filter: 'ALL' | 'PENDING' | 'DONE' = 'ALL';
  search  = '';
  toast   = '';
  showNotifMenu = false;

  ngOnInit(): void {
    this.cargar();
  }

  toggleNotifMenu(): void {
    this.showNotifMenu = !this.showNotifMenu;
    if (this.showNotifMenu) {
      this.notifService.markAllAsRead('REPARTIDOR');
    }
  }

  onSelectNotification(n: any): void {
    this.showNotifMenu = false;
    this.notifService.markAsRead(n.id);
    if (n.orderCode) {
      this.search = n.orderCode;
    }
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
      const raw = localStorage.getItem('roma_shared_orders_DISABLED');
      if (!raw) return base.length ? base : [];
      const shared: Pedido[] = JSON.parse(raw);
      const map = new Map<string, Pedido>();
      base.forEach(p   => map.set(key(p), p));
      shared.forEach(p => { if (!map.has(key(p))) map.set(key(p), p); });
      const list = Array.from(map.values());
      return list.length ? list : [];
    } catch { return base.length ? base : []; }
  }

  private saveShared(): void {
    try { localStorage.setItem('roma_shared_orders_DISABLED', JSON.stringify(this.pedidos)); } catch { /* noop */ }
  }

  // ── FILTROS ────────────────────────────────────────────────────────
  get pedidosFiltrados(): Pedido[] {
    return this.pedidos.filter(p => {
      if (this.filter === 'PENDING' && p.estado === 'F') return false;
      if (this.filter === 'DONE'    && p.estado !== 'F') return false;
      
      if (this.search) {
        const q = this.search.trim().toLowerCase();
        return (p.codigoPedido ?? '').toLowerCase().includes(q)
          || this.nombreCliente(p.cliente).toLowerCase().includes(q)
          || (p.direccionEntrega ?? '').toLowerCase().includes(q)
          || (p.cliente?.telefono ?? '').includes(q);
      }
      return true;
    });
  }

  // ── KPIs ──────────────────────────────────────────────────────────
  get kpiTotal():   number { return this.pedidos.length; }
  get kpiPending(): number { return this.pedidos.filter(p => p.estado !== 'F').length; }
  get kpiDone():    number { return this.pedidos.filter(p => p.estado === 'F').length; }
  get kpiCobrar():  number { 
    return +this.pedidos
      .filter(p => p.estado !== 'F')
      .reduce((s, p) => s + (p.total ?? p.montoTotal ?? 0), 0)
      .toFixed(2); 
  }

  // 🚀 ACCIONES 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
  recargar(): void {
    this.cargar();
    this.showToast('🔄 Lista de pedidos actualizada');
  }

  confirmarEntrega(p: Pedido): void {
    p.estado = 'F';
    this.saveShared();
    if (p.idPedido) this.api.put(`/pedidos/${p.idPedido}`, p).subscribe();

    const code = p.codigoPedido || String(p.idPedido);
    
    // Notificar al CLIENTE
    this.notifService.notify(
      'CLIENTE',
      '✅ ¡Pedido Entregado con Éxito!',
      `Tu pedido #${code} ha sido entregado correctamente en tu domicilio. ¡Gracias por confiar en RomaPedidos!`,
      code,
      'success'
    );

    // Notificar al ADMIN
    this.notifService.notify(
      'ADMIN',
      '✅ Despacho Entregado',
      `El repartidor finalizó la entrega del pedido #${code}.`,
      code,
      'success'
    );

    this.showToast(`✅ Entrega confirmada con éxito — #${code}`);
  }

  private showToast(msg: string): void {
    this.toast = msg;
    setTimeout(() => { if (this.toast === msg) this.toast = ''; }, 4000);
  }

  abrirMapa(dir?: string): void {
    if (!dir) return;
    window.open(`https://maps.google.com?q=${encodeURIComponent(dir + ', Lima, Peru')}`, '_blank');
  }

  abrirWhatsapp(tel?: string, clienteNombre?: string): void {
    if (!tel) return;
    const cleanNum = tel.replace(/\D/g, '');
    const numConCodigo = cleanNum.startsWith('51') ? cleanNum : '51' + cleanNum;
    const msg = encodeURIComponent(`Hola ${clienteNombre || 'estimado(a)'}, te saluda el repartidor de RomaPedidos. Estoy en camino con tu pedido.`);
    window.open(`https://wa.me/${numConCodigo}?text=${msg}`, '_blank');
  }

  nombreCliente(c: any): string {
    return c?.nombresRazónSocial ?? c?.nombresRazonSocial ?? c?.razonSocial ?? (c?.nombres ? `${c.nombres} ${c.apellidos || ''}`.trim() : 'Cliente');
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
