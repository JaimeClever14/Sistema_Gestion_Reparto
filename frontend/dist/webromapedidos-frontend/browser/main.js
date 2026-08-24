import {
  CartService
} from "./chunk-623MSKIV.js";
import {
  AuthService
} from "./chunk-FXYYL7U4.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withComponentInputBinding
} from "./chunk-SNUT2XZU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-THAPR2DQ.js";
import {
  ApiService
} from "./chunk-YZNMIQXE.js";
import {
  CommonModule,
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
} from "./chunk-TBAMR4TH.js";

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
function ShellComponent_strong_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "Base de Datos Conectada");
    \u0275\u0275elementEnd();
  }
}
function ShellComponent_strong_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "Modo Demostraci\xF3n Activo");
    \u0275\u0275elementEnd();
  }
}
function ShellComponent_div_26_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 53);
    \u0275\u0275listener("click", function ShellComponent_div_26_a_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r3.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function ShellComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51);
    \u0275\u0275template(4, ShellComponent_div_26_a_4_Template, 6, 3, "a", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", section_r4.items);
  }
}
var ShellComponent = class _ShellComponent {
  authService = inject(AuthService);
  router = inject(Router);
  isMobileMenuOpen = false;
  allNavSections = [
    {
      title: "OPERACIONES",
      items: [
        { label: "Dashboard", route: "/admin/dashboard", icon: "\u{1F4CA}" },
        { label: "Pedidos & Ventas", route: "/admin/pedidos", icon: "\u{1F6CD}\uFE0F" },
        { label: "Cat\xE1logo de Licores", route: "/admin/productos", icon: "\u{1F37E}" },
        { label: "Promociones y Ofertas", route: "/admin/promociones", icon: "\u2728" }
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
  get isDemoMode() {
    return this.authService.isDemoMode();
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  logout() {
    this.authService.logout();
  }
  static \u0275fac = function ShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 71, vars: 16, consts: [[1, "admin-theme"], [1, "sidebar-backdrop", 3, "click"], [1, "shell"], [1, "sidebar", "glass"], [1, "sidebar-top"], [1, "brand"], [1, "brand-mark-gold"], [1, "brand-info"], [1, "brand-name"], [1, "gold-text"], [1, "brand-sub"], ["type", "button", 1, "mobile-close-btn", 3, "click"], [1, "system-status-pill"], [1, "status-indicator-dot"], [1, "status-text-wrap"], [4, "ngIf"], [1, "nav-container"], ["class", "nav-section", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], [1, "user-mini-card"], [1, "user-avatar-gold"], [1, "user-mini-info"], [1, "user-name"], [1, "user-role-badge"], ["type", "button", 1, "logout-btn", 3, "click"], ["viewBox", "0 0 24 24", "width", "17", "height", "17", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "content"], [1, "topbar", "glass"], [1, "topbar-left"], ["type", "button", "aria-label", "Abrir men\xFA", 1, "hamburger-btn", 3, "click"], ["viewBox", "0 0 24 24", "width", "22", "height", "22", "stroke", "currentColor", "stroke-width", "2.5", "fill", "none"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], [1, "topbar-titles"], [1, "topbar-eyebrow"], [1, "topbar-heading"], [1, "topbar-right"], [1, "topbar-chip", "hide-mobile"], [1, "chip-dot"], [1, "profile-pill"], [1, "avatar-gold"], [1, "profile-details", "hide-mobile"], [1, "profile-name"], [1, "profile-role"], [1, "page-container", "glass"], [1, "nav-section"], [1, "section-heading"], [1, "nav-group"], ["routerLinkActive", "active", "class", "nav-item", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "nav-item", 3, "click", "routerLink"], [1, "nav-icon-box"], [1, "nav-label"], [1, "nav-indicator"]], template: function ShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function ShellComponent_Template_div_click_1_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "aside", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "span");
      \u0275\u0275text(8, "R");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "h1", 8);
      \u0275\u0275text(11, "Web Roma ");
      \u0275\u0275elementStart(12, "span", 9);
      \u0275\u0275text(13, "Pedidos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p", 10);
      \u0275\u0275text(15, "Sistema Administrativo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 11);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_16_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(17, "\u2715");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 12);
      \u0275\u0275element(19, "span", 13);
      \u0275\u0275elementStart(20, "div", 14);
      \u0275\u0275template(21, ShellComponent_strong_21_Template, 2, 0, "strong", 15)(22, ShellComponent_strong_22_Template, 2, 0, "strong", 15);
      \u0275\u0275elementStart(23, "small");
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "nav", 16);
      \u0275\u0275template(26, ShellComponent_div_26_Template, 5, 2, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 18)(28, "div", 19)(29, "div", 20);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "strong", 22);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 23);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "button", 24);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_36_listener() {
        return ctx.logout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(37, "svg", 25);
      \u0275\u0275element(38, "path", 26)(39, "polyline", 27)(40, "line", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "Cerrar Sesi\xF3n");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "main", 29)(44, "header", 30)(45, "div", 31)(46, "button", 32);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_46_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(47, "svg", 33);
      \u0275\u0275element(48, "line", 34)(49, "line", 35)(50, "line", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "div", 37)(52, "span", 38);
      \u0275\u0275text(53, "M\xD3DULO DE GESTI\xD3N EMPRESARIAL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "h2", 39);
      \u0275\u0275text(55, "Panel de Control & Ventas");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "div", 40)(57, "div", 41);
      \u0275\u0275element(58, "span", 42);
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "Sistema Operativo 24/7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 43)(62, "div", 44);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 45)(65, "strong", 46);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "span", 47);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(69, "section", 48);
      \u0275\u0275element(70, "router-outlet");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.isMobileMenuOpen);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("mobile-open", ctx.isMobileMenuOpen);
      \u0275\u0275advance(15);
      \u0275\u0275classProp("demo", ctx.isDemoMode);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.isDemoMode);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isDemoMode);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isDemoMode ? "Datos en memoria local" : "SQL Server \u2022 RomaDB");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.navSections);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.authService.getUsername().slice(0, 1).toUpperCase(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.authService.getUsername());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.authService.getRole());
      \u0275\u0275advance(28);
      \u0275\u0275textInterpolate1(" ", ctx.authService.getUsername().slice(0, 1).toUpperCase(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.authService.getUsername());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.authService.getRole());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, RouterLinkActive, RouterOutlet], styles: ["\n\n.admin-theme[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  position: relative;\n  overflow-x: hidden;\n}\n.shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 290px 1fr;\n  gap: 20px;\n  padding: 20px;\n  box-sizing: border-box;\n}\n.sidebar-backdrop[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 998;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s ease;\n}\n.sidebar-backdrop.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.sidebar[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  padding: 24px 18px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 24px;\n  height: calc(100vh - 40px);\n  position: sticky;\n  top: 20px;\n  box-sizing: border-box;\n  overflow-y: auto;\n  border: 1px solid rgba(250, 204, 21, 0.18);\n  background: rgba(14, 14, 18, 0.92);\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(250, 204, 21, 0.05);\n  z-index: 999;\n}\n.sidebar-top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  position: relative;\n}\n.brand-mark-gold[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #facc15 0%,\n      #eab308 50%,\n      #ca8a04 100%);\n  color: #09090b;\n  font-weight: 900;\n  font-size: 1.4rem;\n  box-shadow: 0 8px 24px rgba(250, 204, 21, 0.4);\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n}\n.brand-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.brand-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n}\n.gold-text[_ngcontent-%COMP%] {\n  color: #facc15;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  margin: 2px 0 0 0;\n  color: #71717a;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n}\n.mobile-close-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  color: #a1a1aa;\n  font-size: 1.3rem;\n  cursor: pointer;\n  margin-left: auto;\n  padding: 4px;\n}\n.system-status-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: 12px;\n  background: rgba(34, 197, 94, 0.08);\n  border: 1px solid rgba(34, 197, 94, 0.25);\n  color: #4ade80;\n  font-size: 0.78rem;\n}\n.system-status-pill.demo[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, 0.08);\n  border-color: rgba(250, 204, 21, 0.28);\n  color: #facc15;\n}\n.status-indicator-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: currentColor;\n  box-shadow: 0 0 10px currentColor;\n  flex-shrink: 0;\n}\n.status-text-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.status-text-wrap[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.status-text-wrap[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #a1a1aa;\n}\n.nav-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  flex: 1;\n}\n.nav-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  color: #71717a;\n  letter-spacing: 1px;\n  padding: 0 12px;\n  margin-bottom: 2px;\n}\n.nav-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 14px;\n  border-radius: 12px;\n  color: #a1a1aa;\n  font-size: 0.88rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);\n  border: 1px solid transparent;\n}\n.nav-icon-box[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nav-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.08);\n  color: #ffffff;\n  border-color: rgba(250, 204, 21, 0.15);\n  transform: translateX(3px);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(250, 204, 21, 0.2) 0%,\n      rgba(234, 179, 8, 0.08) 100%);\n  border: 1px solid rgba(250, 204, 21, 0.4);\n  color: #facc15;\n  font-weight: 700;\n  box-shadow: 0 4px 20px rgba(250, 204, 21, 0.15);\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #facc15;\n  box-shadow: 0 0 10px #facc15;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n}\n.user-mini-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.user-avatar-gold[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #facc15,\n      #eab308);\n  color: #09090b;\n  font-weight: 800;\n  display: grid;\n  place-items: center;\n  font-size: 0.95rem;\n  box-shadow: 0 4px 12px rgba(250, 204, 21, 0.25);\n  flex-shrink: 0;\n}\n.user-mini-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #ffffff;\n  font-weight: 700;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.user-role-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #facc15;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 10px 14px;\n  border-radius: 12px;\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: #fca5a5;\n  font-weight: 600;\n  font-size: 0.84rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.2);\n  border-color: rgba(239, 68, 68, 0.4);\n  color: #ffffff;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  padding: 18px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid rgba(250, 204, 21, 0.16);\n  background: rgba(14, 14, 18, 0.88);\n}\n.topbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.hamburger-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: rgba(250, 204, 21, 0.12);\n  border: 1px solid rgba(250, 204, 21, 0.3);\n  color: #facc15;\n  border-radius: 10px;\n  padding: 8px;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.hamburger-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.25);\n  color: #ffffff;\n}\n.topbar-titles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.topbar-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  color: #facc15;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n}\n.topbar-heading[_ngcontent-%COMP%] {\n  margin: 2px 0 0 0;\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.topbar-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 12px;\n  border-radius: 100px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #d4d4d8;\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n.chip-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #22c55e;\n  box-shadow: 0 0 8px #22c55e;\n}\n.profile-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 6px 14px 6px 6px;\n  background: rgba(20, 20, 26, 0.9);\n  border: 1px solid rgba(250, 204, 21, 0.25);\n  border-radius: 100px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);\n}\n.avatar-gold[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #facc15 0%,\n      #eab308 100%);\n  color: #09090b;\n  font-weight: 900;\n  display: grid;\n  place-items: center;\n  font-size: 0.95rem;\n  box-shadow: 0 2px 10px rgba(250, 204, 21, 0.35);\n  flex-shrink: 0;\n}\n.profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #ffffff;\n  line-height: 1.2;\n}\n.profile-role[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #facc15;\n  text-transform: uppercase;\n}\n.page-container[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  padding: 26px;\n  min-height: calc(100vh - 140px);\n  background: rgba(14, 14, 18, 0.88);\n  border: 1px solid rgba(250, 204, 21, 0.14);\n}\n@media (max-width: 1024px) {\n  .shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 14px;\n    gap: 14px;\n  }\n  .sidebar-backdrop[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 280px;\n    height: 100vh;\n    border-radius: 0;\n    transform: translateX(-100%);\n    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n    box-shadow: 10px 0 40px rgba(0, 0, 0, 0.8);\n  }\n  .sidebar.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .mobile-close-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .hamburger-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    padding: 14px 18px;\n  }\n  .topbar-heading[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n  .page-container[_ngcontent-%COMP%] {\n    padding: 18px 14px;\n  }\n}\n@media (max-width: 640px) {\n  .hide-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .topbar-eyebrow[_ngcontent-%COMP%] {\n    font-size: 0.62rem;\n  }\n  .topbar-heading[_ngcontent-%COMP%] {\n    font-size: 1.05rem;\n  }\n  .profile-pill[_ngcontent-%COMP%] {\n    padding: 4px;\n    background: transparent;\n    border: none;\n    box-shadow: none;\n  }\n}\n/*# sourceMappingURL=shell.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "app\\shell\\shell.component.ts", lineNumber: 25 });
})();

