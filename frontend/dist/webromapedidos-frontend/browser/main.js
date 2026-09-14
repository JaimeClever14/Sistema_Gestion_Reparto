import {
  CartService
} from "./chunk-APZ46JPB.js";
import {
  AuthService
} from "./chunk-KEYSEBEE.js";
import {
  NotificationService
} from "./chunk-ZJUXBRSC.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withComponentInputBinding
} from "./chunk-EJXAROXH.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-5CBOKLCA.js";
import {
  ApiService
} from "./chunk-7FX7SGPL.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  filter,
  inject,
  provideHttpClient,
  withInterceptors,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4TB2NLZN.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "app\\app.component.ts", lineNumber: 10 });
})();

// src/app/core/auth.interceptor.ts
var authInterceptor = (request, next) => {
  const token = localStorage.getItem("roma_token");
  if (!token || token === "DEMO_MODE_TOKEN") {
    return next(request);
  }
  return next(request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  }));
};

// src/app/core/role.guard.ts
var roleGuard = (allowedRoles) => {
  return (_route, _state) => {
    const router = inject(Router);
    const token = localStorage.getItem("roma_token");
    if (!token) {
      return router.createUrlTree(["/login"]);
    }
    const role = (localStorage.getItem("roma_role") ?? "CLIENTE").toUpperCase();
    const allowed = allowedRoles.map((r) => r.toUpperCase());
    if (allowed.includes(role)) {
      return true;
    }
    return router.createUrlTree(["/login"]);
  };
};

