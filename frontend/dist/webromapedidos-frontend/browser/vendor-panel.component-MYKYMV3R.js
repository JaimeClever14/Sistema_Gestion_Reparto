import {
  AuthService
} from "./chunk-FXYYL7U4.js";
import "./chunk-SNUT2XZU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-THAPR2DQ.js";
import {
  ApiService
} from "./chunk-YZNMIQXE.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TBAMR4TH.js";

// src/app/features/vendor/vendor-panel.component.ts
function VendorPanelComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.toastOk);
  }
}
function VendorPanelComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.toastErr);
  }
}
function VendorPanelComponent_div_67_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngValue", c_r3.idCliente);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.nombre(c_r3), " | ", c_r3.numeroDocumento, " ");
  }
}
function VendorPanelComponent_div_67_ng_container_17_div_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4DE} ", c_r4.telefono, "");
  }
}
function VendorPanelComponent_div_67_ng_container_17_div_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2709\uFE0F ", c_r4.email, "");
  }
}
function VendorPanelComponent_div_67_ng_container_17_div_1_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", c_r4.direccionPrincipal, "");
  }
}
function VendorPanelComponent_div_67_ng_container_17_div_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "\u{1F4B3} Cr\xE9dito: ");
    \u0275\u0275elementStart(2, "span", 51);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(4, 1, c_r4.limiteCredito, "1.2-2"), "");
  }
}
function VendorPanelComponent_div_67_ng_container_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, VendorPanelComponent_div_67_ng_container_17_div_1_p_1_Template, 2, 1, "p", 50)(2, VendorPanelComponent_div_67_ng_container_17_div_1_p_2_Template, 2, 1, "p", 50)(3, VendorPanelComponent_div_67_ng_container_17_div_1_p_3_Template, 2, 1, "p", 50)(4, VendorPanelComponent_div_67_ng_container_17_div_1_p_4_Template, 5, 4, "p", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r4.telefono);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r4.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r4.direccionPrincipal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r4.limiteCredito);
  }
}
function VendorPanelComponent_div_67_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, VendorPanelComponent_div_67_ng_container_17_div_1_Template, 5, 4, "div", 48);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r4.idCliente === ctx_r0.selectedClienteId);
  }
}
function VendorPanelComponent_div_67_select_21_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dir_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", dir_r6.idDireccion);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u{1F4CD} ", dir_r6.direccion, " ", dir_r6.distrito ? " - " + dir_r6.distrito : "", " ");
  }
}
function VendorPanelComponent_div_67_select_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function VendorPanelComponent_div_67_select_21_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedDireccionId, $event) || (ctx_r0.selectedDireccionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function VendorPanelComponent_div_67_select_21_Template_select_change_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDireccionChange());
    });
    \u0275\u0275elementStart(1, "option", 47);
    \u0275\u0275text(2, "Otras opciones / Escribir manualmente...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, VendorPanelComponent_div_67_select_21_option_3_Template, 2, 3, "option", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedDireccionId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.direccionesCliente);
  }
}
function VendorPanelComponent_div_67_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r7.idProducto);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", p_r7.nombre, " \xB7 S/ ", \u0275\u0275pipeBind2(2, 4, p_r7.precioVenta, "1.2-2"), " (stock: ", p_r7.stock, ") ");
  }
}
function VendorPanelComponent_div_67_div_39_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "span", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "strong", 51);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 64);
    \u0275\u0275listener("click", function VendorPanelComponent_div_67_div_39_div_14_Template_button_click_11_listener() {
      const i_r10 = \u0275\u0275restoreView(_r9).index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeFromCart(i_r10));
    });
    \u0275\u0275text(12, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.cantidad);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(7, 4, item_r11.precioUnitario, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(10, 7, item_r11.subtotal, "1.2-2"), "");
  }
}
function VendorPanelComponent_div_67_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "h3", 30);
    \u0275\u0275text(2, "\u{1F6D2} Detalle del Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54)(4, "div", 55)(5, "span");
    \u0275\u0275text(6, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Cant.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "P.Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, VendorPanelComponent_div_67_div_39_div_14_Template, 13, 10, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 57)(16, "div", 58)(17, "span");
    \u0275\u0275text(18, "Subtotal:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 58)(23, "span");
    \u0275\u0275text(24, "IGV (18%):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 59)(29, "span");
    \u0275\u0275text(30, "TOTAL:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "strong", 60);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "button", 61);
    \u0275\u0275listener("click", function VendorPanelComponent_div_67_div_39_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmarVenta());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r0.cart);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(21, 6, ctx_r0.subtotal, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(27, 9, ctx_r0.igv, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(33, 12, ctx_r0.total, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.selectedClienteId || ctx_r0.cart.length === 0 || ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "\u23F3 Procesando..." : "\u{1F680} Confirmar Venta", " ");
  }
}
function VendorPanelComponent_div_67_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "span");
    \u0275\u0275text(2, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "El carrito est\xE1 vac\xEDo.");
    \u0275\u0275element(5, "br");
    \u0275\u0275text(6, "Selecciona un producto y agr\xE9galo arriba.");
    \u0275\u0275elementEnd()();
  }
}
function VendorPanelComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "h2");
    \u0275\u0275text(3, "\u{1F6D2} Registrar Nueva Venta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Selecciona un cliente, agrega productos y confirma el pedido.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 28)(7, "div", 29)(8, "h3", 30);
    \u0275\u0275text(9, "\u{1F464} Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 31)(11, "label");
    \u0275\u0275text(12, "Seleccionar cliente *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function VendorPanelComponent_div_67_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedClienteId, $event) || (ctx_r0.selectedClienteId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 33);
    \u0275\u0275text(15, "\u2014 Elige un cliente \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, VendorPanelComponent_div_67_option_16_Template, 2, 3, "option", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, VendorPanelComponent_div_67_ng_container_17_Template, 2, 1, "ng-container", 35);
    \u0275\u0275elementStart(18, "div", 36)(19, "label");
    \u0275\u0275text(20, "Direcci\xF3n de entrega");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, VendorPanelComponent_div_67_select_21_Template, 4, 3, "select", 37);
    \u0275\u0275elementStart(22, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function VendorPanelComponent_div_67_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.direccionEntrega, $event) || (ctx_r0.direccionEntrega = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 31)(24, "label");
    \u0275\u0275text(25, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "textarea", 39);
    \u0275\u0275twoWayListener("ngModelChange", function VendorPanelComponent_div_67_Template_textarea_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.observaciones, $event) || (ctx_r0.observaciones = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 40)(28, "div", 29)(29, "h3", 30);
    \u0275\u0275text(30, "\u{1F37E} Agregar Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 41)(32, "select", 42);
    \u0275\u0275twoWayListener("ngModelChange", function VendorPanelComponent_div_67_Template_select_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedProductoId, $event) || (ctx_r0.selectedProductoId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(33, "option", 33);
    \u0275\u0275text(34, "\u2014 Seleccionar producto \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, VendorPanelComponent_div_67_option_35_Template, 3, 7, "option", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function VendorPanelComponent_div_67_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.itemCantidad, $event) || (ctx_r0.itemCantidad = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 44);
    \u0275\u0275listener("click", function VendorPanelComponent_div_67_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addToCart());
    });
    \u0275\u0275text(38, "+ A\xF1adir");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(39, VendorPanelComponent_div_67_div_39_Template, 36, 15, "div", 45)(40, VendorPanelComponent_div_67_div_40_Template, 7, 0, "div", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedClienteId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.clientes);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.clientes);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.direccionesCliente.length > 0);
    \u0275\u0275advance();
    \u0275\u0275styleProp("margin-top", ctx_r0.direccionesCliente.length > 0 ? 8 : 0, "px");
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.direccionEntrega);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.observaciones);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedProductoId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.productos);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.itemCantidad);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.selectedProductoId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.cart.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.cart.length === 0);
  }
}
function VendorPanelComponent_div_68_div_10_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 74);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "strong", 51);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 75);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13.codigoPedido || "#" + p_r13.idPedido);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.nombre(p_r13.cliente));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 6, p_r13.fechaPedido, "dd/MM/yy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(10, 9, p_r13.montoTotal, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.badgeClass(p_r13.estado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.badgeEstado(p_r13.estado));
  }
}
function VendorPanelComponent_div_68_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 70)(2, "span");
    \u0275\u0275text(3, "C\xF3digo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Estado");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, VendorPanelComponent_div_68_div_10_div_12_Template, 13, 12, "div", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r0.pedidosF);
  }
}
function VendorPanelComponent_div_68_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "span");
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay pedidos registrados a\xFAn.");
    \u0275\u0275elementEnd()();
  }
}
function VendorPanelComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "h2");
    \u0275\u0275text(3, "\u{1F4CB} Pedidos Emitidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Historial de ventas generadas.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 66)(7, "span");
    \u0275\u0275text(8, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function VendorPanelComponent_div_68_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pedidoQ, $event) || (ctx_r0.pedidoQ = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, VendorPanelComponent_div_68_div_10_Template, 13, 1, "div", 68)(11, VendorPanelComponent_div_68_div_11_Template, 5, 0, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pedidoQ);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pedidosF.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pedidosF.length === 0);
  }
}
function VendorPanelComponent_div_69_div_11_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4DE} ", c_r16.telefono, "");
  }
}
function VendorPanelComponent_div_69_div_11_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2709\uFE0F ", c_r16.email, "");
  }
}
function VendorPanelComponent_div_69_div_11_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", c_r16.direccionPrincipal, "");
  }
}
function VendorPanelComponent_div_69_div_11_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "\u{1F4B3} Cr\xE9dito: ");
    \u0275\u0275elementStart(2, "strong", 51);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(4, 1, c_r16.limiteCredito, "1.2-2"), "");
  }
}
function VendorPanelComponent_div_69_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 82)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, VendorPanelComponent_div_69_div_11_p_8_Template, 2, 1, "p", 50)(9, VendorPanelComponent_div_69_div_11_p_9_Template, 2, 1, "p", 50)(10, VendorPanelComponent_div_69_div_11_p_10_Template, 2, 1, "p", 50)(11, VendorPanelComponent_div_69_div_11_p_11_Template, 5, 4, "p", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 83);
    \u0275\u0275listener("click", function VendorPanelComponent_div_69_div_11_Template_button_click_12_listener() {
      const c_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.seleccionarCliente(c_r16.idCliente));
    });
    \u0275\u0275text(13, "\u{1F6D2} Venderle");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.nombre(c_r16)[0].toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.nombre(c_r16));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4C4} ", c_r16.numeroDocumento || "\u2014", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r16.telefono);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r16.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r16.direccionPrincipal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r16.limiteCredito);
  }
}
function VendorPanelComponent_div_69_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "span");
    \u0275\u0275text(2, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No se encontraron clientes.");
    \u0275\u0275elementEnd()();
  }
}
function VendorPanelComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "h2");
    \u0275\u0275text(3, "\u{1F465} Directorio de Clientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Consulta y selecciona clientes para una venta r\xE1pida.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 66)(7, "span");
    \u0275\u0275text(8, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function VendorPanelComponent_div_69_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.clienteQ, $event) || (ctx_r0.clienteQ = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 78);
    \u0275\u0275template(11, VendorPanelComponent_div_69_div_11_Template, 14, 7, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, VendorPanelComponent_div_69_div_12_Template, 5, 0, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.clienteQ);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.clientesF);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.clientesF.length === 0);
  }
}
function VendorPanelComponent_div_70_div_11_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r19.descripcion);
  }
}
function VendorPanelComponent_div_70_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88);
    \u0275\u0275text(2, "\u{1F37E}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 89)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, VendorPanelComponent_div_70_div_11_p_6_Template, 2, 1, "p", 90);
    \u0275\u0275elementStart(7, "div", 91)(8, "span", 92);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 93);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 94);
    \u0275\u0275listener("click", function VendorPanelComponent_div_70_div_11_Template_button_click_13_listener() {
      const p_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.seleccionarProducto(p_r19.idProducto));
    });
    \u0275\u0275text(14, "+ A\xF1adir al pedido");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const p_r19 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r19.nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r19.descripcion);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(10, 6, p_r19.precioVenta, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("low", p_r19.stock <= ((tmp_6_0 = p_r19.stockMinimo) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4E6} ", p_r19.stock, " en stock");
  }
}
function VendorPanelComponent_div_70_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "span");
    \u0275\u0275text(2, "\u{1F37E}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay productos en cat\xE1logo.");
    \u0275\u0275elementEnd()();
  }
}
function VendorPanelComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "h2");
    \u0275\u0275text(3, "\u{1F37E} Cat\xE1logo de Licores");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Precios y disponibilidad en tiempo real.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 66)(7, "span");
    \u0275\u0275text(8, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function VendorPanelComponent_div_70_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.productoQ, $event) || (ctx_r0.productoQ = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 85);
    \u0275\u0275template(11, VendorPanelComponent_div_70_div_11_Template, 15, 9, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, VendorPanelComponent_div_70_div_12_Template, 5, 0, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.productoQ);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.productosF);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.productosF.length === 0);
  }
}
var VendorPanelComponent = class _VendorPanelComponent {
  api = inject(ApiService);
  auth = inject(AuthService);
  activeTab = "nueva-venta";
  clientes = [];
  productos = [];
  pedidos = [];
  loadingC = true;
  loadingP = true;
  loadingO = true;
  // Formulario venta
  selectedClienteId = null;
  selectedProductoId = null;
  itemCantidad = 1;
  direccionEntrega = "";
  observaciones = "";
  direccionesCliente = [];
  selectedDireccionId = null;
  cart = [];
  saving = false;
  toastOk = "";
  toastErr = "";
  clienteQ = "";
  pedidoQ = "";
  productoQ = "";
  ngOnInit() {
    this.loadAll();
  }
  loadAll() {
    this.api.get("/clientes").subscribe({
      next: (d) => {
        this.clientes = d ?? this.demoClientes();
        this.loadingC = false;
      },
      error: () => {
        this.clientes = this.demoClientes();
        this.loadingC = false;
      }
    });
    this.api.get("/productos").subscribe({
      next: (d) => {
        this.productos = d ?? this.demoProductos();
        this.loadingP = false;
      },
      error: () => {
        this.productos = this.demoProductos();
        this.loadingP = false;
      }
    });
    this.api.get("/pedidos").subscribe({
      next: (d) => {
        this.pedidos = this.merge(d ?? []);
        this.loadingO = false;
      },
      error: () => {
        this.pedidos = this.merge([]);
        this.loadingO = false;
      }
    });
  }
  merge(base) {
    try {
      const raw = localStorage.getItem("roma_shared_orders");
      if (!raw)
        return base;
      const saved = JSON.parse(raw);
      const map = /* @__PURE__ */ new Map();
      base.forEach((p) => map.set(String(p.idPedido ?? p.codigoPedido), p));
      saved.forEach((p) => {
        const k = String(p.idPedido ?? p.codigoPedido);
        if (!map.has(k))
          map.set(k, p);
      });
      return Array.from(map.values());
    } catch {
      return base;
    }
  }
  // ── CARRITO ────────────────────────────────────────────────────────
  addToCart() {
    const prod = this.productos.find((p) => p.idProducto === Number(this.selectedProductoId));
    if (!prod)
      return;
    const qty = Math.max(1, Number(this.itemCantidad) || 1);
    const ex = this.cart.find((i) => i.producto.idProducto === prod.idProducto);
    if (ex) {
      ex.cantidad += qty;
      ex.subtotal = +(ex.cantidad * ex.precioUnitario).toFixed(2);
    } else {
      this.cart.push({ producto: prod, cantidad: qty, precioUnitario: prod.precioVenta, subtotal: +(qty * prod.precioVenta).toFixed(2) });
    }
    this.itemCantidad = 1;
  }
  removeFromCart(i) {
    this.cart.splice(i, 1);
  }
  get subtotal() {
    return +this.cart.reduce((s, i) => s + i.subtotal, 0).toFixed(2);
  }
  get igv() {
    return +(this.subtotal * 0.18).toFixed(2);
  }
  get total() {
    return +(this.subtotal + this.igv).toFixed(2);
  }
  // ── CONFIRMAR VENTA ────────────────────────────────────────────────
  confirmarVenta() {
    if (!this.selectedClienteId || this.cart.length === 0)
      return;
    this.saving = true;
    const cliente = this.clientes.find((c) => c.idCliente === Number(this.selectedClienteId));
    const pedido = {
      codigoPedido: "PED-" + Date.now(),
      idCliente: Number(this.selectedClienteId),
      cliente,
      montoSubtotal: this.subtotal,
      montoIgv: this.igv,
      montoTotal: this.total,
      direccionEntrega: this.direccionEntrega || cliente?.direccionPrincipal || "",
      observaciones: this.observaciones,
      estado: "A",
      fechaPedido: (/* @__PURE__ */ new Date()).toISOString(),
      detalles: this.cart.map((i) => ({
        idProducto: i.producto.idProducto,
        cantidad: i.cantidad,
        precioUnitario: i.precioUnitario,
        subtotal: i.subtotal,
        producto: i.producto
      }))
    };
    this.api.post("/pedidos", pedido).subscribe({
      next: (saved) => this.afterVenta(saved ?? pedido),
      error: () => this.afterVenta(pedido)
    });
  }
  afterVenta(p) {
    this.pedidos = [p, ...this.pedidos];
    const existing = JSON.parse(localStorage.getItem("roma_shared_orders") ?? "[]");
    localStorage.setItem("roma_shared_orders", JSON.stringify([p, ...existing]));
    this.cart = [];
    this.selectedClienteId = null;
    this.direccionEntrega = "";
    this.observaciones = "";
    this.saving = false;
    this.toast(`\u2705 Pedido ${p.codigoPedido} registrado \u2014 S/ ${p.montoTotal.toFixed(2)}`);
    this.activeTab = "pedidos";
  }
  toast(msg) {
    this.toastOk = msg;
    setTimeout(() => {
      if (this.toastOk === msg)
        this.toastOk = "";
    }, 5e3);
  }
  // ── GETTERS DE NOMBRE ──────────────────────────────────────────────
  nombre(c) {
    return c?.nombresRaz\u00F3nSocial ?? c?.nombresRazonSocial ?? c?.razonSocial ?? "\u2014";
  }
  get clientesF() {
    if (!this.clienteQ)
      return this.clientes;
    const q = this.clienteQ.toLowerCase();
    return this.clientes.filter((c) => this.nombre(c).toLowerCase().includes(q) || (c.numeroDocumento ?? "").includes(q));
  }
  get pedidosF() {
    if (!this.pedidoQ)
      return this.pedidos;
    const q = this.pedidoQ.toLowerCase();
    return this.pedidos.filter((p) => (p.codigoPedido ?? "").toLowerCase().includes(q) || this.nombre(p.cliente).toLowerCase().includes(q));
  }
  get productosF() {
    if (!this.productoQ)
      return this.productos;
    const q = this.productoQ.toLowerCase();
    return this.productos.filter((p) => p.nombre.toLowerCase().includes(q));
  }
  get kpiPedidos() {
    return this.pedidos.length;
  }
  get kpiMonto() {
    return +this.pedidos.reduce((s, p) => s + (p.montoTotal ?? 0), 0).toFixed(2);
  }
  logout() {
    this.auth.logout();
  }
  seleccionarCliente(id) {
    this.selectedClienteId = id ?? null;
    this.activeTab = "nueva-venta";
    this.onClienteChange();
  }
  onClienteChange() {
    this.direccionesCliente = [];
    this.selectedDireccionId = null;
    this.direccionEntrega = "";
    if (this.selectedClienteId) {
      this.api.get("/direcciones-cliente").subscribe({
        next: (allDirs) => {
          this.direccionesCliente = allDirs.filter((d) => d.idCliente === Number(this.selectedClienteId));
          const predet = this.direccionesCliente.find((d) => d.predeterminada);
          if (predet) {
            this.selectedDireccionId = predet.idDireccion || null;
            this.direccionEntrega = predet.direccion;
          }
        }
      });
    }
  }
  onDireccionChange() {
    if (this.selectedDireccionId) {
      const dir = this.direccionesCliente.find((d) => d.idDireccion === Number(this.selectedDireccionId));
      this.direccionEntrega = dir ? dir.direccion : "";
    } else {
      this.direccionEntrega = "";
    }
  }
  seleccionarProducto(id) {
    this.selectedProductoId = id ?? null;
    this.activeTab = "nueva-venta";
  }
  badgeEstado(e) {
    if (e === "A")
      return "\u23F3 En Proceso";
    if (e === "E")
      return "\u{1F6F5} En Ruta";
    if (e === "F")
      return "\u2705 Entregado";
    return "\u2014";
  }
  badgeClass(e) {
    if (e === "A")
      return "badge-a";
    if (e === "E")
      return "badge-e";
    if (e === "F")
      return "badge-f";
    return "";
  }
  // ── DEMO DATA ──────────────────────────────────────────────────────
  demoClientes() {
    return [
      { idCliente: 1, nombresRaz\u00F3nSocial: "Inversiones Licoreras SAC", numeroDocumento: "20601234567", telefono: "987654321", email: "contacto@licoreras.pe", direccionPrincipal: "Av. Larco 456, Miraflores", limiteCredito: 5e3, estado: "A" },
      { idCliente: 2, nombresRaz\u00F3nSocial: "Juan Carlos Mendoza", numeroDocumento: "45891234", telefono: "912345678", email: "juan.m@gmail.com", direccionPrincipal: "Calle Los Olivos 123, San Isidro", limiteCredito: 1500, estado: "A" },
      { idCliente: 3, nombresRaz\u00F3nSocial: "Bodega Don Pepe EIRL", numeroDocumento: "20554433221", telefono: "945678123", email: "donpepe@bodega.pe", direccionPrincipal: "Av. Javier Prado 1850, Lince", limiteCredito: 3e3, estado: "A" }
    ];
  }
  demoProductos() {
    return [
      { idProducto: 1, codigoBarras: "LIC-001", nombre: "Whisky Johnnie Walker Black Label 750ml", descripcion: "Whisky escoc\xE9s 12 a\xF1os", precioCompra: 80, precioVenta: 129.9, stock: 24, estado: "A" },
      { idProducto: 2, codigoBarras: "LIC-002", nombre: "Vodka Absolut Original 750ml", descripcion: "Vodka sueco de trigo", precioCompra: 40, precioVenta: 69, stock: 18, estado: "A" },
      { idProducto: 3, codigoBarras: "LIC-003", nombre: "Ron Cartavio Aniversario 750ml", descripcion: "Ron peruano a\xF1ejado", precioCompra: 25, precioVenta: 45.5, stock: 12, estado: "A" },
      { idProducto: 4, codigoBarras: "LIC-004", nombre: "Pisco Cuatro Gallos Quebranta 750ml", descripcion: "Pisco puro de Ica", precioCompra: 25, precioVenta: 42, stock: 20, estado: "A" },
      { idProducto: 5, codigoBarras: "BEB-001", nombre: "Cerveza Cusque\xF1a Dorada Pack 6x330ml", descripcion: "Cerveza premium", precioCompra: 18, precioVenta: 28.5, stock: 45, estado: "A" },
      { idProducto: 6, codigoBarras: "VIN-001", nombre: "Vino Tacama Gran Blanco 750ml", descripcion: "Vino blanco peruano", precioCompra: 20, precioVenta: 38, stock: 16, estado: "A" }
    ];
  }
  static \u0275fac = function VendorPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorPanelComponent, selectors: [["app-vendor-panel"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 71, vars: 23, consts: [[1, "vp-root"], [1, "vp-header"], [1, "vp-header-inner"], [1, "vp-brand"], [1, "vp-logo-icon"], [1, "vp-title"], [1, "vp-sub"], [1, "vp-user-pill"], [1, "vp-avatar"], [1, "vp-user-meta"], [1, "vp-role-tag"], [1, "vp-logout", 3, "click"], [1, "vp-kpi-row"], [1, "vp-kpi-card"], [1, "kpi-ico"], [1, "kpi-label"], [1, "kpi-num"], [1, "vp-kpi-card", "gold"], [1, "vp-nav"], [1, "vp-tab", 3, "click"], [1, "vp-main"], ["class", "vp-toast ok", 4, "ngIf"], ["class", "vp-toast err", 4, "ngIf"], ["class", "vp-section", 4, "ngIf"], [1, "vp-toast", "ok"], [1, "vp-toast", "err"], [1, "vp-section"], [1, "sec-header"], [1, "vp-sale-grid"], [1, "vcard"], [1, "vcard-title"], [1, "form-grp"], [1, "vp-sel", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "form-grp", "mt-8"], ["class", "vp-sel", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], ["type", "text", "placeholder", "Direcci\xF3n de env\xEDo...", 1, "vp-inp", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Ej: Pagar contraentrega, tocar timbre...", 1, "vp-inp", 3, "ngModelChange", "ngModel"], [1, "vcard-col"], [1, "item-add-row"], [1, "vp-sel", "flex-g", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 1, "vp-inp", "qty", 3, "ngModelChange", "ngModel"], [1, "btn-add-item", 3, "click", "disabled"], ["class", "vcard mt-10", 4, "ngIf"], ["class", "vcard mt-10 empty-cart", 4, "ngIf"], [3, "ngValue"], ["class", "cliente-quick", 4, "ngIf"], [1, "cliente-quick"], [4, "ngIf"], [1, "gold-txt"], [1, "vp-sel", 3, "ngModelChange", "change", "ngModel"], [1, "vcard", "mt-10"], [1, "cart-grid"], [1, "cart-head-row"], ["class", "cart-item-row", 4, "ngFor", "ngForOf"], [1, "cart-tots"], [1, "tot-ln"], [1, "tot-ln", "total-ln"], [1, "gold-txt", "big"], [1, "btn-confirm", 3, "click", "disabled"], [1, "cart-item-row"], [1, "prod-nm"], [1, "btn-rm", 3, "click"], [1, "vcard", "mt-10", "empty-cart"], [1, "vp-search"], ["type", "text", "placeholder", "Buscar por c\xF3digo o cliente...", 3, "ngModelChange", "ngModel"], ["class", "vcard", 4, "ngIf"], ["class", "empty-state vcard", 4, "ngIf"], [1, "tbl-head"], ["class", "tbl-row", 4, "ngFor", "ngForOf"], [1, "tbl-row"], [1, "code-tag"], [1, "muted-txt"], [1, "estado-pill", 3, "ngClass"], [1, "empty-state", "vcard"], ["type", "text", "placeholder", "Buscar por nombre o documento...", 3, "ngModelChange", "ngModel"], [1, "client-grid"], ["class", "client-card", 4, "ngFor", "ngForOf"], [1, "client-card"], [1, "c-avatar"], [1, "c-body"], [1, "btn-venderle", 3, "click"], ["type", "text", "placeholder", "Buscar producto...", 3, "ngModelChange", "ngModel"], [1, "prod-grid"], ["class", "prod-card", 4, "ngFor", "ngForOf"], [1, "prod-card"], [1, "prod-icon-big"], [1, "prod-body"], ["class", "prod-desc", 4, "ngIf"], [1, "prod-meta-row"], [1, "prod-price", "gold-txt"], [1, "prod-stock"], [1, "btn-add-prod", 3, "click"], [1, "prod-desc"]], template: function VendorPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "\u{1F4BC}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div")(7, "h1", 5);
      \u0275\u0275text(8, "RomaPedidos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10, "Panel Comercial \u2014 Vendedor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "strong");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 10);
      \u0275\u0275text(18, "\u{1F4BC} VENDEDOR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 11);
      \u0275\u0275listener("click", function VendorPanelComponent_Template_button_click_19_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(20, "\u{1F6AA} Salir");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "section", 12)(22, "div", 13)(23, "span", 14);
      \u0275\u0275text(24, "\u{1F6CD}\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div")(26, "p", 15);
      \u0275\u0275text(27, "Pedidos Emitidos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "h3", 16);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 17)(31, "span", 14);
      \u0275\u0275text(32, "\u{1F4B0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div")(34, "p", 15);
      \u0275\u0275text(35, "Ventas Totales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "h3", 16);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 13)(40, "span", 14);
      \u0275\u0275text(41, "\u{1F37E}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div")(43, "p", 15);
      \u0275\u0275text(44, "Productos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "h3", 16);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 13)(48, "span", 14);
      \u0275\u0275text(49, "\u{1F465}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div")(51, "p", 15);
      \u0275\u0275text(52, "Clientes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "h3", 16);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "nav", 18)(56, "button", 19);
      \u0275\u0275listener("click", function VendorPanelComponent_Template_button_click_56_listener() {
        return ctx.activeTab = "nueva-venta";
      });
      \u0275\u0275text(57, "\u{1F6D2} Nueva Venta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 19);
      \u0275\u0275listener("click", function VendorPanelComponent_Template_button_click_58_listener() {
        return ctx.activeTab = "pedidos";
      });
      \u0275\u0275text(59, "\u{1F4CB} Pedidos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "button", 19);
      \u0275\u0275listener("click", function VendorPanelComponent_Template_button_click_60_listener() {
        return ctx.activeTab = "clientes";
      });
      \u0275\u0275text(61, "\u{1F465} Clientes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "button", 19);
      \u0275\u0275listener("click", function VendorPanelComponent_Template_button_click_62_listener() {
        return ctx.activeTab = "catalogo";
      });
      \u0275\u0275text(63, "\u{1F37E} Cat\xE1logo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "main", 20);
      \u0275\u0275template(65, VendorPanelComponent_div_65_Template, 2, 1, "div", 21)(66, VendorPanelComponent_div_66_Template, 2, 1, "div", 22)(67, VendorPanelComponent_div_67_Template, 41, 16, "div", 23)(68, VendorPanelComponent_div_68_Template, 12, 3, "div", 23)(69, VendorPanelComponent_div_69_Template, 13, 3, "div", 23)(70, VendorPanelComponent_div_70_Template, 13, 3, "div", 23);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate((ctx.auth.getUsername() || "V")[0].toUpperCase());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.auth.getUsername());
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.kpiPedidos);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(38, 20, ctx.kpiMonto, "1.2-2"), "");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.productos.length);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.clientes.length);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "nueva-venta");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "pedidos");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "clientes");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "catalogo");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.toastOk);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.toastErr);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "nueva-venta");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "pedidos");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "clientes");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "catalogo");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";\n\n\n\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.vp-root[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #09090b;\n  color: #f4f4f5;\n  font-family: "Inter", sans-serif;\n  display: flex;\n  flex-direction: column;\n}\n.vp-header[_ngcontent-%COMP%] {\n  background: rgba(14, 14, 18, .92);\n  border-bottom: 1px solid rgba(250, 204, 21, .18);\n  backdrop-filter: blur(14px);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  padding: 14px 24px;\n}\n.vp-header-inner[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.vp-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.vp-logo-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #facc15,\n      #eab308);\n  font-size: 1.4rem;\n  display: grid;\n  place-items: center;\n  box-shadow: 0 4px 16px rgba(250, 204, 21, .22);\n}\n.vp-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #fff;\n}\n.vp-sub[_ngcontent-%COMP%] {\n  font-size: .75rem;\n  color: #facc15;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n}\n.vp-user-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(255, 255, 255, .04);\n  border: 1px solid rgba(255, 255, 255, .08);\n  padding: 6px 14px;\n  border-radius: 100px;\n}\n.vp-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #facc15;\n  color: #09090b;\n  font-weight: 900;\n  display: grid;\n  place-items: center;\n  font-size: .9rem;\n}\n.vp-user-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.vp-user-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: .84rem;\n}\n.vp-role-tag[_ngcontent-%COMP%] {\n  font-size: .68rem;\n  color: #facc15;\n  font-weight: 700;\n}\n.vp-logout[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, .12);\n  border: 1px solid rgba(239, 68, 68, .25);\n  color: #fca5a5;\n  padding: 5px 10px;\n  border-radius: 8px;\n  font-size: .76rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all .2s;\n}\n.vp-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, .25);\n  color: #fff;\n}\n.vp-kpi-row[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 14px;\n  padding: 20px 24px 0;\n}\n.vp-kpi-card[_ngcontent-%COMP%] {\n  background: rgba(18, 18, 24, .85);\n  border: 1px solid rgba(255, 255, 255, .07);\n  border-radius: 16px;\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  transition: transform .2s;\n}\n.vp-kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.vp-kpi-card.gold[_ngcontent-%COMP%] {\n  border-color: rgba(250, 204, 21, .28);\n}\n.kpi-ico[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: .71rem;\n  color: #71717a;\n  text-transform: uppercase;\n  font-weight: 700;\n  letter-spacing: .5px;\n}\n.kpi-num[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: #fff;\n  margin-top: 2px;\n}\n.vp-kpi-card.gold[_ngcontent-%COMP%]   .kpi-num[_ngcontent-%COMP%] {\n  color: #facc15;\n}\n.vp-nav[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 18px auto 0;\n  width: 100%;\n  display: flex;\n  gap: 6px;\n  padding: 0 24px;\n  flex-wrap: wrap;\n}\n.vp-tab[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .04);\n  border: 1px solid rgba(255, 255, 255, .07);\n  color: #a1a1aa;\n  padding: 9px 20px;\n  border-radius: 10px;\n  font-size: .85rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all .2s;\n}\n.vp-tab[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: rgba(255, 255, 255, .08);\n}\n.vp-tab.active[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, .15);\n  border-color: #facc15;\n  color: #facc15;\n}\n.vp-main[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  width: 100%;\n  padding: 20px 24px 40px;\n  flex: 1;\n}\n.vp-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sec-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #fff;\n}\n.sec-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: .85rem;\n  color: #71717a;\n  margin-top: 4px;\n}\n.vp-toast[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: .88rem;\n  margin-bottom: 4px;\n}\n.vp-toast.ok[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, .15);\n  border: 1px solid rgba(34, 197, 94, .35);\n  color: #86efac;\n}\n.vp-toast.err[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, .15);\n  border: 1px solid rgba(239, 68, 68, .35);\n  color: #fca5a5;\n}\n.vcard[_ngcontent-%COMP%] {\n  background: rgba(18, 18, 24, .85);\n  border: 1px solid rgba(255, 255, 255, .08);\n  border-radius: 18px;\n  padding: 20px;\n}\n.vcard-title[_ngcontent-%COMP%] {\n  font-size: .95rem;\n  font-weight: 800;\n  color: #fff;\n  margin-bottom: 14px;\n}\n.vp-sale-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 360px 1fr;\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .vp-sale-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.vcard-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.mt-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.form-grp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 12px;\n}\n.form-grp[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: .78rem;\n  color: #a1a1aa;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n}\n.vp-sel[_ngcontent-%COMP%], \n.vp-inp[_ngcontent-%COMP%] {\n  background: rgba(10, 10, 14, .7);\n  border: 1.5px solid rgba(255, 255, 255, .09);\n  color: #f4f4f5;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: .88rem;\n  width: 100%;\n  outline: none;\n  transition: border-color .2s;\n  font-family: "Inter", sans-serif;\n}\n.vp-sel[_ngcontent-%COMP%]:focus, \n.vp-inp[_ngcontent-%COMP%]:focus {\n  border-color: #facc15;\n}\n.vp-inp.qty[_ngcontent-%COMP%] {\n  width: 72px;\n  text-align: center;\n  flex-shrink: 0;\n}\ntextarea.vp-inp[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.cliente-quick[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, .06);\n  border: 1px solid rgba(250, 204, 21, .15);\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: .82rem;\n  color: #d4d4d8;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 12px;\n}\n.item-add-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.flex-g[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n}\n.btn-add-item[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, .18);\n  border: 1px solid rgba(250, 204, 21, .35);\n  color: #facc15;\n  padding: 10px 16px;\n  border-radius: 10px;\n  font-size: .85rem;\n  font-weight: 800;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all .2s;\n}\n.btn-add-item[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(250, 204, 21, .3);\n}\n.btn-add-item[_ngcontent-%COMP%]:disabled {\n  opacity: .4;\n  cursor: not-allowed;\n}\n.cart-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  margin-bottom: 14px;\n}\n.cart-head-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 50px 80px 90px 30px;\n  font-size: .72rem;\n  color: #71717a;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 6px 4px;\n  border-bottom: 1px solid rgba(255, 255, 255, .07);\n}\n.cart-item-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 50px 80px 90px 30px;\n  font-size: .84rem;\n  padding: 8px 4px;\n  border-bottom: 1px solid rgba(255, 255, 255, .05);\n  align-items: center;\n}\n.prod-nm[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #e4e4e7;\n}\n.btn-rm[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, .12);\n  border: 1px solid rgba(239, 68, 68, .2);\n  color: #f87171;\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: .8rem;\n}\n.cart-tots[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 14px;\n  padding-top: 8px;\n}\n.tot-ln[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: .85rem;\n  color: #a1a1aa;\n}\n.total-ln[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding-top: 4px;\n  border-top: 1px solid rgba(255, 255, 255, .08);\n}\n.gold-txt[_ngcontent-%COMP%] {\n  color: #facc15;\n}\n.big[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  border-radius: 12px;\n  border: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #facc15,\n      #eab308);\n  color: #09090b;\n  font-size: .95rem;\n  font-weight: 900;\n  cursor: pointer;\n  transition: all .2s;\n  box-shadow: 0 4px 16px rgba(250, 204, 21, .25);\n}\n.btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 22px rgba(250, 204, 21, .35);\n}\n.btn-confirm[_ngcontent-%COMP%]:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.empty-cart[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #71717a;\n  padding: 30px 20px;\n}\n.empty-cart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.vp-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(10, 10, 14, .7);\n  border: 1.5px solid rgba(255, 255, 255, .09);\n  border-radius: 12px;\n  padding: 0 14px;\n}\n.vp-search[_ngcontent-%COMP%]:focus-within {\n  border-color: #facc15;\n}\n.vp-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #f4f4f5;\n  padding: 11px 0;\n  outline: none;\n  width: 100%;\n  font-size: .9rem;\n}\n.tbl-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr 130px 110px 130px;\n  font-size: .72rem;\n  font-weight: 700;\n  color: #71717a;\n  text-transform: uppercase;\n  padding: 8px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, .07);\n}\n.tbl-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr 130px 110px 130px;\n  padding: 12px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, .05);\n  font-size: .85rem;\n  align-items: center;\n  transition: background .15s;\n}\n.tbl-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .03);\n}\n.code-tag[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, .12);\n  color: #facc15;\n  border: 1px solid rgba(250, 204, 21, .25);\n  padding: 2px 8px;\n  border-radius: 6px;\n  font-size: .78rem;\n  font-weight: 800;\n}\n.muted-txt[_ngcontent-%COMP%] {\n  color: #71717a;\n  font-size: .8rem;\n}\n.estado-pill[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 100px;\n  font-size: .74rem;\n  font-weight: 700;\n}\n.badge-a[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, .15);\n  color: #fbbf24;\n  border: 1px solid rgba(245, 158, 11, .3);\n}\n.badge-e[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, .15);\n  color: #60a5fa;\n  border: 1px solid rgba(59, 130, 246, .3);\n}\n.badge-f[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, .15);\n  color: #4ade80;\n  border: 1px solid rgba(34, 197, 94, .3);\n}\n.client-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.client-card[_ngcontent-%COMP%] {\n  background: rgba(18, 18, 24, .85);\n  border: 1px solid rgba(255, 255, 255, .08);\n  border-radius: 18px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: border-color .2s;\n}\n.client-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(250, 204, 21, .3);\n}\n.c-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #facc15,\n      #eab308);\n  color: #09090b;\n  font-weight: 900;\n  font-size: 1.2rem;\n  display: grid;\n  place-items: center;\n}\n.c-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #fff;\n  margin-bottom: 6px;\n}\n.c-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: .82rem;\n  color: #a1a1aa;\n  margin-bottom: 2px;\n}\n.btn-venderle[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #facc15,\n      #eab308);\n  color: #09090b;\n  border: 0;\n  padding: 10px;\n  border-radius: 10px;\n  font-size: .85rem;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all .2s;\n}\n.btn-venderle[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(250, 204, 21, .3);\n}\n.prod-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.prod-card[_ngcontent-%COMP%] {\n  background: rgba(18, 18, 24, .85);\n  border: 1px solid rgba(255, 255, 255, .08);\n  border-radius: 18px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: border-color .2s;\n}\n.prod-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(250, 204, 21, .28);\n}\n.prod-icon-big[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n}\n.prod-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: .95rem;\n  font-weight: 800;\n  color: #fff;\n  margin-bottom: 4px;\n}\n.prod-desc[_ngcontent-%COMP%] {\n  font-size: .79rem;\n  color: #71717a;\n}\n.prod-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 6px;\n}\n.prod-price[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 900;\n}\n.prod-stock[_ngcontent-%COMP%] {\n  font-size: .78rem;\n  color: #a1a1aa;\n}\n.prod-stock.low[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.btn-add-prod[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, .14);\n  border: 1px solid rgba(250, 204, 21, .3);\n  color: #facc15;\n  padding: 9px;\n  border-radius: 10px;\n  font-size: .84rem;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all .2s;\n}\n.btn-add-prod[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, .25);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #71717a;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  display: block;\n  margin-bottom: 10px;\n}\n@media (max-width: 640px) {\n  .vp-header[_ngcontent-%COMP%], \n   .vp-kpi-row[_ngcontent-%COMP%], \n   .vp-nav[_ngcontent-%COMP%], \n   .vp-main[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n  .tbl-head[_ngcontent-%COMP%], \n   .tbl-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 80px;\n  }\n  .tbl-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3), \n   .tbl-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3), \n   .tbl-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5), \n   .tbl-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n    display: none;\n  }\n  .cart-head-row[_ngcontent-%COMP%], \n   .cart-item-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 40px 70px 30px;\n  }\n  .cart-head-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3), \n   .cart-item-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=vendor-panel.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorPanelComponent, { className: "VendorPanelComponent", filePath: "app\\features\\vendor\\vendor-panel.component.ts", lineNumber: 15 });
})();
export {
  VendorPanelComponent
};
//# sourceMappingURL=vendor-panel.component-MYKYMV3R.js.map