// src/app/store/store-shell.component.ts
var _c0 = (a0) => ({ category: a0 });
function StoreShellComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1, "\u26A1 Demo");
    \u0275\u0275elementEnd();
  }
}
function StoreShellComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function StoreShellComponent_div_27_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "a", 48);
    \u0275\u0275text(2, "\u{1F6D2} Mis compras");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 48);
    \u0275\u0275text(4, "\u2764\uFE0F Favoritos");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "hr", 49);
    \u0275\u0275elementStart(6, "button", 50);
    \u0275\u0275listener("click", function StoreShellComponent_div_27_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(7, "\u{1F6AA} Cerrar sesi\xF3n");
    \u0275\u0275elementEnd()();
  }
}
function StoreShellComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cartService.totalItems());
  }
}
function StoreShellComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function StoreShellComponent_div_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCartPanel());
    });
    \u0275\u0275elementEnd();
  }
}
function StoreShellComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 54);
    \u0275\u0275text(2, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Tu carrito est\xE1 vac\xEDo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 55);
    \u0275\u0275listener("click", function StoreShellComponent_div_42_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCartPanel());
    });
    \u0275\u0275text(6, "\xA1Agrega productos!");
    \u0275\u0275elementEnd()();
  }
}
function StoreShellComponent_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 60)(4, "p", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 62);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 63)(10, "button", 64);
    \u0275\u0275listener("click", function StoreShellComponent_div_43_div_1_Template_button_click_10_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cartService.updateQuantity(item_r6.producto.idProducto, item_r6.cantidad - 1));
    });
    \u0275\u0275text(11, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 64);
    \u0275\u0275listener("click", function StoreShellComponent_div_43_div_1_Template_button_click_14_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cartService.updateQuantity(item_r6.producto.idProducto, item_r6.cantidad + 1));
    });
    \u0275\u0275text(15, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 65)(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 66);
    \u0275\u0275listener("click", function StoreShellComponent_div_43_div_1_Template_button_click_20_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cartService.removeFromCart(item_r6.producto.idProducto));
    });
    \u0275\u0275text(21, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r6.producto.nombre.slice(0, 1), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(8, 5, item_r6.precioUnitario, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r6.cantidad);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(19, 8, item_r6.subtotal, "1.2-2"), "");
  }
}
function StoreShellComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, StoreShellComponent_div_43_div_1_Template, 22, 11, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cartService.cartItems());
  }
}
function StoreShellComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "div", 69)(3, "span");
    \u0275\u0275text(4, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 69)(9, "span");
    \u0275\u0275text(10, "IGV (18%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 70)(15, "span");
    \u0275\u0275text(16, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 71);
    \u0275\u0275listener("click", function StoreShellComponent_div_44_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkout());
    });
    \u0275\u0275text(21, "Finalizar Compra");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(7, 3, ctx_r1.cartService.subtotal(), "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(13, 6, ctx_r1.cartService.igv(), "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(19, 9, ctx_r1.cartService.totalMonto(), "1.2-2"), "");
  }
}
function StoreShellComponent_a_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(2, _c0, cat_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r8, " ");
  }
}
function StoreShellComponent_a_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r9);
  }
}
var StoreShellComponent = class _StoreShellComponent {
  authService = inject(AuthService);
  router = inject(Router);
  cartService = inject(CartService);
  api = inject(ApiService);
  searchTerm = "";
  showUserMenu = false;
  showCartPanel = false;
  processingCheckout = false;
  orderSuccessMessage = "";
  categories = [
    "Licores & Destilados",
    "Cervezas",
    "Vinos",
    "Bebidas Sin Alcohol",
    "Ofertas"
  ];
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
    const nuevoPedido = {
      idPedido: Date.now(),
      codigoPedido: orderCode,
      idCliente: 1,
      cliente: {
        idCliente: 1,
        nombresRaz\u00F3nSocial: currentUsername,
        numeroDocumento: "72345678"
      },
      montoSubtotal: Number(subtotal.toFixed(2)),
      montoIgv: Number(igv.toFixed(2)),
      montoTotal: Number(total.toFixed(2)),
      direccionEntrega: "Entrega a Domicilio - Roma Express",
      observaciones: "Pedido generado desde la tienda online",
      fechaPedido: (/* @__PURE__ */ new Date()).toISOString(),
      estado: "A",
      detalles: this.cartService.cartItems().map((item) => ({
        idProducto: item.producto.idProducto,
        cantidad: item.cantidad,
        precioUnitario: item.precioUnitario,
        subtotal: item.subtotal,
        producto: item.producto
      }))
    };
    this.saveToSharedOrders(nuevoPedido);
    this.api.post("/pedidos", nuevoPedido).subscribe({
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
  finishCheckout(orderCode) {
    this.processingCheckout = false;
    this.showCartPanel = false;
    this.cartService.clearCart();
    this.orderSuccessMessage = `\xA1Pedido #${orderCode} generado con \xE9xito! Puedes ver el seguimiento en tu panel.`;
    alert(`\u{1F389} \xA1Pedido generado con \xE9xito!
C\xF3digo de Pedido: ${orderCode}
Total: S/ ${this.cartService.totalMonto().toFixed(2)}
El administrador ya puede verlo en el panel de pedidos.`);
  }
  saveToSharedOrders(order) {
    try {
      const existing = localStorage.getItem("roma_shared_orders");
      let orders = existing ? JSON.parse(existing) : [];
      orders = orders.filter((o) => o.codigoPedido !== order.codigoPedido && o.idPedido !== order.idPedido);
      orders.unshift(order);
      localStorage.setItem("roma_shared_orders", JSON.stringify(orders));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoreShellComponent, selectors: [["app-store-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 82, vars: 14, consts: [[1, "store-shell"], [1, "meli-header"], [1, "header-inner"], ["routerLink", "/store/catalog", 1, "logo"], [1, "logo-mark"], [1, "logo-text"], [1, "search-wrapper"], [1, "search-form", 3, "ngSubmit"], ["type", "text", "name", "search", "placeholder", "Buscar licores, cervezas, vinos y m\xE1s...", "id", "store-search-input", "autocomplete", "off", 1, "search-input", 3, "ngModelChange", "ngModel"], ["type", "submit", "id", "store-search-btn", 1, "search-btn"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], [1, "header-actions"], ["class", "demo-tag", 4, "ngIf"], [1, "user-area", 3, "click"], [1, "user-avatar"], [1, "user-details"], [1, "user-greeting"], [1, "user-account"], ["class", "user-dropdown", 3, "click", 4, "ngIf"], ["type", "button", 1, "cart-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], ["class", "cart-badge", 4, "ngIf"], ["class", "cart-overlay", 3, "click", 4, "ngIf"], [1, "cart-panel"], [1, "cart-header"], [1, "close-cart-btn", 3, "click"], [1, "cart-body"], ["class", "empty-cart", 4, "ngIf"], ["class", "cart-items", 4, "ngIf"], ["class", "cart-footer", 4, "ngIf"], [1, "meli-nav"], [1, "nav-inner"], ["routerLink", "/store/catalog", "class", "nav-link", 3, "queryParams", 4, "ngFor", "ngForOf"], [1, "store-main"], [1, "meli-footer"], [1, "footer-inner"], [1, "footer-col"], ["routerLink", "/store/catalog"], ["routerLink", "/store/catalog", 4, "ngFor", "ngForOf"], ["href", "#"], [1, "footer-bottom"], [1, "demo-tag"], [1, "user-dropdown", 3, "click"], ["routerLink", "/store/catalog", 1, "dropdown-item"], [1, "dropdown-divider"], ["type", "button", 1, "dropdown-item", "logout", 3, "click"], [1, "cart-badge"], [1, "cart-overlay", 3, "click"], [1, "empty-cart"], [1, "empty-icon"], [1, "btn-primary-meli", 3, "click"], [1, "cart-items"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [1, "cart-item"], [1, "item-img-placeholder"], [1, "item-info"], [1, "item-title"], [1, "item-price"], [1, "item-qty"], [3, "click"], [1, "item-subtotal"], [1, "remove-btn", 3, "click"], [1, "cart-footer"], [1, "cart-totals"], [1, "total-row"], [1, "total-row", "total"], [1, "btn-primary-meli", "btn-checkout", 3, "click"], ["routerLink", "/store/catalog", 1, "nav-link", 3, "queryParams"]], template: function StoreShellComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(19, "div", 15);
      \u0275\u0275listener("click", function StoreShellComponent_Template_div_click_19_listener() {
        return ctx.toggleUserMenu();
      });
      \u0275\u0275elementStart(20, "div", 16);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 17)(23, "span", 18);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 19);
      \u0275\u0275text(26, "Mi cuenta \u25BE");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(27, StoreShellComponent_div_27_Template, 8, 0, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 21);
      \u0275\u0275listener("click", function StoreShellComponent_Template_button_click_28_listener() {
        return ctx.toggleCartPanel();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 22);
      \u0275\u0275element(30, "circle", 23)(31, "circle", 24)(32, "path", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, StoreShellComponent_span_33_Template, 2, 1, "span", 26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(34, StoreShellComponent_div_34_Template, 1, 0, "div", 27);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "div", 28)(36, "div", 29)(37, "h2");
      \u0275\u0275text(38, "Mi Carrito");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 30);
      \u0275\u0275listener("click", function StoreShellComponent_Template_button_click_39_listener() {
        return ctx.toggleCartPanel();
      });
      \u0275\u0275text(40, "\u2715");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 31);
      \u0275\u0275template(42, StoreShellComponent_div_42_Template, 7, 0, "div", 32)(43, StoreShellComponent_div_43_Template, 2, 1, "div", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275template(44, StoreShellComponent_div_44_Template, 22, 12, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "nav", 35)(46, "div", 36);
      \u0275\u0275template(47, StoreShellComponent_a_47_Template, 2, 4, "a", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "main", 38);
      \u0275\u0275element(49, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "footer", 39)(51, "div", 40)(52, "div", 41)(53, "h4");
      \u0275\u0275text(54, "RomaStore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p");
      \u0275\u0275text(56, "Tu licorer\xEDa online de confianza. Los mejores licores, cervezas y vinos al mejor precio.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 41)(58, "h4");
      \u0275\u0275text(59, "Mi cuenta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "a", 42);
      \u0275\u0275text(61, "Mis compras");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "a", 42);
      \u0275\u0275text(63, "Favoritos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "a", 42);
      \u0275\u0275text(65, "Historial");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 41)(67, "h4");
      \u0275\u0275text(68, "Categor\xEDas");
      \u0275\u0275elementEnd();
      \u0275\u0275template(69, StoreShellComponent_a_69_Template, 2, 1, "a", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 41)(71, "h4");
      \u0275\u0275text(72, "Atenci\xF3n al cliente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "a", 44);
      \u0275\u0275text(74, "Centro de ayuda");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "a", 44);
      \u0275\u0275text(76, "T\xE9rminos y condiciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "a", 44);
      \u0275\u0275text(78, "Contacto");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "div", 45)(80, "p");
      \u0275\u0275text(81, "\xA9 2026 RomaStore \u2014 Todos los derechos reservados. Powered by RomaPedidos.");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.isDemoMode);
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
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(22);
      \u0275\u0275property("ngForOf", ctx.categories);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterOutlet, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n.store-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg);\n}\n.meli-header[_ngcontent-%COMP%] {\n  background: #FFF159;\n  padding: 0;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.header-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 10px 16px;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: #333;\n  flex-shrink: 0;\n}\n.logo-mark[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #3483FA;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  font-weight: 800;\n  font-size: 1.2rem;\n  color: white;\n  box-shadow: 0 2px 8px rgba(52, 131, 250, 0.35);\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 400;\n  color: #333;\n  letter-spacing: -0.02em;\n}\n.logo-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 640px;\n}\n.search-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #FFFFFF;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.search-form[_ngcontent-%COMP%]:focus-within {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  padding: 10px 16px;\n  font-size: 0.95rem;\n  color: #333;\n  background: transparent;\n  outline: none;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #AAAAAA;\n}\n.search-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  border-left: 1px solid #E6E6E6;\n  padding: 10px 14px;\n  cursor: pointer;\n  color: #999;\n  display: flex;\n  align-items: center;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.search-btn[_ngcontent-%COMP%]:hover {\n  background: #F5F5F5;\n  color: #3483FA;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-shrink: 0;\n}\n.demo-tag[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 4px;\n  background: rgba(52, 131, 250, 0.12);\n  color: #3483FA;\n  font-size: 0.75rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.user-area[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  position: relative;\n  padding: 6px 10px;\n  border-radius: 6px;\n  transition: background 0.15s ease;\n}\n.user-area[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #3483FA;\n  color: white;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  font-size: 0.85rem;\n}\n.user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.user-greeting[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #666;\n  line-height: 1.2;\n}\n.user-account[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #333;\n  line-height: 1.3;\n}\n.user-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  right: 0;\n  background: white;\n  border-radius: 6px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  min-width: 200px;\n  padding: 8px 0;\n  z-index: 200;\n  animation: fadeInUp 0.15s ease;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 16px;\n  color: #333;\n  font-size: 0.9rem;\n  text-decoration: none;\n  transition: background 0.12s ease;\n  cursor: pointer;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #F5F5F5;\n}\n.dropdown-item.logout[_ngcontent-%COMP%] {\n  color: #F23D4F;\n}\n.dropdown-divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #EBEBEB;\n  margin: 4px 0;\n}\n.meli-nav[_ngcontent-%COMP%] {\n  background: #3483FA;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.nav-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  overflow-x: auto;\n}\n.nav-link[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 0.85rem;\n  font-weight: 500;\n  text-decoration: none;\n  white-space: nowrap;\n  border-radius: 4px;\n  transition: all 0.15s ease;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: rgba(255, 255, 255, 0.12);\n}\n.store-main[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  padding: 24px 16px;\n}\n.meli-footer[_ngcontent-%COMP%] {\n  background: white;\n  border-top: 1px solid #E6E6E6;\n  margin-top: 40px;\n}\n.footer-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 40px 16px 32px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 32px;\n}\n.footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #333;\n}\n.footer-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #999;\n  line-height: 1.5;\n  margin: 0;\n}\n.footer-col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: #666;\n  padding: 3px 0;\n  text-decoration: none;\n  transition: color 0.15s ease;\n}\n.footer-col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3483FA;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid #EBEBEB;\n  text-align: center;\n  padding: 16px;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  color: #AAAAAA;\n}\n@media (max-width: 768px) {\n  .header-inner[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n  .search-wrapper[_ngcontent-%COMP%] {\n    order: 3;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n  .user-details[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-inner[_ngcontent-%COMP%] {\n    gap: 0;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 10px 10px;\n  }\n  .footer-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .logo-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .footer-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cart-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #333;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n}\n.cart-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.cart-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: -2px;\n  background-color: #3483FA;\n  color: white;\n  font-size: 0.7rem;\n  font-weight: bold;\n  padding: 2px 6px;\n  border-radius: 10px;\n  border: 2px solid var(--meli-yellow);\n}\n.cart-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  backdrop-filter: blur(2px);\n}\n.cart-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: -400px;\n  width: 100%;\n  max-width: 400px;\n  height: 100vh;\n  background: white;\n  z-index: 1001;\n  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);\n  transition: right 0.3s ease-in-out;\n  display: flex;\n  flex-direction: column;\n}\n.cart-panel.open[_ngcontent-%COMP%] {\n  right: 0;\n}\n.cart-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.cart-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  color: #333;\n}\n.close-cart-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  color: #999;\n}\n.close-cart-btn[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.cart-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n.empty-cart[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #666;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  display: block;\n  margin-bottom: 10px;\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #eee;\n}\n.item-img-placeholder[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: #f5f5f5;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #ccc;\n  flex-shrink: 0;\n}\n.item-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.item-title[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-size: 0.95rem;\n  color: #333;\n}\n.item-price[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-weight: 500;\n  color: #333;\n}\n.item-qty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  width: fit-content;\n}\n.item-qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 2px 8px;\n  cursor: pointer;\n  color: #3483FA;\n  font-weight: bold;\n}\n.item-subtotal[_ngcontent-%COMP%] {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.item-subtotal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: #333;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1.1rem;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n}\n.remove-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.cart-footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-top: 1px solid #eee;\n  background: #fafafa;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  color: #666;\n  font-size: 0.95rem;\n}\n.total-row.total[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #333;\n  margin-top: 15px;\n  padding-top: 15px;\n  border-top: 1px solid #ddd;\n}\n.btn-checkout[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 15px;\n  padding: 12px;\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=store-shell.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoreShellComponent, { className: "StoreShellComponent", filePath: "app\\store\\store-shell.component.ts", lineNumber: 17 });
})();

// src/app/app.routes.ts
var routes = [
  // Público
  {
    path: "login",
    loadComponent: () => import("./login.component-2M72V5YA.js").then((m) => m.LoginComponent)
  },
  // ── ADMIN ────────────────────────────────────────────────────
  {
    path: "admin",
    component: ShellComponent,
    canActivate: [roleGuard(["ADMIN"])],
    children: [
      { path: "dashboard", loadComponent: () => import("./dashboard.component-MGWLFDHE.js").then((m) => m.DashboardComponent) },
      { path: "clientes", loadComponent: () => import("./clients.component-SMXTXLHZ.js").then((m) => m.ClientsComponent) },
      { path: "productos", loadComponent: () => import("./catalog.component-L55IZY4N.js").then((m) => m.CatalogComponent) },
      { path: "promociones", loadComponent: () => import("./promotions.component-GX7IKNXK.js").then((m) => m.PromotionsComponent) },
      { path: "pedidos", loadComponent: () => import("./orders.component-DRLSJWBQ.js").then((m) => m.OrdersComponent) },
      { path: "usuarios", loadComponent: () => import("./users.component-6CDBTSYP.js").then((m) => m.UsersComponent) },
      { path: "pagos", loadComponent: () => import("./payments.component-EF44NOWW.js").then((m) => m.PaymentsComponent) },
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
        loadComponent: () => import("./vendor-panel.component-MYKYMV3R.js").then((m) => m.VendorPanelComponent)
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
        loadComponent: () => import("./delivery-panel.component-BHTNRL3X.js").then((m) => m.DeliveryPanelComponent)
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
      { path: "catalog", loadComponent: () => import("./catalog-store.component-4DDYQC5O.js").then((m) => m.CatalogStoreComponent) },
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
