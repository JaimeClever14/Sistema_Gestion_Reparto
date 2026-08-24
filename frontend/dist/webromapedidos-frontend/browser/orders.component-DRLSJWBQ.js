import {
  DefaultValueAccessor,
  FormBuilder,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TBAMR4TH.js";

// src/app/features/orders/orders.component.ts
function OrdersComponent_section_24_div_15_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Doc: ", order_r2.cliente == null ? null : order_r2.cliente.numeroDocumento, "");
  }
}
function OrdersComponent_section_24_div_15_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function OrdersComponent_section_24_div_15_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const order_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cambiarEstado(order_r2, "F"));
    });
    \u0275\u0275text(1, " \u2705 ");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_section_24_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, OrdersComponent_section_24_div_15_span_6_Template, 2, 1, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 25);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 27)(13, "span", 28);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 29)(16, "button", 30);
    \u0275\u0275listener("click", function OrdersComponent_section_24_div_15_Template_button_click_16_listener() {
      const order_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDetailModal(order_r2));
    });
    \u0275\u0275text(17, " \u{1F441}\uFE0F ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, OrdersComponent_section_24_div_15_button_18_Template, 2, 0, "button", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r2.codigoPedido || "PED-" + order_r2.idPedido);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getClienteNombre(order_r2.cliente));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r2.cliente == null ? null : order_r2.cliente.numeroDocumento);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r2.fechaPedido ? \u0275\u0275pipeBind2(9, 9, order_r2.fechaPedido, "short") : "Hoy");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", (order_r2.montoTotal || 0).toFixed(2), "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("completed", order_r2.estado === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r2.estado === "A" ? "En Proceso" : order_r2.estado === "F" ? "Completado" : "Cancelado", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", order_r2.estado === "A");
  }
}
function OrdersComponent_section_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18)(1, "div", 19)(2, "div", 20)(3, "span");
    \u0275\u0275text(4, "C\xF3digo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Fecha / Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Monto Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Acciones");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, OrdersComponent_section_24_div_15_Template, 19, 12, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r2.pedidosFiltrados);
  }
}
function OrdersComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "p");
    \u0275\u0275text(2, "No hay pedidos registrados que coincidan con la b\xFAsqueda.");
    \u0275\u0275elementEnd()();
  }
}
function OrdersComponent_div_26_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", c_r6.idCliente);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.getClienteNombre(c_r6), " (Doc: ", c_r6.numeroDocumento || "S/N", ") ");
  }
}
function OrdersComponent_div_26_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275property("value", p_r7.idProducto);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", p_r7.nombre, " - S/ ", p_r7.precioVenta.toFixed(2), " (Stock: ", p_r7.stock, ") ");
  }
}
function OrdersComponent_div_26_div_29_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 60);
    \u0275\u0275listener("click", function OrdersComponent_div_26_div_29_div_11_Template_button_click_9_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeItemFromCart(i_r9));
    });
    \u0275\u0275text(10, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.cantidad);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", item_r10.precioUnitario.toFixed(2), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", item_r10.subtotal.toFixed(2), "");
  }
}
function OrdersComponent_div_26_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "span");
    \u0275\u0275text(3, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Cant.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "P.Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, OrdersComponent_div_26_div_29_div_11_Template, 11, 4, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r2.cartItems);
  }
}
function OrdersComponent_div_26_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div")(2, "span");
    \u0275\u0275text(3, "Subtotal (sin IGV):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "span");
    \u0275\u0275text(8, "IGV (18%):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 62)(12, "span");
    \u0275\u0275text(13, "TOTAL PEDIDO:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", ctx_r2.subtotalCarrito.toFixed(2), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", ctx_r2.igvCarrito.toFixed(2), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", ctx_r2.totalCarrito.toFixed(2), "");
  }
}
function OrdersComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "div", 37)(3, "h3");
    \u0275\u0275text(4, "\u{1F6CD}\uFE0F Creador de Nuevo Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275listener("click", function OrdersComponent_div_26_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNewModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39)(8, "div", 40)(9, "label");
    \u0275\u0275text(10, "Cliente Comercial *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_div_26_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedClienteId, $event) || (ctx_r2.selectedClienteId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(12, OrdersComponent_div_26_option_12_Template, 2, 3, "option", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 42)(14, "label");
    \u0275\u0275text(15, " Direcci\xF3n de Entrega ");
    \u0275\u0275elementStart(16, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_div_26_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.direccionEntrega, $event) || (ctx_r2.direccionEntrega = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "label");
    \u0275\u0275text(18, " Observaciones ");
    \u0275\u0275elementStart(19, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_div_26_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.observaciones, $event) || (ctx_r2.observaciones = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(20, "hr", 45);
    \u0275\u0275elementStart(21, "h4");
    \u0275\u0275text(22, "A\xF1adir Productos al Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 46)(24, "select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_div_26_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedProductoId, $event) || (ctx_r2.selectedProductoId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(25, OrdersComponent_div_26_option_25_Template, 2, 4, "option", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_div_26_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.itemCantidad, $event) || (ctx_r2.itemCantidad = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 49);
    \u0275\u0275listener("click", function OrdersComponent_div_26_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addItemToCart());
    });
    \u0275\u0275text(28, "+ Agregar");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, OrdersComponent_div_26_div_29_Template, 12, 1, "div", 50)(30, OrdersComponent_div_26_div_30_Template, 16, 3, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 52)(32, "button", 53);
    \u0275\u0275listener("click", function OrdersComponent_div_26_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNewModal());
    });
    \u0275\u0275text(33, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 54);
    \u0275\u0275listener("click", function OrdersComponent_div_26_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveOrder());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedClienteId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.clientes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.direccionEntrega);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.observaciones);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedProductoId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.productos);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.itemCantidad);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.cartItems.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.cartItems.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving || ctx_r2.cartItems.length === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? "Procesando..." : "Confirmar Pedido \u{1F680}", " ");
  }
}
function OrdersComponent_div_27_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((d_r12.producto == null ? null : d_r12.producto.nombre) || "Producto #" + d_r12.idProducto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.cantidad);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", d_r12.precioUnitario.toFixed(2), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", d_r12.subtotal.toFixed(2), "");
  }
}
function OrdersComponent_div_27_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "p")(2, "strong");
    \u0275\u0275text(3, "Repartidor Asignado:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r2.selectedPedido.repartidorAsignado.nombres, " ", ctx_r2.selectedPedido.repartidorAsignado.apellidos, "");
  }
}
function OrdersComponent_div_27_ng_template_47_div_0_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 75);
    \u0275\u0275text(1, "Cargando repartidores...");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_div_27_ng_template_47_div_0_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rep_r14 = ctx.$implicit;
    \u0275\u0275property("value", rep_r14.idUsuario);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", rep_r14.nombres, " ", rep_r14.apellidos, " (", rep_r14.username, ") ");
  }
}
function OrdersComponent_div_27_ng_template_47_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "label");
    \u0275\u0275text(3, "Seleccionar Repartidor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_div_27_ng_template_47_div_0_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedRepartidorId, $event) || (ctx_r2.selectedRepartidorId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(5, OrdersComponent_div_27_ng_template_47_div_0_option_5_Template, 2, 0, "option", 74)(6, OrdersComponent_div_27_ng_template_47_div_0_option_6_Template, 2, 4, "option", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 54);
    \u0275\u0275listener("click", function OrdersComponent_div_27_ng_template_47_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.asignarRepartidor());
    });
    \u0275\u0275text(8, " Asignar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedRepartidorId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.repartidores.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.repartidores);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.selectedRepartidorId || ctx_r2.saving);
  }
}
function OrdersComponent_div_27_ng_template_47_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, " Este pedido ya est\xE1 completado o cancelado. ");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_div_27_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrdersComponent_div_27_ng_template_47_div_0_Template, 9, 4, "div", 70)(1, OrdersComponent_div_27_ng_template_47_p_1_Template, 2, 0, "p", 71);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r2.selectedPedido.estado === "A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPedido.estado !== "A");
  }
}
function OrdersComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 63)(2, "div", 37)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275listener("click", function OrdersComponent_div_27_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetailModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39)(8, "div", 64)(9, "div")(10, "span", 65);
    \u0275\u0275text(11, "Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "span", 65);
    \u0275\u0275text(16, "Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 28);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "span", 65);
    \u0275\u0275text(21, "Direcci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "h4", 66);
    \u0275\u0275text(25, "Productos en el pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 56)(27, "div", 57)(28, "span");
    \u0275\u0275text(29, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "Subtotal");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(36, OrdersComponent_div_27_div_36_Template, 9, 4, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 61)(38, "div", 62)(39, "span");
    \u0275\u0275text(40, "TOTAL FINAL:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "strong");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(43, "hr", 67);
    \u0275\u0275elementStart(44, "h4", 66);
    \u0275\u0275text(45, "\u{1F69A} Despacho / Asignaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, OrdersComponent_div_27_div_46_Template, 5, 2, "div", 68)(47, OrdersComponent_div_27_ng_template_47_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 52)(50, "button", 53);
    \u0275\u0275listener("click", function OrdersComponent_div_27_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetailModal());
    });
    \u0275\u0275text(51, "Cerrar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const noAsignado_r15 = \u0275\u0275reference(48);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u{1F4CB} Detalle del Pedido #", ctx_r2.selectedPedido.codigoPedido || ctx_r2.selectedPedido.idPedido, "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.getClienteNombre(ctx_r2.selectedPedido.cliente));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPedido.estado === "A" ? "En Proceso" : "Completado");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPedido.direccionEntrega || "Tienda Principal");
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r2.selectedPedido.detalles);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", (ctx_r2.selectedPedido.montoTotal || 0).toFixed(2), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.selectedPedido.repartidorAsignado)("ngIfElse", noAsignado_r15);
  }
}
var OrdersComponent = class _OrdersComponent {
  api = inject(ApiService);
  fb = inject(FormBuilder);
  loading = true;
  pedidos = [];
  clientes = [];
  productos = [];
  repartidores = [];
  searchTerm = "";
  selectedEstado = "TODOS";
  showModalNew = false;
  showModalDetail = false;
  selectedPedido = null;
  saving = false;
  // Asignacion de Repartidor
  selectedRepartidorId = null;
  // Creador de pedido
  selectedClienteId = null;
  direccionEntrega = "";
  observaciones = "";
  cartItems = [];
  // Agregar item al carrito
  selectedProductoId = null;
  itemCantidad = 1;
  ngOnInit() {
    this.cargarDatos();
  }
  cargarDatos() {
    this.loading = true;
    this.api.get("/pedidos").subscribe({
      next: (backendPeds) => {
        this.pedidos = this.mergeWithSharedOrders(backendPeds || []);
      },
      error: () => {
        this.pedidos = this.mergeWithSharedOrders(this.getDemoOrders());
      },
      complete: () => {
        this.loading = false;
      }
    });
    this.api.get("/clientes").subscribe({
      next: (clis) => this.clientes = clis,
      error: () => {
        this.clientes = [
          { idCliente: 1, nombresRaz\u00F3nSocial: "Inversiones Licoreras SAC", numeroDocumento: "20601234567", tipoDocumento: { nombreTipoDocumento: "RUC" }, email: "contacto@licoreras.pe", telefono: "987654321", estado: "A" },
          { idCliente: 2, nombresRaz\u00F3nSocial: "Juan Carlos Mendoza", numeroDocumento: "45891234", tipoDocumento: { nombreTipoDocumento: "DNI" }, email: "juan.mendoza@gmail.com", telefono: "912345678", estado: "A" }
        ];
      }
    });
    this.api.get("/usuarios").subscribe({
      next: (users) => {
        this.repartidores = users.filter((u) => u.idRol === 4);
      },
      error: () => {
        this.repartidores = [
          { idUsuario: 2, nombres: "Carlos", apellidos: "Repartidor", username: "carlos_rep", email: "carlos@roma.com", idRol: 4, estado: "A" },
          { idUsuario: 5, nombres: "Miguel", apellidos: "R\xE1pido", username: "mrapido", email: "miguel@roma.com", idRol: 4, estado: "A" }
        ];
      }
    });
    this.api.get("/productos").subscribe({
      next: (prods) => this.productos = prods,
      error: () => {
        this.productos = [
          { idProducto: 1, codigoBarras: "LIC-001", nombre: "Whisky Johnnie Walker Black 750ml", precioCompra: 80, precioVenta: 129.9, stock: 14 },
          { idProducto: 2, codigoBarras: "LIC-002", nombre: "Vodka Absolut 750ml", precioCompra: 40, precioVenta: 69, stock: 22 },
          { idProducto: 3, codigoBarras: "LIC-003", nombre: "Ron Cartavio Aniversario 750ml", precioCompra: 25, precioVenta: 45.5, stock: 15 }
        ];
      }
    });
  }
  mergeWithSharedOrders(baseList) {
    try {
      const saved = localStorage.getItem("roma_shared_orders");
      if (saved) {
        const shared = JSON.parse(saved);
        const map = /* @__PURE__ */ new Map();
        shared.forEach((o) => {
          const key = o.codigoPedido || String(o.idPedido);
          map.set(key, o);
        });
        baseList.forEach((o) => {
          const key = o.codigoPedido || String(o.idPedido);
          if (!map.has(key)) {
            map.set(key, o);
          }
        });
        return Array.from(map.values());
      }
    } catch (e) {
      console.warn("Error reading shared orders", e);
    }
    return baseList;
  }
  saveToSharedOrders(order) {
    try {
      const existing = localStorage.getItem("roma_shared_orders");
      let orders = existing ? JSON.parse(existing) : [];
      orders = orders.filter((o) => o.codigoPedido !== order.codigoPedido && o.idPedido !== order.idPedido);
      orders.unshift(order);
      localStorage.setItem("roma_shared_orders", JSON.stringify(orders));
    } catch (e) {
      console.warn("Error persisting order", e);
    }
  }
  get pedidosFiltrados() {
    return this.pedidos.filter((p) => {
      const clientName = this.getClienteNombre(p.cliente);
      const matchSearch = !this.searchTerm || p.codigoPedido && p.codigoPedido.toLowerCase().includes(this.searchTerm.toLowerCase()) || clientName && clientName.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchEstado = this.selectedEstado === "TODOS" || this.selectedEstado === "ACTIVO" && p.estado === "A" || this.selectedEstado === "COMPLETADO" && p.estado === "F";
      return matchSearch && matchEstado;
    });
  }
  openNewModal() {
    this.selectedClienteId = this.clientes.length > 0 ? this.clientes[0].idCliente || null : null;
    this.direccionEntrega = "";
    this.observaciones = "";
    this.cartItems = [];
    this.selectedProductoId = this.productos.length > 0 ? this.productos[0].idProducto || null : null;
    this.itemCantidad = 1;
    this.showModalNew = true;
  }
  closeNewModal() {
    this.showModalNew = false;
  }
  openDetailModal(pedido) {
    this.selectedPedido = pedido;
    this.showModalDetail = true;
  }
  closeDetailModal() {
    this.showModalDetail = false;
    this.selectedPedido = null;
  }
  addItemToCart() {
    if (!this.selectedProductoId || this.itemCantidad <= 0)
      return;
    const prod = this.productos.find((p) => p.idProducto === Number(this.selectedProductoId));
    if (!prod)
      return;
    const existingIdx = this.cartItems.findIndex((item) => item.producto.idProducto === prod.idProducto);
    if (existingIdx !== -1) {
      this.cartItems[existingIdx].cantidad += this.itemCantidad;
      this.cartItems[existingIdx].subtotal = this.cartItems[existingIdx].cantidad * prod.precioVenta;
    } else {
      this.cartItems.push({
        producto: prod,
        cantidad: this.itemCantidad,
        precioUnitario: prod.precioVenta,
        subtotal: this.itemCantidad * prod.precioVenta
      });
    }
    this.itemCantidad = 1;
  }
  removeItemFromCart(idx) {
    this.cartItems.splice(idx, 1);
  }
  get totalCarrito() {
    return this.cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  }
  get subtotalCarrito() {
    return this.totalCarrito / 1.18;
  }
  get igvCarrito() {
    return this.totalCarrito - this.subtotalCarrito;
  }
  getClienteNombre(cliente) {
    if (!cliente)
      return "Cliente General";
    return cliente["nombresRaz\xF3nSocial"] || cliente["nombresRazonSocial"] || "Cliente Registrado";
  }
  saveOrder() {
    if (!this.selectedClienteId || this.cartItems.length === 0) {
      alert("Debes seleccionar un cliente y al menos un producto en el pedido.");
      return;
    }
    this.saving = true;
    const clienteSel = this.clientes.find((c) => c.idCliente === Number(this.selectedClienteId));
    const nuevoPedido = {
      idPedido: Date.now(),
      codigoPedido: `PED-2026-${Math.floor(100 + Math.random() * 900)}`,
      idCliente: Number(this.selectedClienteId),
      cliente: clienteSel,
      montoSubtotal: Number(this.subtotalCarrito.toFixed(2)),
      montoIgv: Number(this.igvCarrito.toFixed(2)),
      montoTotal: Number(this.totalCarrito.toFixed(2)),
      direccionEntrega: this.direccionEntrega || (clienteSel?.direccionPrincipal || "Tienda Principal"),
      observaciones: this.observaciones,
      fechaPedido: (/* @__PURE__ */ new Date()).toISOString(),
      estado: "A",
      detalles: this.cartItems.map((ci) => ({
        idProducto: ci.producto.idProducto,
        cantidad: ci.cantidad,
        precioUnitario: ci.precioUnitario,
        subtotal: ci.subtotal,
        producto: ci.producto
      }))
    };
    this.saveToSharedOrders(nuevoPedido);
    this.api.post("/pedidos", nuevoPedido).subscribe({
      next: (res) => {
        if (res && res.idPedido) {
          nuevoPedido.idPedido = res.idPedido;
          this.saveToSharedOrders(nuevoPedido);
        }
        this.pedidos.unshift(nuevoPedido);
        this.closeNewModal();
      },
      error: () => {
        this.pedidos.unshift(nuevoPedido);
        this.closeNewModal();
      },
      complete: () => this.saving = false
    });
  }
  cambiarEstado(pedido, nuevoEstado) {
    pedido.estado = nuevoEstado;
    this.saveToSharedOrders(pedido);
    if (pedido.idPedido) {
      this.api.put(`/pedidos/${pedido.idPedido}`, pedido).subscribe();
    }
  }
  asignarRepartidor() {
    if (!this.selectedPedido || !this.selectedRepartidorId)
      return;
    this.saving = true;
    const repartidor = this.repartidores.find((r) => r.idUsuario === Number(this.selectedRepartidorId));
    if (repartidor && this.selectedPedido) {
      this.selectedPedido.repartidorAsignado = repartidor;
      this.saveToSharedOrders(this.selectedPedido);
    }
    this.saving = false;
    this.selectedRepartidorId = null;
  }
  getDemoOrders() {
    return [
      {
        idPedido: 101,
        codigoPedido: "PED-2026-001",
        idCliente: 1,
        cliente: { nombresRaz\u00F3nSocial: "Inversiones Licoreras SAC", numeroDocumento: "20601234567" },
        montoSubtotal: 219.41,
        montoIgv: 39.49,
        montoTotal: 258.9,
        fechaPedido: "2026-08-09T14:30:00",
        direccionEntrega: "Av. Larco 456, Miraflores",
        estado: "A"
      },
      {
        idPedido: 102,
        codigoPedido: "PED-2026-002",
        idCliente: 2,
        cliente: { nombresRaz\u00F3nSocial: "Juan Carlos Mendoza", numeroDocumento: "45891234" },
        montoSubtotal: 122.88,
        montoIgv: 22.12,
        montoTotal: 145,
        fechaPedido: "2026-08-09T16:10:00",
        direccionEntrega: "Calle Los Olivos 123, San Isidro",
        estado: "F"
      }
    ];
  }
  static \u0275fac = function OrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrdersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 6, consts: [["noAsignado", ""], [1, "grid-head"], [1, "eyebrow"], [1, "muted"], [1, "actions"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "filters-bar", "glass"], [1, "search-box"], [1, "search-icon"], ["type", "text", "placeholder", "Buscar por c\xF3digo de pedido o nombre de cliente...", 3, "ngModelChange", "ngModel"], [1, "select-box"], [3, "ngModelChange", "ngModel"], ["value", "TODOS"], ["value", "ACTIVO"], ["value", "COMPLETADO"], ["class", "table-container glass", 4, "ngIf"], ["class", "empty-state glass", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [1, "table-container", "glass"], [1, "table"], [1, "row", "head"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "client-name"], ["class", "client-doc", 4, "ngIf"], [1, "date"], [1, "total"], [1, "status-cell"], [1, "badge-status"], [1, "table-actions"], ["type", "button", "title", "Ver Detalle", 1, "btn-icon", 3, "click"], ["type", "button", "class", "btn-icon complete", "title", "Marcar Entregado", 3, "click", 4, "ngIf"], [1, "client-doc"], ["type", "button", "title", "Marcar Entregado", 1, "btn-icon", "complete", 3, "click"], [1, "empty-state", "glass"], [1, "modal-overlay"], [1, "modal-card", "glass", "max-w-lg"], [1, "modal-header"], ["type", "button", 1, "close-btn", 3, "click"], [1, "modal-body"], [1, "form-group"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-row"], ["type", "text", "placeholder", "Direcci\xF3n de despacho...", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ej. Entregar en la tarde", 3, "ngModelChange", "ngModel"], [1, "divider"], [1, "item-builder"], [1, "prod-select", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 1, "qty-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn-add", 3, "click"], ["class", "cart-table", 4, "ngIf"], ["class", "cart-summary", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "button", 1, "btn-primary", 3, "click", "disabled"], [3, "value"], [1, "cart-table"], [1, "cart-row", "head"], ["class", "cart-row", 4, "ngFor", "ngForOf"], [1, "cart-row"], ["type", "button", 1, "btn-remove", 3, "click"], [1, "cart-summary"], [1, "total-line"], [1, "modal-card", "glass"], [1, "detail-grid"], [1, "label"], [1, "mt-4"], [1, "divider", "mt-4"], ["class", "repartidor-info", 4, "ngIf", "ngIfElse"], [1, "repartidor-info"], ["class", "form-row align-items-end", 4, "ngIf"], ["class", "muted", 4, "ngIf"], [1, "form-row", "align-items-end"], [1, "form-group", 2, "flex", "1"], ["value", "", 4, "ngIf"], ["value", ""]], template: function OrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1)(1, "div")(2, "p", 2);
      \u0275\u0275text(3, "Gesti\xF3n de Ventas y Despacho");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Pedidos Comercial y Entregas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Crea pedidos, selecciona \xEDtems del cat\xE1logo y actualiza estados de despacho en tiempo real.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 4)(9, "button", 5);
      \u0275\u0275listener("click", function OrdersComponent_Template_button_click_9_listener() {
        return ctx.openNewModal();
      });
      \u0275\u0275text(10, " \u{1F6CD}\uFE0F + Nuevo Pedido ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "section", 6)(12, "div", 7)(13, "span", 8);
      \u0275\u0275text(14, "\u{1F50D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 10)(17, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_Template_select_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedEstado, $event) || (ctx.selectedEstado = $event);
        return $event;
      });
      \u0275\u0275elementStart(18, "option", 12);
      \u0275\u0275text(19, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 13);
      \u0275\u0275text(21, "Activos (En proceso)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 14);
      \u0275\u0275text(23, "Completados / Entregados");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(24, OrdersComponent_section_24_Template, 16, 1, "section", 15)(25, OrdersComponent_div_25_Template, 3, 0, "div", 16)(26, OrdersComponent_div_26_Template, 36, 11, "div", 17)(27, OrdersComponent_div_27_Template, 52, 8, "div", 17);
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedEstado);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.pedidosFiltrados.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.pedidosFiltrados.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModalNew);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModalDetail && ctx.selectedPedido);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, ReactiveFormsModule], styles: ["\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 16px;\n  margin-bottom: 22px;\n  flex-wrap: wrap;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.22em;\n  color: var(--primary);\n  font-size: 0.72rem;\n  font-weight: 800;\n  margin: 0;\n}\n.grid-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  font-size: clamp(1.6rem, 2.5vw, 2.2rem);\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n}\n.grid-head[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  color: #a1a1aa;\n  font-size: 0.92rem;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 240px;\n  gap: 14px;\n  padding: 14px 18px;\n  border-radius: 16px;\n  margin-bottom: 22px;\n  background: rgba(18, 18, 24, 0.75);\n  border: 1px solid rgba(250, 204, 21, 0.15);\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(10, 10, 14, 0.7);\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 0 14px;\n  transition: all 0.2s ease;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #facc15;\n  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.2);\n}\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #71717a;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  background: transparent;\n  color: #ffffff;\n  padding: 12px 0;\n  outline: none;\n  font-size: 0.94rem;\n}\n.select-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  background: rgba(10, 10, 14, 0.7);\n  color: #ffffff;\n  border-radius: 12px;\n  padding: 12px 14px;\n  outline: none;\n  cursor: pointer;\n  font-size: 0.92rem;\n  transition: all 0.2s ease;\n}\n.select-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #facc15;\n  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.2);\n}\n.select-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #18181b;\n  color: #ffffff;\n}\n.table-container[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  padding: 22px;\n  background: rgba(18, 18, 24, 0.85);\n  border: 1px solid rgba(250, 204, 21, 0.14);\n}\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 2fr 1.2fr 1.2fr 1.2fr 1fr;\n  gap: 12px;\n  align-items: center;\n  padding: 14px 16px;\n  border-radius: 12px;\n  background: rgba(10, 10, 14, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 0.92rem;\n  transition: all 0.2s ease;\n}\n.row[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.05);\n  border-color: rgba(250, 204, 21, 0.2);\n}\n.row.head[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: #71717a;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n}\n.client-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  color: #ffffff;\n}\n.client-doc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #a1a1aa;\n}\n.total[_ngcontent-%COMP%] {\n  color: #facc15;\n  font-size: 1.05rem;\n  font-weight: 800;\n}\n.badge-status[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 100px;\n  background: rgba(250, 204, 21, 0.15);\n  color: #facc15;\n  font-size: 0.78rem;\n  font-weight: 700;\n  display: inline-block;\n  width: fit-content;\n}\n.badge-status.completed[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #4ade80;\n}\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  color: #e4e4e7;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  transition: all 0.2s;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.15);\n  border-color: rgba(250, 204, 21, 0.4);\n  color: #facc15;\n}\n.btn-icon.complete[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.2);\n  border-color: rgba(34, 197, 94, 0.4);\n  color: #4ade80;\n}\n.repartidor-info[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, 0.08);\n  border: 1px solid rgba(250, 204, 21, 0.25);\n  padding: 12px;\n  border-radius: 12px;\n  color: #facc15;\n}\n.repartidor-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  border-radius: 18px;\n  color: #71717a;\n  background: rgba(18, 18, 24, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: grid;\n  place-items: center;\n  z-index: 999;\n  padding: 20px;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 650px;\n  border-radius: 22px;\n  padding: 28px;\n  display: grid;\n  gap: 18px;\n  max-height: 90vh;\n  overflow-y: auto;\n  background: #0f172a;\n  border: 1px solid rgba(250, 204, 21, 0.2);\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.close-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #a1a1aa;\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.modal-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  color: #d4d4d8;\n  font-size: 0.84rem;\n  font-weight: 600;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.divider[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  margin: 6px 0;\n}\n.item-builder[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 90px auto;\n  gap: 10px;\n  align-items: center;\n}\n.btn-add[_ngcontent-%COMP%] {\n  border: 1px solid rgba(250, 204, 21, 0.35);\n  background: rgba(250, 204, 21, 0.15);\n  color: #facc15;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.25);\n  color: #ffffff;\n}\n.cart-table[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  margin-top: 10px;\n  background: rgba(0, 0, 0, 0.4);\n  padding: 14px;\n  border-radius: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.cart-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 0.8fr 1fr 1.2fr 30px;\n  gap: 10px;\n  align-items: center;\n  font-size: 0.88rem;\n  padding: 6px 8px;\n}\n.cart-row.head[_ngcontent-%COMP%] {\n  color: #71717a;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  padding-bottom: 8px;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #f87171;\n  cursor: pointer;\n  font-weight: 800;\n  font-size: 1.1rem;\n}\n.cart-summary[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  justify-content: flex-end;\n  text-align: right;\n  font-size: 0.9rem;\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n}\n.total-line[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  color: #facc15;\n  font-weight: 800;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  background: rgba(10, 10, 14, 0.6);\n  padding: 16px;\n  border-radius: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.detail-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n}\n.label[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #71717a;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n@media (max-width: 900px) {\n  .row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n  }\n  .row.head[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .filters-bar[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .grid-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .grid-head[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .grid-head[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=orders.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "app\\features\\orders\\orders.component.ts", lineNumber: 20 });
})();
export {
  OrdersComponent
};
//# sourceMappingURL=orders.component-DRLSJWBQ.js.map
