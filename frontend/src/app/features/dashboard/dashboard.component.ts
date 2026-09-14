import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { Producto, Pedido, Cliente, StatCard } from '../../core/models';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  private readonly api = inject(ApiService);

  loading = true;
  productos: Producto[] = [];
  pedidos: Pedido[] = [];
  clientes: Cliente[] = [];

  stats: StatCard[] = [];

  get productosCriticos(): Producto[] {
    const list = this.productos.filter((p) => p.stock <= (p.stockMinimo || 5));
    return list.length > 0 ? list : this.productos.slice(0, 4);
  }

  get recentPedidos(): Pedido[] {
    return this.pedidos.slice(0, 6);
  }

  get totalRecaudadoVal(): number {
    return +this.pedidos.reduce((sum, p) => sum + (p.montoTotal || p.total || 0), 0).toFixed(2);
  }

  getClienteNombre(cliente: any): string {
    if (!cliente) return 'Cliente General';
    return cliente['nombresRazónSocial'] || cliente['nombresRazonSocial'] || 'Cliente Registrado';
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.loading = true;

    this.api.get<Producto[]>('/productos').subscribe({
      next: (prods) => {
        this.productos = prods;
        this.recalcularStats();
      },
      error: () => this.usarDatosDemostración()
    });

    this.api.get<Pedido[]>('/pedidos').subscribe({
      next: (peds) => {
        this.pedidos = this.mergeWithSharedOrders(peds || []);
        this.recalcularStats();
      },
      error: () => {
        this.pedidos = this.mergeWithSharedOrders([]);
        this.recalcularStats();
      }
    });

    this.api.get<Cliente[]>('/clientes').subscribe({
      next: (clis) => {
        this.clientes = clis;
        this.recalcularStats();
      },
      error: () => {
        this.clientes = [
          { idCliente: 1, nombresRazónSocial: 'Inversiones Licoreras SAC', numeroDocumento: '20601234567' },
          { idCliente: 2, nombresRazónSocial: 'Juan Carlos Mendoza', numeroDocumento: '45891234' }
        ];
        this.recalcularStats();
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  private mergeWithSharedOrders(baseList: Pedido[]): Pedido[] {
    try {
      const saved = localStorage.getItem('roma_shared_orders_DISABLED');
      if (saved) {
        const shared: Pedido[] = JSON.parse(saved);
        const map = new Map<string, Pedido>();

        shared.forEach(o => {
          const key = o.codigoPedido || String(o.idPedido);
          map.set(key, o);
        });

        baseList.forEach(o => {
          const key = o.codigoPedido || String(o.idPedido);
          if (!map.has(key)) {
            map.set(key, o);
          }
        });

        return Array.from(map.values());
      }
    } catch (e) {
      console.warn('Error reading shared orders', e);
    }
    return baseList;
  }

  private recalcularStats(): void {
    const totalVentas = this.pedidos.reduce((sum, p) => sum + (p.montoTotal || 0), 0);
    const stockBajo = this.productos.filter((p) => p.stock <= (p.stockMinimo || 5)).length;
    const pedidosPendientes = this.pedidos.filter((p) => p.estado === 'A' || p.idEstadoPedido === 1).length;

    this.stats = [
      {
        label: 'Ventas Totales',
        value: `S/ ${totalVentas.toFixed(2)}`,
        description: `${this.pedidos.length} pedidos registrados`,
        tone: 'primary',
        icon: '💰'
      },
      {
        label: 'Stock Bajo',
        value: `${stockBajo} productos`,
        description: 'Requieren reposición urgente',
        tone: 'accent',
        icon: '⚠️'
      },
      {
        label: 'Pedidos Activos',
        value: `${pedidosPendientes}`,
        description: 'En proceso o despacho',
        tone: 'success',
        icon: '📦'
      },
      {
        label: 'Clientes Registrados',
        value: `${this.clientes.length}`,
        description: 'Cartera comercial activa',
        tone: 'danger',
        icon: '👥'
      }
    ];
  }

  private getDemoOrders(): Pedido[] {
    return [
      { idPedido: 101, codigoPedido: 'PED-2026-001', montoSubtotal: 219.41, montoIgv: 39.49, montoTotal: 258.90, estado: 'A' },
      { idPedido: 102, codigoPedido: 'PED-2026-002', montoSubtotal: 122.88, montoIgv: 22.12, montoTotal: 145.00, estado: 'F' }
    ];
  }

  private usarDatosDemostración(): void {
    this.productos = [
      { idProducto: 1, nombre: 'Whisky Johnnie Walker Black Label', precioCompra: 80, precioVenta: 129.90, stock: 4, stockMinimo: 5 },
      { idProducto: 2, nombre: 'Vodka Absolut Original 750ml', precioCompra: 40, precioVenta: 69.00, stock: 18, stockMinimo: 6 },
      { idProducto: 3, nombre: 'Ron Cartavio Aniversario 750ml', precioCompra: 25, precioVenta: 45.50, stock: 3, stockMinimo: 8 },
      { idProducto: 4, nombre: 'Pisco Cuatro Gallos Quebranta', precioCompra: 25, precioVenta: 42.00, stock: 12, stockMinimo: 5 }
    ];

    this.pedidos = this.mergeWithSharedOrders([]);
    this.clientes = [
      { idCliente: 1, nombresRazónSocial: 'Inversiones Licoreras SAC', numeroDocumento: '20601234567' },
      { idCliente: 2, nombresRazónSocial: 'Juan Carlos Mendoza', numeroDocumento: '45891234' }
    ];

    this.recalcularStats();
    this.loading = false;
  }
}