import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { Pedido, Cliente, Producto, DetallePedido, Usuario } from '../../core/models';

interface CartItem {
  producto: Producto;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {

  private readonly api = inject(ApiService);
  private readonly fb = inject(FormBuilder);

  loading = true;
  pedidos: Pedido[] = [];
  clientes: Cliente[] = [];
  productos: Producto[] = [];
  repartidores: Usuario[] = [];

  searchTerm = '';
  selectedEstado = 'TODOS';

  showModalNew = false;
  showModalDetail = false;
  selectedPedido: Pedido | null = null;
  saving = false;

  // Asignacion de Repartidor
  selectedRepartidorId: number | null = null;

  // Creador de pedido
  selectedClienteId: number | null = null;
  direccionEntrega = '';
  observaciones = '';
  cartItems: CartItem[] = [];

  // Agregar item al carrito
  selectedProductoId: number | null = null;
  itemCantidad = 1;

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.loading = true;

    this.api.get<Pedido[]>('/pedidos').subscribe({
      next: (backendPeds) => {
        this.pedidos = this.mergeWithSharedOrders(backendPeds || []);
      },
      error: () => {
        this.pedidos = this.mergeWithSharedOrders(this.getDemoOrders());
      },
      complete: () => {
        this.loading = false;
      }
    });

    this.api.get<Cliente[]>('/clientes').subscribe({
      next: (clis) => (this.clientes = clis),
      error: () => {
        this.clientes = [
          { idCliente: 1, nombresRazónSocial: 'Inversiones Licoreras SAC', numeroDocumento: '20601234567', tipoDocumento: { nombreTipoDocumento: 'RUC' }, email: 'contacto@licoreras.pe', telefono: '987654321', estado: 'A' },
          { idCliente: 2, nombresRazónSocial: 'Juan Carlos Mendoza', numeroDocumento: '45891234', tipoDocumento: { nombreTipoDocumento: 'DNI' }, email: 'juan.mendoza@gmail.com', telefono: '912345678', estado: 'A' }
        ];
      }
    });

    this.api.get<Usuario[]>('/usuarios').subscribe({
      next: (users) => {
        this.repartidores = users.filter(u => u.idRol === 4);
      },
      error: () => {
        this.repartidores = [
          { idUsuario: 2, nombres: 'Carlos', apellidos: 'Repartidor', username: 'carlos_rep', email: 'carlos@roma.com', idRol: 4, estado: 'A' },
          { idUsuario: 5, nombres: 'Miguel', apellidos: 'Rápido', username: 'mrapido', email: 'miguel@roma.com', idRol: 4, estado: 'A' }
        ];
      }
    });

    this.api.get<Producto[]>('/productos').subscribe({
      next: (prods) => (this.productos = prods),
      error: () => {
        this.productos = [
          { idProducto: 1, codigoBarras: 'LIC-001', nombre: 'Whisky Johnnie Walker Black 750ml', precioCompra: 80, precioVenta: 129.90, stock: 14 },
          { idProducto: 2, codigoBarras: 'LIC-002', nombre: 'Vodka Absolut 750ml', precioCompra: 40, precioVenta: 69.00, stock: 22 },
          { idProducto: 3, codigoBarras: 'LIC-003', nombre: 'Ron Cartavio Aniversario 750ml', precioCompra: 25, precioVenta: 45.50, stock: 15 }
        ];
      }
    });
  }

