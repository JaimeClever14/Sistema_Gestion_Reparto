import { Injectable, signal, computed } from '@angular/core';
import { Producto } from './models';

export interface CartItem {
  producto: Producto;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  // Using signals for reactive state
  private cartItemsSignal = signal<CartItem[]>(this.loadCartFromStorage());

  // Expose readonly signal
  readonly cartItems = this.cartItemsSignal.asReadonly();

  // Computed signals
  readonly totalItems = computed(() => 
    this.cartItemsSignal().reduce((acc, item) => acc + item.cantidad, 0)
  );

  readonly totalMonto = computed(() => 
    this.cartItemsSignal().reduce((acc, item) => acc + item.subtotal, 0)
  );

  readonly subtotal = computed(() => this.totalMonto() / 1.18);
  readonly igv = computed(() => this.totalMonto() - this.subtotal());

  constructor() {}

  private loadCartFromStorage(): CartItem[] {
    const saved = localStorage.getItem('roma_cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  }

  private saveCartToStorage(items: CartItem[]): void {
    localStorage.setItem('roma_cart', JSON.stringify(items));
  }

  addToCart(producto: Producto, cantidad: number = 1): void {
    this.cartItemsSignal.update(items => {
      const newItems = [...items];
      const existingIdx = newItems.findIndex(i => i.producto.idProducto === producto.idProducto);

      if (existingIdx !== -1) {
        newItems[existingIdx].cantidad += cantidad;
        newItems[existingIdx].subtotal = newItems[existingIdx].cantidad * producto.precioVenta;
      } else {
        newItems.push({
          producto,
          cantidad,
          precioUnitario: producto.precioVenta,
          subtotal: cantidad * producto.precioVenta
        });
      }
      this.saveCartToStorage(newItems);
      return newItems;
    });
  }

  removeFromCart(idProducto: number): void {
    this.cartItemsSignal.update(items => {
      const newItems = items.filter(i => i.producto.idProducto !== idProducto);
      this.saveCartToStorage(newItems);
      return newItems;
    });
  }

  updateQuantity(idProducto: number, cantidad: number): void {
    if (cantidad <= 0) {
      this.removeFromCart(idProducto);
      return;
    }

    this.cartItemsSignal.update(items => {
      const newItems = [...items];
      const existingIdx = newItems.findIndex(i => i.producto.idProducto === idProducto);
      if (existingIdx !== -1) {
        newItems[existingIdx].cantidad = cantidad;
        newItems[existingIdx].subtotal = cantidad * newItems[existingIdx].precioUnitario;
      }
      this.saveCartToStorage(newItems);
      return newItems;
    });
  }

  clearCart(): void {
    this.cartItemsSignal.set([]);
    localStorage.removeItem('roma_cart');
  }
}
