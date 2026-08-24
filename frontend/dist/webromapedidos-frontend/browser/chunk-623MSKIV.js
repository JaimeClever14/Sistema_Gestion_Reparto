import {
  computed,
  signal,
  ɵɵdefineInjectable
} from "./chunk-TBAMR4TH.js";

// src/app/core/cart.service.ts
var CartService = class _CartService {
  // Using signals for reactive state
  cartItemsSignal = signal(this.loadCartFromStorage());
  // Expose readonly signal
  cartItems = this.cartItemsSignal.asReadonly();
  // Computed signals
  totalItems = computed(() => this.cartItemsSignal().reduce((acc, item) => acc + item.cantidad, 0));
  totalMonto = computed(() => this.cartItemsSignal().reduce((acc, item) => acc + item.subtotal, 0));
  subtotal = computed(() => this.totalMonto() / 1.18);
  igv = computed(() => this.totalMonto() - this.subtotal());
  constructor() {
  }
  loadCartFromStorage() {
    const saved = localStorage.getItem("roma_cart");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  }
  saveCartToStorage(items) {
    localStorage.setItem("roma_cart", JSON.stringify(items));
  }
  addToCart(producto, cantidad = 1) {
    this.cartItemsSignal.update((items) => {
      const newItems = [...items];
      const existingIdx = newItems.findIndex((i) => i.producto.idProducto === producto.idProducto);
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
  removeFromCart(idProducto) {
    this.cartItemsSignal.update((items) => {
      const newItems = items.filter((i) => i.producto.idProducto !== idProducto);
      this.saveCartToStorage(newItems);
      return newItems;
    });
  }
  updateQuantity(idProducto, cantidad) {
    if (cantidad <= 0) {
      this.removeFromCart(idProducto);
      return;
    }
    this.cartItemsSignal.update((items) => {
      const newItems = [...items];
      const existingIdx = newItems.findIndex((i) => i.producto.idProducto === idProducto);
      if (existingIdx !== -1) {
        newItems[existingIdx].cantidad = cantidad;
        newItems[existingIdx].subtotal = cantidad * newItems[existingIdx].precioUnitario;
      }
      this.saveCartToStorage(newItems);
      return newItems;
    });
  }
  clearCart() {
    this.cartItemsSignal.set([]);
    localStorage.removeItem("roma_cart");
  }
  static \u0275fac = function CartService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
};

export {
  CartService
};
//# sourceMappingURL=chunk-623MSKIV.js.map
