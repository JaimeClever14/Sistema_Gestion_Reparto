import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../core/api.service';
import { Pedido } from '../../../core/models';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule, RouterLink, DecimalPipe, DatePipe],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent implements OnInit {
  private readonly api = inject(ApiService);

  pedidos: Pedido[] = [];
  loading = true;
  filter: 'ALL' | 'IN_PROGRESS' | 'DELIVERED' = 'ALL';
  expandedOrderMap: { [id: string]: boolean } = {};
  toastMsg = '';

  ngOnInit(): void {
    this.cargarPedidos();
  }

  cargarPedidos(): void {
    this.loading = true;
    this.api.get<Pedido[]>('/pedidos/mis-pedidos').subscribe({
      next: (res) => {
        this.pedidos = this.mergeSharedOrders(res ?? []);
        this.loading = false;
      },
      error: () => {
        this.api.get<Pedido[]>('/pedidos').subscribe({
          next: (res) => {
            this.pedidos = this.mergeSharedOrders(res ?? []);
            this.loading = false;
          },
          error: () => {
            this.pedidos = this.mergeSharedOrders([]);
            this.loading = false;
          }
        });
      }
    });
  }

  private mergeSharedOrders(base: Pedido[]): Pedido[] {
    try {
      const raw = localStorage.getItem('roma_shared_orders_DISABLED');
      if (!raw) return base;
      const shared: Pedido[] = JSON.parse(raw);
      const map = new Map<string, Pedido>();
      base.forEach(p => map.set(key(p), p));
      shared.forEach(p => {
        if (!map.has(key(p))) {
          map.set(key(p), p);
        } else {
          // If status in shared is 'F' (delivered), prefer shared status update
          const existing = map.get(key(p))!;
          if (p.estado === 'F') existing.estado = 'F';
        }
      });
      return Array.from(map.values());
    } catch {
      return base;
    }
  }

  recargar(): void {
    this.cargarPedidos();
    this.showToast('🔄 Lista de pedidos actualizada');
  }

  get pedidosFiltrados(): Pedido[] {
    return this.pedidos.filter(p => {
      if (this.filter === 'IN_PROGRESS' && p.estado === 'F') return false;
      if (this.filter === 'DELIVERED'   && p.estado !== 'F') return false;
      return true;
    });
  }

  get statsTotal(): number { return this.pedidos.length; }
  get statsEnRuta(): number { return this.pedidos.filter(p => p.estado !== 'F').length; }
  get statsEntregados(): number { return this.pedidos.filter(p => p.estado === 'F').length; }

  toggleExpand(p: Pedido): void {
    const id = key(p);
    this.expandedOrderMap[id] = !this.expandedOrderMap[id];
  }

  isExpanded(p: Pedido): boolean {
    return !!this.expandedOrderMap[key(p)];
  }

  // ETAPAS DEL TRACKING DE ENTREGA (1 a 4)
  getTrackingStep(p: Pedido): number {
    if (p.estado === 'F') return 4; // Entregado
    if (p.estado === 'E') return 3; // En camino con el repartidor
    if (p.estado === 'A' || p.estado === 'P') return 2; // En preparación
    return 1; // Recibido
  }

  getEstadoClase(p: Pedido): string {
    if (p.estado === 'F') return 'st-done';
    if (p.estado === 'E') return 'st-route';
    return 'st-prep';
  }

  getEstadoTexto(p: Pedido): string {
    if (p.estado === 'F') return '✅ Entregado';
    if (p.estado === 'E') return '🚚 En Camino / Reparto';
    if (p.estado === 'A') return '👨‍🍳 En Preparación';
    return '⏳ Pedido Recibido';
  }

  private showToast(msg: string): void {
    this.toastMsg = msg;
    setTimeout(() => { if (this.toastMsg === msg) this.toastMsg = ''; }, 3000);
  }
}

function key(p: Pedido): string {
  return String(p.idPedido ?? p.codigoPedido);
}
