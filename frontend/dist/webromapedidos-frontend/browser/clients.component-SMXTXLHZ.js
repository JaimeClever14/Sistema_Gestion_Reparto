import {
  CheckboxControlValueAccessor,
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
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
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

// src/app/features/clients/clients.component.ts
function ClientsComponent_section_16_article_1_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cli_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4DE} ", cli_r2.telefono, "");
  }
}
function ClientsComponent_section_16_article_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cli_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2709\uFE0F ", cli_r2.email, "");
  }
}
function ClientsComponent_section_16_article_1_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cli_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", cli_r2.direccionPrincipal, "");
  }
}
function ClientsComponent_section_16_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 14)(1, "div", 15)(2, "div", 16)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18);
    \u0275\u0275template(12, ClientsComponent_section_16_article_1_p_12_Template, 2, 1, "p", 19)(13, ClientsComponent_section_16_article_1_p_13_Template, 2, 1, "p", 19)(14, ClientsComponent_section_16_article_1_p_14_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 20);
    \u0275\u0275listener("click", function ClientsComponent_section_16_article_1_Template_button_click_15_listener() {
      const cli_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEditModal(cli_r2));
    });
    \u0275\u0275text(16, " \u270F\uFE0F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 21);
    \u0275\u0275listener("click", function ClientsComponent_section_16_article_1_Template_button_click_17_listener() {
      const cli_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteCliente(cli_r2));
    });
    \u0275\u0275text(18, " \u{1F5D1}\uFE0F ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cli_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cli_r2.idTipoDocumento === 2 ? "RUC" : "DNI");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cli_r2.numeroDocumento || "S/N");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("L\xEDmite: S/ ", (cli_r2.limiteCredito || 0).toFixed(2), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getClienteNombre(cli_r2));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cli_r2.telefono);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cli_r2.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cli_r2.direccionPrincipal);
  }
}
function ClientsComponent_section_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12);
    \u0275\u0275template(1, ClientsComponent_section_16_article_1_Template, 19, 7, "article", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.clientesFiltrados);
  }
}
function ClientsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p");
    \u0275\u0275text(2, "No se encontraron clientes registrados.");
    \u0275\u0275elementEnd()();
  }
}
function ClientsComponent_div_18_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const td_r5 = ctx.$implicit;
    \u0275\u0275property("value", td_r5.idTipoDocumento);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", td_r5.nombreTipoDocumento, " ");
  }
}
function ClientsComponent_div_18_div_39_div_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "P");
    \u0275\u0275elementEnd();
  }
}
function ClientsComponent_div_18_div_39_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275template(3, ClientsComponent_div_18_div_39_div_9_span_3_Template, 2, 0, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 60);
    \u0275\u0275listener("click", function ClientsComponent_div_18_div_39_div_9_Template_button_click_8_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeTempDireccion(i_r7));
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dir_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", dir_r8.direccion, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dir_r8.predeterminada);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dir_r8.distrito || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dir_r8.referencia || "-");
  }
}
function ClientsComponent_div_18_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "span");
    \u0275\u0275text(3, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Distrito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Referencia");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ClientsComponent_div_18_div_39_div_9_Template, 10, 4, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r2.tempDirecciones);
  }
}
function ClientsComponent_div_18_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "p");
    \u0275\u0275text(2, "No se han agregado direcciones a\xFAn.");
    \u0275\u0275elementEnd()();
  }
}
function ClientsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275listener("click", function ClientsComponent_div_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 27);
    \u0275\u0275listener("ngSubmit", function ClientsComponent_div_18_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveCliente());
    });
    \u0275\u0275elementStart(8, "div", 28)(9, "label");
    \u0275\u0275text(10, " Tipo de Documento ");
    \u0275\u0275elementStart(11, "select", 29);
    \u0275\u0275template(12, ClientsComponent_div_18_option_12_Template, 2, 2, "option", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label");
    \u0275\u0275text(14, " N\xFAmero de Documento * ");
    \u0275\u0275element(15, "input", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 28)(17, "label");
    \u0275\u0275text(18, " Nombres / Raz\xF3n Social * ");
    \u0275\u0275element(19, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label");
    \u0275\u0275text(21, " Apellidos (si aplica) ");
    \u0275\u0275element(22, "input", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 28)(24, "label");
    \u0275\u0275text(25, " Tel\xE9fono / Celular ");
    \u0275\u0275element(26, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "label");
    \u0275\u0275text(28, " Correo electr\xF3nico ");
    \u0275\u0275element(29, "input", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "label");
    \u0275\u0275text(31, " Direcci\xF3n Principal ");
    \u0275\u0275element(32, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "label");
    \u0275\u0275text(34, " L\xEDmite de Cr\xE9dito (S/) ");
    \u0275\u0275element(35, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "hr", 38);
    \u0275\u0275elementStart(37, "h4");
    \u0275\u0275text(38, "\u{1F4CD} Direcciones de Entrega");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, ClientsComponent_div_18_div_39_Template, 10, 1, "div", 39)(40, ClientsComponent_div_18_div_40_Template, 3, 0, "div", 40);
    \u0275\u0275elementStart(41, "div", 41)(42, "label", 42);
    \u0275\u0275text(43, " Nueva Direcci\xF3n ");
    \u0275\u0275element(44, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "label", 44);
    \u0275\u0275text(46, " Distrito ");
    \u0275\u0275element(47, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 46);
    \u0275\u0275listener("click", function ClientsComponent_div_18_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addTempDireccion());
    });
    \u0275\u0275text(49, "+ Agregar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 47)(51, "label", 44);
    \u0275\u0275text(52, " Referencia ");
    \u0275\u0275element(53, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "label", 49);
    \u0275\u0275element(55, "input", 50);
    \u0275\u0275text(56, " Es predeterminada ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 51)(58, "button", 52);
    \u0275\u0275listener("click", function ClientsComponent_div_18_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(59, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 53);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.editingCliente ? "\u270F\uFE0F Editar Cliente" : "\u{1F464} Registrar Nuevo Cliente");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.tiposDocumento);
    \u0275\u0275advance(27);
    \u0275\u0275property("ngIf", ctx_r2.tempDirecciones.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tempDirecciones.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.formDir);
    \u0275\u0275advance(9);
    \u0275\u0275property("formGroup", ctx_r2.formDir);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? "Guardando..." : ctx_r2.editingCliente ? "Actualizar" : "Guardar", " ");
  }
}
var ClientsComponent = class _ClientsComponent {
  api = inject(ApiService);
  fb = inject(FormBuilder);
  loading = true;
  clientes = [];
  tiposDocumento = [];
  searchTerm = "";
  showModal = false;
  editingCliente = null;
  saving = false;
  form = this.fb.nonNullable.group({
    idTipoDocumento: [1],
    numeroDocumento: ["", [Validators.required]],
    nombresRazonSocial: ["", [Validators.required]],
    apellidos: [""],
    telefono: [""],
    email: ["", [Validators.email]],
    direccionPrincipal: [""],
    limiteCredito: [1e3, [Validators.min(0)]]
  });
  // Direcciones locales dentro del modal (aún no guardadas en backend si es cliente nuevo)
  tempDirecciones = [];
  deletedDireccionesIds = [];
  formDir = this.fb.nonNullable.group({
    direccion: ["", [Validators.required]],
    referencia: [""],
    distrito: [""],
    predeterminada: [false]
  });
  ngOnInit() {
    this.cargarDatos();
  }
  cargarDatos() {
    this.loading = true;
    this.api.get("/clientes").subscribe({
      next: (clis) => {
        this.clientes = clis;
      },
      error: () => {
        this.cargarDemo();
      }
    });
    this.api.get("/tipos-documento").subscribe({
      next: (tds) => {
        this.tiposDocumento = tds;
      },
      error: () => {
        this.tiposDocumento = [
          { idTipoDocumento: 1, nombreTipoDocumento: "DNI", codigoSunat: "1" },
          { idTipoDocumento: 2, nombreTipoDocumento: "RUC", codigoSunat: "6" }
        ];
      },
      complete: () => this.loading = false
    });
  }
  getClienteNombre(c) {
    const obj = c;
    return obj["nombresRaz\xF3nSocial"] || obj["nombresRazonSocial"] || "Sin nombre";
  }
  get clientesFiltrados() {
    if (!this.searchTerm)
      return this.clientes;
    const term = this.searchTerm.toLowerCase();
    return this.clientes.filter((c) => {
      const nombre = this.getClienteNombre(c).toLowerCase();
      return nombre.includes(term) || c.apellidos && c.apellidos.toLowerCase().includes(term) || c.numeroDocumento && c.numeroDocumento.includes(term) || c.email && c.email.toLowerCase().includes(term);
    });
  }
  openNewModal() {
    this.editingCliente = null;
    this.tempDirecciones = [];
    this.deletedDireccionesIds = [];
    this.form.reset({
      idTipoDocumento: 1,
      numeroDocumento: "",
      nombresRazonSocial: "",
      apellidos: "",
      telefono: "",
      email: "",
      direccionPrincipal: "",
      limiteCredito: 1e3
    });
    this.formDir.reset();
    this.showModal = true;
  }
  openEditModal(cliente) {
    this.editingCliente = cliente;
    this.tempDirecciones = [];
    this.deletedDireccionesIds = [];
    if (cliente.idCliente) {
      this.api.get("/direcciones-cliente").subscribe({
        next: (allDirs) => {
          this.tempDirecciones = allDirs.filter((d) => d.idCliente === cliente.idCliente);
        }
      });
    }
    const obj = cliente;
    const nombre = obj["nombresRaz\xF3nSocial"] || obj["nombresRazonSocial"] || obj.razonSocial || "";
    this.form.patchValue({
      idTipoDocumento: cliente.idTipoDocumento || 1,
      numeroDocumento: cliente.numeroDocumento || "",
      nombresRazonSocial: nombre,
      apellidos: cliente.apellidos || "",
      telefono: cliente.telefono || "",
      email: cliente.email || "",
      direccionPrincipal: cliente.direccionPrincipal || "",
      limiteCredito: cliente.limiteCredito || 1e3
    });
    this.formDir.reset();
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.editingCliente = null;
  }
  saveCliente() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    const formVal = this.form.getRawValue();
    const clienteData = __spreadProps(__spreadValues({}, formVal), {
      razonSocial: formVal.nombresRazonSocial,
      idTipo: formVal.idTipoDocumento,
      "nombresRaz\xF3nSocial": formVal.nombresRazonSocial
      // Fallback
    });
    delete clienteData.nombresRazonSocial;
    if (this.editingCliente && this.editingCliente.idCliente) {
      const updated = __spreadValues(__spreadValues({}, this.editingCliente), clienteData);
      this.api.put(`/clientes/${this.editingCliente.idCliente}`, updated).subscribe({
        next: (res) => {
          this.syncDirecciones(res.idCliente);
          const idx = this.clientes.findIndex((c) => c.idCliente === res.idCliente);
          if (idx !== -1)
            this.clientes[idx] = res;
        },
        error: () => {
          const idx = this.clientes.findIndex((c) => c.idCliente === this.editingCliente.idCliente);
          if (idx !== -1)
            this.clientes[idx] = __spreadValues({}, updated);
          this.closeModal();
          this.saving = false;
        }
      });
    } else {
      const newCli = __spreadProps(__spreadValues({}, clienteData), { estado: "A" });
      this.api.post("/clientes", newCli).subscribe({
        next: (res) => {
          this.syncDirecciones(res.idCliente);
          this.clientes.unshift(res);
        },
        error: () => {
          const mockCreated = __spreadProps(__spreadValues({}, newCli), { idCliente: Date.now() });
          this.clientes.unshift(mockCreated);
          this.closeModal();
          this.saving = false;
        }
      });
    }
  }
  syncDirecciones(idCliente) {
    for (const idDir of this.deletedDireccionesIds) {
      this.api.delete(`/direcciones-cliente/${idDir}`).subscribe();
    }
    const newDirs = this.tempDirecciones.filter((d) => !d.idDireccion);
    for (const d of newDirs) {
      d.idCliente = idCliente;
      d.estado = "A";
      this.api.post("/direcciones-cliente", d).subscribe();
    }
    setTimeout(() => {
      this.closeModal();
      this.saving = false;
    }, 500);
  }
  deleteCliente(cliente) {
    if (confirm(`\xBFSeguro que deseas eliminar al cliente "${cliente.nombresRaz\u00F3nSocial}"?`)) {
      if (cliente.idCliente) {
        this.api.delete(`/clientes/${cliente.idCliente}`).subscribe({
          next: () => {
            this.clientes = this.clientes.filter((c) => c.idCliente !== cliente.idCliente);
          },
          error: () => {
            this.clientes = this.clientes.filter((c) => c !== cliente);
          }
        });
      } else {
        this.clientes = this.clientes.filter((c) => c !== cliente);
      }
    }
  }
  // ---- DIRECCIONES INLINE LOGIC ----
  addTempDireccion() {
    if (this.formDir.invalid) {
      this.formDir.markAllAsTouched();
      return;
    }
    const val = this.formDir.getRawValue();
    this.tempDirecciones.push({
      idCliente: 0,
      direccion: val.direccion,
      distrito: val.distrito,
      referencia: val.referencia,
      predeterminada: val.predeterminada,
      estado: "A"
    });
    this.formDir.reset({ predeterminada: false });
  }
  removeTempDireccion(index) {
    const dir = this.tempDirecciones[index];
    if (dir.idDireccion) {
      this.deletedDireccionesIds.push(dir.idDireccion);
    }
    this.tempDirecciones.splice(index, 1);
  }
  cargarDemo() {
    this.clientes = [
      { idCliente: 1, idTipoDocumento: 2, numeroDocumento: "20601234567", nombresRaz\u00F3nSocial: "Inversiones Licoreras SAC", telefono: "987654321", email: "contacto@licoreras.pe", direccionPrincipal: "Av. Larco 456, Miraflores", limiteCredito: 5e3, estado: "A" },
      { idCliente: 2, idTipoDocumento: 1, numeroDocumento: "45891234", nombresRaz\u00F3nSocial: "Juan Carlos", apellidos: "Mendoza", telefono: "912345678", email: "juan.mendoza@gmail.com", direccionPrincipal: "Calle Los Olivos 123, San Isidro", limiteCredito: 1500, estado: "A" },
      { idCliente: 3, idTipoDocumento: 1, numeroDocumento: "78451296", nombresRaz\u00F3nSocial: "Mar\xEDa Elena", apellidos: "Quispe Rivas", telefono: "954123876", email: "mquispe@hotmail.com", direccionPrincipal: "Av. Brasil 1820, Pueblo Libre", limiteCredito: 2e3, estado: "A" }
    ];
    this.loading = false;
  }
  static \u0275fac = function ClientsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientsComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 4, consts: [[1, "grid-head"], [1, "eyebrow"], [1, "muted"], [1, "actions"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "filters-bar", "glass"], [1, "search-box"], [1, "search-icon"], ["type", "text", "placeholder", "Buscar por DNI, RUC, nombre o correo de cliente...", 3, "ngModelChange", "ngModel"], ["class", "client-grid", 4, "ngIf"], ["class", "empty-state glass", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [1, "client-grid"], ["class", "client-card glass", 4, "ngFor", "ngForOf"], [1, "client-card", "glass"], [1, "card-header"], [1, "doc-badge"], [1, "credit-pill"], [1, "contact-info"], [4, "ngIf"], ["type", "button", "title", "Editar", 1, "btn-icon", 3, "click"], ["type", "button", "title", "Eliminar", 1, "btn-action", "delete", 3, "click"], [1, "empty-state", "glass"], [1, "modal-overlay"], [1, "modal-card", "glass"], [1, "modal-header"], ["type", "button", 1, "close-btn", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "form-row"], ["formControlName", "idTipoDocumento"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "numeroDocumento", "placeholder", "Ej. 20601234567 o DNI"], ["type", "text", "formControlName", "nombresRazonSocial", "placeholder", "Ej. Inversiones SAC o Juan Carlos"], ["type", "text", "formControlName", "apellidos", "placeholder", "Ej. Mendoza"], ["type", "text", "formControlName", "telefono", "placeholder", "Ej. 987654321"], ["type", "email", "formControlName", "email", "placeholder", "cliente@correo.com"], ["type", "text", "formControlName", "direccionPrincipal", "placeholder", "Av. Principal 123, Distrito"], ["type", "number", "step", "100", "formControlName", "limiteCredito"], [1, "divider"], ["class", "cart-table", 4, "ngIf"], ["class", "empty-state glass", "style", "padding: 1rem; margin-bottom: 1rem;", 4, "ngIf"], [1, "form-row", 2, "align-items", "flex-end", 3, "formGroup"], [2, "flex", "2"], ["type", "text", "formControlName", "direccion", "placeholder", "Ej. Av. Siempre Viva 123"], [2, "flex", "1"], ["type", "text", "formControlName", "distrito", "placeholder", "Miraflores"], ["type", "button", 1, "btn-secondary", 2, "height", "42px", 3, "click"], [1, "form-row", 3, "formGroup"], ["type", "text", "formControlName", "referencia", "placeholder", "Frente al parque..."], [2, "flex-direction", "row", "align-items", "center", "gap", "0.5rem", "cursor", "pointer", "flex", "1", "padding-top", "1rem"], ["type", "checkbox", "formControlName", "predeterminada"], [1, "modal-footer", 2, "margin-top", "2rem"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [3, "value"], [1, "cart-table"], [1, "cart-row", "head"], ["class", "cart-row", 4, "ngFor", "ngForOf"], [1, "cart-row"], ["class", "badge-status", "style", "margin-left: 0.5rem; font-size: 0.6rem;", 4, "ngIf"], ["type", "button", 1, "btn-remove", 3, "click"], [1, "badge-status", 2, "margin-left", "0.5rem", "font-size", "0.6rem"], [1, "empty-state", "glass", 2, "padding", "1rem", "margin-bottom", "1rem"]], template: function ClientsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div")(2, "p", 1);
      \u0275\u0275text(3, "Directorio Comercial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Gesti\xF3n de Clientes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 2);
      \u0275\u0275text(7, "Administra la informaci\xF3n de clientes, documentos RUC/DNI, l\xEDneas de cr\xE9dito y contacto.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "button", 4);
      \u0275\u0275listener("click", function ClientsComponent_Template_button_click_9_listener() {
        return ctx.openNewModal();
      });
      \u0275\u0275text(10, " \u{1F464} Registrar Cliente ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "section", 5)(12, "div", 6)(13, "span", 7);
      \u0275\u0275text(14, "\u{1F50D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ClientsComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(16, ClientsComponent_section_16_Template, 2, 1, "section", 9)(17, ClientsComponent_div_17_Template, 3, 0, "div", 10)(18, ClientsComponent_div_18_Template, 62, 9, "div", 11);
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.clientesFiltrados.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.clientesFiltrados.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 16px;\n  margin-bottom: 22px;\n  flex-wrap: wrap;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.22em;\n  color: var(--primary);\n  font-size: 0.72rem;\n  font-weight: 800;\n  margin: 0;\n}\n.grid-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  font-size: clamp(1.6rem, 2.5vw, 2.2rem);\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n}\n.grid-head[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  color: #a1a1aa;\n  font-size: 0.92rem;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  border-radius: 16px;\n  margin-bottom: 22px;\n  background: rgba(18, 18, 24, 0.75);\n  border: 1px solid rgba(250, 204, 21, 0.15);\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(10, 10, 14, 0.7);\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 0 14px;\n  transition: all 0.2s ease;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #facc15;\n  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.2);\n}\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #71717a;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  background: transparent;\n  color: #ffffff;\n  padding: 12px 0;\n  outline: none;\n  font-size: 0.94rem;\n}\n.client-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 18px;\n}\n.client-card[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 16px;\n  background: rgba(18, 18, 24, 0.85);\n  border: 1px solid rgba(250, 204, 21, 0.14);\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.client-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: rgba(250, 204, 21, 0.4);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(250, 204, 21, 0.1);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.doc-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(250, 204, 21, 0.12);\n  border: 1px solid rgba(250, 204, 21, 0.25);\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  color: #facc15;\n}\n.credit-pill[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  padding: 4px 10px;\n  border-radius: 100px;\n  background: rgba(34, 197, 94, 0.12);\n  color: #4ade80;\n  font-weight: 700;\n  border: 1px solid rgba(34, 197, 94, 0.25);\n}\n.client-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.contact-info[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  color: #a1a1aa;\n  font-size: 0.86rem;\n}\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  padding-top: 14px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n}\n.btn-action[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  color: #e4e4e7;\n  padding: 8px 12px;\n  border-radius: 10px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.15);\n  border-color: rgba(250, 204, 21, 0.4);\n  color: #facc15;\n}\n.btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  border-color: rgba(239, 68, 68, 0.4);\n  color: #fca5a5;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  border-radius: 18px;\n  color: #71717a;\n  background: rgba(18, 18, 24, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: grid;\n  place-items: center;\n  z-index: 999;\n  padding: 20px;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 580px;\n  border-radius: 22px;\n  padding: 28px;\n  display: grid;\n  gap: 18px;\n  background: #0f172a;\n  border: 1px solid rgba(250, 204, 21, 0.2);\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.close-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #a1a1aa;\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.modal-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n}\n.modal-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  color: #d4d4d8;\n  font-size: 0.84rem;\n  font-weight: 600;\n}\n.modal-card[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #18181b;\n  color: #ffffff;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 10px;\n}\n@media (max-width: 640px) {\n  .grid-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .grid-head[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .grid-head[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .client-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=clients.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientsComponent, { className: "ClientsComponent", filePath: "app\\features\\clients\\clients.component.ts", lineNumber: 13 });
})();
export {
  ClientsComponent
};
//# sourceMappingURL=clients.component-SMXTXLHZ.js.map
