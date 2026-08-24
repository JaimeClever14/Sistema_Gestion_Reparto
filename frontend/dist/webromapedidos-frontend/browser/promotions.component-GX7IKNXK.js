import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-THAPR2DQ.js";
import {
  ApiService
} from "./chunk-YZNMIQXE.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TBAMR4TH.js";

// src/app/features/promotions/promotions.component.ts
function PromotionsComponent_section_16_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 14)(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19)(11, "div")(12, "span", 20);
    \u0275\u0275text(13, "Descuento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong", 21);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 22)(17, "span")(18, "strong");
    \u0275\u0275text(19, "Inicio:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span")(23, "strong");
    \u0275\u0275text(24, "Fin:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 23)(28, "button", 24);
    \u0275\u0275listener("click", function PromotionsComponent_section_16_article_1_Template_button_click_28_listener() {
      const prom_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEditModal(prom_r2));
    });
    \u0275\u0275text(29, " \u270F\uFE0F Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 25);
    \u0275\u0275listener("click", function PromotionsComponent_section_16_article_1_Template_button_click_30_listener() {
      const prom_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deletePromocion(prom_r2));
    });
    \u0275\u0275text(31, " \u{1F5D1}\uFE0F Eliminar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const prom_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prom_r2.tipoDescuento);
    \u0275\u0275advance();
    \u0275\u0275classProp("low", prom_r2.estado !== "A");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", prom_r2.estado === "A" ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prom_r2.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prom_r2.descripcion || "Sin descripci\xF3n adicional");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", prom_r2.tipoDescuento === "PORCENTAJE" ? prom_r2.valorDescuento + "%" : "S/ " + prom_r2.valorDescuento.toFixed(2), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 9, prom_r2.fechaInicio, "shortDate"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 12, prom_r2.fechaFin, "shortDate"), "");
  }
}
function PromotionsComponent_section_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12);
    \u0275\u0275template(1, PromotionsComponent_section_16_article_1_Template, 32, 15, "article", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.promocionesFiltradas);
  }
}
function PromotionsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "p");
    \u0275\u0275text(2, "No se encontraron promociones.");
    \u0275\u0275elementEnd()();
  }
}
function PromotionsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275listener("click", function PromotionsComponent_div_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 31);
    \u0275\u0275listener("ngSubmit", function PromotionsComponent_div_18_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.savePromocion());
    });
    \u0275\u0275elementStart(8, "label");
    \u0275\u0275text(9, " Nombre de la Promoci\xF3n * ");
    \u0275\u0275element(10, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "label");
    \u0275\u0275text(12, " Descripci\xF3n ");
    \u0275\u0275element(13, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 34)(15, "label");
    \u0275\u0275text(16, " Tipo de Descuento * ");
    \u0275\u0275elementStart(17, "select", 35)(18, "option", 36);
    \u0275\u0275text(19, "Porcentaje (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 37);
    \u0275\u0275text(21, "Monto Fijo (S/)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "label");
    \u0275\u0275text(23, " Valor del Descuento * ");
    \u0275\u0275element(24, "input", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 34)(26, "label");
    \u0275\u0275text(27, " Fecha Inicio * ");
    \u0275\u0275element(28, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "label");
    \u0275\u0275text(30, " Fecha Fin * ");
    \u0275\u0275element(31, "input", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 41)(33, "button", 42);
    \u0275\u0275listener("click", function PromotionsComponent_div_18_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(34, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 43);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.editingPromocion ? "\u270F\uFE0F Editar Promoci\xF3n" : "\u2728 Nueva Promoci\xF3n");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(28);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? "Guardando..." : ctx_r2.editingPromocion ? "Actualizar" : "Guardar", " ");
  }
}
var PromotionsComponent = class _PromotionsComponent {
  api = inject(ApiService);
  fb = inject(FormBuilder);
  loading = true;
  promociones = [];
  searchTerm = "";
  showModal = false;
  editingPromocion = null;
  saving = false;
  form = this.fb.nonNullable.group({
    nombre: ["", [Validators.required]],
    descripcion: [""],
    tipoDescuento: ["PORCENTAJE", [Validators.required]],
    valorDescuento: [0, [Validators.required, Validators.min(0.01)]],
    fechaInicio: ["", [Validators.required]],
    fechaFin: ["", [Validators.required]]
  });
  ngOnInit() {
    this.cargarDatos();
  }
  cargarDatos() {
    this.loading = true;
    this.api.get("/promociones").subscribe({
      next: (proms) => {
        this.promociones = proms || [];
        this.loading = false;
      },
      error: () => {
        this.cargarDemo();
        this.loading = false;
      }
    });
  }
  get promocionesFiltradas() {
    if (!this.searchTerm)
      return this.promociones;
    const term = this.searchTerm.toLowerCase();
    return this.promociones.filter((p) => p.nombre.toLowerCase().includes(term) || p.descripcion && p.descripcion.toLowerCase().includes(term));
  }
  openNewModal() {
    this.editingPromocion = null;
    const today = /* @__PURE__ */ new Date();
    const nextWeek = /* @__PURE__ */ new Date();
    nextWeek.setDate(today.getDate() + 7);
    this.form.reset({
      nombre: "",
      descripcion: "",
      tipoDescuento: "PORCENTAJE",
      valorDescuento: 10,
      fechaInicio: today.toISOString().slice(0, 16),
      fechaFin: nextWeek.toISOString().slice(0, 16)
    });
    this.showModal = true;
  }
  openEditModal(prom) {
    this.editingPromocion = prom;
    this.form.patchValue({
      nombre: prom.nombre,
      descripcion: prom.descripcion || "",
      tipoDescuento: prom.tipoDescuento,
      valorDescuento: prom.valorDescuento,
      fechaInicio: prom.fechaInicio ? new Date(prom.fechaInicio).toISOString().slice(0, 16) : "",
      fechaFin: prom.fechaFin ? new Date(prom.fechaFin).toISOString().slice(0, 16) : ""
    });
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.editingPromocion = null;
  }
  savePromocion() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    const formVal = this.form.getRawValue();
    const payload = __spreadProps(__spreadValues({}, formVal), {
      fechaInicio: new Date(formVal.fechaInicio).toISOString(),
      fechaFin: new Date(formVal.fechaFin).toISOString(),
      aplicaA: "GENERAL",
      estado: "A"
    });
    if (this.editingPromocion && this.editingPromocion.idPromocion) {
      const updated = __spreadValues(__spreadValues({}, this.editingPromocion), payload);
      this.api.put(`/promociones/${this.editingPromocion.idPromocion}`, updated).subscribe({
        next: (res) => {
          const idx = this.promociones.findIndex((p) => p.idPromocion === res.idPromocion);
          if (idx !== -1)
            this.promociones[idx] = res;
          this.closeModal();
        },
        error: () => {
          const idx = this.promociones.findIndex((p) => p.idPromocion === this.editingPromocion.idPromocion);
          if (idx !== -1)
            this.promociones[idx] = __spreadValues({}, updated);
          this.closeModal();
        },
        complete: () => this.saving = false
      });
    } else {
      this.api.post("/promociones", payload).subscribe({
        next: (res) => {
          this.promociones.unshift(res);
          this.closeModal();
        },
        error: () => {
          const mockCreated = __spreadProps(__spreadValues({}, payload), { idPromocion: Date.now() });
          this.promociones.unshift(mockCreated);
          this.closeModal();
        },
        complete: () => this.saving = false
      });
    }
  }
  deletePromocion(prom) {
    if (confirm(`\xBFSeguro que deseas eliminar la promoci\xF3n "${prom.nombre}"?`)) {
      if (prom.idPromocion) {
        this.api.delete(`/promociones/${prom.idPromocion}`).subscribe({
          next: () => {
            this.promociones = this.promociones.filter((p) => p.idPromocion !== prom.idPromocion);
          },
          error: () => {
            this.promociones = this.promociones.filter((p) => p !== prom);
          }
        });
      } else {
        this.promociones = this.promociones.filter((p) => p !== prom);
      }
    }
  }
  cargarDemo() {
    this.promociones = [
      { idPromocion: 1, nombre: "Cyber Days Licores", descripcion: "Descuento general en todos los licores", tipoDescuento: "PORCENTAJE", valorDescuento: 20, fechaInicio: "2026-08-01T00:00:00", fechaFin: "2026-08-15T23:59:59", aplicaA: "CATEGORIA", estado: "A" },
      { idPromocion: 2, nombre: "Promo Cervezas", descripcion: "S/ 5 de descuento en packs de cerveza", tipoDescuento: "MONTO", valorDescuento: 5, fechaInicio: "2026-08-10T00:00:00", fechaFin: "2026-08-30T23:59:59", aplicaA: "PRODUCTO", estado: "A" }
    ];
  }
  static \u0275fac = function PromotionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PromotionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PromotionsComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 4, consts: [[1, "grid-head"], [1, "eyebrow"], [1, "muted"], [1, "actions"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "filters-bar", "glass"], [1, "search-box"], [1, "search-icon"], ["type", "text", "placeholder", "Buscar por nombre de promoci\xF3n...", 3, "ngModelChange", "ngModel"], ["class", "cards", 4, "ngIf"], ["class", "empty-state glass", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [1, "cards"], ["class", "product glass", 4, "ngFor", "ngForOf"], [1, "product", "glass"], [1, "product-header"], [1, "code-badge"], [1, "stock-badge"], [1, "desc"], [1, "price-row"], [1, "price-label"], [1, "price", "gold-txt"], [1, "stock-adjust", 2, "flex-direction", "column", "align-items", "flex-end", "font-size", "0.8rem", "gap", "0.2rem"], [1, "card-actions"], ["type", "button", 1, "btn-action", "edit", 3, "click"], ["type", "button", 1, "btn-action", "delete", 3, "click"], [1, "empty-state", "glass"], [1, "modal-overlay"], [1, "modal-card", "glass"], [1, "modal-header"], ["type", "button", 1, "close-btn", 3, "click"], [3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej. Cyber Days 2026"], ["type", "text", "formControlName", "descripcion", "placeholder", "Detalles de la promo..."], [1, "form-row"], ["formControlName", "tipoDescuento"], ["value", "PORCENTAJE"], ["value", "MONTO"], ["type", "number", "step", "0.1", "formControlName", "valorDescuento"], ["type", "datetime-local", "formControlName", "fechaInicio"], ["type", "datetime-local", "formControlName", "fechaFin"], [1, "modal-footer"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"]], template: function PromotionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div")(2, "p", 1);
      \u0275\u0275text(3, "Marketing y Ventas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Gesti\xF3n de Promociones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 2);
      \u0275\u0275text(7, "Crea y administra descuentos, cupones y ofertas especiales para los clientes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "button", 4);
      \u0275\u0275listener("click", function PromotionsComponent_Template_button_click_9_listener() {
        return ctx.openNewModal();
      });
      \u0275\u0275text(10, " \u2728 + Nueva Promoci\xF3n ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "section", 5)(12, "div", 6)(13, "span", 7);
      \u0275\u0275text(14, "\u{1F50D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function PromotionsComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(16, PromotionsComponent_section_16_Template, 2, 1, "section", 9)(17, PromotionsComponent_div_17_Template, 3, 0, "div", 10)(18, PromotionsComponent_div_18_Template, 37, 4, "div", 11);
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.promocionesFiltradas.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.promocionesFiltradas.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 16px;\n  margin-bottom: 22px;\n  flex-wrap: wrap;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.22em;\n  color: var(--primary);\n  font-size: 0.72rem;\n  font-weight: 800;\n  margin: 0;\n}\n.grid-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  font-size: clamp(1.6rem, 2.5vw, 2.2rem);\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n}\n.grid-head[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  color: #a1a1aa;\n  font-size: 0.92rem;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 260px;\n  gap: 14px;\n  padding: 14px 18px;\n  border-radius: 16px;\n  margin-bottom: 22px;\n  background: rgba(18, 18, 24, 0.75);\n  border: 1px solid rgba(250, 204, 21, 0.15);\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(10, 10, 14, 0.7);\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 0 14px;\n  transition: all 0.2s ease;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #facc15;\n  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.2);\n}\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #71717a;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  background: transparent;\n  color: #ffffff;\n  padding: 12px 0;\n  outline: none;\n  font-size: 0.94rem;\n}\n.select-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  background: rgba(10, 10, 14, 0.7);\n  color: #ffffff;\n  border-radius: 12px;\n  padding: 12px 14px;\n  outline: none;\n  cursor: pointer;\n  font-size: 0.92rem;\n  transition: all 0.2s ease;\n}\n.select-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #facc15;\n  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.2);\n}\n.select-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #18181b;\n  color: #ffffff;\n}\n.cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 18px;\n}\n.product[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 14px;\n  background: rgba(18, 18, 24, 0.85);\n  border: 1px solid rgba(250, 204, 21, 0.14);\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.product[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: rgba(250, 204, 21, 0.4);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(250, 204, 21, 0.1);\n}\n.product-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.code-badge[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #facc15;\n  font-weight: 700;\n  padding: 3px 8px;\n  background: rgba(250, 204, 21, 0.12);\n  border: 1px solid rgba(250, 204, 21, 0.25);\n  border-radius: 8px;\n}\n.stock-badge[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  background: rgba(34, 197, 94, 0.12);\n  color: #4ade80;\n  border-radius: 8px;\n  border: 1px solid rgba(34, 197, 94, 0.25);\n}\n.stock-badge.low[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.product[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.desc[_ngcontent-%COMP%] {\n  color: #a1a1aa;\n  font-size: 0.84rem;\n  margin: 0;\n  line-height: 1.45;\n}\n.price-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 12px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n}\n.price-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  color: #71717a;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n.price[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #facc15;\n  font-weight: 800;\n}\n.stock-adjust[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: #a1a1aa;\n}\n.btn-stock[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.06);\n  color: #ffffff;\n  cursor: pointer;\n  font-weight: 800;\n  transition: all 0.2s;\n}\n.btn-stock[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.2);\n  border-color: rgba(250, 204, 21, 0.4);\n  color: #facc15;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  color: #e4e4e7;\n  padding: 8px 12px;\n  border-radius: 10px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.15);\n  border-color: rgba(250, 204, 21, 0.4);\n  color: #facc15;\n}\n.btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  border-color: rgba(239, 68, 68, 0.4);\n  color: #fca5a5;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  border-radius: 18px;\n  color: #71717a;\n  background: rgba(18, 18, 24, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: grid;\n  place-items: center;\n  z-index: 999;\n  padding: 20px;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 580px;\n  border-radius: 22px;\n  padding: 28px;\n  display: grid;\n  gap: 18px;\n  background: #0f172a;\n  border: 1px solid rgba(250, 204, 21, 0.2);\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.close-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #a1a1aa;\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.modal-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 12px;\n}\n.modal-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  color: #d4d4d8;\n  font-size: 0.84rem;\n  font-weight: 600;\n}\n.modal-card[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #18181b;\n  color: #ffffff;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 10px;\n}\n@media (max-width: 768px) {\n  .filters-bar[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .grid-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .grid-head[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .grid-head[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=promotions.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PromotionsComponent, { className: "PromotionsComponent", filePath: "app\\features\\promotions\\promotions.component.ts", lineNumber: 13 });
})();
export {
  PromotionsComponent
};
//# sourceMappingURL=promotions.component-GX7IKNXK.js.map