// src/app/shell/shell.component.ts
function ShellComponent_div_18_a_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "V");
    \u0275\u0275elementEnd();
  }
}
function ShellComponent_div_18_a_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "C");
    \u0275\u0275elementEnd();
  }
}
function ShellComponent_div_18_a_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "ROMA");
    \u0275\u0275elementEnd();
  }
}
function ShellComponent_div_18_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275listener("click", function ShellComponent_div_18_a_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ShellComponent_div_18_a_3_span_5_Template, 2, 0, "span", 44)(6, ShellComponent_div_18_a_3_span_6_Template, 2, 0, "span", 45)(7, ShellComponent_div_18_a_3_span_7_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r3.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.label === "Pedidos & Ventas");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.label === "Cat\xE1logo de Licores");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.label === "Dashboard");
  }
}
function ShellComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ShellComponent_div_18_a_3_Template, 8, 6, "a", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r4.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", section_r4.items);
  }
}
function ShellComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.notifService.getUnreadCount("ADMIN"), " ");
  }
}
function ShellComponent_div_40_div_7_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", n_r7.orderCode, "");
  }
}
function ShellComponent_div_40_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function ShellComponent_div_40_div_7_Template_div_click_0_listener() {
      const n_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSelectNotification(n_r7));
    });
    \u0275\u0275elementStart(1, "div", 58)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ShellComponent_div_40_div_7_span_4_Template, 2, 1, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r7 = ctx.$implicit;
    \u0275\u0275classProp("unread", !n_r7.read);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r7.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", n_r7.orderCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r7.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 6, n_r7.timestamp, "dd/MM HH:mm"));
  }
}
function ShellComponent_div_40_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1, " \u{1F515} Sin notificaciones nuevas ");
    \u0275\u0275elementEnd();
  }
}
function ShellComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function ShellComponent_div_40_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 52)(2, "strong");
    \u0275\u0275text(3, "\u{1F514} Notificaciones del Sistema");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 53);
    \u0275\u0275listener("click", function ShellComponent_div_40_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.notifService.clearNotifications("ADMIN"));
    });
    \u0275\u0275text(5, "Limpiar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 54);
    \u0275\u0275template(7, ShellComponent_div_40_div_7_Template, 10, 9, "div", 55)(8, ShellComponent_div_40_div_8_Template, 2, 0, "div", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.notifService.getNotificationsForRole("ADMIN"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notifService.getNotificationsForRole("ADMIN").length === 0);
  }
}
var ShellComponent = class _ShellComponent {
  authService = inject(AuthService);
  router = inject(Router);
  notifService = inject(NotificationService);
  isMobileMenuOpen = false;
  showNotifMenu = false;
  allNavSections = [
    {
      title: "OPERACIONES",
      items: [
        { label: "Dashboard", route: "/admin/dashboard", icon: "\u{1F4CA}" },
        { label: "Pedidos & Ventas", route: "/admin/pedidos", icon: "\u{1F6D2}" },
        { label: "Cat\xE1logo de Licores", route: "/admin/productos", icon: "\u{1F4E6}" },
        { label: "Promociones y Ofertas", route: "/admin/promociones", icon: "\u{1F3F7}\uFE0F" }
      ]
    },
    {
      title: "GESTI\xD3N Y CR\xC9DITOS",
      items: [
        { label: "Directorio de Clientes", route: "/admin/clientes", icon: "\u{1F465}" },
        { label: "Pagos y Cuotas", route: "/admin/pagos", icon: "\u{1F4B3}" },
        { label: "Usuarios y Accesos", route: "/admin/usuarios", icon: "\u{1F464}", adminOnly: true }
      ]
    }
  ];
  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.isMobileMenuOpen = false;
    });
  }
  get navSections() {
    const role = (this.authService.getRole() || "CLIENTE").toUpperCase();
    if (role === "ADMIN") {
      return this.allNavSections;
    }
    return this.allNavSections.map((sec) => __spreadProps(__spreadValues({}, sec), {
      items: sec.items.filter((it) => !it.adminOnly)
    }));
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  toggleNotifMenu() {
    this.showNotifMenu = !this.showNotifMenu;
    if (this.showNotifMenu) {
      this.notifService.markAllAsRead("ADMIN");
    }
  }
  onSelectNotification(n) {
    this.showNotifMenu = false;
    this.notifService.markAsRead(n.id);
    if (n.orderCode) {
      this.router.navigate(["/admin/pedidos"], { queryParams: { orderCode: n.orderCode } });
    } else {
      this.router.navigate(["/admin/pedidos"]);
    }
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  logout(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.authService.logout();
  }
  static \u0275fac = function ShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 8, consts: [[1, "adminlte-layout"], [1, "sidebar-backdrop", 3, "click"], [1, "sidebar-adminlte"], [1, "sidebar-brand"], [1, "user-panel"], [1, "user-avatar"], ["viewBox", "0 0 24 24", "width", "24", "height", "24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "user-info"], [1, "user-name"], [1, "user-status"], [1, "status-dot"], [1, "sidebar-nav"], ["class", "nav-section", 4, "ngFor", "ngForOf"], [1, "nav-section", 2, "margin-top", "15px"], ["type", "button", 1, "nav-item", 2, "background", "none", "border", "none", "width", "100%", "text-align", "left", "cursor", "pointer", "color", "inherit", "font", "inherit", 3, "click"], [1, "nav-icon"], [1, "nav-text"], [1, "main-wrapper"], [1, "top-navbar"], [1, "navbar-left"], ["type", "button", 1, "hamburger-btn", 3, "click"], ["viewBox", "0 0 24 24", "width", "24", "height", "24", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], [1, "navbar-right"], [1, "notif-admin-wrapper"], ["type", "button", "title", "Notificaciones Admin", 1, "nav-icon-btn", 3, "click"], ["class", "badge bg-orange", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "20", "height", "20", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], ["d", "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 0 1-3.46 0"], ["class", "notif-admin-dropdown", 3, "click", 4, "ngIf"], [1, "company-info", "hide-mobile"], [1, "company-logo"], ["type", "button", "title", "Cerrar Sesi\xF3n", 2, "margin-left", "12px", "background", "#dd4b39", "color", "#fff", "border", "none", "padding", "6px 12px", "border-radius", "4px", "font-weight", "bold", "cursor", "pointer", "display", "flex", "align-items", "center", "gap", "6px", "font-size", "13px", 3, "click"], [1, "hide-mobile"], [1, "content-area"], [1, "nav-section"], [1, "nav-section-title"], ["routerLinkActive", "active", "class", "nav-item", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "nav-item", 3, "click", "routerLink"], ["class", "nav-badge", "style", "background-color: #00a65a;", 4, "ngIf"], ["class", "nav-badge", "style", "background-color: #0073b7;", 4, "ngIf"], ["class", "nav-badge", "style", "background-color: #f39c12;", 4, "ngIf"], [1, "nav-badge", 2, "background-color", "#00a65a"], [1, "nav-badge", 2, "background-color", "#0073b7"], [1, "nav-badge", 2, "background-color", "#f39c12"], [1, "badge", "bg-orange"], [1, "notif-admin-dropdown", 3, "click"], [1, "notif-admin-head"], [1, "btn-clear", 3, "click"], [1, "notif-admin-body"], ["class", "notif-admin-item clickable", 3, "unread", "click", 4, "ngFor", "ngForOf"], ["class", "notif-admin-empty", 4, "ngIf"], [1, "notif-admin-item", "clickable", 3, "click"], [1, "notif-item-top"], ["class", "notif-code", 4, "ngIf"], [1, "notif-code"], [1, "notif-admin-empty"]], template: function ShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function ShellComponent_Template_div_click_1_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "aside", 2)(3, "div", 3)(4, "h2");
      \u0275\u0275text(5, "Licorer\xEDa Roma");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 6);
      \u0275\u0275element(9, "path", 7)(10, "circle", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 9)(12, "span", 10);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 11);
      \u0275\u0275element(15, "span", 12);
      \u0275\u0275text(16, " Online");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "nav", 13);
      \u0275\u0275template(18, ShellComponent_div_18_Template, 4, 2, "div", 14);
      \u0275\u0275elementStart(19, "div", 15)(20, "button", 16);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_20_listener($event) {
        return ctx.logout($event);
      });
      \u0275\u0275elementStart(21, "span", 17);
      \u0275\u0275text(22, "\u{1F6AA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 18);
      \u0275\u0275text(24, "Cerrar Sesi\xF3n");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(25, "div", 19)(26, "header", 20)(27, "div", 21)(28, "button", 22);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_28_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 23);
      \u0275\u0275element(30, "line", 24)(31, "line", 25)(32, "line", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "div", 27)(34, "div", 28)(35, "button", 29);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_35_listener() {
        return ctx.toggleNotifMenu();
      });
      \u0275\u0275template(36, ShellComponent_span_36_Template, 2, 1, "span", 30);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(37, "svg", 31);
      \u0275\u0275element(38, "path", 32)(39, "path", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(40, ShellComponent_div_40_Template, 9, 2, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(41, "div", 35)(42, "div", 36);
      \u0275\u0275text(43, "\u{1F377}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span");
      \u0275\u0275text(45, "Licorer\xEDa Roma \u2014 Sistema de Gesti\xF3n & Pedidos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "button", 37);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_46_listener($event) {
        return ctx.logout($event);
      });
      \u0275\u0275text(47, " \u{1F6AA} ");
      \u0275\u0275elementStart(48, "span", 38);
      \u0275\u0275text(49, "Salir");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "main", 39);
      \u0275\u0275element(51, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.isMobileMenuOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("mobile-open", ctx.isMobileMenuOpen);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.authService.getUsername());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.navSections);
      \u0275\u0275advance(18);
      \u0275\u0275property("ngIf", ctx.notifService.getUnreadCount("ADMIN") > 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.showNotifMenu);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterLink, RouterLinkActive, RouterOutlet], styles: ['\n\n.adminlte-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background-color: #ecf0f5;\n  font-family:\n    "Source Sans Pro",\n    "Helvetica Neue",\n    Helvetica,\n    Arial,\n    sans-serif;\n  overflow: hidden;\n}\n.sidebar-adminlte[_ngcontent-%COMP%] {\n  width: 230px;\n  background-color: #222d32;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.3s ease;\n  z-index: 1000;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #367fa9;\n  color: #fff;\n}\n.sidebar-brand[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.user-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 15px;\n  border-bottom: 1px solid #1a2226;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  background: #3c8dbc;\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 15px;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.user-status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-top: 3px;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: #3c763d;\n  border-radius: 50%;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding-top: 10px;\n}\n.nav-section-title[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 20px;\n  font-size: 12px;\n  color: #4b646f;\n  background-color: #1a2226;\n  text-transform: uppercase;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 15px 12px 20px;\n  color: #b8c7ce;\n  text-decoration: none;\n  font-size: 14px;\n  transition: background-color 0.2s ease;\n  border-left: 3px solid transparent;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background-color: #1e282c;\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background-color: #1e282c;\n  color: #fff;\n  border-left-color: #3c8dbc;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  width: 20px;\n  text-align: center;\n}\n.nav-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-badge[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 10px;\n  font-weight: bold;\n  color: #fff;\n}\n.main-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow: hidden;\n}\n.top-navbar[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: #3c8dbc;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  color: #fff;\n  z-index: 900;\n}\n.navbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.hamburger-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0 15px;\n  color: #fff;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hamburger-btn[_ngcontent-%COMP%]:hover {\n  background-color: #367fa9;\n}\n.navbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-right: 15px;\n  gap: 15px;\n}\n.nav-icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n}\n.nav-icon-btn[_ngcontent-%COMP%]:hover {\n  background-color: #367fa9;\n}\n.badge.bg-orange[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  background-color: #ef4444;\n  color: white;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 100px;\n  font-weight: bold;\n  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.5);\n}\n.notif-admin-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notif-admin-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  width: 320px;\n  background: #1e222d;\n  color: #f4f4f5;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n  z-index: 500;\n  overflow: hidden;\n  margin-top: 6px;\n}\n.notif-admin-head[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: rgba(255, 255, 255, 0.06);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.85rem;\n}\n.notif-admin-head[_ngcontent-%COMP%]   .btn-clear[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: #f39c12;\n  font-weight: 700;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.notif-admin-body[_ngcontent-%COMP%] {\n  max-height: 320px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n.notif-admin-item[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  font-size: 0.84rem;\n}\n.notif-admin-item.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.notif-admin-item.clickable[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.12);\n}\n.notif-item-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.notif-code[_ngcontent-%COMP%] {\n  background: rgba(243, 156, 18, 0.2);\n  color: #f39c12;\n  font-size: 0.7rem;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-weight: bold;\n}\n.notif-admin-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #dcdcdc;\n  font-size: 0.8rem;\n  line-height: 1.3;\n}\n.notif-admin-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 0.68rem;\n  text-align: right;\n}\n.notif-admin-empty[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #888;\n  font-size: 0.83rem;\n}\n.company-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n}\n.company-logo[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #3c8dbc;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: bold;\n}\n.logout-btn-top[_ngcontent-%COMP%] {\n  background: #dd4b39;\n  border: none;\n  color: white;\n  padding: 5px 10px;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: bold;\n}\n.logout-btn-top[_ngcontent-%COMP%]:hover {\n  background: #d73925;\n}\n.content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 15px;\n  overflow-y: auto;\n  background-color: #ecf0f5;\n}\n.sidebar-backdrop[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n}\n@media (max-width: 768px) {\n  .sidebar-adminlte[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    transform: translateX(-100%);\n  }\n  .sidebar-adminlte.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .sidebar-backdrop.active[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .hide-mobile[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=shell.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "app\\shell\\shell.component.ts", lineNumber: 26 });
})();

