import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { CartService } from '../core/cart.service';
import { ApiService } from '../core/api.service';
import { NotificationService } from '../core/notification.service';
import { Pedido, Categoria } from '../core/models';

@Component({
  selector: 'app-store-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './store-shell.component.html',
  styleUrl: './store-shell.component.css'
})
export class StoreShellComponent implements OnInit {
  readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  readonly cartService = inject(CartService);
  private readonly api = inject(ApiService);
  readonly notifService = inject(NotificationService);

  searchTerm = '';
  showUserMenu = false;
  showCartPanel = false;
  showNotifMenu = false;
  processingCheckout = false;
  orderSuccessMessage = '';

  // ANIMACIÓN CAMIÓN DEDICADA
  showTruckAnimation = false;
  truckStage: 'speeding' | 'arrived' | 'confirmed' = 'speeding';
  createdOrderCode = '';
  createdOrderTotal = 0;

  categoriesList: Categoria[] = [];

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.api.get<Categoria[]>('/categorias').subscribe({
      next: (cats) => {
        this.categoriesList = (cats && cats.length > 0) ? cats : this.demoCategorias();
      },
      error: () => {
        this.categoriesList = this.demoCategorias();
      }
    });
  }

  getNombreCat(cat: Categoria): string {
    return cat.nombre || cat.nombreCategoria || 'Categoría';
  }

  private demoCategorias(): Categoria[] {
    return [
      { idCategoria: 1, nombre: 'Licores & Destilados' },
      { idCategoria: 2, nombre: 'Cervezas' },
      { idCategoria: 3, nombre: 'Vinos' },
      { idCategoria: 4, nombre: 'Bebidas Sin Alcohol' }
    ];
  }

  get isDemoMode(): boolean {
    return this.authService.isDemoMode();
  }

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/store/catalog'], {
        queryParams: { q: this.searchTerm.trim() }
      });
    }
  }

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
    this.showNotifMenu = false;
  }

  toggleNotifMenu(): void {
    this.showNotifMenu = !this.showNotifMenu;
    this.showUserMenu = false;
    if (this.showNotifMenu) {
      this.notifService.markAllAsRead('CLIENTE');
    }
  }

  onSelectNotification(n: any): void {
    this.showNotifMenu = false;
    this.notifService.markAsRead(n.id);
    this.router.navigate(['/store/orders']);
  }

  toggleCartPanel(): void {
    this.showCartPanel = !this.showCartPanel;
  }

  checkout(): void {
    if (this.cartService.totalItems() === 0) return;

    this.processingCheckout = true;
    const currentUsername = this.authService.getUsername() || 'Cliente';
    const total = this.cartService.totalMonto();
    const subtotal = this.cartService.subtotal();
    const igv = this.cartService.igv();
    const orderCode = `PED-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    this.createdOrderCode = orderCode;
    this.createdOrderTotal = total;

    const payload: any = {
      codigoPedido: orderCode,
      idCliente: 1,
      idUsuario: 1,
      idEstado: 1,
      idTipoEntrega: 1,
      subtotal: Number(subtotal.toFixed(2)),
      igv: Number(igv.toFixed(2)),
      total: Number(total.toFixed(2)),
      montoSubtotal: Number(subtotal.toFixed(2)),
      montoIgv: Number(igv.toFixed(2)),
      montoTotal: Number(total.toFixed(2)),
      direccionEntrega: localStorage.getItem('roma_user_address') || 'Av. Larco 456, Miraflores - Roma Express',
      observaciones: 'Pedido generado desde la tienda online',
      estado: 'P',
      detalles: this.cartService.cartItems().map(item => ({
        idProducto: item.producto.idProducto,
        cantidad: item.cantidad,
        precioUnitario: item.precioUnitario,
        subtotal: item.subtotal
      }))
    };

    // 🚀 DISPARAR NOTIFICACIÓN PARA EL ADMIN Y VENDEDOR 🚀
    this.notifService.notify(
      'ADMIN',
      '🛒 ¡Nuevo Pedido Recibido!',
      `El cliente ${currentUsername} realizó la compra #${orderCode} por un total de S/ ${total.toFixed(2)}.`,
      orderCode,
      'info'
    );

    // 🚀 DESPARAR ANIMACIÓN CAMIÓN A TODA VELOCIDAD 🚀
    this.showCartPanel = false;
    this.showTruckAnimation = true;
    this.truckStage = 'speeding';

    this.api.post<Pedido>('/pedidos', payload).subscribe({
      next: (res) => {
        const fullOrder: Pedido = {
          ...payload,
          ...res,
          cliente: { idCliente: 1, nombresRazonSocial: currentUsername },
          detalles: this.cartService.cartItems().map(item => ({
            idProducto: item.producto.idProducto,
            cantidad: item.cantidad,
            precioUnitario: item.precioUnitario,
            subtotal: item.subtotal,
            producto: item.producto
          }))
        };
        this.saveToSharedOrders(fullOrder);
        this.triggerTruckSequence();
      },
      error: () => {
        const fullOrder: Pedido = {
          idPedido: Date.now(),
          ...payload,
          cliente: { idCliente: 1, nombresRazonSocial: currentUsername },
          detalles: this.cartService.cartItems().map(item => ({
            idProducto: item.producto.idProducto,
            cantidad: item.cantidad,
            precioUnitario: item.precioUnitario,
            subtotal: item.subtotal,
            producto: item.producto
          }))
        };
        this.saveToSharedOrders(fullOrder);
        this.triggerTruckSequence();
      }
    });
  }

  private triggerTruckSequence(): void {
    setTimeout(() => {
      this.truckStage = 'arrived';
    }, 2500);

    setTimeout(() => {
      this.truckStage = 'confirmed';
      this.cartService.clearCart();
      this.processingCheckout = false;
    }, 3500);
  }

  closeTruckAnimation(): void {
    this.showTruckAnimation = false;
    this.truckStage = 'speeding';
  }

  goToOrders(): void {
    this.closeTruckAnimation();
    this.router.navigate(['/store/orders']);
  }

  private saveToSharedOrders(order: Pedido): void {
    try {
      const existing = localStorage.getItem('roma_shared_orders_DISABLED');
      let orders: Pedido[] = existing ? JSON.parse(existing) : [];
      orders = orders.filter(o => o.codigoPedido !== order.codigoPedido && o.idPedido !== order.idPedido);
      orders.unshift(order);
      localStorage.setItem('roma_shared_orders_DISABLED', JSON.stringify(orders));
    } catch (e) {
      console.warn('Error saving shared order', e);
    }
  }

  logout(): void {
    this.showUserMenu = false;
    this.authService.logout();
  }
}
