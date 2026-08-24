import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-TBAMR4TH.js";

// src/app/core/api.service.ts
var ApiService = class _ApiService {
  http = inject(HttpClient);
  baseUrl = "http://localhost:8080/api";
  get(path) {
    return this.http.get(`${this.baseUrl}${path}`);
  }
  post(path, body) {
    return this.http.post(`${this.baseUrl}${path}`, body);
  }
  put(path, body) {
    return this.http.put(`${this.baseUrl}${path}`, body);
  }
  delete(path) {
    return this.http.delete(`${this.baseUrl}${path}`);
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};

export {
  ApiService
};
//# sourceMappingURL=chunk-YZNMIQXE.js.map
