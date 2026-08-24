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
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/features/catalog/catalog.component.ts
var _c0 = () => ({ standalone: true });
function CatalogComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1.idCategoria);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r1.nombreCategoria, " ");
  }
}
function CatalogComponent_section_21_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 18)(1, "div", 19)(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 23)(11, "div")(12, "span", 24);
    \u0275\u0275text(13, "Precio Venta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong", 25);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 26)(17, "button", 27);
    \u0275\u0275listener("click", function CatalogComponent_section_21_article_1_Template_button_click_17_listener() {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.adjustStock(product_r3, -1));
    });
    \u0275\u0275text(18, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 27);
    \u0275\u0275listener("click", function CatalogComponent_section_21_article_1_Template_button_click_21_listener() {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.adjustStock(product_r3, 1));
    });
    \u0275\u0275text(22, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 28)(24, "button", 29);
    \u0275\u0275listener("click", function CatalogComponent_section_21_article_1_Template_button_click_24_listener() {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openEditModal(product_r3));
    });
    \u0275\u0275text(25, " \u270F\uFE0F Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 30);
    \u0275\u0275listener("click", function CatalogComponent_section_21_article_1_Template_button_click_26_listener() {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteProduct(product_r3));
    });
    \u0275\u0275text(27, " \u{1F5D1}\uFE0F Eliminar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r3.codigoBarras || "PROD-" + product_r3.idProducto);
    \u0275\u0275advance();
    \u0275\u0275classProp("low", product_r3.stock <= (product_r3.stockMinimo || 5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r3.stock, " en stock ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r3.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r3.descripcion || "Sin descripci\xF3n adicional");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", product_r3.precioVenta.toFixed(2), "");
  }
}
function CatalogComponent_section_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16);
    \u0275\u0275template(1, CatalogComponent_section_21_article_1_Template, 28, 7, "article", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.productosFiltrados);
  }
}
function CatalogComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p");
    \u0275\u0275text(2, "No se encontraron productos que coincidan con la b\xFAsqueda.");
    \u0275\u0275elementEnd()();
  }
}
function CatalogComponent_div_23_ng_container_16_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    \u0275\u0275property("value", cat_r6.idCategoria);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r6.nombreCategoria, " ");
  }
}
function CatalogComponent_div_23_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "select", 52);
    \u0275\u0275template(2, CatalogComponent_div_23_ng_container_16_option_2_Template, 2, 2, "option", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.categorias);
  }
}
function CatalogComponent_div_23_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogComponent_div_23_div_17_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevaCategoriaNombre, $event) || (ctx_r3.nuevaCategoriaNombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 55);
    \u0275\u0275listener("click", function CatalogComponent_div_23_div_17_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.guardarNuevaCategoria());
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevaCategoriaNombre);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.creandoCategoria || !ctx_r3.nuevaCategoriaNombre.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.creandoCategoria ? "..." : "OK", " ");
  }
}
function CatalogComponent_div_23_ng_container_23_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    \u0275\u0275property("value", m_r8.idMarca);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r8.nombreMarca);
  }
}
function CatalogComponent_div_23_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "select", 56);
    \u0275\u0275template(2, CatalogComponent_div_23_ng_container_23_option_2_Template, 2, 2, "option", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.marcas);
  }
}
function CatalogComponent_div_23_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogComponent_div_23_div_24_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevaMarcaNombre, $event) || (ctx_r3.nuevaMarcaNombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 55);
    \u0275\u0275listener("click", function CatalogComponent_div_23_div_24_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.guardarNuevaMarca());
    });
    \u0275\u0275text(3, "OK");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevaMarcaNombre);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.creandoMarca || !ctx_r3.nuevaMarcaNombre.trim());
  }
}
function CatalogComponent_div_23_ng_container_29_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    \u0275\u0275property("value", p_r10.idPresentacion);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r10.nombrePresentacion);
  }
}
function CatalogComponent_div_23_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "select", 58);
    \u0275\u0275template(2, CatalogComponent_div_23_ng_container_29_option_2_Template, 2, 2, "option", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.presentaciones);
  }
}
function CatalogComponent_div_23_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogComponent_div_23_div_30_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.nuevaPresentacionNombre, $event) || (ctx_r3.nuevaPresentacionNombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 55);
    \u0275\u0275listener("click", function CatalogComponent_div_23_div_30_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.guardarNuevaPresentacion());
    });
    \u0275\u0275text(3, "OK");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nuevaPresentacionNombre);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.creandoPresentacion || !ctx_r3.nuevaPresentacionNombre.trim());
  }
}
function CatalogComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 35);
    \u0275\u0275listener("click", function CatalogComponent_div_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 36);
    \u0275\u0275listener("ngSubmit", function CatalogComponent_div_23_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveProduct());
    });
    \u0275\u0275elementStart(8, "div", 37)(9, "label");
    \u0275\u0275text(10, " C\xF3digo Barras ");
    \u0275\u0275element(11, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label");
    \u0275\u0275text(13, " Categor\xEDa ");
    \u0275\u0275elementStart(14, "button", 39);
    \u0275\u0275listener("click", function CatalogComponent_div_23_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleNuevaCategoria());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CatalogComponent_div_23_ng_container_16_Template, 3, 1, "ng-container", 40)(17, CatalogComponent_div_23_div_17_Template, 4, 5, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 37)(19, "label");
    \u0275\u0275text(20, " Marca ");
    \u0275\u0275elementStart(21, "button", 39);
    \u0275\u0275listener("click", function CatalogComponent_div_23_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleNuevaMarca());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, CatalogComponent_div_23_ng_container_23_Template, 3, 1, "ng-container", 40)(24, CatalogComponent_div_23_div_24_Template, 4, 4, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label");
    \u0275\u0275text(26, " Presentaci\xF3n ");
    \u0275\u0275elementStart(27, "button", 39);
    \u0275\u0275listener("click", function CatalogComponent_div_23_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleNuevaPresentacion());
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, CatalogComponent_div_23_ng_container_29_Template, 3, 1, "ng-container", 40)(30, CatalogComponent_div_23_div_30_Template, 4, 4, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "label");
    \u0275\u0275text(32, " Nombre del Producto * ");
    \u0275\u0275element(33, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "label");
    \u0275\u0275text(35, " Descripci\xF3n / Notas ");
    \u0275\u0275element(36, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 37)(38, "label");
    \u0275\u0275text(39, " Precio Compra (S/) * ");
    \u0275\u0275element(40, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "label");
    \u0275\u0275text(42, " Precio Venta (S/) * ");
    \u0275\u0275element(43, "input", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 37)(45, "label");
    \u0275\u0275text(46, " Stock Actual * ");
    \u0275\u0275element(47, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "label");
    \u0275\u0275text(49, " Stock M\xEDnimo ");
    \u0275\u0275element(50, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "label");
    \u0275\u0275text(52, " Stock M\xE1ximo ");
    \u0275\u0275element(53, "input", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 49)(55, "button", 50);
    \u0275\u0275listener("click", function CatalogComponent_div_23_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(56, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 51);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.editingProduct ? "\u270F\uFE0F Editar Producto" : "\u{1F37E} Registrar Nuevo Producto");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r3.showNuevaCategoria ? "Cancelar" : "+ Nueva", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.showNuevaCategoria);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showNuevaCategoria);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.showNuevaMarca ? "Cancelar" : "+ Nueva", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.showNuevaMarca);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showNuevaMarca);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.showNuevaPresentacion ? "Cancelar" : "+ Nueva", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.showNuevaPresentacion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showNuevaPresentacion);
    \u0275\u0275advance(27);
    \u0275\u0275property("disabled", ctx_r3.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.saving ? "Guardando..." : ctx_r3.editingProduct ? "Actualizar Producto" : "Guardar Producto", " ");
  }
}
var CatalogComponent = class _CatalogComponent {
  api = inject(ApiService);
  fb = inject(FormBuilder);
  loading = true;
  productos = [];
  categorias = [];
  marcas = [];
  presentaciones = [];
  searchTerm = "";
  selectedCategoriaId = null;
  showModal = false;
  editingProduct = null;
  saving = false;
  form = this.fb.nonNullable.group({
    codigoBarras: [""],
    nombre: ["", [Validators.required]],
    descripcion: [""],
    precioCompra: [0, [Validators.required, Validators.min(0)]],
    precioVenta: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    stockMinimo: [5, [Validators.min(0)]],
    stockMaximo: [100, [Validators.min(0)]],
    idCategoria: [null],
    idMarca: [null, [Validators.required]],
    idPresentacion: [null, [Validators.required]]
  });
  ngOnInit() {
    this.cargarDatos();
  }
  cargarDatos() {
    this.loading = true;
    this.api.get("/productos").subscribe({
      next: (prods) => {
        this.productos = prods;
      },
      error: () => {
        this.cargarDemo();
      }
    });
    this.api.get("/categorias").subscribe({
      next: (cats) => {
        this.categorias = cats;
      },
      error: () => {
        this.categorias = [
          { idCategoria: 1, nombreCategoria: "Licores & Destilados" },
          { idCategoria: 2, nombreCategoria: "Cervezas" },
          { idCategoria: 3, nombreCategoria: "Vinos" }
        ];
      }
    });
    this.api.get("/marcas").subscribe({
      next: (m) => {
        this.marcas = m;
      },
      error: () => {
        this.marcas = [{ idMarca: 1, nombreMarca: "Gen\xE9rica" }];
      }
    });
    this.api.get("/presentaciones").subscribe({
      next: (p) => {
        this.presentaciones = p;
      },
      error: () => {
        this.presentaciones = [{ idPresentacion: 1, nombrePresentacion: "Unidad" }];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  get productosFiltrados() {
    return this.productos.filter((p) => {
      const matchSearch = !this.searchTerm || p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) || p.codigoBarras && p.codigoBarras.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchCat = !this.selectedCategoriaId || p.idCategoria === Number(this.selectedCategoriaId);
      return matchSearch && matchCat;
    });
  }
  openNewModal() {
    this.editingProduct = null;
    this.form.reset({
      codigoBarras: `PROD-${Math.floor(1e3 + Math.random() * 9e3)}`,
      nombre: "",
      descripcion: "",
      precioCompra: 0,
      precioVenta: 0,
      stock: 10,
      stockMinimo: 5,
      stockMaximo: 100,
      idCategoria: this.categorias.length > 0 ? this.categorias[0].idCategoria : null,
      idMarca: this.marcas.length > 0 ? this.marcas[0].idMarca : null,
      idPresentacion: this.presentaciones.length > 0 ? this.presentaciones[0].idPresentacion : null
    });
    this.showModal = true;
  }
  openEditModal(prod) {
    this.editingProduct = prod;
    this.form.patchValue({
      codigoBarras: prod.codigoBarras || "",
      nombre: prod.nombre,
      descripcion: prod.descripcion || "",
      precioCompra: prod.precioCompra || 0,
      precioVenta: prod.precioVenta,
      stock: prod.stock,
      stockMinimo: prod.stockMinimo || 5,
      stockMaximo: prod.stockMaximo || 100,
      idCategoria: prod.idCategoria || null,
      idMarca: prod.idMarca || null,
      idPresentacion: prod.idPresentacion || null
    });
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.editingProduct = null;
  }
  saveProduct() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    const formVal = this.form.getRawValue();
    const productData = __spreadValues({}, formVal);
    if (productData.idCategoria === null)
      delete productData.idCategoria;
    if (this.editingProduct && this.editingProduct.idProducto) {
      const updated = __spreadValues(__spreadValues({}, this.editingProduct), productData);
      this.api.put(`/productos/${this.editingProduct.idProducto}`, updated).subscribe({
        next: (res) => {
          const idx = this.productos.findIndex((p) => p.idProducto === res.idProducto);
          if (idx !== -1)
            this.productos[idx] = res;
          this.closeModal();
        },
        error: () => {
          const idx = this.productos.findIndex((p) => p.idProducto === this.editingProduct.idProducto);
          if (idx !== -1)
            this.productos[idx] = __spreadValues({}, updated);
          this.closeModal();
        },
        complete: () => this.saving = false
      });
    } else {
      const newProd = __spreadProps(__spreadValues({}, productData), { estado: "A" });
      this.api.post("/productos", newProd).subscribe({
        next: (res) => {
          this.productos.unshift(res);
          this.closeModal();
        },
        error: () => {
          const mockCreated = __spreadProps(__spreadValues({}, newProd), { idProducto: Date.now() });
          this.productos.unshift(mockCreated);
          this.closeModal();
        },
        complete: () => this.saving = false
      });
    }
  }
  // --- Inline Creation: Categoria ---
  showNuevaCategoria = false;
  nuevaCategoriaNombre = "";
  creandoCategoria = false;
  toggleNuevaCategoria() {
    this.showNuevaCategoria = !this.showNuevaCategoria;
    this.nuevaCategoriaNombre = "";
  }
  guardarNuevaCategoria() {
    if (!this.nuevaCategoriaNombre.trim())
      return;
    this.creandoCategoria = true;
    const payload = { nombreCategoria: this.nuevaCategoriaNombre.trim(), estado: "A" };
    this.api.post("/categorias", payload).subscribe({
      next: (res) => {
        this.categorias.push(res);
        this.form.patchValue({ idCategoria: res.idCategoria });
        this.toggleNuevaCategoria();
      },
      error: () => {
        const res = __spreadProps(__spreadValues({}, payload), { idCategoria: Date.now() });
        this.categorias.push(res);
        this.form.patchValue({ idCategoria: res.idCategoria });
        this.toggleNuevaCategoria();
      },
      complete: () => {
        this.creandoCategoria = false;
      }
    });
  }
  // --- Inline Creation: Marca ---
  showNuevaMarca = false;
  nuevaMarcaNombre = "";
  creandoMarca = false;
  toggleNuevaMarca() {
    this.showNuevaMarca = !this.showNuevaMarca;
    this.nuevaMarcaNombre = "";
  }
  guardarNuevaMarca() {
    if (!this.nuevaMarcaNombre.trim())
      return;
    this.creandoMarca = true;
    const payload = { nombreMarca: this.nuevaMarcaNombre.trim(), estado: "A" };
    this.api.post("/marcas", payload).subscribe({
      next: (res) => {
        this.marcas.push(res);
        this.form.patchValue({ idMarca: res.idMarca });
        this.toggleNuevaMarca();
      },
      error: () => {
        const res = __spreadProps(__spreadValues({}, payload), { idMarca: Date.now() });
        this.marcas.push(res);
        this.form.patchValue({ idMarca: res.idMarca });
        this.toggleNuevaMarca();
      },
      complete: () => {
        this.creandoMarca = false;
      }
    });
  }
  // --- Inline Creation: Presentacion ---
  showNuevaPresentacion = false;
  nuevaPresentacionNombre = "";
  creandoPresentacion = false;
  toggleNuevaPresentacion() {
    this.showNuevaPresentacion = !this.showNuevaPresentacion;
    this.nuevaPresentacionNombre = "";
  }
  guardarNuevaPresentacion() {
    if (!this.nuevaPresentacionNombre.trim())
      return;
    this.creandoPresentacion = true;
    const payload = { nombrePresentacion: this.nuevaPresentacionNombre.trim(), estado: "A" };
    this.api.post("/presentaciones", payload).subscribe({
      next: (res) => {
        this.presentaciones.push(res);
        this.form.patchValue({ idPresentacion: res.idPresentacion });
        this.toggleNuevaPresentacion();
      },
      error: () => {
        const res = __spreadProps(__spreadValues({}, payload), { idPresentacion: Date.now() });
        this.presentaciones.push(res);
        this.form.patchValue({ idPresentacion: res.idPresentacion });
        this.toggleNuevaPresentacion();
      },
      complete: () => {
        this.creandoPresentacion = false;
      }
    });
  }
  adjustStock(prod, delta) {
    const newStock = Math.max(0, prod.stock + delta);
    prod.stock = newStock;
    if (prod.idProducto) {
      this.api.put(`/productos/${prod.idProducto}`, prod).subscribe();
    }
  }
  deleteProduct(prod) {
    if (confirm(`\xBFSeguro que deseas eliminar el producto "${prod.nombre}"?`)) {
      if (prod.idProducto) {
        this.api.delete(`/productos/${prod.idProducto}`).subscribe({
          next: () => {
            this.productos = this.productos.filter((p) => p.idProducto !== prod.idProducto);
          },
          error: () => {
            this.productos = this.productos.filter((p) => p !== prod);
          }
        });
      } else {
        this.productos = this.productos.filter((p) => p !== prod);
      }
    }
  }
  cargarDemo() {
    this.productos = [
      { idProducto: 1, codigoBarras: "LIC-001", nombre: "Whisky Johnnie Walker Black Label 750ml", descripcion: "Whisky escoc\xE9s blend 12 a\xF1os", precioCompra: 80, precioVenta: 129.9, stock: 14, stockMinimo: 5, stockMaximo: 100, idCategoria: 1, idMarca: 1, idPresentacion: 1 },
      { idProducto: 2, codigoBarras: "LIC-002", nombre: "Vodka Absolut Original 750ml", descripcion: "Vodka sueco destilado", precioCompra: 40, precioVenta: 69, stock: 4, stockMinimo: 6, stockMaximo: 100, idCategoria: 1, idMarca: 1, idPresentacion: 1 },
      { idProducto: 3, codigoBarras: "LIC-003", nombre: "Ron Cartavio Aniversario 750ml", descripcion: "Ron peruano a\xF1ejado", precioCompra: 25, precioVenta: 45.5, stock: 22, stockMinimo: 5, stockMaximo: 100, idCategoria: 1, idMarca: 1, idPresentacion: 1 },
      { idProducto: 4, codigoBarras: "BEB-001", nombre: "Cerveza Cusque\xF1a Dorada Pack 6x330ml", descripcion: "Cerveza premium malt", precioCompra: 18, precioVenta: 28.5, stock: 30, stockMinimo: 10, stockMaximo: 100, idCategoria: 2, idMarca: 1, idPresentacion: 1 },
      { idProducto: 5, codigoBarras: "VIN-001", nombre: "Vino Tacama Gran Blanco 750ml", descripcion: "Vino fino peruano Ica", precioCompra: 20, precioVenta: 38, stock: 8, stockMinimo: 5, stockMaximo: 100, idCategoria: 3, idMarca: 1, idPresentacion: 1 }
    ];
    this.loading = false;
  }
  static \u0275fac = function CatalogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CatalogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 7, consts: [[1, "grid-head"], [1, "eyebrow"], [1, "muted"], [1, "actions"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "filters-bar", "glass"], [1, "search-box"], [1, "search-icon"], ["type", "text", "placeholder", "Buscar por nombre o c\xF3digo de barras...", 3, "ngModelChange", "ngModel"], [1, "select-box"], [3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "cards", 4, "ngIf"], ["class", "empty-state glass", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [1, "cards"], ["class", "product glass", 4, "ngFor", "ngForOf"], [1, "product", "glass"], [1, "product-header"], [1, "code-badge"], [1, "stock-badge"], [1, "desc"], [1, "price-row"], [1, "price-label"], [1, "price"], [1, "stock-adjust"], ["type", "button", 1, "btn-stock", 3, "click"], [1, "card-actions"], ["type", "button", 1, "btn-action", "edit", 3, "click"], ["type", "button", 1, "btn-action", "delete", 3, "click"], [1, "empty-state", "glass"], [1, "modal-overlay"], [1, "modal-card", "glass"], [1, "modal-header"], ["type", "button", 1, "close-btn", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "form-row"], ["type", "text", "formControlName", "codigoBarras", "placeholder", "LIC-001"], ["type", "button", 1, "btn-text-small", 2, "float", "right", "font-size", "0.8rem", "padding", "0", "background", "none", "color", "var(--gold)", 3, "click"], [4, "ngIf"], ["style", "display: flex; gap: 0.5rem; margin-top: 0.25rem;", 4, "ngIf"], ["type", "text", "formControlName", "nombre", "placeholder", "Ej. Whisky Black Label 750ml"], ["type", "text", "formControlName", "descripcion", "placeholder", "Presentaci\xF3n, grado alcoh\xF3lico, etc."], ["type", "number", "step", "0.1", "formControlName", "precioCompra"], ["type", "number", "step", "0.1", "formControlName", "precioVenta"], ["type", "number", "formControlName", "stock"], ["type", "number", "formControlName", "stockMinimo"], ["type", "number", "formControlName", "stockMaximo"], [1, "modal-footer"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["formControlName", "idCategoria"], [2, "display", "flex", "gap", "0.5rem", "margin-top", "0.25rem"], ["type", "text", "placeholder", "Nombre de categor\xEDa", 2, "flex", "1", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "button", 1, "btn-secondary", 2, "padding", "0.5rem", 3, "click", "disabled"], ["formControlName", "idMarca"], ["type", "text", "placeholder", "Nombre marca", 2, "flex", "1", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["formControlName", "idPresentacion"], ["type", "text", "placeholder", "Nombre pres.", 2, "flex", "1", 3, "ngModelChange", "ngModel", "ngModelOptions"]], template: function CatalogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div")(2, "p", 1);
      \u0275\u0275text(3, "Gesti\xF3n de Inventarios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Cat\xE1logo de Productos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 2);
      \u0275\u0275text(7, "Administra el inventario de licores, bebidas, precios y existencias.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "button", 4);
      \u0275\u0275listener("click", function CatalogComponent_Template_button_click_9_listener() {
        return ctx.openNewModal();
      });
      \u0275\u0275text(10, " \u2795 Nuevo Producto ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "section", 5)(12, "div", 6)(13, "span", 7);
      \u0275\u0275text(14, "\u{1F50D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function CatalogComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 9)(17, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function CatalogComponent_Template_select_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedCategoriaId, $event) || (ctx.selectedCategoriaId = $event);
        return $event;
      });
      \u0275\u0275elementStart(18, "option", 11);
      \u0275\u0275text(19, "Todas las categor\xEDas");
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, CatalogComponent_option_20_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(21, CatalogComponent_section_21_Template, 2, 1, "section", 13)(22, CatalogComponent_div_22_Template, 3, 0, "div", 14)(23, CatalogComponent_div_23_Template, 59, 13, "div", 15);
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategoriaId);
      \u0275\u0275advance();
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.categorias);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.productosFiltrados.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.productosFiltrados.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.grid-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 16px;\n  margin-bottom: 22px;\n  flex-wrap: wrap;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.22em;\n  color: var(--primary);\n  font-size: 0.72rem;\n  font-weight: 800;\n  margin: 0;\n}\n.grid-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  font-size: clamp(1.6rem, 2.5vw, 2.2rem);\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n}\n.grid-head[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  margin: 4px 0 0 0;\n  color: #a1a1aa;\n  font-size: 0.92rem;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 260px;\n  gap: 14px;\n  padding: 14px 18px;\n  border-radius: 16px;\n  margin-bottom: 22px;\n  background: rgba(18, 18, 24, 0.75);\n  border: 1px solid rgba(250, 204, 21, 0.15);\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(10, 10, 14, 0.7);\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 0 14px;\n  transition: all 0.2s ease;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #facc15;\n  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.2);\n}\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #71717a;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  background: transparent;\n  color: #ffffff;\n  padding: 12px 0;\n  outline: none;\n  font-size: 0.94rem;\n}\n.select-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  background: rgba(10, 10, 14, 0.7);\n  color: #ffffff;\n  border-radius: 12px;\n  padding: 12px 14px;\n  outline: none;\n  cursor: pointer;\n  font-size: 0.92rem;\n  transition: all 0.2s ease;\n}\n.select-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #facc15;\n  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.2);\n}\n.select-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #18181b;\n  color: #ffffff;\n}\n.cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 18px;\n}\n.product[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 14px;\n  background: rgba(18, 18, 24, 0.85);\n  border: 1px solid rgba(250, 204, 21, 0.14);\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.product[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: rgba(250, 204, 21, 0.4);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(250, 204, 21, 0.1);\n}\n.product-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.code-badge[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #facc15;\n  font-weight: 700;\n  padding: 3px 8px;\n  background: rgba(250, 204, 21, 0.12);\n  border: 1px solid rgba(250, 204, 21, 0.25);\n  border-radius: 8px;\n}\n.stock-badge[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  background: rgba(34, 197, 94, 0.12);\n  color: #4ade80;\n  border-radius: 8px;\n  border: 1px solid rgba(34, 197, 94, 0.25);\n}\n.stock-badge.low[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.product[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.desc[_ngcontent-%COMP%] {\n  color: #a1a1aa;\n  font-size: 0.84rem;\n  margin: 0;\n  line-height: 1.45;\n}\n.price-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 12px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n}\n.price-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  color: #71717a;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n.price[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #facc15;\n  font-weight: 800;\n}\n.stock-adjust[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: #a1a1aa;\n}\n.btn-stock[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.06);\n  color: #ffffff;\n  cursor: pointer;\n  font-weight: 800;\n  transition: all 0.2s;\n}\n.btn-stock[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.2);\n  border-color: rgba(250, 204, 21, 0.4);\n  color: #facc15;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  color: #e4e4e7;\n  padding: 8px 12px;\n  border-radius: 10px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 204, 21, 0.15);\n  border-color: rgba(250, 204, 21, 0.4);\n  color: #facc15;\n}\n.btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.15);\n  border-color: rgba(239, 68, 68, 0.4);\n  color: #fca5a5;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  border-radius: 18px;\n  color: #71717a;\n  background: rgba(18, 18, 24, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  display: grid;\n  place-items: center;\n  z-index: 999;\n  padding: 20px;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 580px;\n  border-radius: 22px;\n  padding: 28px;\n  display: grid;\n  gap: 18px;\n  background: #0f172a;\n  border: 1px solid rgba(250, 204, 21, 0.2);\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.close-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #a1a1aa;\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.modal-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 12px;\n}\n.modal-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  color: #d4d4d8;\n  font-size: 0.84rem;\n  font-weight: 600;\n}\n.modal-card[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #18181b;\n  color: #ffffff;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 10px;\n}\n@media (max-width: 768px) {\n  .filters-bar[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .grid-head[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .grid-head[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .grid-head[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=catalog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogComponent, { className: "CatalogComponent", filePath: "app\\features\\catalog\\catalog.component.ts", lineNumber: 13 });
})();
export {
  CatalogComponent
};
//# sourceMappingURL=catalog.component-L55IZY4N.js.map
