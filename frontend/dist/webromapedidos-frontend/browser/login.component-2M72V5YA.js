import {
  AuthService
} from "./chunk-FXYYL7U4.js";
import "./chunk-SNUT2XZU.js";
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
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-THAPR2DQ.js";
import {
  CommonModule,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TBAMR4TH.js";

// src/app/features/auth/login.component.ts
var _c0 = () => ({ standalone: true });
function LoginComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 60);
    \u0275\u0275element(3, "circle", 61)(4, "line", 62)(5, "line", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 65);
    \u0275\u0275listener("click", function LoginComponent_div_80_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function LoginComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 60);
    \u0275\u0275element(3, "polyline", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 65);
    \u0275\u0275listener("click", function LoginComponent_div_81_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMessage = "");
    });
    \u0275\u0275text(7, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.successMessage);
  }
}
function LoginComponent_div_82__svg_svg_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 77);
    \u0275\u0275element(1, "path", 103)(2, "circle", 104);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_82__svg_svg_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 77);
    \u0275\u0275element(1, "path", 105)(2, "line", 106);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_82_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275text(1, " Ingresar a la Plataforma ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 108);
    \u0275\u0275element(3, "line", 109)(4, "polyline", 110);
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_div_82_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "span", 112);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Iniciando sesi\xF3n segura...");
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_div_82_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 113);
    \u0275\u0275listener("click", function LoginComponent_div_82_button_49_Template_button_click_0_listener() {
      const acc_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyDemoAccount(acc_r6));
    });
    \u0275\u0275elementStart(1, "span", 114);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 115)(4, "span", 116);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 117);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const acc_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedDemoRole === acc_r6.role);
    \u0275\u0275propertyInterpolate("title", acc_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r6.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(acc_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r6.badge);
  }
}
function LoginComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69)(2, "h2", 70);
    \u0275\u0275text(3, "\xA1Bienvenido de nuevo! \u{1F44B}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 71);
    \u0275\u0275text(5, "Ingresa tus credenciales para acceder al panel de control.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "form", 72);
    \u0275\u0275listener("ngSubmit", function LoginComponent_div_82_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitLogin());
    });
    \u0275\u0275elementStart(7, "div", 73)(8, "label", 74)(9, "span");
    \u0275\u0275text(10, "Usuario o Identificador");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 75)(12, "span", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 77);
    \u0275\u0275element(14, "path", 78)(15, "circle", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(16, "input", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 73)(18, "div", 81)(19, "label", 82)(20, "span");
    \u0275\u0275text(21, "Contrase\xF1a");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 83);
    \u0275\u0275listener("click", function LoginComponent_div_82_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openForgotPassword());
    });
    \u0275\u0275text(23, " \xBFOlvidaste tu contrase\xF1a? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 75)(25, "span", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 77);
    \u0275\u0275element(27, "rect", 84)(28, "path", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(29, "input", 86);
    \u0275\u0275elementStart(30, "button", 87);
    \u0275\u0275listener("click", function LoginComponent_div_82_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleShowPassword());
    });
    \u0275\u0275template(31, LoginComponent_div_82__svg_svg_31_Template, 3, 0, "svg", 88)(32, LoginComponent_div_82__svg_svg_32_Template, 3, 0, "svg", 88);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 89)(34, "label", 90)(35, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_82_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rememberMe, $event) || (ctx_r1.rememberMe = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "span", 92);
    \u0275\u0275elementStart(37, "span", 93);
    \u0275\u0275text(38, "Recordar mi cuenta en este equipo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "button", 94);
    \u0275\u0275element(40, "span", 95);
    \u0275\u0275elementStart(41, "div", 96);
    \u0275\u0275template(42, LoginComponent_div_82_span_42_Template, 5, 0, "span", 97)(43, LoginComponent_div_82_div_43_Template, 4, 0, "div", 98);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 99)(45, "div", 100)(46, "span");
    \u0275\u0275text(47, "PERFILES DE ACCESO R\xC1PIDO");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 101);
    \u0275\u0275template(49, LoginComponent_div_82_button_49_Template, 8, 6, "button", 102);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.loginForm);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ((tmp_2_0 = ctx_r1.loginForm.get("username")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.loginForm.get("username")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("has-error", ((tmp_3_0 = ctx_r1.loginForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.loginForm.get("password")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(12);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("title", ctx_r1.showPassword ? "Ocultar contrase\xF1a" : "Ver contrase\xF1a");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPassword);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rememberMe);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(15, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.demoAccounts);
  }
}
function LoginComponent_div_83__svg_svg_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 77);
    \u0275\u0275element(1, "path", 103)(2, "circle", 104);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_83__svg_svg_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 77);
    \u0275\u0275element(1, "path", 105)(2, "line", 106);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_83_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 136);
    \u0275\u0275element(2, "div", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 138)(4, "span");
    \u0275\u0275text(5, "Seguridad:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.passwordStrengthScore, "%")("background-color", ctx_r1.passwordStrengthColor);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.passwordStrengthColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.passwordStrengthLabel);
  }
}
function LoginComponent_div_83_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275text(1, " Registrar Cuenta y Empezar ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 108);
    \u0275\u0275element(3, "line", 109)(4, "polyline", 110);
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_div_83_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "span", 112);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Creando tu cuenta...");
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69)(2, "h2", 70);
    \u0275\u0275text(3, "Crear Nueva Cuenta \u{1F680}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 71);
    \u0275\u0275text(5, "\xDAnete y gestiona tus compras y pedidos f\xE1cilmente.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "form", 72);
    \u0275\u0275listener("ngSubmit", function LoginComponent_div_83_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitRegister());
    });
    \u0275\u0275elementStart(7, "div", 118)(8, "div", 73)(9, "label", 119);
    \u0275\u0275text(10, "Nombres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 75);
    \u0275\u0275element(12, "input", 120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 73)(14, "label", 121);
    \u0275\u0275text(15, "Apellidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 75);
    \u0275\u0275element(17, "input", 122);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 73)(19, "label", 123);
    \u0275\u0275text(20, "Nombre de Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 75)(22, "span", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 77);
    \u0275\u0275element(24, "path", 78)(25, "circle", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(26, "input", 124);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 73)(28, "label", 125);
    \u0275\u0275text(29, "Correo Electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 75)(31, "span", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 77);
    \u0275\u0275element(33, "path", 126)(34, "polyline", 127);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(35, "input", 128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 73)(37, "label", 129);
    \u0275\u0275text(38, "Contrase\xF1a de Seguridad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 75)(40, "span", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 77);
    \u0275\u0275element(42, "rect", 84)(43, "path", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(44, "input", 130);
    \u0275\u0275elementStart(45, "button", 131);
    \u0275\u0275listener("click", function LoginComponent_div_83_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleShowRegisterPassword());
    });
    \u0275\u0275template(46, LoginComponent_div_83__svg_svg_46_Template, 3, 0, "svg", 88)(47, LoginComponent_div_83__svg_svg_47_Template, 3, 0, "svg", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, LoginComponent_div_83_div_48_Template, 8, 7, "div", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 89)(50, "label", 90);
    \u0275\u0275element(51, "input", 133)(52, "span", 92);
    \u0275\u0275elementStart(53, "span", 93);
    \u0275\u0275text(54, "Acepto los t\xE9rminos de servicio y pol\xEDticas de privacidad");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "button", 134);
    \u0275\u0275element(56, "span", 95);
    \u0275\u0275elementStart(57, "div", 96);
    \u0275\u0275template(58, LoginComponent_div_83_span_58_Template, 5, 0, "span", 97)(59, LoginComponent_div_83_div_59_Template, 4, 0, "div", 98);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_10_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.registerForm);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ((tmp_2_0 = ctx_r1.registerForm.get("nombres")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.registerForm.get("nombres")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("has-error", ((tmp_3_0 = ctx_r1.registerForm.get("apellidos")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.registerForm.get("apellidos")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("has-error", ((tmp_4_0 = ctx_r1.registerForm.get("username")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.registerForm.get("username")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(9);
    \u0275\u0275classProp("has-error", ((tmp_5_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(9);
    \u0275\u0275classProp("has-error", ((tmp_6_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275property("type", ctx_r1.showRegisterPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.showRegisterPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showRegisterPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_10_0 = ctx_r1.registerForm.get("password")) == null ? null : tmp_10_0.value);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
function LoginComponent_div_89_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150)(1, "p");
    \u0275\u0275text(2, "Ingresa tu correo electr\xF3nico registrado y te enviaremos las instrucciones para restablecer tu contrase\xF1a.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73)(4, "label");
    \u0275\u0275text(5, "Correo Electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 75)(7, "input", 151);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_89_div_11_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.forgotEmail, $event) || (ctx_r1.forgotEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function LoginComponent_div_89_div_11_Template_input_keyup_enter_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendPasswordRecovery());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.forgotEmail);
  }
}
function LoginComponent_div_89_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 153);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "\xA1Enlace enviado con \xE9xito!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Hemos enviado un correo a ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " con el enlace de recuperaci\xF3n temporal.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.forgotEmail);
  }
}
function LoginComponent_div_89_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 154);
    \u0275\u0275listener("click", function LoginComponent_div_89_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendPasswordRecovery());
    });
    \u0275\u0275text(1, " Enviar Instrucciones ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.forgotEmail);
  }
}
function LoginComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 139);
    \u0275\u0275listener("click", function LoginComponent_div_89_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForgotPassword());
    });
    \u0275\u0275elementStart(1, "div", 140);
    \u0275\u0275listener("click", function LoginComponent_div_89_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 141)(3, "div", 142);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 143);
    \u0275\u0275element(5, "rect", 84)(6, "path", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "Recuperar Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 144);
    \u0275\u0275listener("click", function LoginComponent_div_89_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForgotPassword());
    });
    \u0275\u0275text(10, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, LoginComponent_div_89_div_11_Template, 8, 1, "div", 145)(12, LoginComponent_div_89_div_12_Template, 10, 1, "div", 146);
    \u0275\u0275elementStart(13, "div", 147)(14, "button", 148);
    \u0275\u0275listener("click", function LoginComponent_div_89_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForgotPassword());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, LoginComponent_div_89_button_16_Template, 2, 1, "button", 149);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", !ctx_r1.forgotSent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.forgotSent);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.forgotSent ? "Cerrar" : "Cancelar", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.forgotSent);
  }
}
var LoginComponent = class _LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  isRegisterTab = false;
  loading = false;
  errorMessage = "";
  successMessage = "";
  showPassword = false;
  showRegisterPassword = false;
  selectedDemoRole = "";
  showForgotModal = false;
  forgotSent = false;
  forgotEmail = "";
  rememberMe = true;
  demoAccounts = [
    { icon: "\u{1F451}", name: "Administrador", username: "admin", password: "Admin123!", role: "ADMIN", badge: "Control Total", description: "Acceso completo a inventario, reportes y usuarios" },
    { icon: "\u{1F4BC}", name: "Vendedor", username: "vendedor", password: "Vendedor123!", role: "VENDEDOR", badge: "Ventas", description: "Registra ventas y gestiona clientes" },
    { icon: "\u{1F6F5}", name: "Repartidor", username: "repartidor", password: "Repartidor123!", role: "REPARTIDOR", badge: "Entregas", description: "Rutas de entrega y confirmaci\xF3n de pedidos" },
    { icon: "\u{1F6D2}", name: "Cliente", username: "cliente", password: "Cliente123!", role: "CLIENTE", badge: "Compras", description: "Explora el cat\xE1logo y realiza pedidos" }
  ];
  loginForm = this.fb.nonNullable.group({
    username: ["admin", [Validators.required]],
    password: ["Admin123!", [Validators.required]]
  });
  registerForm = this.fb.nonNullable.group({
    nombres: ["", [Validators.required]],
    apellidos: ["", [Validators.required]],
    username: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    acceptTerms: [true, [Validators.requiredTrue]]
  });
  ngOnInit() {
    const saved = localStorage.getItem("roma_remembered_user");
    if (saved)
      this.loginForm.patchValue({ username: saved });
  }
  switchTab(register) {
    this.isRegisterTab = register;
    this.errorMessage = "";
    this.successMessage = "";
  }
  applyDemo(acc) {
    this.selectedDemoRole = acc.role;
    this.loginForm.patchValue({ username: acc.username, password: acc.password });
    this.successMessage = `\u2714 Credenciales de ${acc.name} cargadas`;
    setTimeout(() => {
      this.successMessage = "";
    }, 2500);
  }
  // Alias used by the HTML template
  applyDemoAccount(acc) {
    this.applyDemo(acc);
  }
  get isDemoMode() {
    return this.authService.isDemoMode();
  }
  submitLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const { username, password } = this.loginForm.getRawValue();
    localStorage.setItem("roma_remembered_user", username);
    this.loading = true;
    this.errorMessage = "";
    this.authService.login({ username, password }).subscribe({
      next: () => {
        this.loading = false;
        this.authService.navigateHome();
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err?.error?.message ?? "Credenciales inv\xE1lidas. Usa los perfiles demo si el servidor no est\xE1 activo.";
      }
    });
  }
  submitRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    const { nombres, apellidos, username, email, password } = this.registerForm.getRawValue();
    this.loading = true;
    this.errorMessage = "";
    this.authService.register({ nombres, apellidos, username, email, password }).subscribe({
      next: () => {
        this.loading = false;
        this.authService.navigateHome();
      },
      error: (err) => {
        this.loading = false;
        const msg = err?.error?.message ?? err?.error ?? err?.message;
        if (typeof msg === "string" && msg.length > 0) {
          this.errorMessage = msg;
        } else if (err?.status === 0) {
          this.errorMessage = "\u26A0\uFE0F No se pudo conectar al servidor. Aseg\xFArate de que el backend (Spring Boot) est\xE9 corriendo en el puerto 8080.";
        } else {
          this.errorMessage = "No se pudo completar el registro. Intenta de nuevo.";
        }
      }
    });
  }
  get passwordStrength() {
    const v = this.registerForm.get("password")?.value ?? "";
    if (!v)
      return 0;
    let s = 0;
    if (v.length >= 6)
      s += 25;
    if (v.length >= 8)
      s += 25;
    if (/[A-Z]/.test(v) && /[a-z]/.test(v))
      s += 25;
    if (/\d/.test(v) || /\W/.test(v))
      s += 25;
    return s;
  }
  get strengthLabel() {
    const s = this.passwordStrength;
    if (s <= 0)
      return "";
    if (s <= 25)
      return "D\xE9bil";
    if (s <= 50)
      return "Regular";
    if (s <= 75)
      return "Buena";
    return "Excelente";
  }
  get strengthColor() {
    const s = this.passwordStrength;
    if (s <= 25)
      return "#f43f5e";
    if (s <= 50)
      return "#f59e0b";
    if (s <= 75)
      return "#3b82f6";
    return "#22c55e";
  }
  get passwordStrengthScore() {
    return this.passwordStrength;
  }
  get passwordStrengthLabel() {
    return this.strengthLabel;
  }
  get passwordStrengthColor() {
    return this.strengthColor;
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  toggleShowRegisterPassword() {
    this.showRegisterPassword = !this.showRegisterPassword;
  }
  openForgotPassword() {
    this.showForgotModal = true;
    this.forgotSent = false;
    this.forgotEmail = "";
  }
  closeForgotPassword() {
    this.showForgotModal = false;
    this.forgotSent = false;
  }
  sendPasswordRecovery() {
    if (!this.forgotEmail || !this.forgotEmail.includes("@"))
      return;
    this.forgotSent = true;
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 90, vars: 11, consts: [[1, "login-wrapper"], [1, "ambient-glow", "glow-1"], [1, "ambient-glow", "glow-2"], [1, "ambient-glow", "glow-3"], [1, "login-split-left"], [1, "brand-container"], [1, "brand-badge-wrapper"], [1, "emblem-halo"], [1, "logo-box"], [1, "logo-letter"], [1, "logo-sparkle"], [1, "brand-headings"], [1, "platform-tag"], [1, "tag-dot"], [1, "brand-title"], [1, "highlight-text"], [1, "brand-description"], [1, "feature-cards"], [1, "feature-card"], [1, "feature-icon", "bg-blue"], ["viewBox", "0 0 24 24", "width", "20", "height", "20", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "feature-info"], [1, "feature-icon", "bg-amber"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "2", "ry", "2"], ["d", "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"], [1, "feature-icon", "bg-emerald"], ["x", "1", "y", "3", "width", "15", "height", "13"], ["points", "16 8 20 8 23 11 23 16 16 16 16 8"], ["cx", "5.5", "cy", "18.5", "r", "2.5"], ["cx", "18.5", "cy", "18.5", "r", "2.5"], [1, "live-status-card"], [1, "status-indicator"], [1, "status-ping"], [1, "status-solid"], [1, "status-details"], [1, "status-title"], [1, "status-sub"], [1, "login-split-right"], [1, "login-card-container"], [1, "segmented-control"], [1, "tab-slider"], ["type", "button", 1, "segment-btn", 3, "click"], ["viewBox", "0 0 24 24", "width", "17", "height", "17", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"], ["points", "10 17 15 12 10 7"], ["x1", "15", "y1", "12", "x2", "3", "y2", "12"], ["d", "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "8.5", "cy", "7", "r", "4"], ["x1", "20", "y1", "8", "x2", "20", "y2", "14"], ["x1", "23", "y1", "11", "x2", "17", "y2", "11"], ["class", "alert-banner error", 4, "ngIf"], ["class", "alert-banner success", 4, "ngIf"], ["class", "form-wrapper slide-fade", 4, "ngIf"], [1, "card-footer-badge"], ["viewBox", "0 0 24 24", "width", "15", "height", "15", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "alert-banner", "error"], [1, "alert-icon"], ["viewBox", "0 0 24 24", "width", "18", "height", "18", "stroke", "currentColor", "stroke-width", "2.5", "fill", "none"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "alert-message"], ["type", "button", 1, "alert-close", 3, "click"], [1, "alert-banner", "success"], ["points", "20 6 9 17 4 12"], [1, "form-wrapper", "slide-fade"], [1, "form-intro"], [1, "welcome-heading"], [1, "welcome-subtitle"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-field"], ["for", "login-username"], [1, "input-shell"], [1, "field-icon"], ["viewBox", "0 0 24 24", "width", "18", "height", "18", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["id", "login-username", "type", "text", "formControlName", "username", "placeholder", "Ej. admin o tu usuario", "autocomplete", "username"], [1, "field-label-row"], ["for", "login-password"], ["type", "button", 1, "forgot-link", 3, "click"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["id", "login-password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 3, "type"], ["type", "button", 1, "password-toggle-btn", 3, "click", "title"], ["viewBox", "0 0 24 24", "width", "18", "height", "18", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "form-aux-row"], [1, "checkbox-container"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "custom-checkmark"], [1, "checkbox-text"], ["type", "submit", 1, "submit-btn", 3, "disabled"], [1, "btn-shine"], [1, "btn-content"], ["class", "btn-text", 4, "ngIf"], ["class", "btn-loading", 4, "ngIf"], [1, "demo-section"], [1, "demo-header-divider"], [1, "demo-grid"], ["type", "button", "class", "demo-chip", 3, "selected", "title", "click", 4, "ngFor", "ngForOf"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [1, "btn-text"], ["viewBox", "0 0 24 24", "width", "18", "height", "18", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], [1, "btn-loading"], [1, "modern-spinner"], ["type", "button", 1, "demo-chip", 3, "click", "title"], [1, "demo-icon"], [1, "demo-text"], [1, "demo-name"], [1, "demo-badge"], [1, "grid-2-cols"], ["for", "reg-nombres"], ["id", "reg-nombres", "type", "text", "formControlName", "nombres", "placeholder", "Ej. Carlos"], ["for", "reg-apellidos"], ["id", "reg-apellidos", "type", "text", "formControlName", "apellidos", "placeholder", "Ej. Mendoza"], ["for", "reg-username"], ["id", "reg-username", "type", "text", "formControlName", "username", "placeholder", "carlosmendoza"], ["for", "reg-email"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], ["id", "reg-email", "type", "email", "formControlName", "email", "placeholder", "carlos@empresa.com"], ["for", "reg-password"], ["id", "reg-password", "formControlName", "password", "placeholder", "M\xEDnimo 6 caracteres", 3, "type"], ["type", "button", "title", "Mostrar/Ocultar contrase\xF1a", 1, "password-toggle-btn", 3, "click"], ["class", "strength-meter", 4, "ngIf"], ["type", "checkbox", "formControlName", "acceptTerms"], ["type", "submit", 1, "submit-btn", "register-theme", 3, "disabled"], [1, "strength-meter"], [1, "strength-bar-bg"], [1, "strength-bar-fill"], [1, "strength-label"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-header"], [1, "modal-icon-badge"], ["viewBox", "0 0 24 24", "width", "24", "height", "24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["type", "button", 1, "modal-close-btn", 3, "click"], ["class", "modal-body", 4, "ngIf"], ["class", "modal-body success-state", 4, "ngIf"], [1, "modal-actions"], ["type", "button", 1, "modal-btn-secondary", 3, "click"], ["type", "button", "class", "modal-btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "modal-body"], ["type", "email", "placeholder", "tu-correo@empresa.com", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "modal-body", "success-state"], [1, "success-icon-bubble"], ["type", "button", 1, "modal-btn-primary", 3, "click", "disabled"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275element(7, "div", 7);
      \u0275\u0275elementStart(8, "div", 8)(9, "span", 9);
      \u0275\u0275text(10, "R");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "div", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11)(13, "div", 12);
      \u0275\u0275element(14, "span", 13);
      \u0275\u0275text(15, " PLATAFORMA EMPRESARIAL ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h1", 14);
      \u0275\u0275text(17, "Web Roma ");
      \u0275\u0275elementStart(18, "span", 15);
      \u0275\u0275text(19, "Pedidos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "p", 16);
      \u0275\u0275text(21, " Ecosistema integral de alta velocidad para gesti\xF3n de ventas, cat\xE1logo multimarca, cr\xE9ditos y seguimiento log\xEDstico. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 17)(23, "div", 18)(24, "div", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 20);
      \u0275\u0275element(26, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "div", 22)(28, "h4");
      \u0275\u0275text(29, "Pedidos en Tiempo Real");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p");
      \u0275\u0275text(31, "Sincronizaci\xF3n instant\xE1nea de \xF3rdenes y stock sin retrasos.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 18)(33, "div", 23);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(34, "svg", 20);
      \u0275\u0275element(35, "rect", 24)(36, "path", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "div", 22)(38, "h4");
      \u0275\u0275text(39, "Cat\xE1logo & Cr\xE9ditos Inteligentes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p");
      \u0275\u0275text(41, "Control de cuotas, l\xEDmites de cr\xE9dito y categorizaci\xF3n Sunat.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 18)(43, "div", 26);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(44, "svg", 20);
      \u0275\u0275element(45, "rect", 27)(46, "polygon", 28)(47, "circle", 29)(48, "circle", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(49, "div", 22)(50, "h4");
      \u0275\u0275text(51, "Despacho & Rutas de Entrega");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p");
      \u0275\u0275text(53, "M\xF3dulo especializado para repartidores y confirmaci\xF3n de recepci\xF3n.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "div", 31)(55, "div", 32);
      \u0275\u0275element(56, "span", 33)(57, "span", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 35)(59, "span", 36);
      \u0275\u0275text(60, "Servidores Activos \u2022 API Gateway v4.1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span", 37);
      \u0275\u0275text(62, "Autenticaci\xF3n segura JWT con cifrado AES-256");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(63, "div", 38)(64, "div", 39)(65, "div", 40);
      \u0275\u0275element(66, "div", 41);
      \u0275\u0275elementStart(67, "button", 42);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_67_listener() {
        return ctx.switchTab(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(68, "svg", 43);
      \u0275\u0275element(69, "path", 44)(70, "polyline", 45)(71, "line", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275text(72, " Iniciar Sesi\xF3n ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(73, "button", 42);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_73_listener() {
        return ctx.switchTab(true);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(74, "svg", 43);
      \u0275\u0275element(75, "path", 47)(76, "circle", 48)(77, "line", 49)(78, "line", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275text(79, " Crear Cuenta ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(80, LoginComponent_div_80_Template, 10, 1, "div", 51)(81, LoginComponent_div_81_Template, 8, 1, "div", 52)(82, LoginComponent_div_82_Template, 50, 16, "div", 53)(83, LoginComponent_div_83_Template, 60, 18, "div", 53);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(84, "div", 54);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(85, "svg", 55);
      \u0275\u0275element(86, "path", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(87, "span");
      \u0275\u0275text(88, "Conexi\xF3n protegida con cifrado SSL 256-bit");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(89, LoginComponent_div_89_Template, 17, 4, "div", 57);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(66);
      \u0275\u0275classProp("register-active", ctx.isRegisterTab);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", !ctx.isRegisterTab);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("active", ctx.isRegisterTab);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isRegisterTab);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isRegisterTab);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.showForgotModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n  background-color: #0b1329;\n  color: #f1f5f9;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  overflow-x: hidden;\n}\n.login-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 100vh;\n  width: 100%;\n  background:\n    radial-gradient(\n      ellipse at 20% 20%,\n      rgba(37, 99, 235, 0.18) 0%,\n      transparent 50%),\n    radial-gradient(\n      ellipse at 80% 80%,\n      rgba(245, 158, 11, 0.12) 0%,\n      transparent 45%),\n    linear-gradient(\n      145deg,\n      #090f20 0%,\n      #0d1936 50%,\n      #080e1e 100%);\n  overflow: hidden;\n}\n.ambient-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  filter: blur(100px);\n  opacity: 0.6;\n  animation: _ngcontent-%COMP%_ambientFloat 14s infinite alternate ease-in-out;\n}\n.glow-1[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(59, 130, 246, 0.35) 0%,\n      rgba(37, 99, 235, 0) 70%);\n  top: -120px;\n  left: -80px;\n}\n.glow-2[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 450px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(234, 179, 8, 0.25) 0%,\n      rgba(217, 119, 6, 0) 70%);\n  bottom: -100px;\n  right: 15%;\n  animation-delay: -5s;\n}\n.glow-3[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 380px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.2) 0%,\n      rgba(5, 150, 105, 0) 70%);\n  top: 30%;\n  left: 45%;\n  animation-delay: -9s;\n}\n@keyframes _ngcontent-%COMP%_ambientFloat {\n  0% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(30px, -20px) scale(1.08);\n  }\n  100% {\n    transform: translate(-20px, 30px) scale(0.95);\n  }\n}\n.login-split-left[_ngcontent-%COMP%] {\n  flex: 1.15;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 60px 48px;\n  position: relative;\n  z-index: 2;\n  border-right: 1px solid rgba(255, 255, 255, 0.08);\n}\n.brand-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.brand-badge-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 76px;\n  height: 76px;\n}\n.emblem-halo[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -6px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #3b82f6,\n      #10b981);\n  opacity: 0.7;\n  filter: blur(8px);\n  animation: _ngcontent-%COMP%_haloPulse 4s infinite alternate ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_haloPulse {\n  0% {\n    opacity: 0.5;\n    filter: blur(6px);\n    transform: rotate(0deg);\n  }\n  100% {\n    opacity: 0.85;\n    filter: blur(12px);\n    transform: rotate(6deg);\n  }\n}\n.logo-box[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      145deg,\n      #1e293b,\n      #0f172a);\n  border: 1.5px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logo-letter[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 900;\n  background:\n    linear-gradient(\n      135deg,\n      #ffd700 0%,\n      #ffae00 50%,\n      #fff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);\n  letter-spacing: -1px;\n}\n.logo-sparkle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 6px;\n  height: 6px;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 8px #fff;\n}\n.platform-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 12px;\n  background: rgba(59, 130, 246, 0.15);\n  border: 1px solid rgba(59, 130, 246, 0.3);\n  border-radius: 100px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #60a5fa;\n  letter-spacing: 1px;\n  margin-bottom: 12px;\n}\n.tag-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #38bdf8;\n  box-shadow: 0 0 8px #38bdf8;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-size: 2.7rem;\n  font-weight: 800;\n  line-height: 1.15;\n  letter-spacing: -1px;\n  margin: 0 0 14px 0;\n  color: #ffffff;\n}\n.highlight-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #60a5fa 0%,\n      #38bdf8 50%,\n      #facc15 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.brand-description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #94a3b8;\n  margin: 0;\n}\n.feature-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 14px 18px;\n  background: rgba(15, 23, 42, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  backdrop-filter: blur(12px);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  background: rgba(30, 41, 59, 0.7);\n  border-color: rgba(96, 165, 250, 0.35);\n  transform: translateX(4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.bg-blue[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.2);\n  color: #60a5fa;\n  border: 1px solid rgba(59, 130, 246, 0.3);\n}\n.bg-amber[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  color: #fbbf24;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.bg-emerald[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.feature-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #f1f5f9;\n}\n.feature-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.live-status-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 16px;\n  background: rgba(8, 14, 28, 0.75);\n  border: 1px solid rgba(56, 189, 248, 0.2);\n  border-radius: 12px;\n}\n.status-indicator[_ngcontent-%COMP%] {\n  position: relative;\n  width: 12px;\n  height: 12px;\n}\n.status-solid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 2px;\n  background: #10b981;\n  border-radius: 50%;\n}\n.status-ping[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: #10b981;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pingAnimation 2s cubic-bezier(0, 0, 0.2, 1) infinite;\n  opacity: 0.75;\n}\n@keyframes _ngcontent-%COMP%_pingAnimation {\n  75%, 100% {\n    transform: scale(2.2);\n    opacity: 0;\n  }\n}\n.status-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.status-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #cbd5e1;\n}\n.status-sub[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #64748b;\n}\n.login-split-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px 24px;\n  position: relative;\n  z-index: 2;\n}\n.login-card-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  background: rgba(15, 23, 42, 0.75);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 24px;\n  padding: 36px 36px 28px;\n  box-shadow:\n    0 24px 60px rgba(0, 0, 0, 0.5),\n    0 0 40px rgba(59, 130, 246, 0.1),\n    inset 0 1px 0 rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(20px);\n  position: relative;\n}\n.segmented-control[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  background: rgba(8, 14, 28, 0.65);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 4px;\n  margin-bottom: 24px;\n}\n.tab-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  bottom: 4px;\n  left: 4px;\n  width: calc(50% - 4px);\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  border-radius: 10px;\n  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);\n  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n  z-index: 1;\n}\n.tab-slider.register-active[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n.segment-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border: none;\n  background: transparent;\n  color: #94a3b8;\n  font-size: 0.92rem;\n  font-weight: 600;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  transition: color 0.25s ease;\n}\n.segment-btn.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.alert-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 0.88rem;\n  font-weight: 500;\n  margin-bottom: 20px;\n  animation: _ngcontent-%COMP%_alertFadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_alertFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.alert-banner.error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #fca5a5;\n}\n.alert-banner.success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  color: #6ee7b7;\n}\n.alert-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.alert-message[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 1.4;\n}\n.alert-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: inherit;\n  font-size: 1.2rem;\n  cursor: pointer;\n  opacity: 0.7;\n  padding: 0 4px;\n}\n.alert-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.form-intro[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.welcome-heading[_ngcontent-%COMP%] {\n  font-size: 1.55rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin: 0 0 6px 0;\n  letter-spacing: -0.5px;\n}\n.welcome-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #94a3b8;\n  margin: 0;\n}\n.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.grid-2-cols[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: #cbd5e1;\n}\n.field-label-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #60a5fa;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 0;\n  transition: color 0.2s;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  color: #93c5fd;\n  text-decoration: underline;\n}\n.input-shell[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: rgba(8, 14, 28, 0.7);\n  border: 1.5px solid rgba(255, 255, 255, 0.12);\n  border-radius: 12px;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  overflow: hidden;\n}\n.input-shell[_ngcontent-%COMP%]:focus-within {\n  border-color: #3b82f6;\n  background: rgba(15, 23, 42, 0.9);\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);\n}\n.form-field.has-error[_ngcontent-%COMP%]   .input-shell[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.15);\n}\n.field-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 14px;\n  color: #64748b;\n}\n.input-shell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  background: transparent;\n  padding: 13px 14px;\n  color: #ffffff;\n  font-size: 0.94rem;\n  outline: none;\n}\n.input-shell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #475569;\n}\n.password-toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0 14px;\n  display: flex;\n  align-items: center;\n  color: #64748b;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.password-toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #94a3b8;\n}\n.strength-meter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-top: 4px;\n}\n.strength-bar-bg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.strength-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: width 0.3s ease, background-color 0.3s ease;\n  border-radius: 4px;\n}\n.strength-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.form-aux-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: -2px;\n}\n.checkbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.custom-checkmark[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 5px;\n  background: rgba(8, 14, 28, 0.8);\n  border: 1.5px solid rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .custom-checkmark[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  border-color: #3b82f6;\n}\n.checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .custom-checkmark[_ngcontent-%COMP%]::after {\n  content: "\\2713";\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 800;\n}\n.checkbox-text[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #94a3b8;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 52px;\n  border: none;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1d4ed8 100%);\n  color: #ffffff;\n  font-size: 0.98rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  margin-top: 6px;\n}\n.submit-btn.register-theme[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #059669 0%,\n      #047857 100%);\n  box-shadow: 0 8px 24px rgba(5, 150, 105, 0.4);\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 28px rgba(37, 99, 235, 0.55);\n}\n.submit-btn.register-theme[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 12px 28px rgba(5, 150, 105, 0.55);\n}\n.submit-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.btn-shine[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 60%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.25),\n      transparent);\n  transform: skewX(-20deg);\n  transition: left 0.75s ease;\n}\n.submit-btn[_ngcontent-%COMP%]:hover   .btn-shine[_ngcontent-%COMP%] {\n  left: 140%;\n}\n.btn-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.modern-spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  border-top-color: #ffffff;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.demo-section[_ngcontent-%COMP%] {\n  margin-top: 28px;\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n}\n.demo-header-divider[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 14px;\n}\n.demo-header-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #64748b;\n  letter-spacing: 1px;\n}\n.demo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.demo-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  background: rgba(8, 14, 28, 0.65);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  text-align: left;\n}\n.demo-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(30, 41, 59, 0.85);\n  border-color: rgba(59, 130, 246, 0.4);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);\n}\n.demo-chip.selected[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.2);\n  border-color: #3b82f6;\n  box-shadow: 0 0 12px rgba(59, 130, 246, 0.3);\n}\n.demo-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  line-height: 1;\n}\n.demo-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.demo-name[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #f1f5f9;\n}\n.demo-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #94a3b8;\n}\n.card-footer-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 22px;\n  font-size: 0.76rem;\n  color: #64748b;\n}\n.slide-fade[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_slideFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(8px);\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  animation: fadeIn 0.2s ease;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  background: #0f172a;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 20px;\n  padding: 28px;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  position: relative;\n}\n.modal-icon-badge[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(59, 130, 246, 0.2);\n  color: #60a5fa;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  color: #ffffff;\n}\n.modal-close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: none;\n  border: none;\n  color: #64748b;\n  font-size: 1.2rem;\n  cursor: pointer;\n  padding: 4px 8px;\n}\n.modal-close-btn[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  color: #94a3b8;\n}\n.modal-body.success-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 0;\n}\n.success-icon-bubble[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  border-radius: 50%;\n  background: rgba(16, 185, 129, 0.2);\n  color: #34d399;\n  font-size: 1.5rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 12px;\n}\n.modal-body.success-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin: 0 0 6px;\n  font-size: 1.1rem;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.modal-btn-secondary[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.08);\n  border: none;\n  color: #cbd5e1;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.modal-btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.modal-btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 10px;\n  background: #2563eb;\n  border: none;\n  color: #ffffff;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.modal-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.modal-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 960px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .login-split-left[_ngcontent-%COMP%] {\n    padding: 40px 24px 20px;\n    border-right: none;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  }\n  .brand-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    align-items: center;\n    text-align: center;\n  }\n  .brand-headings[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .brand-title[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n  .feature-cards[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .live-status-card[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login-split-right[_ngcontent-%COMP%] {\n    padding: 30px 16px 50px;\n  }\n  .login-card-container[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .demo-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .grid-2-cols[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app\\features\\auth\\login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-2M72V5YA.js.map
