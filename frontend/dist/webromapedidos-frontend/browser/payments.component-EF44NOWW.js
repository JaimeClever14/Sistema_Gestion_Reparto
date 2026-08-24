import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
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
  DecimalPipe,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-TBAMR4TH.js";

// src/app/features/payments/payments.component.ts
function PaymentsComponent_section_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 14);
    \u0275\u0275text(6, "Total Recaudado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 16)(10, "span", 13);
    \u0275\u0275text(11, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "p", 14);
    \u0275\u0275text(14, "Pagos Confirmados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong", 15);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 17)(18, "span", 13);
    \u0275\u0275text(19, "\u{1F4F1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "p", 14);
    \u0275\u0275text(22, "Yape / Plin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "strong", 15);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 18)(26, "span", 13);
    \u0275\u0275text(27, "\u{1F4B5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div")(29, "p", 14);
    \u0275\u0275text(30, "Efectivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "strong", 15);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("S/ ", ctx_r0.totalRecaudado.toFixed(2), "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.pagos.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.pagosPorMetodo("Yape"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.pagosPorMetodo("Efectivo"));
  }
}
function PaymentsComponent_ng_container_21_section_1_div_15_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, " \u{1F4CE} Comprobante ");
    \u0275\u0275elementEnd();
  }
}
function PaymentsComponent_ng_container_21_section_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PaymentsComponent_ng_container_21_section_1_div_15_span_4_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 28)(9, "span", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 30);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong", 31);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 32);
    \u0275\u0275text(19, "\u2713 Registrado");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pago_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pago_r2.numeroOperacion || "OP-" + pago_r2.idPago);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pago_r2.comprobanteUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pago_r2.idPedido ? "PED-" + pago_r2.idPedido : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getMetodoIcon(pago_r2.metodoPago == null ? null : pago_r2.metodoPago.nombreMetodo));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((pago_r2.metodoPago == null ? null : pago_r2.metodoPago.nombreMetodo) || "Efectivo");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pago_r2.fechaPago ? \u0275\u0275pipeBind2(15, 7, pago_r2.fechaPago, "dd/MM/yy HH:mm") : "Hoy");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", (pago_r2.montoPago || 0).toFixed(2), "");
  }
}
function PaymentsComponent_ng_container_21_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21)(1, "div", 22)(2, "div", 23)(3, "span");
    \u0275\u0275text(4, "N\xB0 Operaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "M\xE9todo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Fecha / Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Estado");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, PaymentsComponent_ng_container_21_section_1_div_15_Template, 20, 10, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.pagos);
  }
}
function PaymentsComponent_ng_container_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay pagos registrados a\xFAn. Presiona ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Registrar Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " para comenzar.");
    \u0275\u0275elementEnd()();
  }
}
function PaymentsComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PaymentsComponent_ng_container_21_section_1_Template, 16, 1, "section", 19)(2, PaymentsComponent_ng_container_21_div_2_Template, 8, 0, "div", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.pagos.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.pagos.length === 0);
  }
}
function PaymentsComponent_ng_container_22_section_1_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 39)(1, "div", 40)(2, "div")(3, "p", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 44)(10, "div", 45)(11, "span");
    \u0275\u0275text(12, "Total cr\xE9dito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 45)(16, "span");
    \u0275\u0275text(17, "Pendiente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong", 46);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 45)(21, "span");
    \u0275\u0275text(22, "Cuotas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 47);
    \u0275\u0275element(26, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 49);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 50);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const credito_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getClienteNombre(credito_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((credito_r3.cliente == null ? null : credito_r3.cliente.numeroDocumento) || "S/N");
    \u0275\u0275advance();
    \u0275\u0275classProp("vencido", credito_r3.montoPendiente > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", credito_r3.montoPendiente > 0 ? "\u26A0 Pendiente" : "\u2713 Saldado", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", credito_r3.montoTotalCredito.toFixed(2), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", credito_r3.montoPendiente.toFixed(2), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(credito_r3.numeroCuotas);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", (credito_r3.montoTotalCredito - credito_r3.montoPendiente) / credito_r3.montoTotalCredito * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Pagado: S/ ", (credito_r3.montoTotalCredito - credito_r3.montoPendiente).toFixed(2), " de S/ ", credito_r3.montoTotalCredito.toFixed(2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u{1F4C5} Concedido: ", credito_r3.fechaConcesion || "Sin fecha", " ");
  }
}
function PaymentsComponent_ng_container_22_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 37);
    \u0275\u0275template(1, PaymentsComponent_ng_container_22_section_1_article_1_Template, 31, 13, "article", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.creditos);
  }
}
function PaymentsComponent_ng_container_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay cr\xE9ditos activos registrados en el sistema.");
    \u0275\u0275elementEnd()();
  }
}
function PaymentsComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PaymentsComponent_ng_container_22_section_1_Template, 2, 1, "section", 36)(2, PaymentsComponent_ng_container_22_div_2_Template, 5, 0, "div", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.creditos.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.creditos.length === 0);
  }
}
function PaymentsComponent_div_23_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", p_r5.idPedido);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getPedidoLabel(p_r5), " ");
  }
}
function PaymentsComponent_div_23_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function PaymentsComponent_div_23_button_17_Template_button_click_0_listener() {
      const mp_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.formPago.patchValue({ idMetodoPago: mp_r7.idMetodoPago }));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const mp_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ((tmp_3_0 = ctx_r0.formPago.get("idMetodoPago")) == null ? null : tmp_3_0.value) == mp_r7.idMetodoPago);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getMetodoIcon(mp_r7.nombreMetodo));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mp_r7.nombreMetodo);
  }
}
function PaymentsComponent_div_23_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, " Ingrese un monto v\xE1lido. ");
    \u0275\u0275elementEnd();
  }
}
function PaymentsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "div", 53)(3, "h3");
    \u0275\u0275text(4, "\u{1F4B3} Registrar Nuevo Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 54);
    \u0275\u0275listener("click", function PaymentsComponent_div_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeNewPagoModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 55);
    \u0275\u0275listener("ngSubmit", function PaymentsComponent_div_23_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.savePago());
    });
    \u0275\u0275elementStart(8, "div", 56)(9, "div", 57)(10, "label");
    \u0275\u0275text(11, " Pedido Asociado ");
    \u0275\u0275elementStart(12, "select", 58)(13, "option", 59);
    \u0275\u0275text(14, "\u2014 Sin pedido vinculado \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, PaymentsComponent_div_23_option_15_Template, 2, 2, "option", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 61);
    \u0275\u0275template(17, PaymentsComponent_div_23_button_17_Template, 5, 4, "button", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 63)(19, "label");
    \u0275\u0275text(20, " Monto del Pago (S/) * ");
    \u0275\u0275element(21, "input", 64);
    \u0275\u0275template(22, PaymentsComponent_div_23_span_22_Template, 2, 0, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "label");
    \u0275\u0275text(24, " N\xB0 Operaci\xF3n / Referencia ");
    \u0275\u0275element(25, "input", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "label", 67);
    \u0275\u0275text(27, " URL de Comprobante (opcional) ");
    \u0275\u0275element(28, "input", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 69)(30, "div", 70)(31, "span");
    \u0275\u0275text(32, "M\xE9todo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 70)(36, "span");
    \u0275\u0275text(37, "Monto a cobrar:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "strong", 71);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 70)(42, "span");
    \u0275\u0275text(43, "Referencia:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "strong");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 72)(47, "button", 73);
    \u0275\u0275listener("click", function PaymentsComponent_div_23_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeNewPagoModal());
    });
    \u0275\u0275text(48, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 74);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r0.formPago);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.pedidos);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.metodosPago);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r0.formPago.get("montoPago")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.formPago.get("montoPago")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate((ctx_r0.metodoSeleccionado == null ? null : ctx_r0.metodoSeleccionado.nombreMetodo) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(40, 10, ((tmp_7_0 = ctx_r0.formPago.get("montoPago")) == null ? null : tmp_7_0.value) || 0, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(((tmp_8_0 = ctx_r0.formPago.get("numeroOperacion")) == null ? null : tmp_8_0.value) || "Por confirmar");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.saving || ctx_r0.formPago.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Procesando..." : "\u2713 Confirmar Pago", " ");
  }
}
var PaymentsComponent = class _PaymentsComponent {
  api = inject(ApiService);
  fb = inject(FormBuilder);
  loading = true;
  pagos = [];
  creditos = [];
  metodosPago = [];
  pedidos = [];
  activeTab = "PAGOS";
  showModalNewPago = false;
  saving = false;
  formPago = this.fb.nonNullable.group({
    idPedido: [null],
    idMetodoPago: [1, [Validators.required]],
    montoPago: [0, [Validators.required, Validators.min(0.1)]],
    numeroOperacion: [""],
    comprobanteUrl: [""]
  });
  ngOnInit() {
    this.cargarDatos();
  }
  // ─── Getters computados ────────────────────────────────────────
  get totalRecaudado() {
    return this.pagos.reduce((sum, p) => sum + (p.montoPago || 0), 0);
  }
  get metodoSeleccionado() {
    const id = Number(this.formPago.get("idMetodoPago")?.value);
    return this.metodosPago.find((m) => m.idMetodoPago === id);
  }
  // ─── Helpers ───────────────────────────────────────────────────
  pagosPorMetodo(keyword) {
    return this.pagos.filter((p) => p.metodoPago?.nombreMetodo?.toLowerCase().includes(keyword.toLowerCase())).length;
  }
  getClienteNombre(credito) {
    const c = credito.cliente;
    if (!c)
      return `Cliente #${credito.idCliente}`;
    return c["nombresRaz\xF3nSocial"] || c["nombresRazonSocial"] || `Cliente #${credito.idCliente}`;
  }
  getPedidoLabel(p) {
    const codigo = p.codigoPedido || `PED-${p.idPedido}`;
    const c = p.cliente;
    const nombre = c ? c["nombresRaz\xF3nSocial"] || c["nombresRazonSocial"] || "Cliente" : "Cliente";
    const total = (p.montoTotal || 0).toFixed(2);
    return `${codigo} (${nombre}) \u2014 S/ ${total}`;
  }
  getMetodoIcon(nombre) {
    if (!nombre)
      return "\u{1F4B5}";
    const n = nombre.toLowerCase();
    if (n.includes("yape") || n.includes("plin") || n.includes("qr"))
      return "\u{1F4F1}";
    if (n.includes("tarjeta") || n.includes("d\xE9bito") || n.includes("cr\xE9dito"))
      return "\u{1F4B3}";
    if (n.includes("transfer"))
      return "\u{1F3E6}";
    return "\u{1F4B5}";
  }
  // ─── Carga de datos ────────────────────────────────────────────
  cargarDatos() {
    this.loading = true;
    this.api.get("/pagos").subscribe({
      next: (pgs) => this.pagos = pgs,
      error: () => this.cargarDemo()
    });
    this.api.get("/creditos").subscribe({
      next: (creds) => this.creditos = creds,
      error: () => {
      }
    });
    this.api.get("/metodos-pago").subscribe({
      next: (mps) => this.metodosPago = mps,
      error: () => {
        this.metodosPago = [
          { idMetodoPago: 1, nombreMetodo: "Efectivo / Cash" },
          { idMetodoPago: 2, nombreMetodo: "Yape / Plin (QR)" },
          { idMetodoPago: 3, nombreMetodo: "Transferencia Bancaria" },
          { idMetodoPago: 4, nombreMetodo: "Tarjeta D\xE9bito / Cr\xE9dito" }
        ];
      }
    });
    this.api.get("/pedidos").subscribe({
      next: (peds) => this.pedidos = peds,
      error: () => {
      },
      complete: () => this.loading = false
    });
  }
  // ─── Modal pago ────────────────────────────────────────────────
  openNewPagoModal() {
    this.formPago.reset({
      idPedido: this.pedidos.length > 0 ? this.pedidos[0].idPedido || null : null,
      idMetodoPago: this.metodosPago.length > 0 ? this.metodosPago[0].idMetodoPago || 1 : 1,
      montoPago: 0,
      numeroOperacion: `OP-${Math.floor(1e5 + Math.random() * 9e5)}`,
      comprobanteUrl: ""
    });
    this.showModalNewPago = true;
  }
  closeNewPagoModal() {
    this.showModalNewPago = false;
  }
  savePago() {
    if (this.formPago.invalid) {
      this.formPago.markAllAsTouched();
      return;
    }
    this.saving = true;
    const formVal = this.formPago.getRawValue();
    const metodoSel = this.metodosPago.find((m) => m.idMetodoPago === Number(formVal.idMetodoPago));
    const nuevoPago = {
      idPedido: formVal.idPedido ? Number(formVal.idPedido) : void 0,
      idMetodoPago: Number(formVal.idMetodoPago),
      montoPago: formVal.montoPago,
      numeroOperacion: formVal.numeroOperacion,
      comprobanteUrl: formVal.comprobanteUrl || void 0,
      fechaPago: (/* @__PURE__ */ new Date()).toISOString(),
      estado: "A",
      metodoPago: metodoSel
    };
    this.api.post("/pagos", nuevoPago).subscribe({
      next: (res) => {
        this.pagos.unshift(res);
        this.closeNewPagoModal();
      },
      error: () => {
        const mockCreated = __spreadProps(__spreadValues({}, nuevoPago), { idPago: Date.now() });
        this.pagos.unshift(mockCreated);
        this.closeNewPagoModal();
      },
      complete: () => this.saving = false
    });
  }
  // ─── Datos demo ────────────────────────────────────────────────
  cargarDemo() {
    this.pagos = [
      {
        idPago: 1,
        idPedido: 101,
        montoPago: 258.9,
        fechaPago: "2026-08-09T14:35:00",
        numeroOperacion: "YAPE-948123",
        estado: "A",
        metodoPago: { idMetodoPago: 2, nombreMetodo: "Yape / Plin (QR)" }
      },
      {
        idPago: 2,
        idPedido: 102,
        montoPago: 145,
        fechaPago: "2026-08-09T16:15:00",
        numeroOperacion: "EFEC-001",
        estado: "A",
        metodoPago: { idMetodoPago: 1, nombreMetodo: "Efectivo / Cash" }
      },
      {
        idPago: 3,
        idPedido: 103,
        montoPago: 520,
        fechaPago: "2026-08-10T09:05:00",
        numeroOperacion: "TRF-BCP-2026001",
        estado: "A",
        metodoPago: { idMetodoPago: 3, nombreMetodo: "Transferencia Bancaria" }
      }
    ];
    this.creditos = [
      {
        idCredito: 1,
        idCliente: 1,
        montoTotalCredito: 1200,
        montoPendiente: 400,
        numeroCuotas: 3,
        fechaConcesion: "2026-08-01",
        cliente: { nombresRaz\u00F3nSocial: "Inversiones Licoreras SAC", numeroDocumento: "20601234567" }
      },
      {
        idCredito: 2,
        idCliente: 2,
        montoTotalCredito: 600,
        montoPendiente: 600,
        numeroCuotas: 2,
        fechaConcesion: "2026-08-05",
        cliente: { nombresRaz\u00F3nSocial: "Juan Carlos Mendoza", numeroDocumento: "45891234" }
      }
    ];
    this.metodosPago = [
      { idMetodoPago: 1, nombreMetodo: "Efectivo / Cash" },
      { idMetodoPago: 2, nombreMetodo: "Yape / Plin (QR)" },
      { idMetodoPago: 3, nombreMetodo: "Transferencia Bancaria" },
      { idMetodoPago: 4, nombreMetodo: "Tarjeta D\xE9bito / Cr\xE9dito" }
    ];
    this.loading = false;
  }
  static \u0275fac = function PaymentsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentsComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 10, consts: [[1, "grid-head"], [1, "eyebrow"], [1, "muted"], [1, "head-actions"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "tabs-bar"], ["type", "button", 1, "tab-btn", 3, "click"], [1, "tab-count"], ["class", "metrics-row", 4, "ngIf"], [4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [1, "metrics-row"], [1, "metric-card", "glass", "tone-primary"], [1, "metric-icon"], [1, "metric-label"], [1, "metric-value"], [1, "metric-card", "glass", "tone-success"], [1, "metric-card", "glass", "tone-accent"], [1, "metric-card", "glass", "tone-muted"], ["class", "table-container glass", 4, "ngIf"], ["class", "empty-state glass", 4, "ngIf"], [1, "table-container", "glass"], [1, "table"], [1, "row", "head"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "op-code"], ["class", "voucher-link", 4, "ngIf"], [1, "metodo-cell"], [1, "metodo-icon"], [1, "date"], [1, "monto"], [1, "badge-ok"], [1, "voucher-link"], [1, "empty-state", "glass"], [1, "empty-icon"], ["class", "creditos-grid", 4, "ngIf"], [1, "creditos-grid"], ["class", "credito-card glass", 4, "ngFor", "ngForOf"], [1, "credito-card", "glass"], [1, "credito-header"], [1, "cliente-name"], [1, "doc-sub"], [1, "credito-estado"], [1, "credito-amounts"], [1, "amount-item"], [1, "pending"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-label"], [1, "credito-fecha"], [1, "modal-overlay"], [1, "modal-card", "glass"], [1, "modal-header"], ["type", "button", 1, "close-btn", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "form-group"], ["formControlName", "idPedido"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "metodo-grid"], ["type", "button", "class", "metodo-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "form-row"], ["type", "number", "step", "0.01", "formControlName", "montoPago", "placeholder", "0.00"], ["class", "error-text", 4, "ngIf"], ["type", "text", "formControlName", "numeroOperacion", "placeholder", "Ej. YAPE-948123"], [1, "full-width"], ["type", "text", "formControlName", "comprobanteUrl", "placeholder", "https://... o ruta local"], [1, "pago-preview", "glass-inner"], [1, "preview-row"], [1, "preview-monto"], [1, "modal-footer"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["type", "button", 1, "metodo-btn", 3, "click"], [1, "error-text"]], template: function PaymentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div")(2, "p", 1);
      \u0275\u0275text(3, "Cobros y Financiamiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Pagos y Cr\xE9ditos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 2);
      \u0275\u0275text(7, "Registra pagos con Yape, Plin, efectivo o transferencia. Gestiona cr\xE9ditos y cuotas de clientes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "button", 4);
      \u0275\u0275listener("click", function PaymentsComponent_Template_button_click_9_listener() {
        return ctx.openNewPagoModal();
      });
      \u0275\u0275text(10, " \u{1F4B3} Registrar Pago ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 5)(12, "button", 6);
      \u0275\u0275listener("click", function PaymentsComponent_Template_button_click_12_listener() {
        return ctx.activeTab = "PAGOS";
      });
      \u0275\u0275text(13, " \u{1F4B0} Pagos Recibidos ");
      \u0275\u0275elementStart(14, "span", 7);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 6);
      \u0275\u0275listener("click", function PaymentsComponent_Template_button_click_16_listener() {
        return ctx.activeTab = "CREDITOS";
      });
      \u0275\u0275text(17, " \u{1F4CB} Cr\xE9ditos Activos ");
      \u0275\u0275elementStart(18, "span", 7);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(20, PaymentsComponent_section_20_Template, 33, 4, "section", 8)(21, PaymentsComponent_ng_container_21_Template, 3, 2, "ng-container", 9)(22, PaymentsComponent_ng_container_22_Template, 3, 2, "ng-container", 9)(23, PaymentsComponent_div_23_Template, 51, 13, "div", 10);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.activeTab === "PAGOS");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.pagos.length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "CREDITOS");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.creditos.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "PAGOS");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "PAGOS");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "CREDITOS");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModalNewPago);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 16px;\n  margin-bottom: 22px;\n  flex-wrap: wrap;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.22em;\n  color: var(--primary);\n  font-size: 0.72rem;\n  font-weight: 800;\n  margin: 0;\n}\n.grid-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  font-size: clamp(1.6rem, 2.5vw, 2.2rem);\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n}\n.grid-head[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  color: #a1a1aa;\n  font-size: 0.92rem;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  flex-shrink: 0;\n}\n.tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 22px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 22px;\n  border-radius: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  background: rgba(18, 18, 24, 0.65);\n  color: #a1a1aa;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.08);\n  color: #ffffff;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(250, 204, 21, 0.2),\n      rgba(234, 179, 8, 0.1));\n  border-color: rgba(250, 204, 21, 0.4);\n  color: #facc15;\n  box-shadow: 0 4px 16px rgba(250, 204, 21, 0.15);\n}\n.tab-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 100px;\n  padding: 2px 8px;\n  font-size: 0.76rem;\n}\n.metrics-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n  margin-bottom: 22px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 18px 20px;\n  border-radius: 18px;\n  background: rgba(18, 18, 24, 0.85);\n  border: 1px solid rgba(250, 204, 21, 0.14);\n  transition: all 0.25s ease;\n}\n.metric-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: rgba(250, 204, 21, 0.35);\n}\n.metric-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.metric-label[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  color: #71717a;\n  font-size: 0.76rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-weight: 700;\n}\n.metric-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n}\n.tone-primary[_ngcontent-%COMP%] {\n  border-color: rgba(250, 204, 21, 0.35);\n}\n.tone-success[_ngcontent-%COMP%] {\n  border-color: rgba(34, 197, 94, 0.35);\n}\n.tone-accent[_ngcontent-%COMP%] {\n  border-color: rgba(245, 158, 11, 0.35);\n}\n.tone-muted[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.10);\n}\n.table-container[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  padding: 22px;\n  margin-bottom: 20px;\n  background: rgba(18, 18, 24, 0.85);\n  border: 1px solid rgba(250, 204, 21, 0.14);\n}\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.8fr 1.1fr 1.4fr 1.3fr 1fr 0.9fr;\n  gap: 12px;\n  align-items: center;\n  padding: 14px 16px;\n  border-radius: 12px;\n  background: rgba(10, 10, 14, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.92rem;\n  transition: all 0.2s ease;\n}\n.row[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.05);\n  border-color: rgba(250, 204, 21, 0.2);\n}\n.row.head[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: #71717a;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n}\n.op-code[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  color: #ffffff;\n}\n.voucher-link[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #facc15;\n  cursor: pointer;\n}\n.voucher-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.metodo-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.88rem;\n  color: #e4e4e7;\n}\n.metodo-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.date[_ngcontent-%COMP%] {\n  color: #a1a1aa;\n  font-size: 0.85rem;\n}\n.monto[_ngcontent-%COMP%] {\n  color: #facc15;\n  font-size: 1.05rem;\n  font-weight: 800;\n}\n.badge-ok[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 100px;\n  background: rgba(34, 197, 94, 0.12);\n  color: #4ade80;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.creditos-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 18px;\n}\n.credito-card[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  padding: 24px;\n  display: grid;\n  gap: 14px;\n  background: rgba(18, 18, 24, 0.85);\n  border: 1px solid rgba(250, 204, 21, 0.14);\n  transition: all 0.25s ease;\n}\n.credito-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: rgba(250, 204, 21, 0.4);\n}\n.credito-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.cliente-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.doc-sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #a1a1aa;\n}\n.credito-estado[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 100px;\n  background: rgba(34, 197, 94, 0.12);\n  color: #4ade80;\n  font-size: 0.78rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.credito-estado.vencido[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, 0.15);\n  color: #facc15;\n}\n.credito-amounts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n.amount-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.amount-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #71717a;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-weight: 700;\n}\n.amount-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.amount-item[_ngcontent-%COMP%]   .pending[_ngcontent-%COMP%] {\n  color: #facc15;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 100px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #facc15,\n      #22c55e);\n  border-radius: 100px;\n  transition: width 0.6s ease;\n  min-width: 4px;\n}\n.progress-label[_ngcontent-%COMP%] {\n  margin: -4px 0 0;\n  font-size: 0.78rem;\n  color: #a1a1aa;\n}\n.metodo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n.metodo-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  background: rgba(10, 10, 14, 0.7);\n  color: #a1a1aa;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-align: left;\n}\n.metodo-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.08);\n  border-color: rgba(250, 204, 21, 0.25);\n  color: #ffffff;\n}\n.metodo-btn.selected[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, 0.18);\n  border-color: #facc15;\n  color: #facc15;\n  box-shadow: 0 4px 16px rgba(250, 204, 21, 0.15);\n}\n.glass-inner[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.4);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 16px 18px;\n  display: grid;\n  gap: 8px;\n}\n.preview-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.88rem;\n}\n.preview-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a1a1aa;\n}\n.preview-monto[_ngcontent-%COMP%] {\n  color: #facc15;\n  font-size: 1.2rem;\n  font-weight: 800;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: grid;\n  place-items: center;\n  z-index: 999;\n  padding: 20px;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  border-radius: 22px;\n  padding: 28px;\n  display: grid;\n  gap: 18px;\n  max-height: 90vh;\n  overflow-y: auto;\n  background: #0f172a;\n  border: 1px solid rgba(250, 204, 21, 0.2);\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.close-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #a1a1aa;\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.modal-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.full-width[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  color: #d4d4d8;\n  font-size: 0.84rem;\n  font-weight: 600;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n@media (max-width: 1100px) {\n  .metrics-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 860px) {\n  .grid-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .head-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .head-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .row.head[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 640px) {\n  .metrics-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tabs-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .metodo-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .creditos-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=payments.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentsComponent, { className: "PaymentsComponent", filePath: "app\\features\\payments\\payments.component.ts", lineNumber: 13 });
})();
export {
  PaymentsComponent
};
//# sourceMappingURL=payments.component-EF44NOWW.js.map
