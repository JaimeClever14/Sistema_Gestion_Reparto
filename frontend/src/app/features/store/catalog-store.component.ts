import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { Producto, Categoria } from '../../core/models';
import { CartService } from '../../core/cart.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalog-store.component.html',
  styleUrl: './catalog-store.component.css'
})
export class CatalogStoreComponent implements OnInit {

  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  readonly cartService = inject(CartService);

  loading = true;
  productos: Producto[] = [];
  categorias: Categoria[] = [];

  searchTerm = '';
  selectedCategoriaId: number | null = null;
  sortBy = 'relevancia';
  priceMin: number | null = null;
  priceMax: number | null = null;

  ngOnInit(): void {
    this.cargarDatos();

    this.route.queryParams.subscribe((params) => {
      if (params['q']) {
        this.searchTerm = params['q'];
      }
      if (params['categoryId']) {
        this.selectedCategoriaId = Number(params['categoryId']);
      } else if (params['category']) {
        const catName = String(params['category']).toLowerCase();
        const foundCat = this.categorias.find(c => this.getNombreCat(c).toLowerCase() === catName);
        if (foundCat) {
          this.selectedCategoriaId = foundCat.idCategoria || null;
        }
      }
    });
  }

  getNombreCat(cat: Categoria): string {
    return cat.nombre || cat.nombreCategoria || 'Categoría';
  }

