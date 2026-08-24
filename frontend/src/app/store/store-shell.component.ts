import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { CartService } from '../core/cart.service';
import { ApiService } from '../core/api.service';
import { Pedido } from '../core/models';

@Component({
  selector: 'app-store-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './store-shell.component.html',
  styleUrl: './store-shell.component.css'
})
export class StoreShellComponent {
  readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  readonly cartService = inject(CartService);
  private readonly api = inject(ApiService);

  searchTerm = '';
  showUserMenu = false;
  showCartPanel = false;
  processingCheckout = false;
  orderSuccessMessage = '';

  readonly categories = [
    'Licores & Destilados',
    'Cervezas',
    'Vinos',
    'Bebidas Sin Alcohol',
    'Ofertas'
  ];

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

    const nuevoPedido: Pedido = {
      idPedido: Date.now(),
      codigoPedido: orderCode,
      idCliente: 1,
      cliente: {
        idCliente: 1,
        nombresRazónSocial: currentUsername,
        numeroDocumento: '72345678'
      },
      montoSubtotal: Number(subtotal.toFixed(2)),
      montoIgv: Number(igv.toFixed(2)),
      montoTotal: Number(total.toFixed(2)),
      direccionEntrega: 'Entrega a Domicilio - Roma Express',
      observaciones: 'Pedido generado desde la tienda online',
      fechaPedido: new Date().toISOString(),
      estado: 'A',
      detalles: this.cartService.cartItems().map(item => ({
        idProducto: item.producto.idProducto,
        cantidad: item.cantidad,
        precioUnitario: item.precioUnitario,
        subtotal: item.subtotal,
        producto: item.producto
      }))
    };

    // Guardar en shared storage para sincronización inmediata con el panel de administración
    this.saveToSharedOrders(nuevoPedido);

    // Enviar también al backend
    this.api.post<Pedido>('/pedidos', nuevoPedido).subscribe({
      next: (res) => {
        if (res && res.idPedido) {
          nuevoPedido.idPedido = res.idPedido;
          this.saveToSharedOrders(nuevoPedido);
        }
        this.finishCheckout(orderCode);
      },
      error: () => {
        this.finishCheckout(orderCode);
      }
    });
  }

  private finishCheckout(orderCode: string): void {
    this.processingCheckout = false;
    this.showCartPanel = false;
    this.cartService.clearCart();
    this.orderSuccessMessage = `¡Pedido #${orderCode} generado con éxito! Puedes ver el seguimiento en tu panel.`;
    alert(`🎉 ¡Pedido generado con éxito!\nCódigo de Pedido: ${orderCode}\nTotal: S/ ${this.cartService.totalMonto().toFixed(2)}\nEl administrador ya puede verlo en el panel de pedidos.`);
  }

  private saveToSharedOrders(order: Pedido): void {
    try {
      const existing = localStorage.getItem('roma_shared_orders');
      let orders: Pedido[] = existing ? JSON.parse(existing) : [];
      // Reemplazar o insertar al inicio
      orders = orders.filter(o => o.codigoPedido !== order.codigoPedido && o.idPedido !== order.idPedido);
      orders.unshift(order);
      localStorage.setItem('roma_shared_orders', JSON.stringify(orders));
    } catch (e) {
      console.warn('Error saving shared order', e);
    }
  }

  logout(): void {
    this.showUserMenu = false;
    this.authService.logout();
  }
}
