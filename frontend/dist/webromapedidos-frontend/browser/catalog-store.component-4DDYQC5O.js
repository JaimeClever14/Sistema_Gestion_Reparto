import {
  CartService
} from "./chunk-623MSKIV.js";
import {
  ActivatedRoute
} from "./chunk-SNUT2XZU.js";
import {
  DefaultValueAccessor,
  FormsModule,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
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

// src/app/features/store/catalog-store.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
function CatalogStoreComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 32);
    \u0275\u0275listener("click", function CatalogStoreComponent_div_0_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(2, "Volver al listado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1('Resultados para "', ctx_r1.searchTerm, '"');
  }
}
function CatalogStoreComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 6);
    \u0275\u0275listener("click", function CatalogStoreComponent_li_10_Template_a_click_1_listener() {
      const cat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCategoria(cat_r4.idCategoria));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.selectedCategoriaId === cat_r4.idCategoria);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r4.nombreCategoria, " ");
  }
}
function CatalogStoreComponent_h2_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.productosFiltrados.length, ' resultados para "', ctx_r1.searchTerm, '"');
  }
}
function CatalogStoreComponent_h2_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Cat\xE1logo de productos");
    \u0275\u0275elementEnd();
  }
}
function CatalogStoreComponent_div_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "div", 38)(2, "div", 39)(3, "div", 40)(4, "div", 41);
    \u0275\u0275elementEnd();
  }
}
function CatalogStoreComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275template(1, CatalogStoreComponent_div_56_div_1_Template, 5, 0, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function CatalogStoreComponent_div_57_article_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.getDiscountPercent(), "% OFF");
  }
}
function CatalogStoreComponent_div_57_article_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prod_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" S/ ", (prod_r6.precioVenta * 1.2).toFixed(2), " ");
  }
}
function CatalogStoreComponent_div_57_article_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "span", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prod_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xA1\xDAltimas ", prod_r6.stock, " unidades!");
  }
}
function CatalogStoreComponent_div_57_article_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "span", 66);
    \u0275\u0275text(2, "Sin stock");
    \u0275\u0275elementEnd()();
  }
}
function CatalogStoreComponent_div_57_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 43)(1, "div", 44)(2, "div", 45)(3, "span", 46);
    \u0275\u0275text(4, "\u{1F37E}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 47);
    \u0275\u0275template(6, CatalogStoreComponent_div_57_article_1_span_6_Template, 2, 1, "span", 48);
    \u0275\u0275elementStart(7, "span", 49);
    \u0275\u0275text(8, "Env\xEDo gratis");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 50)(10, "p", 51);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 52);
    \u0275\u0275template(13, CatalogStoreComponent_div_57_article_1_span_13_Template, 2, 1, "span", 53);
    \u0275\u0275elementStart(14, "span", 54);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 55);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 56)(19, "span", 57);
    \u0275\u0275text(20, "\u{1F69A} Env\xEDo gratis");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, CatalogStoreComponent_div_57_article_1_div_21_Template, 3, 1, "div", 58)(22, CatalogStoreComponent_div_57_article_1_div_22_Template, 3, 0, "div", 58);
    \u0275\u0275elementStart(23, "p", 59);
    \u0275\u0275text(24, "por ");
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26, "RomaStore");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 60)(28, "button", 61);
    \u0275\u0275listener("click", function CatalogStoreComponent_div_57_article_1_Template_button_click_28_listener() {
      const prod_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToCart(prod_r6));
    });
    \u0275\u0275text(29, " Agregar al carrito ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const prod_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate1("id", "product-", prod_r6.idProducto, "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", prod_r6.precioVenta > 40);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(prod_r6.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", prod_r6.precioVenta > 40);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", prod_r6.precioVenta.toFixed(2), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCuotas(prod_r6.precioVenta));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isLowStock(prod_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasStock(prod_r6));
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r1.hasStock(prod_r6));
  }
}
function CatalogStoreComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275template(1, CatalogStoreComponent_div_57_article_1_Template, 30, 10, "article", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.productosFiltrados);
  }
}
function CatalogStoreComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No encontramos productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Intenta buscar con otros t\xE9rminos o revisa los filtros aplicados.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 16);
    \u0275\u0275listener("click", function CatalogStoreComponent_div_58_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(8, "Limpiar filtros");
    \u0275\u0275elementEnd()();
  }
}
var CatalogStoreComponent = class _CatalogStoreComponent {
  api = inject(ApiService);
  route = inject(ActivatedRoute);
  cartService = inject(CartService);
  loading = true;
  productos = [];
  categorias = [];
  searchTerm = "";
  selectedCategoriaId = null;
  sortBy = "relevancia";
  priceMin = null;
  priceMax = null;
  ngOnInit() {
    this.cargarDatos();
    this.route.queryParams.subscribe((params) => {
      if (params["q"]) {
        this.searchTerm = params["q"];
      }
      if (params["category"]) {
        const catName = params["category"];
        const foundCat = this.categorias.find((c) => c.nombreCategoria === catName);
        if (foundCat) {
          this.selectedCategoriaId = foundCat.idCategoria || null;
        }
      }
    });
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
          { idCategoria: 3, nombreCategoria: "Vinos" },
          { idCategoria: 4, nombreCategoria: "Bebidas Sin Alcohol" }
        ];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  get productosFiltrados() {
    let filtered = this.productos.filter((p) => {
      const matchSearch = !this.searchTerm || p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) || p.descripcion && p.descripcion.toLowerCase().includes(this.searchTerm.toLowerCase()) || p.codigoBarras && p.codigoBarras.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchCat = !this.selectedCategoriaId || p.idCategoria === Number(this.selectedCategoriaId);
      const matchPriceMin = this.priceMin === null || p.precioVenta >= this.priceMin;
      const matchPriceMax = this.priceMax === null || p.precioVenta <= this.priceMax;
      return matchSearch && matchCat && matchPriceMin && matchPriceMax;
    });
    switch (this.sortBy) {
      case "precio-asc":
        filtered.sort((a, b) => a.precioVenta - b.precioVenta);
        break;
      case "precio-desc":
        filtered.sort((a, b) => b.precioVenta - a.precioVenta);
        break;
      case "nombre":
        filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
    }
    return filtered;
  }
  selectCategoria(id) {
    this.selectedCategoriaId = id;
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedCategoriaId = null;
    this.priceMin = null;
    this.priceMax = null;
    this.sortBy = "relevancia";
  }
  getCuotas(precio) {
    const cuota = (precio / 6).toFixed(2);
    return `6x S/ ${cuota} sin inter\xE9s`;
  }
  hasStock(prod) {
    return prod.stock > 0;
  }
  isLowStock(prod) {
    return prod.stock > 0 && prod.stock <= (prod.stockMinimo || 5);
  }
  getDiscountPercent() {
    return Math.floor(Math.random() * 20) + 5;
  }
  addToCart(producto) {
    this.cartService.addToCart(producto);
  }
  cargarDemo() {
    this.productos = [
      {
        idProducto: 1,
        codigoBarras: "LIC-001",
        nombre: "Whisky Johnnie Walker Black Label 750ml",
        descripcion: "Whisky escoc\xE9s blended 12 a\xF1os de a\xF1ejamiento. Notas de vainilla, frutas oscuras y humo.",
        precioCompra: 80,
        precioVenta: 129.9,
        stock: 14,
        stockMinimo: 5,
        idCategoria: 1,
        imagenUrl: ""
      },
      {
        idProducto: 2,
        codigoBarras: "LIC-002",
        nombre: "Vodka Absolut Original 750ml",
        descripcion: "Vodka sueco destilado de trigo de invierno. Pureza y calidad premium.",
        precioCompra: 40,
        precioVenta: 69,
        stock: 22,
        stockMinimo: 6,
        idCategoria: 1,
        imagenUrl: ""
      },
      {
        idProducto: 3,
        codigoBarras: "LIC-003",
        nombre: "Ron Cartavio Aniversario 750ml",
        descripcion: "Ron peruano a\xF1ejado en barricas de roble. Suave y con notas de caramelo.",
        precioCompra: 25,
        precioVenta: 45.5,
        stock: 3,
        stockMinimo: 5,
        idCategoria: 1,
        imagenUrl: ""
      },
      {
        idProducto: 4,
        codigoBarras: "BEB-001",
        nombre: "Cerveza Cusque\xF1a Dorada Pack 6x330ml",
        descripcion: "Cerveza premium elaborada con malta importada. Sabor intenso y refrescante.",
        precioCompra: 18,
        precioVenta: 28.5,
        stock: 45,
        stockMinimo: 10,
        idCategoria: 2,
        imagenUrl: ""
      },
      {
        idProducto: 5,
        codigoBarras: "VIN-001",
        nombre: "Vino Tacama Gran Blanco 750ml",
        descripcion: "Vino blanco peruano de la regi\xF3n de Ica. Fresco, afrutado y elegante.",
        precioCompra: 20,
        precioVenta: 38,
        stock: 18,
        stockMinimo: 5,
        idCategoria: 3,
        imagenUrl: ""
      },
      {
        idProducto: 6,
        codigoBarras: "LIC-004",
        nombre: "Pisco Cuatro Gallos Quebranta 750ml",
        descripcion: "Pisco puro peruano. Sabor intenso, arom\xE1tico, ideal para cocktails.",
        precioCompra: 25,
        precioVenta: 42,
        stock: 20,
        stockMinimo: 5,
        idCategoria: 1,
        imagenUrl: ""
      },
      {
        idProducto: 7,
        codigoBarras: "BEB-002",
        nombre: "Cerveza Corona Extra Pack 6x355ml",
        descripcion: "Cerveza mexicana ligera y refrescante. Perfecta con lim\xF3n.",
        precioCompra: 20,
        precioVenta: 32,
        stock: 35,
        stockMinimo: 8,
        idCategoria: 2,
        imagenUrl: ""
      },
      {
        idProducto: 8,
        codigoBarras: "VIN-002",
        nombre: "Vino Casillero del Diablo Cabernet Sauvignon 750ml",
        descripcion: "Vino tinto chileno. Taninos suaves, notas de cereza y chocolate.",
        precioCompra: 22,
        precioVenta: 35,
        stock: 12,
        stockMinimo: 5,
        idCategoria: 3,
        imagenUrl: ""
      }
    ];
    this.loading = false;
  }
  static \u0275fac = function CatalogStoreComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CatalogStoreComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogStoreComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 59, vars: 13, consts: [["class", "breadcrumb", 4, "ngIf"], [1, "catalog-layout"], [1, "filters-sidebar"], [1, "filter-section"], [1, "filter-title"], [1, "filter-list"], [1, "filter-link", 3, "click"], [4, "ngFor", "ngForOf"], [1, "price-range"], ["type", "number", "placeholder", "M\xEDnimo", 1, "price-input", 3, "ngModelChange", "ngModel"], [1, "price-dash"], ["type", "number", "placeholder", "M\xE1ximo", 1, "price-input", 3, "ngModelChange", "ngModel"], [1, "price-shortcuts"], ["type", "button", 1, "price-tag", 3, "click"], [1, "filter-checkbox"], [1, "check-icon"], ["type", "button", 1, "clear-filters-btn", 3, "click"], [1, "products-area"], [1, "results-header"], [1, "results-info"], [4, "ngIf"], [1, "results-count"], [1, "sort-area"], [1, "sort-label"], [1, "sort-select", 3, "ngModelChange", "ngModel"], ["value", "relevancia"], ["value", "precio-asc"], ["value", "precio-desc"], ["value", "nombre"], ["class", "products-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "breadcrumb"], [1, "breadcrumb-link", 3, "click"], [1, "breadcrumb-sep"], [1, "breadcrumb-current"], [1, "products-grid"], ["class", "product-card skeleton-card", 4, "ngFor", "ngForOf"], [1, "product-card", "skeleton-card"], [1, "skeleton-img"], [1, "skeleton-text"], [1, "skeleton-text", "short"], [1, "skeleton-text", "tiny"], ["class", "product-card", 3, "id", 4, "ngFor", "ngForOf"], [1, "product-card", 3, "id"], [1, "product-image"], [1, "img-placeholder"], [1, "img-icon"], [1, "product-badges"], ["class", "badge-discount", 4, "ngIf"], [1, "badge-shipping"], [1, "product-info"], [1, "product-name"], [1, "price-block"], ["class", "price-original", 4, "ngIf"], [1, "price-current"], [1, "price-cuotas"], [1, "shipping-info"], [1, "shipping-free"], ["class", "stock-info", 4, "ngIf"], [1, "product-seller"], [1, "product-actions"], [1, "btn-primary-meli", "btn-add-cart", 3, "click", "disabled"], [1, "badge-discount"], [1, "price-original"], [1, "stock-info"], [1, "stock-low"], [1, "stock-out"], [1, "empty-state"], [1, "empty-icon"]], template: function CatalogStoreComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CatalogStoreComponent_div_0_Template, 7, 1, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "aside", 2)(3, "div", 3)(4, "h3", 4);
      \u0275\u0275text(5, "Categor\xEDas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ul", 5)(7, "li")(8, "a", 6);
      \u0275\u0275listener("click", function CatalogStoreComponent_Template_a_click_8_listener() {
        return ctx.selectCategoria(null);
      });
      \u0275\u0275text(9, " Todas las categor\xEDas ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, CatalogStoreComponent_li_10_Template, 3, 3, "li", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 3)(12, "h3", 4);
      \u0275\u0275text(13, "Precio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 8)(15, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function CatalogStoreComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.priceMin, $event) || (ctx.priceMin = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 10);
      \u0275\u0275text(17, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function CatalogStoreComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.priceMax, $event) || (ctx.priceMax = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 12)(20, "button", 13);
      \u0275\u0275listener("click", function CatalogStoreComponent_Template_button_click_20_listener() {
        ctx.priceMin = 0;
        return ctx.priceMax = 30;
      });
      \u0275\u0275text(21, "Hasta S/ 30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 13);
      \u0275\u0275listener("click", function CatalogStoreComponent_Template_button_click_22_listener() {
        ctx.priceMin = 30;
        return ctx.priceMax = 70;
      });
      \u0275\u0275text(23, "S/ 30 a S/ 70");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 13);
      \u0275\u0275listener("click", function CatalogStoreComponent_Template_button_click_24_listener() {
        ctx.priceMin = 70;
        return ctx.priceMax = 150;
      });
      \u0275\u0275text(25, "S/ 70 a S/ 150");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 13);
      \u0275\u0275listener("click", function CatalogStoreComponent_Template_button_click_26_listener() {
        ctx.priceMin = 150;
        return ctx.priceMax = null;
      });
      \u0275\u0275text(27, "M\xE1s de S/ 150");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 3)(29, "h3", 4);
      \u0275\u0275text(30, "Env\xEDo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "label", 14)(32, "span", 15);
      \u0275\u0275text(33, "\u{1F69A}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, " Env\xEDo gratis ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "button", 16);
      \u0275\u0275listener("click", function CatalogStoreComponent_Template_button_click_35_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275text(36, " Limpiar filtros ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 17)(38, "div", 18)(39, "div", 19);
      \u0275\u0275template(40, CatalogStoreComponent_h2_40_Template, 2, 2, "h2", 20)(41, CatalogStoreComponent_h2_41_Template, 2, 0, "h2", 20);
      \u0275\u0275elementStart(42, "span", 21);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 22)(45, "span", 23);
      \u0275\u0275text(46, "Ordenar por:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "select", 24);
      \u0275\u0275twoWayListener("ngModelChange", function CatalogStoreComponent_Template_select_ngModelChange_47_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
        return $event;
      });
      \u0275\u0275elementStart(48, "option", 25);
      \u0275\u0275text(49, "M\xE1s relevantes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 26);
      \u0275\u0275text(51, "Menor precio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 27);
      \u0275\u0275text(53, "Mayor precio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "option", 28);
      \u0275\u0275text(55, "Nombre A-Z");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(56, CatalogStoreComponent_div_56_Template, 2, 2, "div", 29)(57, CatalogStoreComponent_div_57_Template, 2, 1, "div", 29)(58, CatalogStoreComponent_div_58_Template, 9, 0, "div", 30);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.searchTerm);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", !ctx.selectedCategoriaId);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.categorias);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.priceMin);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.priceMax);
      \u0275\u0275advance(22);
      \u0275\u0275property("ngIf", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.productosFiltrados.length, " productos encontrados");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.productosFiltrados.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.productosFiltrados.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  font-size: 0.85rem;\n}\n.breadcrumb-link[_ngcontent-%COMP%] {\n  color: #3483FA;\n  cursor: pointer;\n  transition: color 0.15s ease;\n}\n.breadcrumb-link[_ngcontent-%COMP%]:hover {\n  color: #2968C8;\n  text-decoration: underline;\n}\n.breadcrumb-sep[_ngcontent-%COMP%] {\n  color: #AAAAAA;\n}\n.breadcrumb-current[_ngcontent-%COMP%] {\n  color: #333;\n}\n.catalog-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  gap: 20px;\n}\n.filters-sidebar[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 6px;\n  padding: 20px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  align-self: start;\n  position: sticky;\n  top: 100px;\n}\n.filter-section[_ngcontent-%COMP%] {\n  padding-bottom: 18px;\n  margin-bottom: 18px;\n  border-bottom: 1px solid #EBEBEB;\n}\n.filter-section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n  margin-bottom: 12px;\n}\n.filter-title[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #333;\n}\n.filter-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.filter-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n.filter-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 6px 8px;\n  font-size: 0.85rem;\n  color: #666;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.12s ease;\n  text-decoration: none;\n}\n.filter-link[_ngcontent-%COMP%]:hover {\n  color: #3483FA;\n  background: rgba(52, 131, 250, 0.06);\n}\n.filter-link.active[_ngcontent-%COMP%] {\n  color: #3483FA;\n  font-weight: 600;\n  background: rgba(52, 131, 250, 0.08);\n}\n.price-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.price-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #DDDDDD;\n  border-radius: 4px;\n  padding: 8px 10px;\n  font-size: 0.85rem;\n  color: #333;\n  outline: none;\n  background: white;\n  transition: border-color 0.15s ease;\n}\n.price-input[_ngcontent-%COMP%]:focus {\n  border-color: #3483FA;\n}\n.price-input[_ngcontent-%COMP%]::placeholder {\n  color: #AAAAAA;\n}\n.price-dash[_ngcontent-%COMP%] {\n  color: #CCCCCC;\n  flex-shrink: 0;\n}\n.price-shortcuts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.price-tag[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border: 1px solid #EBEBEB;\n  border-radius: 4px;\n  background: white;\n  color: #3483FA;\n  font-size: 0.78rem;\n  cursor: pointer;\n  transition: all 0.12s ease;\n}\n.price-tag[_ngcontent-%COMP%]:hover {\n  background: rgba(52, 131, 250, 0.06);\n  border-color: #3483FA;\n}\n.filter-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n  color: #333;\n  cursor: pointer;\n}\n.check-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.clear-filters-btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #3483FA;\n  border-radius: 4px;\n  background: transparent;\n  color: #3483FA;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.clear-filters-btn[_ngcontent-%COMP%]:hover {\n  background: #3483FA;\n  color: white;\n}\n.products-area[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.results-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.results-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #333;\n}\n.results-count[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #999;\n}\n.sort-area[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sort-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #999;\n  white-space: nowrap;\n}\n.sort-select[_ngcontent-%COMP%] {\n  border: 1px solid #DDDDDD;\n  border-radius: 4px;\n  padding: 8px 12px;\n  font-size: 0.85rem;\n  color: #333;\n  background: white;\n  cursor: pointer;\n  outline: none;\n}\n.sort-select[_ngcontent-%COMP%]:focus {\n  border-color: #3483FA;\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n}\n.product-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 6px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  cursor: pointer;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);\n  transform: translateY(-2px);\n}\n.product-image[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n  background: #F7F7F7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.img-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #F8F8F8 0%,\n      #EEEEEE 100%);\n}\n.img-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  opacity: 0.6;\n  transition: transform 0.3s ease;\n}\n.product-card[_ngcontent-%COMP%]:hover   .img-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.product-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.badge-discount[_ngcontent-%COMP%] {\n  background: #F23D4F;\n  color: white;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 3px;\n}\n.badge-shipping[_ngcontent-%COMP%] {\n  background: #00A650;\n  color: white;\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 2px 6px;\n  border-radius: 3px;\n}\n.product-info[_ngcontent-%COMP%] {\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.product-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 400;\n  color: #333;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.price-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  margin-top: 6px;\n}\n.price-original[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #999;\n  text-decoration: line-through;\n}\n.price-current[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 400;\n  color: #333;\n  letter-spacing: -0.02em;\n}\n.price-cuotas[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.78rem;\n  color: #00A650;\n  font-weight: 500;\n}\n.shipping-info[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n.shipping-free[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #00A650;\n  font-weight: 600;\n}\n.stock-info[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.stock-low[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #F23D4F;\n  font-weight: 500;\n}\n.stock-out[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #999;\n  font-weight: 500;\n}\n.product-seller[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 0.78rem;\n  color: #999;\n}\n.product-seller[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #3483FA;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 6px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 1.2rem;\n  color: #333;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: #999;\n  font-size: 0.9rem;\n}\n.empty-state[_ngcontent-%COMP%]   .clear-filters-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  padding: 10px 24px;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  overflow: hidden;\n  background: white;\n}\n.skeleton-img[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  background:\n    linear-gradient(\n      90deg,\n      #F0F0F0 25%,\n      #E0E0E0 50%,\n      #F0F0F0 75%);\n  background-size: 400px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n.skeleton-text[_ngcontent-%COMP%] {\n  height: 14px;\n  margin: 14px;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #F0F0F0 25%,\n      #E0E0E0 50%,\n      #F0F0F0 75%);\n  background-size: 400px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n.skeleton-text.short[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.skeleton-text.tiny[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 10px;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -400px 0;\n  }\n  100% {\n    background-position: 400px 0;\n  }\n}\n@media (max-width: 900px) {\n  .catalog-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .filters-sidebar[_ngcontent-%COMP%] {\n    position: static;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 16px;\n  }\n  .filter-section[_ngcontent-%COMP%] {\n    border-bottom: none;\n    margin-bottom: 0;\n    padding-bottom: 0;\n  }\n}\n@media (max-width: 560px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n  .product-info[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .price-current[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .results-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.product-actions[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.btn-add-cart[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=catalog-store.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogStoreComponent, { className: "CatalogStoreComponent", filePath: "app\\features\\store\\catalog-store.component.ts", lineNumber: 15 });
})();
export {
  CatalogStoreComponent
};
//# sourceMappingURL=catalog-store.component-4DDYQC5O.js.map