// src/app/store/store-shell.component.ts
var _c0 = (a0) => ({ categoryId: a0 });
function StoreShellComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1, "\u26A1 Demo");
    \u0275\u0275elementEnd();
  }
}
function StoreShellComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.notifService.getUnreadCount("CLIENTE"), " ");
  }
}
function StoreShellComponent_div_23_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function StoreShellComponent_div_23_div_7_Template_div_click_0_listener() {
      const n_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSelectNotification(n_r4));
    });
    \u0275\u0275elementStart(1, "strong", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 65);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r4 = ctx.$implicit;
    \u0275\u0275classProp("unread", !n_r4.read);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r4.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, n_r4.timestamp, "dd/MM HH:mm"));
  }
}
function StoreShellComponent_div_23_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "span");
    \u0275\u0275text(2, "\u{1F515}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Sin notificaciones nuevas ");
    \u0275\u0275elementEnd();
  }
}
function StoreShellComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function StoreShellComponent_div_23_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "strong");
    \u0275\u0275text(3, "\u{1F514} Notificaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 58);
    \u0275\u0275listener("click", function StoreShellComponent_div_23_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.notifService.clearNotifications("CLIENTE"));
    });
    \u0275\u0275text(5, "Limpiar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 59);
    \u0275\u0275template(7, StoreShellComponent_div_23_div_7_Template, 8, 8, "div", 60)(8, StoreShellComponent_div_23_div_8_Template, 4, 0, "div", 61);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.notifService.getNotificationsForRole("CLIENTE"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.notifService.getNotificationsForRole("CLIENTE").length === 0);
  }
}
function StoreShellComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275listener("click", function StoreShellComponent_div_32_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "a", 68);
    \u0275\u0275text(2, "\u{1F4E6} Mis compras / Pedidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 69);
    \u0275\u0275text(4, "\u2764\uFE0F Favoritos");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "hr", 70);
    \u0275\u0275elementStart(6, "button", 71);
    \u0275\u0275listener("click", function StoreShellComponent_div_32_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
    });
    \u0275\u0275text(7, "\u{1F6AA} Cerrar sesi\xF3n");
    \u0275\u0275elementEnd()();
  }
}
function StoreShellComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.cartService.totalItems());
  }
}
function StoreShellComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275listener("click", function StoreShellComponent_div_39_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleCartPanel());
    });
    \u0275\u0275elementEnd();
  }
}
function StoreShellComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 75);
    \u0275\u0275text(2, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Tu carrito est\xE1 vac\xEDo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 76);
    \u0275\u0275listener("click", function StoreShellComponent_div_47_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleCartPanel());
    });
    \u0275\u0275text(6, "\xA1Agrega productos!");
    \u0275\u0275elementEnd()();
  }
}
function StoreShellComponent_div_48_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 81)(4, "p", 82);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 83);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 84)(10, "button", 85);
    \u0275\u0275listener("click", function StoreShellComponent_div_48_div_1_Template_button_click_10_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cartService.updateQuantity(item_r9.producto.idProducto, item_r9.cantidad - 1));
    });
    \u0275\u0275text(11, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 85);
    \u0275\u0275listener("click", function StoreShellComponent_div_48_div_1_Template_button_click_14_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cartService.updateQuantity(item_r9.producto.idProducto, item_r9.cantidad + 1));
    });
    \u0275\u0275text(15, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 86)(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 87);
    \u0275\u0275listener("click", function StoreShellComponent_div_48_div_1_Template_button_click_20_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cartService.removeFromCart(item_r9.producto.idProducto));
    });
    \u0275\u0275text(21, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r9.producto.nombre.slice(0, 1), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r9.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(8, 5, item_r9.precioUnitario, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r9.cantidad);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(19, 8, item_r9.subtotal, "1.2-2"), "");
  }
}
function StoreShellComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275template(1, StoreShellComponent_div_48_div_1_Template, 22, 11, "div", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.cartService.cartItems());
  }
}
function StoreShellComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89)(2, "div", 90)(3, "span");
    \u0275\u0275text(4, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 90)(9, "span");
    \u0275\u0275text(10, "IGV (18%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 91)(15, "span");
    \u0275\u0275text(16, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 92);
    \u0275\u0275listener("click", function StoreShellComponent_div_49_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.checkout());
    });
    \u0275\u0275text(21, "\u{1F680} Finalizar Compra");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(7, 3, ctx_r0.cartService.subtotal(), "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(13, 6, ctx_r0.cartService.igv(), "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(19, 9, ctx_r0.cartService.totalMonto(), "1.2-2"), "");
  }
}
function StoreShellComponent_a_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(2, _c0, cat_r11.idCategoria));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getNombreCat(cat_r11), " ");
  }
}
function StoreShellComponent_a_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(2, _c0, cat_r12.idCategoria));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getNombreCat(cat_r12));
  }
}
function StoreShellComponent_div_91_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99);
    \u0275\u0275element(2, "span")(3, "span")(4, "span")(5, "span")(6, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 100);
    \u0275\u0275element(8, "div", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 102)(10, "div", 103)(11, "span", 104);
    \u0275\u0275text(12, "\u{1F4A8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 105);
    \u0275\u0275text(14, "\u{1F4A8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 106);
    \u0275\u0275text(16, "\u{1F4A8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 107);
    \u0275\u0275text(18, "\u26A1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 108)(20, "div", 109);
    \u0275\u0275element(21, "div", 110)(22, "div", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 112)(24, "div", 113);
    \u0275\u0275text(25, "RomaExpress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 114);
    \u0275\u0275text(27, "\u{1F680} 45 MIN");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 115);
    \u0275\u0275text(29, "\u2699\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 116);
    \u0275\u0275text(31, "\u2699\uFE0F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 117)(33, "div", 118);
    \u0275\u0275element(34, "span", 119);
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "h2", 120);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 121);
    \u0275\u0275text(40, "Tu entrega ha sido enviada al repartidor m\xE1s cercano a tu ubicaci\xF3n.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 122);
    \u0275\u0275element(42, "div", 123);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("arrived", ctx_r0.truckStage === "arrived");
    \u0275\u0275advance(27);
    \u0275\u0275textInterpolate(ctx_r0.truckStage === "speeding" ? "\xA1DESPACHANDO TU PEDIDO A TODA VELOCIDAD!" : "\xA1CAMI\xD3N EN CAMINO!");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("C\xF3digo de Pedido: ", ctx_r0.createdOrderCode, "");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("full", ctx_r0.truckStage === "arrived");
  }
}
function StoreShellComponent_div_91_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125);
    \u0275\u0275text(2, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "\xA1Gracias por tu compra en RomaStore!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 126);
    \u0275\u0275text(6, "Tu pedido fue procesado exitosamente y ya est\xE1 en camino a tu domicilio.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 127)(8, "div", 128)(9, "span");
    \u0275\u0275text(10, "C\xF3digo de Pedido:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 128)(14, "span");
    \u0275\u0275text(15, "Monto Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong", 129);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 128)(20, "span");
    \u0275\u0275text(21, "Tiempo Estimado de Entrega:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 130);
    \u0275\u0275text(23, "\u26A1 25 - 40 minutos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 131)(25, "button", 132);
    \u0275\u0275listener("click", function StoreShellComponent_div_91_div_2_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToOrders());
    });
    \u0275\u0275text(26, "\u{1F6CD}\uFE0F Continuar Comprando");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 133);
    \u0275\u0275listener("click", function StoreShellComponent_div_91_div_2_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeTruckAnimation());
    });
    \u0275\u0275text(28, "\u2715 Cerrar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r0.createdOrderCode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(18, 2, ctx_r0.createdOrderTotal, "1.2-2"), "");
  }
}
function StoreShellComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275template(1, StoreShellComponent_div_91_div_1_Template, 43, 6, "div", 96)(2, StoreShellComponent_div_91_div_2_Template, 29, 5, "div", 97);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.truckStage === "speeding" || ctx_r0.truckStage === "arrived");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.truckStage === "confirmed");
  }
}
var StoreShellComponent = class _StoreShellComponent {
  authService = inject(AuthService);
  router = inject(Router);
  cartService = inject(CartService);
  api = inject(ApiService);
  notifService = inject(NotificationService);
  searchTerm = "";
  showUserMenu = false;
  showCartPanel = false;
  showNotifMenu = false;
  processingCheckout = false;
  orderSuccessMessage = "";
  // ANIMACIÓN CAMIÓN DEDICADA
  showTruckAnimation = false;
  truckStage = "speeding";
  createdOrderCode = "";
  createdOrderTotal = 0;
  categoriesList = [];
  ngOnInit() {
    this.cargarCategorias();
  }
  cargarCategorias() {
    this.api.get("/categorias").subscribe({
      next: (cats) => {
        this.categoriesList = cats && cats.length > 0 ? cats : this.demoCategorias();
      },
      error: () => {
        this.categoriesList = this.demoCategorias();
      }
    });
  }
  getNombreCat(cat) {
    return cat.nombre || cat.nombreCategoria || "Categor\xEDa";
  }
  demoCategorias() {
    return [
      { idCategoria: 1, nombre: "Licores & Destilados" },
      { idCategoria: 2, nombre: "Cervezas" },
      { idCategoria: 3, nombre: "Vinos" },
      { idCategoria: 4, nombre: "Bebidas Sin Alcohol" }
    ];
  }
  get isDemoMode() {
    return this.authService.isDemoMode();
  }
  onSearch() {
    if (this.searchTerm.trim()) {
      this.router.navigate(["/store/catalog"], {
        queryParams: { q: this.searchTerm.trim() }
      });
    }
  }
  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
    this.showNotifMenu = false;
  }
  toggleNotifMenu() {
    this.showNotifMenu = !this.showNotifMenu;
    this.showUserMenu = false;
    if (this.showNotifMenu) {
      this.notifService.markAllAsRead("CLIENTE");
    }
  }
  onSelectNotification(n) {
    this.showNotifMenu = false;
    this.notifService.markAsRead(n.id);
    this.router.navigate(["/store/orders"]);
  }
  toggleCartPanel() {
    this.showCartPanel = !this.showCartPanel;
  }
  checkout() {
    if (this.cartService.totalItems() === 0)
      return;
    this.processingCheckout = true;
    const currentUsername = this.authService.getUsername() || "Cliente";
    const total = this.cartService.totalMonto();
    const subtotal = this.cartService.subtotal();
    const igv = this.cartService.igv();
    const orderCode = `PED-2026-${Math.floor(1e3 + Math.random() * 9e3)}`;
    this.createdOrderCode = orderCode;
    this.createdOrderTotal = total;
    const payload = {
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
      direccionEntrega: localStorage.getItem("roma_user_address") || "Av. Larco 456, Miraflores - Roma Express",
      observaciones: "Pedido generado desde la tienda online",
      estado: "P",
      detalles: this.cartService.cartItems().map((item) => ({
        idProducto: item.producto.idProducto,
        cantidad: item.cantidad,
        precioUnitario: item.precioUnitario,
        subtotal: item.subtotal
      }))
    };
    this.notifService.notify("ADMIN", "\u{1F6D2} \xA1Nuevo Pedido Recibido!", `El cliente ${currentUsername} realiz\xF3 la compra #${orderCode} por un total de S/ ${total.toFixed(2)}.`, orderCode, "info");
    this.showCartPanel = false;
    this.showTruckAnimation = true;
    this.truckStage = "speeding";
    this.api.post("/pedidos", payload).subscribe({
      next: (res) => {
        const fullOrder = __spreadProps(__spreadValues(__spreadValues({}, payload), res), {
          cliente: { idCliente: 1, nombresRazonSocial: currentUsername },
          detalles: this.cartService.cartItems().map((item) => ({
            idProducto: item.producto.idProducto,
            cantidad: item.cantidad,
            precioUnitario: item.precioUnitario,
            subtotal: item.subtotal,
            producto: item.producto
          }))
        });
        this.saveToSharedOrders(fullOrder);
        this.triggerTruckSequence();
      },
      error: () => {
        const fullOrder = __spreadProps(__spreadValues({
          idPedido: Date.now()
        }, payload), {
          cliente: { idCliente: 1, nombresRazonSocial: currentUsername },
          detalles: this.cartService.cartItems().map((item) => ({
            idProducto: item.producto.idProducto,
            cantidad: item.cantidad,
            precioUnitario: item.precioUnitario,
            subtotal: item.subtotal,
            producto: item.producto
          }))
        });
        this.saveToSharedOrders(fullOrder);
        this.triggerTruckSequence();
      }
    });
  }
  triggerTruckSequence() {
    setTimeout(() => {
      this.truckStage = "arrived";
    }, 2500);
    setTimeout(() => {
      this.truckStage = "confirmed";
      this.cartService.clearCart();
      this.processingCheckout = false;
    }, 3500);
  }
  closeTruckAnimation() {
    this.showTruckAnimation = false;
    this.truckStage = "speeding";
  }
  goToOrders() {
    this.closeTruckAnimation();
    this.router.navigate(["/store/orders"]);
  }
  saveToSharedOrders(order) {
    try {
      const existing = localStorage.getItem("roma_shared_orders_DISABLED");
      let orders = existing ? JSON.parse(existing) : [];
      orders = orders.filter((o) => o.codigoPedido !== order.codigoPedido && o.idPedido !== order.idPedido);
      orders.unshift(order);
      localStorage.setItem("roma_shared_orders_DISABLED", JSON.stringify(orders));
    } catch (e) {
      console.warn("Error saving shared order", e);
    }
  }
  logout() {
    this.showUserMenu = false;
    this.authService.logout();
  }
  static \u0275fac = function StoreShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoreShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoreShellComponent, selectors: [["app-store-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 92, vars: 17, consts: [[1, "store-shell"], [1, "meli-header"], [1, "header-inner"], ["routerLink", "/store/catalog", 1, "logo"], [1, "logo-mark"], [1, "logo-text"], [1, "search-wrapper"], [1, "search-form", 3, "ngSubmit"], ["type", "text", "name", "search", "placeholder", "Buscar licores, cervezas, vinos y m\xE1s...", "id", "store-search-input", "autocomplete", "off", 1, "search-input", 3, "ngModelChange", "ngModel"], ["type", "submit", "id", "store-search-btn", 1, "search-btn"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], [1, "header-actions"], ["class", "demo-tag", 4, "ngIf"], [1, "notif-wrapper"], ["type", "button", "title", "Notificaciones", 1, "notif-bell-btn", 3, "click"], ["class", "notif-badge", 4, "ngIf"], ["class", "notif-dropdown", 3, "click", 4, "ngIf"], [1, "user-area", 3, "click"], [1, "user-avatar"], [1, "user-details"], [1, "user-greeting"], [1, "user-account"], ["class", "user-dropdown", 3, "click", 4, "ngIf"], ["type", "button", 1, "cart-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], ["class", "cart-badge", 4, "ngIf"], ["class", "cart-overlay", 3, "click", 4, "ngIf"], [1, "cart-panel"], [1, "cart-header"], [1, "close-cart-btn", 3, "click"], [1, "cart-body"], ["class", "empty-cart", 4, "ngIf"], ["class", "cart-items", 4, "ngIf"], ["class", "cart-footer", 4, "ngIf"], [1, "meli-nav"], [1, "nav-inner"], ["routerLink", "/store/catalog", 1, "nav-link"], ["routerLink", "/store/catalog", "class", "nav-link", 3, "queryParams", 4, "ngFor", "ngForOf"], ["routerLink", "/store/orders", 1, "nav-link", "highlight-orders"], [1, "store-main"], [1, "meli-footer"], [1, "footer-inner"], [1, "footer-col"], ["routerLink", "/store/orders"], ["routerLink", "/store/catalog"], ["routerLink", "/store/catalog", 3, "queryParams", 4, "ngFor", "ngForOf"], ["href", "#"], [1, "footer-bottom"], ["class", "truck-overlay", 4, "ngIf"], [1, "demo-tag"], [1, "notif-badge"], [1, "notif-dropdown", 3, "click"], [1, "notif-header"], [1, "btn-clear-notif", 3, "click"], [1, "notif-list"], ["class", "notif-item clickable", 3, "unread", "click", 4, "ngFor", "ngForOf"], ["class", "notif-empty", 4, "ngIf"], [1, "notif-item", "clickable", 3, "click"], [1, "notif-title"], [1, "notif-msg"], [1, "notif-time"], [1, "notif-empty"], [1, "user-dropdown", 3, "click"], ["routerLink", "/store/orders", 1, "dropdown-item"], ["routerLink", "/store/catalog", 1, "dropdown-item"], [1, "dropdown-divider"], ["type", "button", 1, "dropdown-item", "logout", 3, "click"], [1, "cart-badge"], [1, "cart-overlay", 3, "click"], [1, "empty-cart"], [1, "empty-icon"], [1, "btn-primary-meli", 3, "click"], [1, "cart-items"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [1, "cart-item"], [1, "item-img-placeholder"], [1, "item-info"], [1, "item-title"], [1, "item-price"], [1, "item-qty"], [3, "click"], [1, "item-subtotal"], [1, "remove-btn", 3, "click"], [1, "cart-footer"], [1, "cart-totals"], [1, "total-row"], [1, "total-row", "total"], [1, "btn-primary-meli", "btn-checkout", 3, "click"], ["routerLink", "/store/catalog", 1, "nav-link", 3, "queryParams"], ["routerLink", "/store/catalog", 3, "queryParams"], [1, "truck-overlay"], ["class", "truck-scene", 4, "ngIf"], ["class", "order-success-modal", 4, "ngIf"], [1, "truck-scene"], [1, "speed-lines"], [1, "road-track"], [1, "road-lines"], [1, "speed-truck-wrapper"], [1, "smoke-particles"], [1, "smoke", "p1"], [1, "smoke", "p2"], [1, "smoke", "p3"], [1, "fire-spark"], [1, "truck-body-box"], [1, "truck-cab"], [1, "truck-window"], [1, "headlight-beam"], [1, "truck-trailer"], [1, "trailer-logo"], [1, "speed-tag"], [1, "truck-wheel", "wheel-back"], [1, "truck-wheel", "wheel-front"], [1, "truck-status-card"], [1, "status-badge-animated"], [1, "pulse-dot"], [1, "order-code-glow"], [1, "speed-sub"], [1, "speed-progress-bar"], [1, "progress-fill"], [1, "order-success-modal"], [1, "modal-success-icon"], [1, "success-subtitle"], [1, "order-summary-box"], [1, "summary-row"], [1, "total-price"], [1, "delivery-badge"], [1, "success-actions"], ["type", "button", 1, "btn-primary-meli", 3, "click"], ["type", "button", 1, "btn-secondary-meli", 3, "click"]], template: function StoreShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "a", 3)(4, "div", 4);
      \u0275\u0275text(5, "R");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "Roma");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Store");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "form", 7);
      \u0275\u0275listener("ngSubmit", function StoreShellComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementStart(12, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function StoreShellComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 10);
      \u0275\u0275element(15, "circle", 11)(16, "line", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "div", 13);
      \u0275\u0275template(18, StoreShellComponent_div_18_Template, 2, 0, "div", 14);
      \u0275\u0275elementStart(19, "div", 15)(20, "button", 16);
      \u0275\u0275listener("click", function StoreShellComponent_Template_button_click_20_listener() {
        return ctx.toggleNotifMenu();
      });
      \u0275\u0275text(21, " \u{1F514} ");
      \u0275\u0275template(22, StoreShellComponent_span_22_Template, 2, 1, "span", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, StoreShellComponent_div_23_Template, 9, 2, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 19);
      \u0275\u0275listener("click", function StoreShellComponent_Template_div_click_24_listener() {
        return ctx.toggleUserMenu();
      });
      \u0275\u0275elementStart(25, "div", 20);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 21)(28, "span", 22);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 23);
      \u0275\u0275text(31, "Mi cuenta \u25BE");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(32, StoreShellComponent_div_32_Template, 8, 0, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 25);
      \u0275\u0275listener("click", function StoreShellComponent_Template_button_click_33_listener() {
        return ctx.toggleCartPanel();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(34, "svg", 26);
      \u0275\u0275element(35, "circle", 27)(36, "circle", 28)(37, "path", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, StoreShellComponent_span_38_Template, 2, 1, "span", 30);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(39, StoreShellComponent_div_39_Template, 1, 0, "div", 31);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(40, "div", 32)(41, "div", 33)(42, "h2");
      \u0275\u0275text(43, "Mi Carrito");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 34);
      \u0275\u0275listener("click", function StoreShellComponent_Template_button_click_44_listener() {
        return ctx.toggleCartPanel();
      });
      \u0275\u0275text(45, "\u2715");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 35);
      \u0275\u0275template(47, StoreShellComponent_div_47_Template, 7, 0, "div", 36)(48, StoreShellComponent_div_48_Template, 2, 1, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(49, StoreShellComponent_div_49_Template, 22, 12, "div", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "nav", 39)(51, "div", 40)(52, "a", 41);
      \u0275\u0275text(53, "Todas las categor\xEDas");
      \u0275\u0275elementEnd();
      \u0275\u0275template(54, StoreShellComponent_a_54_Template, 2, 4, "a", 42);
      \u0275\u0275elementStart(55, "a", 43);
      \u0275\u0275text(56, "\u{1F4E6} Mis Pedidos");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "main", 44);
      \u0275\u0275element(58, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "footer", 45)(60, "div", 46)(61, "div", 47)(62, "h4");
      \u0275\u0275text(63, "RomaStore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p");
      \u0275\u0275text(65, "Tu licorer\xEDa online de confianza. Los mejores licores, cervezas y vinos al mejor precio.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 47)(67, "h4");
      \u0275\u0275text(68, "Mi cuenta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "a", 48);
      \u0275\u0275text(70, "Mis compras");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "a", 49);
      \u0275\u0275text(72, "Favoritos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "a", 48);
      \u0275\u0275text(74, "Historial");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 47)(76, "h4");
      \u0275\u0275text(77, "Categor\xEDas");
      \u0275\u0275elementEnd();
      \u0275\u0275template(78, StoreShellComponent_a_78_Template, 2, 4, "a", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 47)(80, "h4");
      \u0275\u0275text(81, "Atenci\xF3n al cliente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "a", 51);
      \u0275\u0275text(83, "Centro de ayuda");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "a", 51);
      \u0275\u0275text(85, "T\xE9rminos y condiciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "a", 51);
      \u0275\u0275text(87, "Contacto");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "div", 52)(89, "p");
      \u0275\u0275text(90, "\xA9 2026 RomaStore \u2014 Todos los derechos reservados. Powered by RomaPedidos.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(91, StoreShellComponent_div_91_Template, 3, 2, "div", 53);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.isDemoMode);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.notifService.getUnreadCount("CLIENTE") > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNotifMenu);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.authService.getUsername().slice(0, 1).toUpperCase());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Hola, ", ctx.authService.getUsername(), "");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showUserMenu);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.cartService.totalItems() > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCartPanel);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.showCartPanel);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.cartService.totalItems() === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cartService.totalItems() > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cartService.totalItems() > 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.categoriesList);
      \u0275\u0275advance(24);
      \u0275\u0275property("ngForOf", ctx.categoriesList);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.showTruckAnimation);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterOutlet, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.store-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #f5f5f5;\n}\n.meli-header[_ngcontent-%COMP%] {\n  background: #FFF159;\n  padding: 0;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.header-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 10px 16px;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: #333;\n  flex-shrink: 0;\n}\n.logo-mark[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #3483FA;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  font-weight: 800;\n  font-size: 1.2rem;\n  color: white;\n  box-shadow: 0 2px 8px rgba(52, 131, 250, 0.35);\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 400;\n  color: #333;\n  letter-spacing: -0.02em;\n}\n.logo-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 640px;\n}\n.search-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #FFFFFF;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.search-form[_ngcontent-%COMP%]:focus-within {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  padding: 10px 16px;\n  font-size: 0.95rem;\n  color: #333;\n  background: transparent;\n  outline: none;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #AAAAAA;\n}\n.search-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  border-left: 1px solid #E6E6E6;\n  padding: 10px 14px;\n  cursor: pointer;\n  color: #999;\n  display: flex;\n  align-items: center;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.search-btn[_ngcontent-%COMP%]:hover {\n  background: #F5F5F5;\n  color: #3483FA;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-shrink: 0;\n}\n.demo-tag[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 4px;\n  background: rgba(52, 131, 250, 0.12);\n  color: #3483FA;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.user-area[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  position: relative;\n  padding: 6px 10px;\n  border-radius: 6px;\n  transition: background 0.15s ease;\n}\n.user-area[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #3483FA;\n  color: white;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  font-size: 0.85rem;\n}\n.user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.user-greeting[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #666;\n  line-height: 1.2;\n}\n.user-account[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #333;\n  line-height: 1.3;\n}\n.user-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  right: 0;\n  background: white;\n  border-radius: 6px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  min-width: 200px;\n  padding: 8px 0;\n  z-index: 200;\n  animation: fadeInUp 0.15s ease;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 16px;\n  color: #333;\n  font-size: 0.9rem;\n  text-decoration: none;\n  transition: background 0.12s ease;\n  cursor: pointer;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #F5F5F5;\n}\n.dropdown-item.logout[_ngcontent-%COMP%] {\n  color: #F23D4F;\n}\n.dropdown-divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #EBEBEB;\n  margin: 4px 0;\n}\n.notif-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notif-bell-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: grid;\n  place-items: center;\n  font-size: 1.1rem;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.2s;\n}\n.notif-bell-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.4);\n  transform: scale(1.05);\n}\n.notif-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  background: #ef4444;\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: 900;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.5);\n  animation: pulse 1.5s infinite;\n}\n.notif-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  width: 310px;\n  background: #12141d;\n  border: 1.5px solid rgba(250, 204, 21, 0.3);\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n  z-index: 300;\n  overflow: hidden;\n  color: #f4f4f5;\n  animation: fadeInUp 0.2s ease;\n}\n.notif-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.05);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.85rem;\n}\n.btn-clear-notif[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: #facc15;\n  font-weight: 700;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.notif-list[_ngcontent-%COMP%] {\n  max-height: 320px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n.notif-item[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.notif-item.unread[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, 0.08);\n  border-left: 3px solid #facc15;\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #fff;\n  font-weight: 800;\n}\n.notif-msg[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #d4d4d8;\n  line-height: 1.3;\n}\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #71717a;\n  text-align: right;\n}\n.notif-empty[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  text-align: center;\n  color: #71717a;\n  font-size: 0.82rem;\n}\n.meli-nav[_ngcontent-%COMP%] {\n  background: #3483FA;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.nav-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  overflow-x: auto;\n}\n.nav-link[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 0.85rem;\n  font-weight: 500;\n  text-decoration: none;\n  white-space: nowrap;\n  border-radius: 4px;\n  transition: all 0.15s ease;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: rgba(255, 255, 255, 0.12);\n}\n.store-main[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  padding: 24px 16px;\n}\n.meli-footer[_ngcontent-%COMP%] {\n  background: white;\n  border-top: 1px solid #E6E6E6;\n  margin-top: 40px;\n}\n.footer-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 40px 16px 32px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 32px;\n}\n.footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #333;\n}\n.footer-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #999;\n  line-height: 1.5;\n  margin: 0;\n}\n.footer-col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: #666;\n  padding: 3px 0;\n  text-decoration: none;\n  transition: color 0.15s ease;\n}\n.footer-col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3483FA;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid #EBEBEB;\n  text-align: center;\n  padding: 16px;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  color: #AAAAAA;\n}\n.cart-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #333;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n}\n.cart-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.cart-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: -2px;\n  background-color: #3483FA;\n  color: white;\n  font-size: 0.7rem;\n  font-weight: bold;\n  padding: 2px 6px;\n  border-radius: 10px;\n  border: 2px solid #FFF159;\n}\n.cart-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  backdrop-filter: blur(2px);\n}\n.cart-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: -400px;\n  width: 100%;\n  max-width: 400px;\n  height: 100vh;\n  background: white;\n  z-index: 1001;\n  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);\n  transition: right 0.3s ease-in-out;\n  display: flex;\n  flex-direction: column;\n}\n.cart-panel.open[_ngcontent-%COMP%] {\n  right: 0;\n}\n.cart-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.cart-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  color: #333;\n}\n.close-cart-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  color: #999;\n}\n.cart-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n.empty-cart[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #666;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  display: block;\n  margin-bottom: 10px;\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #eee;\n}\n.item-img-placeholder[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: #f5f5f5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #ccc;\n  flex-shrink: 0;\n}\n.item-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.item-title[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-size: 0.95rem;\n  color: #333;\n}\n.item-price[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-weight: 500;\n  color: #333;\n}\n.item-qty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  width: fit-content;\n}\n.item-qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 2px 8px;\n  cursor: pointer;\n  color: #3483FA;\n  font-weight: bold;\n}\n.item-subtotal[_ngcontent-%COMP%] {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.item-subtotal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: #333;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.1rem;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n}\n.cart-footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-top: 1px solid #eee;\n  background: #fafafa;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  color: #666;\n  font-size: 0.95rem;\n}\n.total-row.total[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #333;\n  margin-top: 15px;\n  padding-top: 15px;\n  border-top: 1px solid #ddd;\n}\n.btn-primary-meli[_ngcontent-%COMP%] {\n  background-color: #3483FA;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.btn-primary-meli[_ngcontent-%COMP%]:hover {\n  background-color: #2968c8;\n}\n.btn-checkout[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 15px;\n  font-size: 1.1rem;\n}\n.truck-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 10, 16, 0.94);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.truck-scene[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.road-track[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 25%;\n  width: 120vw;\n  height: 90px;\n  background: #1e1e24;\n  border-top: 4px solid #3483FA;\n  border-bottom: 4px solid #FFF159;\n  box-shadow: 0 0 30px rgba(52, 131, 250, 0.3);\n  overflow: hidden;\n}\n.road-lines[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 200%;\n  height: 8px;\n  background:\n    repeating-linear-gradient(\n      90deg,\n      #FFF159,\n      #FFF159 40px,\n      transparent 40px,\n      transparent 80px);\n  transform: translateY(-50%);\n  animation: _ngcontent-%COMP%_moveRoad 0.4s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_moveRoad {\n  0% {\n    transform: translateY(-50%) translateX(0);\n  }\n  100% {\n    transform: translateY(-50%) translateX(-80px);\n  }\n}\n.speed-lines[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.speed-lines[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(52, 131, 250, 0.8),\n      transparent);\n  animation: _ngcontent-%COMP%_speedStreak 0.6s linear infinite;\n}\n.speed-lines[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  top: 20%;\n  width: 250px;\n  animation-duration: 0.4s;\n}\n.speed-lines[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  top: 40%;\n  width: 180px;\n  animation-duration: 0.5s;\n  animation-delay: 0.1s;\n}\n.speed-lines[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  top: 60%;\n  width: 300px;\n  animation-duration: 0.3s;\n}\n.speed-lines[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  top: 75%;\n  width: 200px;\n  animation-duration: 0.45s;\n}\n@keyframes _ngcontent-%COMP%_speedStreak {\n  0% {\n    left: 100vw;\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    left: -300px;\n    opacity: 0;\n  }\n}\n.speed-truck-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 26%;\n  left: -320px;\n  display: flex;\n  align-items: flex-end;\n  animation: _ngcontent-%COMP%_truckDriveSpeed 2.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_truckDriveSpeed {\n  0% {\n    left: -350px;\n  }\n  60% {\n    left: 45vw;\n  }\n  85% {\n    left: 50vw;\n  }\n  100% {\n    left: 110vw;\n  }\n}\n.speed-truck-wrapper.arrived[_ngcontent-%COMP%] {\n  animation: none;\n  left: 45vw;\n  transform: translateX(-50%);\n}\n.smoke-particles[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: -10px;\n  z-index: 1;\n}\n.smoke[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  animation: _ngcontent-%COMP%_puff 0.4s ease-out infinite alternate;\n  opacity: 0.8;\n}\n.smoke.p1[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n}\n.smoke.p2[_ngcontent-%COMP%] {\n  animation-delay: 0.15s;\n}\n.smoke.p3[_ngcontent-%COMP%] {\n  animation-delay: 0.3s;\n}\n.fire-spark[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #FFF159;\n  animation: _ngcontent-%COMP%_sparkFlash 0.2s infinite alternate;\n}\n@keyframes _ngcontent-%COMP%_puff {\n  0% {\n    transform: scale(0.8) translateX(0);\n    opacity: 0.3;\n  }\n  100% {\n    transform: scale(1.4) translateX(-20px);\n    opacity: 0.9;\n  }\n}\n@keyframes _ngcontent-%COMP%_sparkFlash {\n  0% {\n    opacity: 0.2;\n    transform: scale(0.9);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1.3);\n  }\n}\n.truck-body-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  animation: _ngcontent-%COMP%_truckVibrate 0.12s ease-in-out infinite alternate;\n}\n@keyframes _ngcontent-%COMP%_truckVibrate {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-3px);\n  }\n}\n.truck-trailer[_ngcontent-%COMP%] {\n  width: 190px;\n  height: 100px;\n  background:\n    linear-gradient(\n      135deg,\n      #3483FA,\n      #1d65d4);\n  border-radius: 12px 4px 4px 4px;\n  border: 3px solid #ffffff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  box-shadow: 0 8px 25px rgba(52, 131, 250, 0.5);\n  position: relative;\n}\n.trailer-logo[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 900;\n  letter-spacing: -0.5px;\n  text-transform: uppercase;\n  color: #FFF159;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n}\n.speed-tag[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 800;\n  background: #00a65a;\n  padding: 3px 8px;\n  border-radius: 10px;\n  margin-top: 4px;\n}\n.truck-cab[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 75px;\n  background: #FFF159;\n  border-radius: 0 16px 8px 0;\n  border: 3px solid #ffffff;\n  border-left: none;\n  position: relative;\n}\n.truck-window[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 38px;\n  height: 28px;\n  background: #1e293b;\n  border-radius: 0 10px 2px 2px;\n  border: 2px solid #ffffff;\n}\n.headlight-beam[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 15px;\n  right: -120px;\n  width: 130px;\n  height: 40px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 241, 89, 0.85),\n      transparent);\n  clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 70%);\n  pointer-events: none;\n}\n.truck-wheel[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -16px;\n  font-size: 1.8rem;\n  animation: _ngcontent-%COMP%_wheelSpin 0.2s linear infinite;\n}\n.wheel-back[_ngcontent-%COMP%] {\n  left: 30px;\n}\n.wheel-front[_ngcontent-%COMP%] {\n  right: 20px;\n}\n@keyframes _ngcontent-%COMP%_wheelSpin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.truck-status-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  background: rgba(18, 18, 24, 0.95);\n  border: 2px solid #FFF159;\n  border-radius: 20px;\n  padding: 24px 36px;\n  text-align: center;\n  color: white;\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.8);\n  max-width: 550px;\n  width: 90%;\n  animation: _ngcontent-%COMP%_cardFadeIn 0.4s ease-out;\n}\n@keyframes _ngcontent-%COMP%_cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.status-badge-animated[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(0, 166, 90, 0.2);\n  border: 1px solid #00a65a;\n  color: #4ade80;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 800;\n  margin-bottom: 12px;\n}\n.pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #4ade80;\n  animation: _ngcontent-%COMP%_dotPulse 0.8s infinite alternate;\n}\n@keyframes _ngcontent-%COMP%_dotPulse {\n  0% {\n    opacity: 0.3;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1.3);\n  }\n}\n.order-code-glow[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.6rem;\n  color: #FFF159;\n  font-weight: 900;\n  letter-spacing: -0.5px;\n  text-shadow: 0 0 10px rgba(255, 241, 89, 0.4);\n}\n.speed-sub[_ngcontent-%COMP%] {\n  color: #a1a1aa;\n  font-size: 0.95rem;\n  margin: 8px 0 20px;\n}\n.speed-progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  width: 0%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #3483FA,\n      #FFF159,\n      #00a65a);\n  border-radius: 10px;\n  transition: width 2.5s cubic-bezier(0.25, 1, 0.5, 1);\n}\n.progress-fill.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.order-success-modal[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 32px;\n  text-align: center;\n  max-width: 480px;\n  width: 90%;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\n  animation: _ngcontent-%COMP%_modalPop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n@keyframes _ngcontent-%COMP%_modalPop {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.modal-success-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  margin-bottom: 10px;\n}\n.order-success-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 1.4rem;\n  color: #333;\n}\n.success-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n  margin-bottom: 24px;\n}\n.order-summary-box[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 24px;\n  border: 1px solid #e9ecef;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  font-size: 0.92rem;\n  color: #495057;\n  border-bottom: 1px dashed #dee2e6;\n}\n.summary-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.total-price[_ngcontent-%COMP%] {\n  color: #00a65a;\n  font-size: 1.1rem;\n}\n.delivery-badge[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 0.8rem;\n}\n.success-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.success-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.btn-secondary-meli[_ngcontent-%COMP%] {\n  background: #f1f3f5;\n  color: #495057;\n  border: 1px solid #ced4da;\n  border-radius: 6px;\n  padding: 12px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.btn-secondary-meli[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n/*# sourceMappingURL=store-shell.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoreShellComponent, { className: "StoreShellComponent", filePath: "app\\store\\store-shell.component.ts", lineNumber: 18 });
})();

