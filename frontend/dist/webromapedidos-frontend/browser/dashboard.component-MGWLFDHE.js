import {
  RouterLink
} from "./chunk-SNUT2XZU.js";
import {
  ApiService
} from "./chunk-YZNMIQXE.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TBAMR4TH.js";

// src/app/features/dashboard/dashboard.component.ts
function DashboardComponent_article_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 33)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 37)(7, "strong", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275classMap("tone-" + stat_r1.tone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.description);
  }
}
function DashboardComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "strong", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "span", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 46);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 26)(12, "strong", 47);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const prod_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prod_r2.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prod_r2.codigoBarras || "PROD-" + prod_r2.idProducto);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("danger", prod_r2.stock <= (prod_r2.stockMinimo || 5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", prod_r2.stock, " unid. ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", prod_r2.stockMinimo || 5, " unid. ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", prod_r2.precioVenta.toFixed(2), "");
  }
}
function DashboardComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "p");
    \u0275\u0275text(2, "No hay productos registrados en el inventario.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "span");
    \u0275\u0275text(3, "\u{1F4E6}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 51)(5, "strong", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 54)(10, "strong", 47);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 55);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(order_r3.codigoPedido || "PED-" + order_r3.idPedido);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getClienteNombre(order_r3.cliente));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", (order_r3.montoTotal || 0).toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275classProp("completed", order_r3.estado !== "A" && order_r3.estado !== "Pendiente");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r3.estado === "A" ? "En Proceso" : order_r3.estado || "Completado", " ");
  }
}
function DashboardComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "p");
    \u0275\u0275text(2, "No se registran pedidos recientes hoy.");
    \u0275\u0275elementEnd()();
  }
}
var DashboardComponent = class _DashboardComponent {
  api = inject(ApiService);
  loading = true;
  productos = [];
  pedidos = [];
  clientes = [];
  stats = [];
  getClienteNombre(cliente) {
    if (!cliente)
      return "Cliente General";
    return cliente["nombresRaz\xF3nSocial"] || cliente["nombresRazonSocial"] || "Cliente General";
  }
  ngOnInit() {
    this.cargarDatos();
  }
  cargarDatos() {
    this.loading = true;
    this.api.get("/productos").subscribe({
      next: (prods) => {
        this.productos = prods;
        this.recalcularStats();
      },
      error: () => this.usarDatosDemostraci\u00F3n()
    });
    this.api.get("/pedidos").subscribe({
      next: (peds) => {
        this.pedidos = this.mergeWithSharedOrders(peds || []);
        this.recalcularStats();
      },
      error: () => {
        this.pedidos = this.mergeWithSharedOrders(this.getDemoOrders());
        this.recalcularStats();
      }
    });
    this.api.get("/clientes").subscribe({
      next: (clis) => {
        this.clientes = clis;
        this.recalcularStats();
      },
      error: () => {
        this.clientes = [
          { idCliente: 1, nombresRaz\u00F3nSocial: "Inversiones Licoreras SAC", numeroDocumento: "20601234567" },
          { idCliente: 2, nombresRaz\u00F3nSocial: "Juan Carlos Mendoza", numeroDocumento: "45891234" }
        ];
        this.recalcularStats();
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  mergeWithSharedOrders(baseList) {
    try {
      const saved = localStorage.getItem("roma_shared_orders");
      if (saved) {
        const shared = JSON.parse(saved);
        const map = /* @__PURE__ */ new Map();
        shared.forEach((o) => {
          const key = o.codigoPedido || String(o.idPedido);
          map.set(key, o);
        });
        baseList.forEach((o) => {
          const key = o.codigoPedido || String(o.idPedido);
          if (!map.has(key)) {
            map.set(key, o);
          }
        });
        return Array.from(map.values());
      }
    } catch (e) {
      console.warn("Error reading shared orders", e);
    }
    return baseList;
  }
  recalcularStats() {
    const totalVentas = this.pedidos.reduce((sum, p) => sum + (p.montoTotal || 0), 0);
    const stockBajo = this.productos.filter((p) => p.stock <= (p.stockMinimo || 5)).length;
    const pedidosPendientes = this.pedidos.filter((p) => p.estado === "A" || p.idEstadoPedido === 1).length;
    this.stats = [
      {
        label: "Ventas Totales",
        value: `S/ ${totalVentas.toFixed(2)}`,
        description: `${this.pedidos.length} pedidos registrados`,
        tone: "primary",
        icon: "\u{1F4B0}"
      },
      {
        label: "Stock Bajo",
        value: `${stockBajo} productos`,
        description: "Requieren reposici\xF3n urgente",
        tone: "accent",
        icon: "\u26A0\uFE0F"
      },
      {
        label: "Pedidos Activos",
        value: `${pedidosPendientes}`,
        description: "En proceso o despacho",
        tone: "success",
        icon: "\u{1F4E6}"
      },
      {
        label: "Clientes Registrados",
        value: `${this.clientes.length}`,
        description: "Cartera comercial activa",
        tone: "danger",
        icon: "\u{1F465}"
      }
    ];
  }
  getDemoOrders() {
    return [
      { idPedido: 101, codigoPedido: "PED-2026-001", montoSubtotal: 219.41, montoIgv: 39.49, montoTotal: 258.9, estado: "A" },
      { idPedido: 102, codigoPedido: "PED-2026-002", montoSubtotal: 122.88, montoIgv: 22.12, montoTotal: 145, estado: "F" }
    ];
  }
  usarDatosDemostraci\u00F3n() {
    this.productos = [
      { idProducto: 1, nombre: "Whisky Johnnie Walker Black Label", precioCompra: 80, precioVenta: 129.9, stock: 4, stockMinimo: 5 },
      { idProducto: 2, nombre: "Vodka Absolut Original 750ml", precioCompra: 40, precioVenta: 69, stock: 18, stockMinimo: 6 },
      { idProducto: 3, nombre: "Ron Cartavio Aniversario 750ml", precioCompra: 25, precioVenta: 45.5, stock: 3, stockMinimo: 8 },
      { idProducto: 4, nombre: "Pisco Cuatro Gallos Quebranta", precioCompra: 25, precioVenta: 42, stock: 12, stockMinimo: 5 }
    ];
    this.pedidos = this.mergeWithSharedOrders(this.getDemoOrders());
    this.clientes = [
      { idCliente: 1, nombresRaz\u00F3nSocial: "Inversiones Licoreras SAC", numeroDocumento: "20601234567" },
      { idCliente: 2, nombresRaz\u00F3nSocial: "Juan Carlos Mendoza", numeroDocumento: "45891234" }
    ];
    this.recalcularStats();
    this.loading = false;
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 67, vars: 5, consts: [[1, "dashboard-header"], [1, "header-titles"], [1, "badge-gold-subtle"], [1, "header-main-title"], [1, "header-sub"], [1, "header-actions"], ["type", "button", "routerLink", "/admin/pedidos", 1, "btn-primary"], ["type", "button", "title", "Recargar m\xE9tricas", 1, "btn-refresh", 3, "click"], [1, "stats-grid"], ["class", "stat-card glass", 3, "class", 4, "ngFor", "ngForOf"], [1, "quick-actions-bar", "glass"], [1, "quick-title"], [1, "quick-buttons"], ["routerLink", "/admin/productos", 1, "quick-btn"], ["routerLink", "/admin/clientes", 1, "quick-btn"], ["routerLink", "/admin/pedidos", 1, "quick-btn"], ["routerLink", "/admin/pagos", 1, "quick-btn"], [1, "operational-grid"], [1, "panel", "glass"], [1, "panel-header"], [1, "panel-title-wrap"], [1, "panel-badge-alert"], [1, "section-title"], ["routerLink", "/admin/productos", 1, "gold-link"], [1, "custom-table-wrap"], [1, "table-head-row"], [1, "text-right"], ["class", "table-item-row", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "panel-badge-gold"], ["routerLink", "/admin/pedidos", 1, "gold-link"], [1, "order-feed"], ["class", "order-card-item", 4, "ngFor", "ngForOf"], [1, "stat-card", "glass"], [1, "stat-card-header"], [1, "stat-icon-wrapper"], [1, "stat-badge-tag"], [1, "stat-body"], [1, "stat-number"], [1, "stat-desc"], [1, "stat-gold-bar"], [1, "table-item-row"], [1, "prod-col-name"], [1, "prod-title"], [1, "prod-code"], [1, "stock-pill"], [1, "min-stock-text"], [1, "gold-price"], [1, "empty-state"], [1, "order-card-item"], [1, "order-avatar-box"], [1, "order-client-info"], [1, "order-code"], [1, "order-client-name"], [1, "order-financial-info"], [1, "order-status-badge"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "RESUMEN EJECUTIVO EN TIEMPO REAL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1", 3);
      \u0275\u0275text(5, "Panel de Control General");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Monitorea pedidos, existencias de almac\xE9n, flujo de ventas y cartera de clientes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "button", 6)(10, "span");
      \u0275\u0275text(11, "\u2795 Nuevo Pedido");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 7);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_12_listener() {
        return ctx.cargarDatos();
      });
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14, "\u{1F504} Actualizar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "section", 8);
      \u0275\u0275template(16, DashboardComponent_article_16_Template, 12, 6, "article", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "section", 10)(18, "span", 11);
      \u0275\u0275text(19, "\u26A1 Acciones R\xE1pidas:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 12)(21, "a", 13)(22, "span");
      \u0275\u0275text(23, "\u{1F37E} Cat\xE1logo & Stock");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "a", 14)(25, "span");
      \u0275\u0275text(26, "\u{1F465} Directorio Clientes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "a", 15)(28, "span");
      \u0275\u0275text(29, "\u{1F6CD}\uFE0F Ventas & Despacho");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "a", 16)(31, "span");
      \u0275\u0275text(32, "\u{1F4B3} Cr\xE9ditos & Cuotas");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "section", 17)(34, "article", 18)(35, "div", 19)(36, "div", 20)(37, "span", 21);
      \u0275\u0275text(38, "\u26A0\uFE0F ALERTA DE STOCK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "h2", 22);
      \u0275\u0275text(40, "Productos Cr\xEDticos / Por Agotarse");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "a", 23);
      \u0275\u0275text(42, "Ver todo el inventario \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 24)(44, "div", 25)(45, "span");
      \u0275\u0275text(46, "Producto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span");
      \u0275\u0275text(48, "Stock Actual");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "span");
      \u0275\u0275text(50, "M\xEDnimo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 26);
      \u0275\u0275text(52, "Precio Venta");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(53, DashboardComponent_div_53_Template, 14, 7, "div", 27)(54, DashboardComponent_div_54_Template, 3, 0, "div", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "article", 18)(56, "div", 19)(57, "div", 20)(58, "span", 29);
      \u0275\u0275text(59, "\u{1F6CD}\uFE0F TRANSACCIONES RECIENTES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "h2", 22);
      \u0275\u0275text(61, "\xDAltimos Pedidos Registrados");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "a", 30);
      \u0275\u0275text(63, "Gestionar pedidos \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 31);
      \u0275\u0275template(65, DashboardComponent_div_65_Template, 14, 6, "div", 32)(66, DashboardComponent_div_66_Template, 3, 0, "div", 28);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275property("ngForOf", ctx.stats);
      \u0275\u0275advance(37);
      \u0275\u0275property("ngForOf", ctx.productos);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.productos.length === 0);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.pedidos);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pedidos.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 20px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.header-titles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.badge-gold-subtle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  padding: 4px 10px;\n  border-radius: 6px;\n  background: rgba(250, 204, 21, 0.12);\n  border: 1px solid rgba(250, 204, 21, 0.25);\n  color: #facc15;\n  font-size: 0.7rem;\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.header-main-title[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  font-size: clamp(1.6rem, 2.5vw, 2.2rem);\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n}\n.header-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #a1a1aa;\n  font-size: 0.92rem;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.05);\n  color: #e4e4e7;\n  padding: 11px 16px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.88rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-refresh[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.15);\n  border-color: rgba(250, 204, 21, 0.35);\n  color: #facc15;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 22px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 18px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: rgba(18, 18, 24, 0.85);\n  border: 1px solid rgba(250, 204, 21, 0.14);\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  overflow: hidden;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: rgba(250, 204, 21, 0.4);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(250, 204, 21, 0.1);\n}\n.stat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.stat-icon-wrapper[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: rgba(250, 204, 21, 0.12);\n  border: 1px solid rgba(250, 204, 21, 0.25);\n  display: grid;\n  place-items: center;\n  font-size: 1.25rem;\n}\n.stat-badge-tag[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: #a1a1aa;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n  line-height: 1.1;\n}\n.stat-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  color: #71717a;\n}\n.stat-gold-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #facc15,\n      transparent);\n  opacity: 0.6;\n}\n.quick-actions-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 20px;\n  border-radius: 16px;\n  background: rgba(18, 18, 24, 0.7);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.quick-title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 800;\n  color: #facc15;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.quick-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.quick-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #e4e4e7;\n  font-size: 0.84rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.quick-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.15);\n  border-color: rgba(250, 204, 21, 0.35);\n  color: #facc15;\n  transform: translateY(-1px);\n}\n.operational-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.25fr 0.95fr;\n  gap: 20px;\n}\n.panel[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 24px;\n  background: rgba(18, 18, 24, 0.85);\n  border: 1px solid rgba(250, 204, 21, 0.14);\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.panel-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.panel-badge-alert[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  color: #f87171;\n  letter-spacing: 0.8px;\n}\n.panel-badge-gold[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  color: #facc15;\n  letter-spacing: 0.8px;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.gold-link[_ngcontent-%COMP%] {\n  color: #facc15;\n  font-size: 0.84rem;\n  font-weight: 700;\n  text-decoration: none;\n  transition: color 0.2s;\n  white-space: nowrap;\n}\n.gold-link[_ngcontent-%COMP%]:hover {\n  color: #ffd700;\n  text-decoration: underline;\n}\n.custom-table-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.table-head-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr;\n  gap: 10px;\n  padding: 8px 14px;\n  font-size: 0.72rem;\n  font-weight: 800;\n  color: #71717a;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-item-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr;\n  gap: 10px;\n  align-items: center;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: rgba(10, 10, 14, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  transition: all 0.2s ease;\n}\n.table-item-row[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.05);\n  border-color: rgba(250, 204, 21, 0.2);\n}\n.prod-col-name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.prod-title[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #f4f4f5;\n  font-weight: 700;\n}\n.prod-code[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #a1a1aa;\n}\n.stock-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 4px 10px;\n  border-radius: 100px;\n  background: rgba(34, 197, 94, 0.12);\n  color: #4ade80;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.stock-pill.danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.min-stock-text[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #71717a;\n}\n.gold-price[_ngcontent-%COMP%] {\n  color: #facc15;\n  font-weight: 800;\n  font-size: 0.95rem;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.order-feed[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.order-card-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: rgba(10, 10, 14, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  transition: all 0.2s ease;\n}\n.order-card-item[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.05);\n  border-color: rgba(250, 204, 21, 0.2);\n}\n.order-avatar-box[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  background: rgba(250, 204, 21, 0.12);\n  border: 1px solid rgba(250, 204, 21, 0.25);\n  display: grid;\n  place-items: center;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.order-client-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  overflow: hidden;\n}\n.order-code[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #ffffff;\n  font-weight: 700;\n}\n.order-client-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  color: #a1a1aa;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.order-financial-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n}\n.order-status-badge[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border-radius: 100px;\n  background: rgba(250, 204, 21, 0.15);\n  color: #facc15;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.order-status-badge.completed[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #4ade80;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 30px 10px;\n  text-align: center;\n  color: #71717a;\n  font-size: 0.88rem;\n}\n@media (max-width: 1200px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .operational-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .table-head-row[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .table-item-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n  }\n  .min-stock-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .header-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app\\features\\dashboard\\dashboard.component.ts", lineNumber: 13 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-MGWLFDHE.js.map
