import {
  AuthService
} from "./chunk-FXYYL7U4.js";
import "./chunk-SNUT2XZU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-THAPR2DQ.js";
import {
  ApiService
} from "./chunk-YZNMIQXE.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TBAMR4TH.js";

// src/app/features/delivery/delivery-panel.component.ts
function DeliveryPanelComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.toast);
  }
}
function DeliveryPanelComponent_div_71_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 Pendiente");
    \u0275\u0275elementEnd();
  }
}
function DeliveryPanelComponent_div_71_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F6F5} En Camino");
    \u0275\u0275elementEnd();
  }
}
function DeliveryPanelComponent_div_71_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705 Entregado");
    \u0275\u0275elementEnd();
  }
}
function DeliveryPanelComponent_div_71_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Doc: ", p_r3.cliente == null ? null : p_r3.cliente.numeroDocumento, "");
  }
}
function DeliveryPanelComponent_div_71_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 59);
    \u0275\u0275text(4, "Llamar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4DE} ", p_r3.cliente == null ? null : p_r3.cliente.telefono, "");
    \u0275\u0275advance();
    \u0275\u0275property("href", "tel:" + (p_r3.cliente == null ? null : p_r3.cliente.telefono), \u0275\u0275sanitizeUrl);
  }
}
function DeliveryPanelComponent_div_71_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4AC} ", p_r3.observaciones, " ");
  }
}
function DeliveryPanelComponent_div_71_div_1_div_26_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 65);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", d_r4.cantidad, "x ", (d_r4.producto == null ? null : d_r4.producto.nombre) || "Producto #" + d_r4.idProducto, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(5, 3, d_r4.subtotal, "1.2-2"), "");
  }
}
function DeliveryPanelComponent_div_71_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "p", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DeliveryPanelComponent_div_71_div_1_div_26_div_3_Template, 6, 6, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4E6} Art\xEDculos (", p_r3.detalles.length, "):");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", p_r3.detalles);
  }
}
function DeliveryPanelComponent_div_71_div_1_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function DeliveryPanelComponent_div_71_div_1_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.iniciarRuta(p_r3));
    });
    \u0275\u0275text(1, " \u{1F6F5} Iniciar Ruta ");
    \u0275\u0275elementEnd();
  }
}
function DeliveryPanelComponent_div_71_div_1_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function DeliveryPanelComponent_div_71_div_1_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmarEntrega(p_r3));
    });
    \u0275\u0275text(1, " \u2705 Confirmar Entrega ");
    \u0275\u0275elementEnd();
  }
}
function DeliveryPanelComponent_div_71_div_1_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, " \u2728 Entregado correctamente ");
    \u0275\u0275elementEnd();
  }
}
function DeliveryPanelComponent_div_71_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "div")(3, "span", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 39);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 40);
    \u0275\u0275template(9, DeliveryPanelComponent_div_71_div_1_span_9_Template, 2, 0, "span", 41)(10, DeliveryPanelComponent_div_71_div_1_span_10_Template, 2, 0, "span", 41)(11, DeliveryPanelComponent_div_71_div_1_span_11_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 42)(13, "div", 43)(14, "h4");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, DeliveryPanelComponent_div_71_div_1_span_16_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 45)(18, "span");
    \u0275\u0275text(19, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 46);
    \u0275\u0275listener("click", function DeliveryPanelComponent_div_71_div_1_Template_button_click_22_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.abrirMapa(p_r3.direccionEntrega));
    });
    \u0275\u0275text(23, "\u{1F5FA}\uFE0F Mapa");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, DeliveryPanelComponent_div_71_div_1_div_24_Template, 5, 2, "div", 47)(25, DeliveryPanelComponent_div_71_div_1_div_25_Template, 2, 1, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, DeliveryPanelComponent_div_71_div_1_div_26_Template, 4, 2, "div", 49);
    \u0275\u0275elementStart(27, "div", 50)(28, "div", 51)(29, "span");
    \u0275\u0275text(30, "Total a cobrar:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 52);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 53);
    \u0275\u0275template(35, DeliveryPanelComponent_div_71_div_1_button_35_Template, 2, 0, "button", 54)(36, DeliveryPanelComponent_div_71_div_1_button_36_Template, 2, 0, "button", 55)(37, DeliveryPanelComponent_div_71_div_1_span_37_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("card-done", p_r3.estado === "F");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", p_r3.codigoPedido, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 23, p_r3.fechaPedido, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("est-pend", p_r3.estado === "A")("est-ruta", p_r3.estado === "E")("est-done", p_r3.estado === "F");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r3.estado === "A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r3.estado === "E");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r3.estado === "F");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u{1F464} ", ctx_r0.nombreCliente(p_r3.cliente), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r3.cliente == null ? null : p_r3.cliente.numeroDocumento);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r3.direccionEntrega || "Sin direcci\xF3n registrada");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", p_r3.cliente == null ? null : p_r3.cliente.telefono);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r3.observaciones);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r3.detalles && p_r3.detalles.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(33, 26, p_r3.montoTotal, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", p_r3.estado === "A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r3.estado === "E");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r3.estado === "F");
  }
}
function DeliveryPanelComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, DeliveryPanelComponent_div_71_div_1_Template, 38, 29, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.pedidosFiltrados);
  }
}
function DeliveryPanelComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "div", 70);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando pedidos asignados...");
    \u0275\u0275elementEnd()();
  }
}
function DeliveryPanelComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "span");
    \u0275\u0275text(2, "\u{1F6F5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Sin pedidos en esta categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Todos los despachos est\xE1n al d\xEDa.");
    \u0275\u0275elementEnd()();
  }
}
var DeliveryPanelComponent = class _DeliveryPanelComponent {
  api = inject(ApiService);
  auth = inject(AuthService);
  pedidos = [];
  loading = true;
  filter = "ALL";
  search = "";
  toast = "";
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    this.loading = true;
    this.api.get("/pedidos").subscribe({
      next: (d) => {
        this.pedidos = this.merge(d ?? []);
        this.loading = false;
      },
      error: () => {
        this.pedidos = this.merge([]);
        this.loading = false;
      }
    });
  }
  merge(base) {
    try {
      const raw = localStorage.getItem("roma_shared_orders");
      if (!raw)
        return base.length ? base : this.demoData();
      const shared = JSON.parse(raw);
      const map = /* @__PURE__ */ new Map();
      base.forEach((p) => map.set(key(p), p));
      shared.forEach((p) => {
        if (!map.has(key(p)))
          map.set(key(p), p);
      });
      const list = Array.from(map.values());
      return list.length ? list : this.demoData();
    } catch {
      return base.length ? base : this.demoData();
    }
  }
  saveShared() {
    try {
      localStorage.setItem("roma_shared_orders", JSON.stringify(this.pedidos));
    } catch {
    }
  }
  // ── FILTROS ────────────────────────────────────────────────────────
  get pedidosFiltrados() {
    return this.pedidos.filter((p) => {
      if (this.filter === "PENDING" && p.estado !== "A")
        return false;
      if (this.filter === "ONWAY" && p.estado !== "E")
        return false;
      if (this.filter === "DONE" && p.estado !== "F")
        return false;
      if (this.search) {
        const q = this.search.toLowerCase();
        return (p.codigoPedido ?? "").toLowerCase().includes(q) || this.nombreCliente(p.cliente).toLowerCase().includes(q) || (p.direccionEntrega ?? "").toLowerCase().includes(q);
      }
      return true;
    });
  }
  // ── KPIs ──────────────────────────────────────────────────────────
  get kpiPending() {
    return this.pedidos.filter((p) => p.estado === "A").length;
  }
  get kpiOnWay() {
    return this.pedidos.filter((p) => p.estado === "E").length;
  }
  get kpiDone() {
    return this.pedidos.filter((p) => p.estado === "F").length;
  }
  get kpiCobrar() {
    return +this.pedidos.filter((p) => p.estado !== "F").reduce((s, p) => s + (p.montoTotal ?? 0), 0).toFixed(2);
  }
  // ── ACCIONES ──────────────────────────────────────────────────────
  iniciarRuta(p) {
    p.estado = "E";
    this.saveShared();
    this.api.put(`/pedidos/${p.idPedido}`, p).subscribe();
    this.showToast(`\u{1F6F5} Ruta iniciada \u2014 ${p.codigoPedido}`);
  }
  confirmarEntrega(p) {
    p.estado = "F";
    this.saveShared();
    this.api.put(`/pedidos/${p.idPedido}`, p).subscribe();
    this.showToast(`\u2705 Entrega confirmada \u2014 ${p.codigoPedido}`);
  }
  showToast(msg) {
    this.toast = msg;
    setTimeout(() => {
      if (this.toast === msg)
        this.toast = "";
    }, 4e3);
  }
  abrirMapa(dir) {
    if (!dir)
      return;
    window.open(`https://maps.google.com?q=${encodeURIComponent(dir + ", Lima, Peru")}`, "_blank");
  }
  nombreCliente(c) {
    return c?.nombresRaz\u00F3nSocial ?? c?.nombresRazonSocial ?? c?.razonSocial ?? "Cliente";
  }
  logout() {
    this.auth.logout();
  }
  // ── DEMO DATA ─────────────────────────────────────────────────────
  demoData() {
    return [
      {
        idPedido: 101,
        codigoPedido: "PED-2026-881",
        cliente: { nombresRaz\u00F3nSocial: "Juan Carlos Mendoza", numeroDocumento: "45891234", telefono: "912345678" },
        montoSubtotal: 169.41,
        montoIgv: 30.49,
        montoTotal: 199.9,
        direccionEntrega: "Av. Larco 456, Depto 402, Miraflores",
        observaciones: "Tocar timbre 402 \xB7 Pago contraentrega en efectivo.",
        fechaPedido: (/* @__PURE__ */ new Date()).toISOString(),
        estado: "A",
        detalles: [
          { idProducto: 1, cantidad: 1, precioUnitario: 129.9, subtotal: 129.9, producto: { nombre: "Whisky Johnnie Walker Black 750ml" } },
          { idProducto: 2, cantidad: 1, precioUnitario: 69, subtotal: 69, producto: { nombre: "Vodka Absolut 750ml" } }
        ]
      },
      {
        idPedido: 102,
        codigoPedido: "PED-2026-904",
        cliente: { nombresRaz\u00F3nSocial: "Inversiones Licoreras SAC", numeroDocumento: "20601234567", telefono: "987654321" },
        montoSubtotal: 245,
        montoIgv: 44.1,
        montoTotal: 289.1,
        direccionEntrega: "Calle Los Olivos 123, San Isidro",
        observaciones: "Entregar en recepci\xF3n. Ya pagado con Yape.",
        fechaPedido: (/* @__PURE__ */ new Date()).toISOString(),
        estado: "E",
        detalles: [
          { idProducto: 5, cantidad: 3, precioUnitario: 28.5, subtotal: 85.5, producto: { nombre: "Cerveza Cusque\xF1a 6x330ml" } },
          { idProducto: 4, cantidad: 4, precioUnitario: 42, subtotal: 168, producto: { nombre: "Pisco Cuatro Gallos 750ml" } }
        ]
      },
      {
        idPedido: 103,
        codigoPedido: "PED-2026-720",
        cliente: { nombresRaz\u00F3nSocial: "Bodega Don Pepe EIRL", numeroDocumento: "20554433221", telefono: "945678123" },
        montoSubtotal: 80.5,
        montoIgv: 14.5,
        montoTotal: 95,
        direccionEntrega: "Av. Javier Prado 1850, Lince",
        observaciones: "Entregado conforme a las 15:30.",
        fechaPedido: (/* @__PURE__ */ new Date()).toISOString(),
        estado: "F"
      }
    ];
  }
  static \u0275fac = function DeliveryPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeliveryPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeliveryPanelComponent, selectors: [["app-delivery-panel"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 74, vars: 26, consts: [[1, "dp-root"], [1, "dp-header"], [1, "dp-header-inner"], [1, "dp-brand"], [1, "dp-logo"], [1, "dp-title"], [1, "dp-sub"], [1, "dp-user-pill"], [1, "dp-avatar"], [1, "dp-user-meta"], [1, "dp-role-tag"], [1, "dp-logout", 3, "click"], ["class", "dp-toast", 4, "ngIf"], [1, "dp-kpi-row"], [1, "dp-kpi-card", "orange"], [1, "dp-kpi-ico"], [1, "dp-kpi-lbl"], [1, "dp-kpi-num"], [1, "dp-kpi-card", "blue"], [1, "dp-kpi-card", "green"], [1, "dp-kpi-card", "gold"], [1, "dp-filters-bar"], [1, "dp-search-box"], ["type", "text", "placeholder", "Buscar por #PED, cliente o direcci\xF3n...", 3, "ngModelChange", "ngModel"], [1, "dp-filter-tabs"], [1, "dp-ftab", 3, "click"], [1, "dp-ftab", "warn", 3, "click"], [1, "dp-ftab", "info", 3, "click"], [1, "dp-ftab", "good", 3, "click"], [1, "dp-main"], ["class", "dp-cards-grid", 4, "ngIf"], ["class", "dp-loading", 4, "ngIf"], ["class", "dp-empty", 4, "ngIf"], [1, "dp-toast"], [1, "dp-cards-grid"], ["class", "dp-card", 3, "card-done", 4, "ngFor", "ngForOf"], [1, "dp-card"], [1, "dp-card-head"], [1, "dp-code-tag"], [1, "dp-date"], [1, "dp-estado-pill"], [4, "ngIf"], [1, "dp-client-section"], [1, "dp-client-row"], ["class", "dp-doc", 4, "ngIf"], [1, "dp-address-box"], [1, "dp-map-btn", 3, "click"], ["class", "dp-phone-row", 4, "ngIf"], ["class", "dp-obs", 4, "ngIf"], ["class", "dp-products", 4, "ngIf"], [1, "dp-card-foot"], [1, "dp-total-row"], [1, "dp-total-amount"], [1, "dp-actions"], ["class", "dp-action-btn start", 3, "click", 4, "ngIf"], ["class", "dp-action-btn confirm", 3, "click", 4, "ngIf"], ["class", "dp-done-msg", 4, "ngIf"], [1, "dp-doc"], [1, "dp-phone-row"], [1, "dp-call-btn", 3, "href"], [1, "dp-obs"], [1, "dp-products"], [1, "dp-prods-title"], ["class", "dp-prod-row", 4, "ngFor", "ngForOf"], [1, "dp-prod-row"], [1, "gold-txt"], [1, "dp-action-btn", "start", 3, "click"], [1, "dp-action-btn", "confirm", 3, "click"], [1, "dp-done-msg"], [1, "dp-loading"], [1, "dp-spinner"], [1, "dp-empty"]], template: function DeliveryPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "\u{1F6F5}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div")(7, "h1", 5);
      \u0275\u0275text(8, "RomaPedidos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10, "Panel de Reparto & Log\xEDstica");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "strong");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 10);
      \u0275\u0275text(18, "\u{1F6F5} REPARTIDOR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 11);
      \u0275\u0275listener("click", function DeliveryPanelComponent_Template_button_click_19_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(20, "\u{1F6AA} Salir");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(21, DeliveryPanelComponent_div_21_Template, 2, 1, "div", 12);
      \u0275\u0275elementStart(22, "section", 13)(23, "div", 14)(24, "span", 15);
      \u0275\u0275text(25, "\u{1F4E6}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div")(27, "p", 16);
      \u0275\u0275text(28, "Por Entregar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "h3", 17);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 18)(32, "span", 15);
      \u0275\u0275text(33, "\u{1F6F5}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div")(35, "p", 16);
      \u0275\u0275text(36, "En Ruta Ahora");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "h3", 17);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 19)(40, "span", 15);
      \u0275\u0275text(41, "\u2705");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div")(43, "p", 16);
      \u0275\u0275text(44, "Entregados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "h3", 17);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 20)(48, "span", 15);
      \u0275\u0275text(49, "\u{1F4B5}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div")(51, "p", 16);
      \u0275\u0275text(52, "Por Cobrar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "h3", 17);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "number");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(56, "section", 21)(57, "div", 22)(58, "span");
      \u0275\u0275text(59, "\u{1F50D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function DeliveryPanelComponent_Template_input_ngModelChange_60_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 24)(62, "button", 25);
      \u0275\u0275listener("click", function DeliveryPanelComponent_Template_button_click_62_listener() {
        return ctx.filter = "ALL";
      });
      \u0275\u0275text(63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "button", 26);
      \u0275\u0275listener("click", function DeliveryPanelComponent_Template_button_click_64_listener() {
        return ctx.filter = "PENDING";
      });
      \u0275\u0275text(65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "button", 27);
      \u0275\u0275listener("click", function DeliveryPanelComponent_Template_button_click_66_listener() {
        return ctx.filter = "ONWAY";
      });
      \u0275\u0275text(67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "button", 28);
      \u0275\u0275listener("click", function DeliveryPanelComponent_Template_button_click_68_listener() {
        return ctx.filter = "DONE";
      });
      \u0275\u0275text(69);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "main", 29);
      \u0275\u0275template(71, DeliveryPanelComponent_div_71_Template, 2, 1, "div", 30)(72, DeliveryPanelComponent_div_72_Template, 4, 0, "div", 31)(73, DeliveryPanelComponent_div_73_Template, 7, 0, "div", 32);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate((ctx.auth.getUsername() || "R")[0].toUpperCase());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.auth.getUsername());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.toast);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.kpiPending);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.kpiOnWay);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.kpiDone);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(55, 23, ctx.kpiCobrar, "1.2-2"), "");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.filter === "ALL");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Todos (", ctx.pedidos.length, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.filter === "PENDING");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("\u23F3 Pendientes (", ctx.kpiPending, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.filter === "ONWAY");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("\u{1F6F5} En Ruta (", ctx.kpiOnWay, ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.filter === "DONE");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("\u2705 Entregados (", ctx.kpiDone, ")");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.pedidosFiltrados.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.pedidosFiltrados.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";\n\n\n\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.dp-root[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #09090b;\n  color: #f4f4f5;\n  font-family: "Inter", sans-serif;\n  display: flex;\n  flex-direction: column;\n}\n.dp-header[_ngcontent-%COMP%] {\n  background: rgba(14, 14, 18, .92);\n  border-bottom: 1px solid rgba(250, 204, 21, .16);\n  backdrop-filter: blur(14px);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  padding: 14px 24px;\n}\n.dp-header-inner[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.dp-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.dp-logo[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #facc15,\n      #eab308);\n  font-size: 1.4rem;\n  display: grid;\n  place-items: center;\n  box-shadow: 0 4px 14px rgba(250, 204, 21, .2);\n}\n.dp-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #fff;\n}\n.dp-sub[_ngcontent-%COMP%] {\n  font-size: .75rem;\n  color: #facc15;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n}\n.dp-user-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(255, 255, 255, .04);\n  border: 1px solid rgba(255, 255, 255, .08);\n  padding: 6px 14px;\n  border-radius: 100px;\n}\n.dp-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #facc15;\n  color: #09090b;\n  font-weight: 900;\n  display: grid;\n  place-items: center;\n  font-size: .9rem;\n}\n.dp-user-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.dp-user-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: .84rem;\n}\n.dp-role-tag[_ngcontent-%COMP%] {\n  font-size: .68rem;\n  color: #facc15;\n  font-weight: 700;\n}\n.dp-logout[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, .12);\n  border: 1px solid rgba(239, 68, 68, .25);\n  color: #fca5a5;\n  padding: 5px 10px;\n  border-radius: 8px;\n  font-size: .76rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all .2s;\n}\n.dp-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, .25);\n  color: #fff;\n}\n.dp-toast[_ngcontent-%COMP%] {\n  margin: 16px 24px 0;\n  background: rgba(34, 197, 94, .15);\n  border: 1px solid rgba(34, 197, 94, .35);\n  color: #86efac;\n  padding: 12px 18px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: .88rem;\n  max-width: 1280px;\n  margin-left: auto;\n  margin-right: auto;\n  width: calc(100% - 48px);\n}\n.dp-kpi-row[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 18px auto 0;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 14px;\n  padding: 0 24px;\n}\n.dp-kpi-card[_ngcontent-%COMP%] {\n  background: rgba(18, 18, 24, .85);\n  border: 1px solid rgba(255, 255, 255, .07);\n  border-radius: 16px;\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  transition: transform .2s;\n}\n.dp-kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.dp-kpi-card.orange[_ngcontent-%COMP%] {\n  border-color: rgba(245, 158, 11, .3);\n}\n.dp-kpi-card.blue[_ngcontent-%COMP%] {\n  border-color: rgba(59, 130, 246, .3);\n}\n.dp-kpi-card.green[_ngcontent-%COMP%] {\n  border-color: rgba(34, 197, 94, .3);\n}\n.dp-kpi-card.gold[_ngcontent-%COMP%] {\n  border-color: rgba(250, 204, 21, .3);\n}\n.dp-kpi-ico[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.dp-kpi-lbl[_ngcontent-%COMP%] {\n  font-size: .71rem;\n  color: #71717a;\n  text-transform: uppercase;\n  font-weight: 700;\n  letter-spacing: .5px;\n}\n.dp-kpi-num[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: #fff;\n  margin-top: 2px;\n}\n.dp-kpi-card.gold[_ngcontent-%COMP%]   .dp-kpi-num[_ngcontent-%COMP%] {\n  color: #facc15;\n}\n.dp-filters-bar[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 18px auto 0;\n  width: 100%;\n  padding: 0 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.dp-search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(10, 10, 14, .7);\n  border: 1.5px solid rgba(255, 255, 255, .09);\n  border-radius: 12px;\n  padding: 0 14px;\n}\n.dp-search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #facc15;\n}\n.dp-search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #f4f4f5;\n  padding: 12px 0;\n  outline: none;\n  width: 100%;\n  font-size: .9rem;\n}\n.dp-filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.dp-ftab[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .04);\n  border: 1px solid rgba(255, 255, 255, .07);\n  color: #a1a1aa;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: .83rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all .2s;\n}\n.dp-ftab[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.dp-ftab.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .1);\n  border-color: rgba(255, 255, 255, .2);\n  color: #fff;\n}\n.dp-ftab.warn.active[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, .15);\n  border-color: #fbbf24;\n  color: #fbbf24;\n}\n.dp-ftab.info.active[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, .15);\n  border-color: #60a5fa;\n  color: #60a5fa;\n}\n.dp-ftab.good.active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, .15);\n  border-color: #4ade80;\n  color: #4ade80;\n}\n.dp-main[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 20px auto 40px;\n  width: 100%;\n  padding: 0 24px;\n  flex: 1;\n}\n.dp-cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  gap: 20px;\n}\n.dp-card[_ngcontent-%COMP%] {\n  background: rgba(18, 18, 24, .9);\n  border: 1px solid rgba(250, 204, 21, .14);\n  border-radius: 20px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transition: all .25s;\n}\n.dp-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(250, 204, 21, .35);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, .6);\n}\n.dp-card.card-done[_ngcontent-%COMP%] {\n  opacity: .8;\n  border-color: rgba(34, 197, 94, .25);\n}\n.dp-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.dp-code-tag[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, .12);\n  color: #facc15;\n  border: 1px solid rgba(250, 204, 21, .28);\n  padding: 3px 10px;\n  border-radius: 7px;\n  font-size: .82rem;\n  font-weight: 900;\n}\n.dp-date[_ngcontent-%COMP%] {\n  display: block;\n  font-size: .73rem;\n  color: #71717a;\n  margin-top: 4px;\n}\n.dp-estado-pill[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 100px;\n  font-size: .74rem;\n  font-weight: 800;\n}\n.est-pend[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, .15);\n  color: #fbbf24;\n  border: 1px solid rgba(245, 158, 11, .3);\n}\n.est-ruta[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, .15);\n  color: #60a5fa;\n  border: 1px solid rgba(59, 130, 246, .3);\n}\n.est-done[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, .15);\n  color: #4ade80;\n  border: 1px solid rgba(34, 197, 94, .3);\n}\n.dp-client-section[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  border-top: 1px solid rgba(255, 255, 255, .07);\n  border-bottom: 1px solid rgba(255, 255, 255, .07);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.dp-client-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.dp-client-row[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #fff;\n}\n.dp-doc[_ngcontent-%COMP%] {\n  font-size: .74rem;\n  color: #71717a;\n}\n.dp-address-box[_ngcontent-%COMP%] {\n  background: rgba(10, 10, 14, .6);\n  border: 1px solid rgba(255, 255, 255, .06);\n  border-radius: 10px;\n  padding: 9px 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.dp-address-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: .83rem;\n  color: #e4e4e7;\n  flex: 1;\n}\n.dp-map-btn[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, .12);\n  border: 1px solid rgba(250, 204, 21, .28);\n  color: #facc15;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-size: .73rem;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.dp-phone-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: .84rem;\n  color: #a1a1aa;\n}\n.dp-call-btn[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, .14);\n  border: 1px solid rgba(34, 197, 94, .28);\n  color: #4ade80;\n  padding: 3px 9px;\n  border-radius: 7px;\n  font-size: .74rem;\n  font-weight: 700;\n  text-decoration: none;\n}\n.dp-obs[_ngcontent-%COMP%] {\n  font-size: .8rem;\n  color: #fef08a;\n  background: rgba(250, 204, 21, .07);\n  border: 1px solid rgba(250, 204, 21, .13);\n  border-radius: 8px;\n  padding: 8px 10px;\n}\n.dp-products[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, .3);\n  border-radius: 10px;\n  padding: 10px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.dp-prods-title[_ngcontent-%COMP%] {\n  font-size: .72rem;\n  color: #71717a;\n  text-transform: uppercase;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.dp-prod-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: .82rem;\n  color: #d4d4d8;\n}\n.gold-txt[_ngcontent-%COMP%] {\n  color: #facc15;\n}\n.dp-card-foot[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.dp-total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.dp-total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: .78rem;\n  color: #71717a;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n.dp-total-amount[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 900;\n  color: #facc15;\n}\n.dp-action-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border-radius: 12px;\n  border: 0;\n  font-size: .9rem;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all .2s;\n}\n.dp-action-btn.start[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #2563eb);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(37, 99, 235, .3);\n}\n.dp-action-btn.start[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(37, 99, 235, .4);\n}\n.dp-action-btn.confirm[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e,\n      #16a34a);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(34, 197, 94, .3);\n}\n.dp-action-btn.confirm[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(34, 197, 94, .4);\n}\n.dp-done-msg[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #4ade80;\n  font-size: .84rem;\n  font-weight: 700;\n  padding: 8px;\n}\n.dp-loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.dp-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 3px solid rgba(250, 204, 21, .2);\n  border-top-color: #facc15;\n  animation: _ngcontent-%COMP%_spin .8s linear infinite;\n  margin: 0 auto 14px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.dp-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #71717a;\n}\n.dp-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: rgba(18, 18, 24, .6);\n  border: 1px solid rgba(255, 255, 255, .05);\n  border-radius: 18px;\n}\n.dp-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  display: block;\n  margin-bottom: 12px;\n}\n.dp-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #fff;\n  margin-bottom: 6px;\n}\n.dp-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: .88rem;\n  color: #71717a;\n}\n@media (max-width: 640px) {\n  .dp-cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .dp-header-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .dp-header[_ngcontent-%COMP%], \n   .dp-kpi-row[_ngcontent-%COMP%], \n   .dp-filters-bar[_ngcontent-%COMP%], \n   .dp-main[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n/*# sourceMappingURL=delivery-panel.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeliveryPanelComponent, { className: "DeliveryPanelComponent", filePath: "app\\features\\delivery\\delivery-panel.component.ts", lineNumber: 15 });
})();
function key(p) {
  return String(p.idPedido ?? p.codigoPedido);
}
export {
  DeliveryPanelComponent
};
//# sourceMappingURL=delivery-panel.component-BHTNRL3X.js.map
