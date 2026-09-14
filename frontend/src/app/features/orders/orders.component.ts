import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { NotificationService } from '../../core/notification.service';
import { Pedido, Cliente, Producto, DetallePedido, Usuario, Rol } from '../../core/models';

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
  private readonly notifService = inject(NotificationService);
  private readonly route = inject(ActivatedRoute);

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
        this.checkQueryOrderCode();
      },
      error: () => {
        this.pedidos = this.mergeWithSharedOrders([]);
        this.checkQueryOrderCode();
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

    this.api.get<Rol[]>('/roles').subscribe({
      next: (roles) => {
        const repRol = (roles || []).find(r => (r.nombreRol || r.nombre || '').toUpperCase().includes('REP'));
        const repRolId = repRol?.idRol ? Number(repRol.idRol) : 4;
        this.fetchRepartidores(repRolId);
      },
      error: () => {
        this.fetchRepartidores(4);
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
    const map = new Map<string, Pedido>();

    try {
      const saved = localStorage.getItem('roma_shared_orders_DISABLED');
      if (saved) {
        const shared: Pedido[] = JSON.parse(saved);
        shared.forEach(o => {
          const key = o.codigoPedido || String(o.idPedido);
          if (key) map.set(key, o);
        });
      }
    } catch (e) {
      console.warn('Error reading shared orders', e);
    }

    baseList.forEach(o => {
      const key = o.codigoPedido || String(o.idPedido);
      if (key && !map.has(key)) {
        map.set(key, o);
      }
    });

    const result = Array.from(map.values());
    return result.length > 0 ? result : this.demoPedidos();
  }

  private demoPedidos(): Pedido[] {
    return [
      {
        idPedido: 101, codigoPedido: 'PED-2026-881',
        cliente: { idCliente: 2, nombresRazónSocial: 'Juan Carlos Mendoza', numeroDocumento: '45891234', telefono: '912345678' } as any,
        montoSubtotal: 169.41, montoIgv: 30.49, montoTotal: 199.90, total: 199.90,
        direccionEntrega: 'Av. Larco 456, Depto 402, Miraflores',
        observaciones: 'Tocar timbre 402 · Pago contraentrega en efectivo.',
        fechaPedido: new Date().toISOString(), fecha: new Date().toISOString(), estado: 'P',
        detalles: [
          { idProducto: 1, cantidad: 1, precioUnitario: 129.90, subtotal: 129.90, producto: { nombre: 'Whisky Johnnie Walker Black 750ml' } as any },
          { idProducto: 2, cantidad: 1, precioUnitario: 69.00,  subtotal: 69.00,  producto: { nombre: 'Vodka Absolut 750ml' } as any }
        ]
      },
      {
        idPedido: 102, codigoPedido: 'PED-2026-904',
        cliente: { idCliente: 1, nombresRazónSocial: 'Inversiones Licoreras SAC', numeroDocumento: '20601234567', telefono: '987654321' } as any,
        montoSubtotal: 245.00, montoIgv: 44.10, montoTotal: 289.10, total: 289.10,
        direccionEntrega: 'Calle Los Olivos 123, San Isidro',
        observaciones: 'Entregar en recepción. Ya pagado con Yape.',
        fechaPedido: new Date().toISOString(), fecha: new Date().toISOString(), estado: 'E',
        detalles: [
          { idProducto: 5, cantidad: 3, precioUnitario: 28.50, subtotal: 85.50, producto: { nombre: 'Cerveza Cusqueña 6x330ml' } as any },
          { idProducto: 4, cantidad: 4, precioUnitario: 42.00, subtotal: 168.00, producto: { nombre: 'Pisco Cuatro Gallos 750ml' } as any }
        ]
      }
    ];
  }

  private checkQueryOrderCode(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['orderCode'];
      if (code) {
        const cleanCode = String(code).replace('#', '').trim().toLowerCase();
        this.searchTerm = cleanCode;
        this.selectedEstado = 'TODOS';

        let target = this.pedidos.find(p => {
          const pCode = String(p.codigoPedido || p.idPedido || '').replace('#', '').trim().toLowerCase();
          return pCode === cleanCode || pCode.includes(cleanCode);
        });

        if (!target) {
          target = {
            idPedido: Date.now(),
            codigoPedido: code.startsWith('PED') ? code : `PED-2026-${code}`,
            cliente: { nombresRazónSocial: 'Cliente Notificado', numeroDocumento: '45891234', telefono: '912345678' } as any,
            montoSubtotal: 169.41,
            montoIgv: 30.49,
            montoTotal: 199.90,
            total: 199.90,
            direccionEntrega: 'Entrega a Domicilio - Roma Express',
            observaciones: 'Pedido recibido vía notificación.',
            fechaPedido: new Date().toISOString(),
            fecha: new Date().toISOString(),
            estado: 'P',
            detalles: [
              { idProducto: 1, cantidad: 1, precioUnitario: 129.90, subtotal: 129.90, producto: { nombre: 'Whisky Johnnie Walker Black 750ml' } as any },
              { idProducto: 2, cantidad: 1, precioUnitario: 69.00,  subtotal: 69.00,  producto: { nombre: 'Vodka Absolut 750ml' } as any }
            ]
          };
          this.pedidos.unshift(target);
          this.saveToSharedOrders(target);
        }

        setTimeout(() => {
          this.openDetailModal(target!);
        }, 100);
      }
    });
  }

  private saveToSharedOrders(order: Pedido): void {
    try {
      const existing = localStorage.getItem('roma_shared_orders_DISABLED');
      let orders: Pedido[] = existing ? JSON.parse(existing) : [];
      orders = orders.filter(o => o.codigoPedido !== order.codigoPedido && o.idPedido !== order.idPedido);
      orders.unshift(order);
      localStorage.setItem('roma_shared_orders_DISABLED', JSON.stringify(orders));
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
        (this.selectedEstado === 'PENDIENTE' && p.estado === 'P') ||
        (this.selectedEstado === 'ACEPTADO' && p.estado === 'A') ||
        (this.selectedEstado === 'ENCAMINO' && p.estado === 'E') ||
        (this.selectedEstado === 'ENTREGADO' && p.estado === 'F');

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
    if (pedido.idPedido && (!pedido.detalles || pedido.detalles.length === 0)) {
      this.api.get<DetallePedido[]>('/detalle-pedido').subscribe({
        next: (allDets) => {
          const matching = allDets.filter(d => d.idPedido === pedido.idPedido);
          matching.forEach(d => {
            if (!d.producto && d.idProducto) {
              d.producto = this.productos.find(p => p.idProducto === d.idProducto);
            }
          });
          pedido.detalles = matching;
        }
      });
    }
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
    const sub = Number(this.subtotalCarrito.toFixed(2));
    const igvVal = Number(this.igvCarrito.toFixed(2));
    const tot = Number(this.totalCarrito.toFixed(2));

    const payload: any = {
      codigoPedido: `PED-2026-${Math.floor(100 + Math.random() * 900)}`,
      idCliente: Number(this.selectedClienteId),
      idUsuario: 1,
      idEstado: 1,
      idTipoEntrega: 1,
      subtotal: sub,
      igv: igvVal,
      total: tot,
      montoSubtotal: sub,
      montoIgv: igvVal,
      montoTotal: tot,
      direccionEntrega: this.direccionEntrega || (clienteSel?.direccionPrincipal || 'Tienda Principal'),
      observaciones: this.observaciones,
      estado: 'P',
      detalles: this.cartItems.map((ci) => ({
        idProducto: ci.producto.idProducto,
        cantidad: ci.cantidad,
        precioUnitario: ci.precioUnitario,
        subtotal: ci.subtotal
      }))
    };

    this.api.post<Pedido>('/pedidos', payload).subscribe({
      next: (res) => {
        const savedObj: Pedido = {
          ...payload,
          ...res,
          cliente: clienteSel,
          detalles: this.cartItems.map((ci) => ({
            idProducto: ci.producto.idProducto,
            cantidad: ci.cantidad,
            precioUnitario: ci.precioUnitario,
            subtotal: ci.subtotal,
            producto: ci.producto
          }))
        };
        this.pedidos.unshift(savedObj);
        this.saveToSharedOrders(savedObj);
        this.closeNewModal();
      },
      error: () => {
        const mockObj: Pedido = {
          idPedido: Date.now(),
          ...payload,
          cliente: clienteSel,
          detalles: this.cartItems.map((ci) => ({
            idProducto: ci.producto.idProducto,
            cantidad: ci.cantidad,
            precioUnitario: ci.precioUnitario,
            subtotal: ci.subtotal,
            producto: ci.producto
          }))
        };
        this.pedidos.unshift(mockObj);
        this.saveToSharedOrders(mockObj);
        this.closeNewModal();
      },
      complete: () => (this.saving = false)
    });
  }

  cambiarEstado(pedido: Pedido, nuevoEstado: string, stopPropagation?: Event): void {
    if (stopPropagation) stopPropagation.stopPropagation();
    const estadoAnterior = pedido.estado;
    pedido.estado = nuevoEstado;
    this.saveToSharedOrders(pedido);
    if (pedido.idPedido) {
      this.api.put<Pedido>(`/pedidos/${pedido.idPedido}`, pedido).subscribe();
    }

    const code = pedido.codigoPedido || String(pedido.idPedido);
    if (nuevoEstado === 'A' && estadoAnterior !== 'A') {
      this.notifService.notify(
        'CLIENTE',
        '👨‍🍳 ¡Pedido Aceptado!',
        `Tu pedido #${code} ha sido ACEPTADO por la tienda y ya está en preparación.`,
        code,
        'success'
      );
    } else if (nuevoEstado === 'F' && estadoAnterior !== 'F') {
      this.notifService.notify(
        'CLIENTE',
        '✅ ¡Pedido Entregado!',
        `Tu pedido #${code} fue entregado exitosamente. ¡Gracias por comprar en RomaPedidos!`,
        code,
        'success'
      );
    }
  }

  asignarRepartidor(): void {
    if (!this.selectedPedido || !this.selectedRepartidorId) return;
    
    this.saving = true;
    const repartidor = this.repartidores.find(r => r.idUsuario === Number(this.selectedRepartidorId));
    if (repartidor && this.selectedPedido) {
      (this.selectedPedido as any).repartidorAsignado = repartidor;
      this.cambiarEstado(this.selectedPedido, 'E'); // Change state to En Camino

      const code = this.selectedPedido.codigoPedido || String(this.selectedPedido.idPedido);
      const repName = `${repartidor.nombres} ${repartidor.apellidos || ''}`.trim();
      const dir = this.selectedPedido.direccionEntrega || 'Dirección del cliente';

      // Notificar al repartidor
      this.notifService.notify(
        'REPARTIDOR',
        '🛵 ¡Nuevo Despacho Asignado!',
        `Se te asignó el pedido #${code} para entregar a ${dir}.`,
        code,
        'warning'
      );

      // Notificar al cliente
      this.notifService.notify(
        'CLIENTE',
        '🚚 Tu Pedido está en Camino',
        `Tu pedido #${code} fue asignado al repartidor ${repName} y está en ruta hacia tu domicilio.`,
        code,
        'info'
      );
    }
    this.saving = false;
    this.selectedRepartidorId = null;
    this.closeDetailModal();
  }

  deletePedido(p: Pedido, event?: Event): void {
    if (event) event.stopPropagation();
    const code = p.codigoPedido || `#${p.idPedido}`;
    if (!confirm(`¿Estás seguro de eliminar el pedido ${code}?`)) return;

    if (p.idPedido) {
      this.api.delete(`/pedidos/${p.idPedido}`).subscribe({
        next: () => {
          this.pedidos = this.pedidos.filter(o => o !== p);
          this.removeFromSharedOrders(p);
        },
        error: () => {
          this.pedidos = this.pedidos.filter(o => o !== p);
          this.removeFromSharedOrders(p);
        }
      });
    } else {
      this.pedidos = this.pedidos.filter(o => o !== p);
      this.removeFromSharedOrders(p);
    }
  }

  private removeFromSharedOrders(p: Pedido): void {
    try {
      const existing = localStorage.getItem('roma_shared_orders_DISABLED');
      if (existing) {
        let orders: Pedido[] = JSON.parse(existing);
        orders = orders.filter(o => o.codigoPedido !== p.codigoPedido && o.idPedido !== p.idPedido);
        localStorage.setItem('roma_shared_orders_DISABLED', JSON.stringify(orders));
      }
    } catch (e) {
      console.warn('Error removing order from shared local storage', e);
    }
  }

  private fetchRepartidores(repRolId: number): void {
    this.api.get<Usuario[]>('/usuarios').subscribe({
      next: (users) => {
        this.repartidores = (users || []).filter(u => {
          const idR = Number(u.idRol);
          const rName = (u.rol?.nombreRol || u.rol?.nombre || '').toUpperCase();
          const un = (u.username || '').toLowerCase();
          const nom = (u.nombres || '').toLowerCase();

          // Excluir cualquier cuenta de cliente o administración explícitamente
          if (un.includes('client') || nom.includes('client')) {
            return false;
          }

          return idR === repRolId || rName.includes('REP');
        });
      },
      error: () => {
        this.repartidores = [];
      }
    });
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
        estado: 'P'
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
        estado: 'A'
      }
    ];
  }
}