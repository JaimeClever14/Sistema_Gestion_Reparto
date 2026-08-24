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
  NgClass,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TBAMR4TH.js";

// src/app/features/users/users.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "admin": a0, "repartidor": a1, "vendedor": a2, "cliente": a3 });
function UsersComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 19);
    \u0275\u0275listener("click", function UsersComponent_div_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r1.errorMessage, "");
  }
}
function UsersComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 19);
    \u0275\u0275listener("click", function UsersComponent_div_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMessage = "");
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r1.successMessage, "");
  }
}
function UsersComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rol_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", rol_r4.idRol);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rol_r4.nombreRol, " ");
  }
}
function UsersComponent_section_24_div_15_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F451}");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_section_24_div_15_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4BC}");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_section_24_div_15_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F6F5}");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_section_24_div_15_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F6D2}");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_section_24_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29)(5, "strong", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "span", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "span", 33);
    \u0275\u0275template(13, UsersComponent_section_24_div_15_span_13_Template, 2, 0, "span", 34)(14, UsersComponent_section_24_div_15_span_14_Template, 2, 0, "span", 34)(15, UsersComponent_section_24_div_15_span_15_Template, 2, 0, "span", 34)(16, UsersComponent_section_24_div_15_span_16_Template, 2, 0, "span", 34);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "button", 35);
    \u0275\u0275listener("click", function UsersComponent_section_24_div_15_Template_button_click_19_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleEstado(user_r6));
    });
    \u0275\u0275element(20, "span", 36);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 37)(23, "button", 38);
    \u0275\u0275listener("click", function UsersComponent_section_24_div_15_Template_button_click_23_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditModal(user_r6));
    });
    \u0275\u0275text(24, " \u270F\uFE0F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 39);
    \u0275\u0275listener("click", function UsersComponent_section_24_div_15_Template_button_click_25_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteUser(user_r6));
    });
    \u0275\u0275text(26, " \u{1F5D1}\uFE0F ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (user_r6.username || "U").slice(0, 1).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("@", user_r6.username, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", user_r6.nombres, " ", user_r6.apellidos, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(14, _c0, ctx_r1.getRolName(user_r6.idRol) === "ADMIN", ctx_r1.getRolName(user_r6.idRol) === "REPARTIDOR", ctx_r1.getRolName(user_r6.idRol) === "VENDEDOR", ctx_r1.getRolName(user_r6.idRol) === "CLIENTE"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getRolName(user_r6.idRol) === "ADMIN");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getRolName(user_r6.idRol) === "VENDEDOR");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getRolName(user_r6.idRol) === "REPARTIDOR");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getRolName(user_r6.idRol) === "CLIENTE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRolName(user_r6.idRol), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", user_r6.estado === "A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r6.estado === "A" ? "Activo" : "Inactivo", " ");
  }
}
function UsersComponent_section_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21)(1, "div", 22)(2, "div", 23)(3, "span");
    \u0275\u0275text(4, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Nombres y Apellidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Rol Asignado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 24);
    \u0275\u0275text(14, "Acciones");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, UsersComponent_section_24_div_15_Template, 27, 19, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.usuariosFiltrados);
  }
}
function UsersComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "p");
    \u0275\u0275text(2, "No se encontraron usuarios registrados con los filtros actuales.");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_26_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rol_r8 = ctx.$implicit;
    \u0275\u0275property("value", rol_r8.idRol);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", rol_r8.nombreRol, " ", rol_r8.descripcion ? "\u2014 " + rol_r8.descripcion : "", " ");
  }
}
function UsersComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function UsersComponent_div_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275listener("click", function UsersComponent_div_26_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 43)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 44);
    \u0275\u0275listener("click", function UsersComponent_div_26_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 45);
    \u0275\u0275listener("ngSubmit", function UsersComponent_div_26_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser());
    });
    \u0275\u0275elementStart(8, "div", 46)(9, "div", 47)(10, "label");
    \u0275\u0275text(11, "Nombres *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 47)(14, "label");
    \u0275\u0275text(15, "Apellidos *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 46)(18, "div", 47)(19, "label");
    \u0275\u0275text(20, "Username (Nombre de Usuario) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 47)(23, "label");
    \u0275\u0275text(24, "Correo Electr\xF3nico *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 47)(27, "label")(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 47)(32, "label");
    \u0275\u0275text(33, "Rol Asignado en el Sistema *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 53)(35, "option", 54);
    \u0275\u0275text(36, "Selecciona un rol...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, UsersComponent_div_26_option_37_Template, 2, 3, "option", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 56)(39, "button", 57);
    \u0275\u0275listener("click", function UsersComponent_div_26_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(40, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 58);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_10_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingUser ? "\u270F\uFE0F Editar Usuario" : "\u{1F464} Registrar Nuevo Usuario");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.userForm);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ((tmp_3_0 = ctx_r1.userForm.get("nombres")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.userForm.get("nombres")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("has-error", ((tmp_4_0 = ctx_r1.userForm.get("apellidos")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.userForm.get("apellidos")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("has-error", ((tmp_5_0 = ctx_r1.userForm.get("username")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.userForm.get("username")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("has-error", ((tmp_6_0 = ctx_r1.userForm.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.userForm.get("email")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("has-error", ((tmp_7_0 = ctx_r1.userForm.get("contrasena")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.userForm.get("contrasena")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Contrase\xF1a ", ctx_r1.editingUser ? "(dejar en blanco para no cambiar)" : "*", "");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("placeholder", ctx_r1.editingUser ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" : "M\xEDnimo 6 caracteres");
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ((tmp_10_0 = ctx_r1.userForm.get("idRol")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.userForm.get("idRol")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.roles);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Guardando..." : ctx_r1.editingUser ? "Actualizar Usuario" : "Crear Usuario", " ");
  }
}
var UsersComponent = class _UsersComponent {
  api = inject(ApiService);
  fb = inject(FormBuilder);
  usuarios = [];
  roles = [];
  loading = true;
  searchTerm = "";
  selectedRoleFilter = null;
  showModal = false;
  editingUser = null;
  saving = false;
  errorMessage = "";
  successMessage = "";
  userForm;
  constructor() {
    this.userForm = this.fb.group({
      nombres: ["", [Validators.required, Validators.minLength(2)]],
      apellidos: ["", [Validators.required, Validators.minLength(2)]],
      username: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      contrasena: ["", [Validators.required, Validators.minLength(6)]],
      idRol: ["", [Validators.required]]
    });
  }
  ngOnInit() {
    this.cargarDatos();
  }
  cargarDatos() {
    this.loading = true;
    this.errorMessage = "";
    this.api.get("/roles").subscribe({
      next: (rolesData) => {
        this.roles = rolesData && rolesData.length > 0 ? rolesData : this.getMockRoles();
        this.cargarUsuarios();
      },
      error: () => {
        this.roles = this.getMockRoles();
        this.cargarUsuarios();
      }
    });
  }
  cargarUsuarios() {
    this.api.get("/usuarios").subscribe({
      next: (usersData) => {
        this.usuarios = usersData;
        this.loading = false;
      },
      error: () => {
        this.cargarMockUsuarios();
        this.loading = false;
      }
    });
  }
  get usuariosFiltrados() {
    return this.usuarios.filter((u) => {
      const matchesSearch = !this.searchTerm || u.nombres && u.nombres.toLowerCase().includes(this.searchTerm.toLowerCase()) || u.apellidos && u.apellidos.toLowerCase().includes(this.searchTerm.toLowerCase()) || u.username && u.username.toLowerCase().includes(this.searchTerm.toLowerCase()) || u.email && u.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesRole = this.selectedRoleFilter === null || u.idRol === this.selectedRoleFilter;
      return matchesSearch && matchesRole;
    });
  }
  getRolName(idRol) {
    const rol = this.roles.find((r) => r.idRol === Number(idRol));
    return rol ? rol.nombreRol : "CLIENTE";
  }
  openNewModal() {
    this.editingUser = null;
    this.userForm.reset({
      nombres: "",
      apellidos: "",
      username: "",
      email: "",
      contrasena: "",
      idRol: this.roles.length > 0 ? this.roles[0].idRol : 2
    });
    this.userForm.get("contrasena")?.setValidators([Validators.required, Validators.minLength(6)]);
    this.userForm.get("contrasena")?.updateValueAndValidity();
    this.errorMessage = "";
    this.showModal = true;
  }
  openEditModal(user) {
    this.editingUser = user;
    this.userForm.patchValue({
      nombres: user.nombres,
      apellidos: user.apellidos,
      username: user.username,
      email: user.email,
      contrasena: "",
      idRol: user.idRol
    });
    this.userForm.get("contrasena")?.clearValidators();
    this.userForm.get("contrasena")?.updateValueAndValidity();
    this.errorMessage = "";
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.editingUser = null;
    this.errorMessage = "";
  }
  saveUser() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.errorMessage = "Por favor completa todos los campos requeridos correctamente.";
      return;
    }
    this.saving = true;
    this.errorMessage = "";
    const formVal = this.userForm.value;
    const payload = {
      nombres: formVal.nombres,
      apellidos: formVal.apellidos,
      username: formVal.username,
      email: formVal.email,
      idRol: Number(formVal.idRol),
      estado: this.editingUser ? this.editingUser.estado || "A" : "A"
    };
    if (formVal.contrasena) {
      payload.contrasena = formVal.contrasena;
    }
    if (this.editingUser && this.editingUser.idUsuario) {
      payload.idUsuario = this.editingUser.idUsuario;
      this.api.put(`/usuarios/${this.editingUser.idUsuario}`, payload).subscribe({
        next: (updated) => {
          const idx = this.usuarios.findIndex((u) => u.idUsuario === updated.idUsuario);
          if (idx !== -1) {
            this.usuarios[idx] = updated;
          }
          this.saving = false;
          this.showSuccess("Usuario actualizado correctamente");
          this.closeModal();
        },
        error: (err) => {
          const idx = this.usuarios.findIndex((u) => u.idUsuario === this.editingUser?.idUsuario);
          if (idx !== -1) {
            this.usuarios[idx] = __spreadValues(__spreadValues({}, this.usuarios[idx]), payload);
          }
          this.saving = false;
          this.showSuccess("Usuario actualizado en modo local");
          this.closeModal();
        }
      });
    } else {
      this.api.post("/usuarios", payload).subscribe({
        next: (created) => {
          this.usuarios.unshift(created);
          this.saving = false;
          this.showSuccess(`Usuario "${created.username}" creado con \xE9xito`);
          this.closeModal();
        },
        error: (err) => {
          const newMock = __spreadValues({
            idUsuario: Date.now()
          }, payload);
          this.usuarios.unshift(newMock);
          this.saving = false;
          this.showSuccess(`Usuario "${newMock.username}" creado con \xE9xito (modo local)`);
          this.closeModal();
        }
      });
    }
  }
  toggleEstado(user) {
    const nuevoEstado = user.estado === "A" ? "I" : "A";
    const payload = __spreadProps(__spreadValues({}, user), { estado: nuevoEstado });
    if (user.idUsuario) {
      this.api.put(`/usuarios/${user.idUsuario}`, payload).subscribe({
        next: () => {
          user.estado = nuevoEstado;
          this.showSuccess(`Estado de ${user.username} cambiado a ${nuevoEstado === "A" ? "Activo" : "Inactivo"}`);
        },
        error: () => {
          user.estado = nuevoEstado;
          this.showSuccess(`Estado de ${user.username} cambiado a ${nuevoEstado === "A" ? "Activo" : "Inactivo"}`);
        }
      });
    }
  }
  deleteUser(user) {
    if (!confirm(`\xBFEst\xE1s seguro de eliminar el usuario "${user.username}"?`))
      return;
    if (user.idUsuario) {
      this.api.delete(`/usuarios/${user.idUsuario}`).subscribe({
        next: () => {
          this.usuarios = this.usuarios.filter((u) => u.idUsuario !== user.idUsuario);
          this.showSuccess(`Usuario "${user.username}" eliminado.`);
        },
        error: () => {
          this.usuarios = this.usuarios.filter((u) => u.idUsuario !== user.idUsuario);
          this.showSuccess(`Usuario "${user.username}" eliminado.`);
        }
      });
    }
  }
  showSuccess(msg) {
    this.successMessage = msg;
    setTimeout(() => {
      if (this.successMessage === msg) {
        this.successMessage = "";
      }
    }, 4e3);
  }
  getMockRoles() {
    return [
      { idRol: 1, nombreRol: "ADMIN", descripcion: "Administrador del sistema" },
      { idRol: 2, nombreRol: "CLIENTE", descripcion: "Cliente registrado" },
      { idRol: 3, nombreRol: "VENDEDOR", descripcion: "Personal de ventas" },
      { idRol: 4, nombreRol: "REPARTIDOR", descripcion: "Personal de entregas" }
    ];
  }
  cargarMockUsuarios() {
    this.usuarios = [
      { idUsuario: 1, nombres: "Administrador", apellidos: "Principal", username: "admin", email: "admin@roma.com", idRol: 1, estado: "A" },
      { idUsuario: 2, nombres: "Carlos", apellidos: "Repartidor", username: "carlos_rep", email: "carlos@roma.com", idRol: 4, estado: "A" },
      { idUsuario: 3, nombres: "Ana", apellidos: "Vendedora", username: "ana_ven", email: "ana@roma.com", idRol: 3, estado: "A" },
      { idUsuario: 4, nombres: "Juan", apellidos: "Cliente", username: "cliente", email: "cliente@roma.com", idRol: 2, estado: "A" }
    ];
  }
  static \u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 9, consts: [[1, "grid-head"], [1, "eyebrow"], [1, "muted"], [1, "actions"], ["type", "button", 1, "btn-primary", 3, "click"], ["class", "alert-banner error", 4, "ngIf"], ["class", "alert-banner success", 4, "ngIf"], [1, "filters-bar", "glass"], [1, "search-box"], [1, "search-icon"], ["type", "text", "placeholder", "Buscar por nombre, usuario o correo electr\xF3nico...", 3, "ngModelChange", "ngModel"], [1, "select-box"], [3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "table-container glass", 4, "ngIf"], ["class", "empty-state glass", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "alert-banner", "error"], ["type", "button", 1, "close-alert", 3, "click"], [1, "alert-banner", "success"], [1, "table-container", "glass"], [1, "table"], [1, "row", "head"], [1, "text-right"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "user-cell"], [1, "avatar-mini-gold"], [1, "user-cell-info"], [1, "username-text"], [1, "fullname-text"], [1, "email-text"], [1, "badge-role", 3, "ngClass"], [4, "ngIf"], ["type", "button", "title", "Haz clic para alternar estado Activo/Inactivo", 1, "badge-status-btn", 3, "click"], [1, "dot"], [1, "actions-cell", "text-right"], ["type", "button", "title", "Editar usuario", 1, "btn-icon", "edit", 3, "click"], ["type", "button", "title", "Eliminar usuario", 1, "btn-icon", "delete", 3, "click"], [1, "empty-state", "glass"], [1, "modal-overlay", 3, "click"], [1, "modal-card", "glass", 3, "click"], [1, "modal-header"], ["type", "button", 1, "close-btn", 3, "click"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["type", "text", "formControlName", "nombres", "placeholder", "Ej. Carlos"], ["type", "text", "formControlName", "apellidos", "placeholder", "Ej. Mendoza"], ["type", "text", "formControlName", "username", "placeholder", "carlosm"], ["type", "email", "formControlName", "email", "placeholder", "carlos@empresa.com"], ["type", "password", "formControlName", "contrasena", 3, "placeholder"], ["formControlName", "idRol"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [3, "value"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div")(2, "p", 1);
      \u0275\u0275text(3, "CONTROL DE ACCESOS Y PERMISOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Gesti\xF3n de Usuarios & Roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 2);
      \u0275\u0275text(7, "Administra los usuarios del sistema, asigna roles de Administrador, Vendedor, Repartidor o Cliente.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "button", 4);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_9_listener() {
        return ctx.openNewModal();
      });
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "\u{1F464} + Registrar Usuario");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(12, UsersComponent_div_12_Template, 5, 1, "div", 5)(13, UsersComponent_div_13_Template, 5, 1, "div", 6);
      \u0275\u0275elementStart(14, "section", 7)(15, "div", 8)(16, "span", 9);
      \u0275\u0275text(17, "\u{1F50D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 11)(20, "select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_select_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedRoleFilter, $event) || (ctx.selectedRoleFilter = $event);
        return $event;
      });
      \u0275\u0275elementStart(21, "option", 13);
      \u0275\u0275text(22, "Todos los Roles");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, UsersComponent_option_23_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(24, UsersComponent_section_24_Template, 16, 1, "section", 15)(25, UsersComponent_div_25_Template, 3, 0, "div", 16)(26, UsersComponent_div_26_Template, 43, 19, "div", 17);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedRoleFilter);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.roles);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.usuariosFiltrados.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.usuariosFiltrados.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 16px;\n  margin-bottom: 22px;\n  flex-wrap: wrap;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.22em;\n  color: var(--primary);\n  font-size: 0.72rem;\n  font-weight: 800;\n  margin: 0;\n}\n.grid-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  font-size: clamp(1.6rem, 2.5vw, 2.2rem);\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n}\n.grid-head[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  color: #a1a1aa;\n  font-size: 0.92rem;\n}\n.alert-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  margin-bottom: 18px;\n}\n.alert-banner.error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #fca5a5;\n}\n.alert-banner.success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  border: 1px solid rgba(34, 197, 94, 0.3);\n  color: #86efac;\n}\n.close-alert[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: inherit;\n  font-size: 1.1rem;\n  cursor: pointer;\n  padding: 0 4px;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 240px;\n  gap: 14px;\n  padding: 14px 18px;\n  border-radius: 16px;\n  margin-bottom: 22px;\n  background: rgba(18, 18, 24, 0.75);\n  border: 1px solid rgba(250, 204, 21, 0.15);\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(10, 10, 14, 0.7);\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 0 14px;\n  transition: all 0.2s ease;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #facc15;\n  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.2);\n}\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #71717a;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  background: transparent;\n  color: #ffffff;\n  padding: 12px 0;\n  outline: none;\n  font-size: 0.94rem;\n}\n.select-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  background: rgba(10, 10, 14, 0.7);\n  color: #ffffff;\n  border-radius: 12px;\n  padding: 12px 14px;\n  outline: none;\n  cursor: pointer;\n  font-size: 0.92rem;\n  transition: all 0.2s ease;\n}\n.select-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #facc15;\n  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.2);\n}\n.select-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #18181b;\n  color: #ffffff;\n}\n.table-container[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  padding: 22px;\n  background: rgba(18, 18, 24, 0.85);\n  border: 1px solid rgba(250, 204, 21, 0.14);\n}\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.4fr 1.8fr 2fr 1.3fr 1.1fr 1fr;\n  gap: 12px;\n  align-items: center;\n  padding: 14px 16px;\n  border-radius: 12px;\n  background: rgba(10, 10, 14, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.92rem;\n  transition: all 0.2s ease;\n}\n.row[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.05);\n  border-color: rgba(250, 204, 21, 0.2);\n}\n.row.head[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: #71717a;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar-mini-gold[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #facc15,\n      #eab308);\n  color: #09090b;\n  font-weight: 900;\n  font-size: 0.85rem;\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.username-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 0.88rem;\n}\n.fullname-text[_ngcontent-%COMP%] {\n  color: #e4e4e7;\n  font-weight: 600;\n}\n.email-text[_ngcontent-%COMP%] {\n  color: #a1a1aa;\n  font-size: 0.86rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.badge-role[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 100px;\n  font-size: 0.76rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  background: rgba(255, 255, 255, 0.08);\n  color: #d4d4d8;\n}\n.badge-role.admin[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, 0.18);\n  color: #facc15;\n  border: 1px solid rgba(250, 204, 21, 0.4);\n}\n.badge-role.vendedor[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.18);\n  color: #fbbf24;\n  border: 1px solid rgba(245, 158, 11, 0.35);\n}\n.badge-role.repartidor[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.15);\n  color: #60a5fa;\n  border: 1px solid rgba(59, 130, 246, 0.35);\n}\n.badge-role.cliente[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.35);\n}\n.badge-status-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 100px;\n  font-size: 0.76rem;\n  font-weight: 700;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  background: rgba(239, 68, 68, 0.1);\n  color: #f87171;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.badge-status-btn[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.badge-status-btn.active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  border-color: rgba(34, 197, 94, 0.35);\n  color: #4ade80;\n}\n.badge-status-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n  transform: scale(1.02);\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  color: #e4e4e7;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  transition: all 0.2s;\n  font-size: 0.85rem;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.15);\n  border-color: rgba(250, 204, 21, 0.4);\n  color: #facc15;\n}\n.btn-icon.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  border-color: rgba(239, 68, 68, 0.4);\n  color: #fca5a5;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  border-radius: 18px;\n  color: #71717a;\n  background: rgba(18, 18, 24, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: grid;\n  place-items: center;\n  z-index: 999;\n  padding: 20px;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 540px;\n  border-radius: 22px;\n  padding: 28px;\n  display: grid;\n  gap: 18px;\n  background: #0f172a;\n  border: 1px solid rgba(250, 204, 21, 0.2);\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.close-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #a1a1aa;\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.modal-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #d4d4d8;\n  font-size: 0.84rem;\n  font-weight: 600;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group.has-error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group.has-error[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.modal-card[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #18181b;\n  color: #ffffff;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 8px;\n}\n@media (max-width: 900px) {\n  .row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n  }\n  .row.head[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .filters-bar[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .grid-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .grid-head[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .grid-head[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=users.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "app\\features\\users\\users.component.ts", lineNumber: 13 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=users.component-6CDBTSYP.js.map