  private mergeWithSharedOrders(baseList: Pedido[]): Pedido[] {
    try {
      const saved = localStorage.getItem('roma_shared_orders');
      if (saved) {
        const shared: Pedido[] = JSON.parse(saved);
        const map = new Map<string, Pedido>();

        // Shared orders first (newest)
        shared.forEach(o => {
          const key = o.codigoPedido || String(o.idPedido);
          map.set(key, o);
        });

        // Base orders
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

  private saveToSharedOrders(order: Pedido): void {
    try {
      const existing = localStorage.getItem('roma_shared_orders');
      let orders: Pedido[] = existing ? JSON.parse(existing) : [];
      orders = orders.filter(o => o.codigoPedido !== order.codigoPedido && o.idPedido !== order.idPedido);
      orders.unshift(order);
      localStorage.setItem('roma_shared_orders', JSON.stringify(orders));
    } catch (e) {
      console.warn('Error persisting order', e);
    }
  }

  get pedidosFiltrados(): Pedido[] {
    return this.pedidos.filter((p) => {
      const clientName = this.getClienteNombre(p.cliente);
      const matchSearch = !this.searchTerm ||
        (p.codigoPedido && p.codigoPedido.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (clientName && clientName.toLowerCase().includes(this.searchTerm.toLowerCase()));

      const matchEstado = this.selectedEstado === 'TODOS' ||
        (this.selectedEstado === 'ACTIVO' && p.estado === 'A') ||
        (this.selectedEstado === 'COMPLETADO' && p.estado === 'F');

      return matchSearch && matchEstado;
    });
  }

  openNewModal(): void {
    this.selectedClienteId = this.clientes.length > 0 ? (this.clientes[0].idCliente || null) : null;
    this.direccionEntrega = '';
    this.observaciones = '';
    this.cartItems = [];
    this.selectedProductoId = this.productos.length > 0 ? (this.productos[0].idProducto || null) : null;
    this.itemCantidad = 1;
    this.showModalNew = true;
  }

  closeNewModal(): void {
    this.showModalNew = false;
  }

  openDetailModal(pedido: Pedido): void {
    this.selectedPedido = pedido;
    this.showModalDetail = true;
  }

  closeDetailModal(): void {
    this.showModalDetail = false;
    this.selectedPedido = null;
  }

  addItemToCart(): void {
    if (!this.selectedProductoId || this.itemCantidad <= 0) return;
    const prod = this.productos.find((p) => p.idProducto === Number(this.selectedProductoId));
    if (!prod) return;

    const existingIdx = this.cartItems.findIndex((item) => item.producto.idProducto === prod.idProducto);
    if (existingIdx !== -1) {
      this.cartItems[existingIdx].cantidad += this.itemCantidad;
      this.cartItems[existingIdx].subtotal = this.cartItems[existingIdx].cantidad * prod.precioVenta;
    } else {
      this.cartItems.push({
        producto: prod,
        cantidad: this.itemCantidad,
        precioUnitario: prod.precioVenta,
        subtotal: this.itemCantidad * prod.precioVenta
      });
    }

    this.itemCantidad = 1;
  }

  removeItemFromCart(idx: number): void {
    this.cartItems.splice(idx, 1);
  }

  get totalCarrito(): number {
    return this.cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  }

  get subtotalCarrito(): number {
    return this.totalCarrito / 1.18;
  }

  get igvCarrito(): number {
    return this.totalCarrito - this.subtotalCarrito;
  }

  getClienteNombre(cliente: any): string {
    if (!cliente) return 'Cliente General';
    return cliente['nombresRazónSocial'] || cliente['nombresRazonSocial'] || 'Cliente Registrado';
  }

  saveOrder(): void {
    if (!this.selectedClienteId || this.cartItems.length === 0) {
      alert('Debes seleccionar un cliente y al menos un producto en el pedido.');
      return;
    }

    this.saving = true;

    const clienteSel = this.clientes.find((c) => c.idCliente === Number(this.selectedClienteId));

    const nuevoPedido: Pedido = {
      idPedido: Date.now(),
      codigoPedido: `PED-2026-${Math.floor(100 + Math.random() * 900)}`,
      idCliente: Number(this.selectedClienteId),
      cliente: clienteSel,
      montoSubtotal: Number(this.subtotalCarrito.toFixed(2)),
      montoIgv: Number(this.igvCarrito.toFixed(2)),
      montoTotal: Number(this.totalCarrito.toFixed(2)),
      direccionEntrega: this.direccionEntrega || (clienteSel?.direccionPrincipal || 'Tienda Principal'),
      observaciones: this.observaciones,
      fechaPedido: new Date().toISOString(),
      estado: 'A',
      detalles: this.cartItems.map((ci) => ({
        idProducto: ci.producto.idProducto,
        cantidad: ci.cantidad,
        precioUnitario: ci.precioUnitario,
        subtotal: ci.subtotal,
        producto: ci.producto
      }))
    };

    this.saveToSharedOrders(nuevoPedido);

    this.api.post<Pedido>('/pedidos', nuevoPedido).subscribe({
      next: (res) => {
        if (res && res.idPedido) {
          nuevoPedido.idPedido = res.idPedido;
          this.saveToSharedOrders(nuevoPedido);
        }
        this.pedidos.unshift(nuevoPedido);
        this.closeNewModal();
      },
      error: () => {
        this.pedidos.unshift(nuevoPedido);
        this.closeNewModal();
      },
      complete: () => (this.saving = false)
    });
  }

  cambiarEstado(pedido: Pedido, nuevoEstado: string): void {
    pedido.estado = nuevoEstado;
    this.saveToSharedOrders(pedido);
    if (pedido.idPedido) {
      this.api.put<Pedido>(`/pedidos/${pedido.idPedido}`, pedido).subscribe();
    }
  }

  asignarRepartidor(): void {
    if (!this.selectedPedido || !this.selectedRepartidorId) return;
    
    this.saving = true;
    const repartidor = this.repartidores.find(r => r.idUsuario === Number(this.selectedRepartidorId));
    if (repartidor && this.selectedPedido) {
      (this.selectedPedido as any).repartidorAsignado = repartidor;
      this.saveToSharedOrders(this.selectedPedido);
    }
    this.saving = false;
    this.selectedRepartidorId = null;
  }

  private getDemoOrders(): Pedido[] {
    return [
      {
        idPedido: 101,
        codigoPedido: 'PED-2026-001',
        idCliente: 1,
        cliente: { nombresRazónSocial: 'Inversiones Licoreras SAC', numeroDocumento: '20601234567' },
        montoSubtotal: 219.41,
        montoIgv: 39.49,
        montoTotal: 258.90,
        fechaPedido: '2026-08-09T14:30:00',
        direccionEntrega: 'Av. Larco 456, Miraflores',
        estado: 'A'
      },
      {
        idPedido: 102,
        codigoPedido: 'PED-2026-002',
        idCliente: 2,
        cliente: { nombresRazónSocial: 'Juan Carlos Mendoza', numeroDocumento: '45891234' },
        montoSubtotal: 122.88,
        montoIgv: 22.12,
        montoTotal: 145.00,
        fechaPedido: '2026-08-09T16:10:00',
        direccionEntrega: 'Calle Los Olivos 123, San Isidro',
        estado: 'F'
      }
    ];
  }
}