  cargarDatos(): void {
    this.loading = true;

    this.api.get<Producto[]>('/productos').subscribe({
      next: (prods) => {
        this.productos = prods;
      },
      error: () => {
        this.cargarDemo();
      }
    });

    this.api.get<Categoria[]>('/categorias').subscribe({
      next: (cats) => {
        this.categorias = (cats && cats.length > 0) ? cats : [
          { idCategoria: 1, nombre: 'Licores & Destilados' },
          { idCategoria: 2, nombre: 'Cervezas' },
          { idCategoria: 3, nombre: 'Vinos' },
          { idCategoria: 4, nombre: 'Bebidas Sin Alcohol' }
        ];
      },
      error: () => {
        this.categorias = [
          { idCategoria: 1, nombre: 'Licores & Destilados' },
          { idCategoria: 2, nombre: 'Cervezas' },
          { idCategoria: 3, nombre: 'Vinos' },
          { idCategoria: 4, nombre: 'Bebidas Sin Alcohol' }
        ];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  get productosFiltrados(): Producto[] {
    let filtered = this.productos.filter((p) => {
      const matchSearch = !this.searchTerm ||
        p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (p.descripcion && p.descripcion.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (p.codigoBarras && p.codigoBarras.toLowerCase().includes(this.searchTerm.toLowerCase()));

      const matchCat = !this.selectedCategoriaId || p.idCategoria === Number(this.selectedCategoriaId);

      const matchPriceMin = this.priceMin === null || p.precioVenta >= this.priceMin;
      const matchPriceMax = this.priceMax === null || p.precioVenta <= this.priceMax;

      return matchSearch && matchCat && matchPriceMin && matchPriceMax;
    });

    // Sorting
    switch (this.sortBy) {
      case 'precio-asc':
        filtered.sort((a, b) => a.precioVenta - b.precioVenta);
        break;
      case 'precio-desc':
        filtered.sort((a, b) => b.precioVenta - a.precioVenta);
        break;
      case 'nombre':
        filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
    }

    return filtered;
  }

  selectCategoria(id: number | null): void {
    this.selectedCategoriaId = id;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCategoriaId = null;
    this.priceMin = null;
    this.priceMax = null;
    this.sortBy = 'relevancia';
  }

  getCuotas(precio: number): string {
    const cuota = (precio / 6).toFixed(2);
    return `6x S/ ${cuota} sin interés`;
  }

  hasStock(prod: Producto): boolean {
    return prod.stock > 0;
  }

  isLowStock(prod: Producto): boolean {
    return prod.stock > 0 && prod.stock <= (prod.stockMinimo || 5);
  }

  getDiscountPercent(): number {
    return Math.floor(Math.random() * 20) + 5;
  }

  addedProductId: number | null = null;

  addToCart(producto: Producto): void {
    this.cartService.addToCart(producto);
    const pid = producto.idProducto ?? null;
    this.addedProductId = pid;
    setTimeout(() => {
      if (this.addedProductId === pid) {
        this.addedProductId = null;
      }
    }, 1500);
  }

  private cargarDemo(): void {
    this.productos = [
      {
        idProducto: 1,
        codigoBarras: 'LIC-001',
        nombre: 'Whisky Johnnie Walker Black Label 750ml',
        descripcion: 'Whisky escocés blended 12 años de añejamiento. Notas de vainilla, frutas oscuras y humo.',
        precioCompra: 80,
        precioVenta: 129.90,
        stock: 14,
        stockMinimo: 5,
        idCategoria: 1,
        imagenUrl: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&auto=format&fit=crop&q=80'
      },
      {
        idProducto: 2,
        codigoBarras: 'LIC-002',
        nombre: 'Vodka Absolut Original 750ml',
        descripcion: 'Vodka sueco destilado de trigo de invierno. Pureza y calidad premium.',
        precioCompra: 40,
        precioVenta: 69.00,
        stock: 22,
        stockMinimo: 6,
        idCategoria: 1,
        imagenUrl: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=500&auto=format&fit=crop&q=80'
      },
      {
        idProducto: 3,
        codigoBarras: 'LIC-003',
        nombre: 'Ron Cartavio Aniversario 750ml',
        descripcion: 'Ron peruano añejado en barricas de roble. Suave y con notas de caramelo.',
        precioCompra: 25,
        precioVenta: 45.50,
        stock: 3,
        stockMinimo: 5,
        idCategoria: 1,
        imagenUrl: 'https://images.unsplash.com/photo-1614313511387-1436a4480edd?w=500&auto=format&fit=crop&q=80'
      },
      {
        idProducto: 4,
        codigoBarras: 'BEB-001',
        nombre: 'Cerveza Cusqueña Dorada Pack 6x330ml',
        descripcion: 'Cerveza premium elaborada con malta importada. Sabor intenso y refrescante.',
        precioCompra: 18,
        precioVenta: 28.50,
        stock: 45,
        stockMinimo: 10,
        idCategoria: 2,
        imagenUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&auto=format&fit=crop&q=80'
      },
      {
        idProducto: 5,
        codigoBarras: 'VIN-001',
        nombre: 'Vino Tacama Gran Blanco 750ml',
        descripcion: 'Vino blanco peruano de la región de Ica. Fresco, afrutado y elegante.',
        precioCompra: 20,
        precioVenta: 38.00,
        stock: 18,
        stockMinimo: 5,
        idCategoria: 3,
        imagenUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format&fit=crop&q=80'
      },
      {
        idProducto: 6,
        codigoBarras: 'LIC-004',
        nombre: 'Pisco Cuatro Gallos Quebranta 750ml',
        descripcion: 'Pisco puro peruano. Sabor intenso, aromático, ideal para cocktails.',
        precioCompra: 25,
        precioVenta: 42.00,
        stock: 20,
        stockMinimo: 5,
        idCategoria: 1,
        imagenUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=80'
      },
      {
        idProducto: 7,
        codigoBarras: 'BEB-002',
        nombre: 'Cerveza Corona Extra Pack 6x355ml',
        descripcion: 'Cerveza mexicana ligera y refrescante. Perfecta con limón.',
        precioCompra: 20,
        precioVenta: 32.00,
        stock: 35,
        stockMinimo: 8,
        idCategoria: 2,
        imagenUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&auto=format&fit=crop&q=80'
      },
      {
        idProducto: 8,
        codigoBarras: 'VIN-002',
        nombre: 'Vino Casillero del Diablo Cabernet Sauvignon 750ml',
        descripcion: 'Vino tinto chileno. Taninos suaves, notas de cereza y chocolate.',
        precioCompra: 22,
        precioVenta: 35.00,
        stock: 12,
        stockMinimo: 5,
        idCategoria: 3,
        imagenUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format&fit=crop&q=80'
      }
    ];
    this.loading = false;
  }
}
