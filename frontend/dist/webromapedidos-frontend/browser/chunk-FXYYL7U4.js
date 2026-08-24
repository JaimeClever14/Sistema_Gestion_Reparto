import {
  Router
} from "./chunk-SNUT2XZU.js";
import {
  HttpClient,
  catchError,
  inject,
  of,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-TBAMR4TH.js";

// src/app/core/auth.service.ts
var DEMO_ACCOUNTS = {
  admin: { password: "Admin123!", role: "ADMIN" },
  vendedor: { password: "Vendedor123!", role: "VENDEDOR" },
  repartidor: { password: "Repartidor123!", role: "REPARTIDOR" },
  cliente: { password: "Cliente123!", role: "CLIENTE" }
};
var DEMO_TOKEN = "DEMO_MODE_TOKEN";
var ROLE_HOME = {
  ADMIN: "/admin/dashboard",
  VENDEDOR: "/vendedor/panel",
  REPARTIDOR: "/repartidor/panel",
  CLIENTE: "/store/catalog"
};
var AuthService = class _AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  API_URL = "http://localhost:8080/api/auth";
  // ─── LOGIN ──────────────────────────────────────────────────────────────
  login(req) {
    return this.http.post(`${this.API_URL}/login`, req).pipe(tap((res) => this.store(res)), catchError((err) => {
      const demo = DEMO_ACCOUNTS[req.username.toLowerCase()];
      if (demo && demo.password === req.password) {
        const res = { token: DEMO_TOKEN, tokenType: "Bearer", username: req.username, role: demo.role };
        this.store(res);
        return of(res);
      }
      return throwError(() => err);
    }));
  }
  // ─── REGISTER ───────────────────────────────────────────────────────────
  register(req) {
    return this.http.post(`${this.API_URL}/register`, req).pipe(
      tap((res) => this.store(res))
      // NO demo fallback on register: if backend fails the user must know so data is not lost silently
    );
  }
  // ─── NAVIGATE after auth ─────────────────────────────────────────────────
  navigateHome() {
    const role = this.getRole();
    const path = ROLE_HOME[role] ?? "/login";
    this.router.navigate([path]);
  }
  // ─── LOGOUT ─────────────────────────────────────────────────────────────
  logout() {
    localStorage.removeItem("roma_token");
    localStorage.removeItem("roma_username");
    localStorage.removeItem("roma_role");
    this.router.navigate(["/login"]);
  }
  // ─── HELPERS ────────────────────────────────────────────────────────────
  isAuthenticated() {
    return !!localStorage.getItem("roma_token");
  }
  isDemoMode() {
    return localStorage.getItem("roma_token") === DEMO_TOKEN;
  }
  getToken() {
    return localStorage.getItem("roma_token");
  }
  getUsername() {
    return localStorage.getItem("roma_username") ?? "Usuario";
  }
  getRole() {
    return (localStorage.getItem("roma_role") ?? "CLIENTE").toUpperCase();
  }
  store(res) {
    if (res?.token) {
      localStorage.setItem("roma_token", res.token);
      localStorage.setItem("roma_username", res.username ?? "Usuario");
      localStorage.setItem("roma_role", (res.role ?? "CLIENTE").toUpperCase());
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-FXYYL7U4.js.map