// src/app/app.routes.ts
var routes = [
  // Público
  {
    path: "login",
    loadComponent: () => import("./login.component-RISSMDSM.js").then((m) => m.LoginComponent)
  },
  // ── ADMIN ────────────────────────────────────────────────────
  {
    path: "admin",
    component: ShellComponent,
    canActivate: [roleGuard(["ADMIN"])],
    children: [
      { path: "dashboard", loadComponent: () => import("./dashboard.component-VCHMKOWT.js").then((m) => m.DashboardComponent) },
      { path: "clientes", loadComponent: () => import("./clients.component-H45WWTBM.js").then((m) => m.ClientsComponent) },
      { path: "productos", loadComponent: () => import("./catalog.component-7C4ZC5Q2.js").then((m) => m.CatalogComponent) },
      { path: "promociones", loadComponent: () => import("./promotions.component-WUIHAGO5.js").then((m) => m.PromotionsComponent) },
      { path: "pedidos", loadComponent: () => import("./orders.component-PLI6SOFP.js").then((m) => m.OrdersComponent) },
      { path: "usuarios", loadComponent: () => import("./users.component-WX2G7XCX.js").then((m) => m.UsersComponent) },
      { path: "pagos", loadComponent: () => import("./payments.component-KER6OL3Q.js").then((m) => m.PaymentsComponent) },
      { path: "", pathMatch: "full", redirectTo: "dashboard" }
    ]
  },
  // ── VENDEDOR (panel propio, sin ShellComponent) ───────────────
  {
    path: "vendedor",
    canActivate: [roleGuard(["VENDEDOR", "ADMIN"])],
    children: [
      {
        path: "panel",
        loadComponent: () => import("./vendor-panel.component-KVYXY5WR.js").then((m) => m.VendorPanelComponent)
      },
      { path: "", pathMatch: "full", redirectTo: "panel" }
    ]
  },
  // ── REPARTIDOR (panel propio) ─────────────────────────────────
  {
    path: "repartidor",
    canActivate: [roleGuard(["REPARTIDOR", "ADMIN"])],
    children: [
      {
        path: "panel",
        loadComponent: () => import("./delivery-panel.component-YZKJSLC4.js").then((m) => m.DeliveryPanelComponent)
      },
      { path: "", pathMatch: "full", redirectTo: "panel" }
    ]
  },
  // ── CLIENTE (tienda) ──────────────────────────────────────────
  {
    path: "store",
    component: StoreShellComponent,
    canActivate: [roleGuard(["CLIENTE", "ADMIN"])],
    children: [
      { path: "catalog", loadComponent: () => import("./catalog-store.component-SXKFCMUL.js").then((m) => m.CatalogStoreComponent) },
      { path: "orders", loadComponent: () => import("./my-orders.component-7O6IYAFU.js").then((m) => m.MyOrdersComponent) },
      { path: "", pathMatch: "full", redirectTo: "catalog" }
    ]
  },
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "**", redirectTo: "login" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((error) => console.error(error));
//# sourceMappingURL=main.js.map
