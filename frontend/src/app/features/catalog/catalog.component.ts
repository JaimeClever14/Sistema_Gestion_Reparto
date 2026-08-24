import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { Producto, Categoria, Marca, Presentacion } from '../../core/models';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {

  private readonly api = inject(ApiService);
  private readonly fb = inject(FormBuilder);

  loading = true;
  productos: Producto[] = [];
  categorias: Categoria[] = [];
  marcas: Marca[] = [];
  presentaciones: Presentacion[] = [];

  searchTerm = '';
  selectedCategoriaId: number | null = null;

  showModal = false;
  editingProduct: Producto | null = null;
  saving = false;

  readonly form = this.fb.nonNullable.group({
    codigoBarras: [''],
    nombre: ['', [Validators.required]],
    descripcion: [''],
    precioCompra: [0, [Validators.required, Validators.min(0)]],
    precioVenta: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    stockMinimo: [5, [Validators.min(0)]],
    stockMaximo: [100, [Validators.min(0)]],
    idCategoria: [null as number | null],
    idMarca: [null as number | null, [Validators.required]],
    idPresentacion: [null as number | null, [Validators.required]]
  });

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.loading = true;

    this.api.get<Producto[]>('/productos').subscribe({
      next: (prods) => { this.productos = prods; },
      error: () => { this.cargarDemo(); }
    });

    this.api.get<Categoria[]>('/categorias').subscribe({
      next: (cats) => { this.categorias = cats; },
      error: () => {
        this.categorias = [
          { idCategoria: 1, nombreCategoria: 'Licores & Destilados' },
          { idCategoria: 2, nombreCategoria: 'Cervezas' },
          { idCategoria: 3, nombreCategoria: 'Vinos' }
        ];
      }
    });

    this.api.get<Marca[]>('/marcas').subscribe({
      next: (m) => { this.marcas = m; },
      error: () => {
        this.marcas = [{ idMarca: 1, nombreMarca: 'Genérica' }];
      }
    });

    this.api.get<Presentacion[]>('/presentaciones').subscribe({
      next: (p) => { this.presentaciones = p; },
      error: () => {
        this.presentaciones = [{ idPresentacion: 1, nombrePresentacion: 'Unidad' }];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  get productosFiltrados(): Producto[] {
    return this.productos.filter((p) => {
      const matchSearch = !this.searchTerm ||
        p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (p.codigoBarras && p.codigoBarras.toLowerCase().includes(this.searchTerm.toLowerCase()));

      const matchCat = !this.selectedCategoriaId || p.idCategoria === Number(this.selectedCategoriaId);

      return matchSearch && matchCat;
    });
  }

  openNewModal(): void {
    this.editingProduct = null;
    this.form.reset({
      codigoBarras: `PROD-${Math.floor(1000 + Math.random() * 9000)}`,
      nombre: '',
      descripcion: '',
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

  openEditModal(prod: Producto): void {
    this.editingProduct = prod;
    this.form.patchValue({
      codigoBarras: prod.codigoBarras || '',
      nombre: prod.nombre,
      descripcion: prod.descripcion || '',
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

  closeModal(): void {
    this.showModal = false;
    this.editingProduct = null;
  }

  saveProduct(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving = true;
    const formVal = this.form.getRawValue();
    const productData: any = { ...formVal };
    if (productData.idCategoria === null) delete productData.idCategoria;

    if (this.editingProduct && this.editingProduct.idProducto) {
      const updated: Producto = { ...this.editingProduct, ...productData };
      this.api.put<Producto>(`/productos/${this.editingProduct.idProducto}`, updated).subscribe({
        next: (res) => {
          const idx = this.productos.findIndex((p) => p.idProducto === res.idProducto);
          if (idx !== -1) this.productos[idx] = res;
          this.closeModal();
        },
        error: () => {
          const idx = this.productos.findIndex((p) => p.idProducto === this.editingProduct!.idProducto);
          if (idx !== -1) this.productos[idx] = { ...updated };
          this.closeModal();
        },
        complete: () => (this.saving = false)
      });
    } else {
      const newProd: Producto = { ...productData, estado: 'A' };
      this.api.post<Producto>('/productos', newProd).subscribe({
        next: (res) => {
          this.productos.unshift(res);
          this.closeModal();
        },
        error: () => {
          const mockCreated = { ...newProd, idProducto: Date.now() };
          this.productos.unshift(mockCreated);
          this.closeModal();
        },
        complete: () => (this.saving = false)
      });
    }
  }

  // --- Inline Creation: Categoria ---
  showNuevaCategoria = false;
  nuevaCategoriaNombre = '';
  creandoCategoria = false;
  toggleNuevaCategoria(): void { this.showNuevaCategoria = !this.showNuevaCategoria; this.nuevaCategoriaNombre = ''; }
  guardarNuevaCategoria(): void {
    if (!this.nuevaCategoriaNombre.trim()) return;
    this.creandoCategoria = true;
    const payload = { nombreCategoria: this.nuevaCategoriaNombre.trim(), estado: 'A' };
    this.api.post<Categoria>('/categorias', payload).subscribe({
      next: (res) => { this.categorias.push(res); this.form.patchValue({ idCategoria: res.idCategoria }); this.toggleNuevaCategoria(); },
      error: () => { const res: Categoria = { ...payload, idCategoria: Date.now() }; this.categorias.push(res); this.form.patchValue({ idCategoria: res.idCategoria }); this.toggleNuevaCategoria(); },
      complete: () => { this.creandoCategoria = false; }
    });
  }

  // --- Inline Creation: Marca ---
  showNuevaMarca = false;
  nuevaMarcaNombre = '';
  creandoMarca = false;
  toggleNuevaMarca(): void { this.showNuevaMarca = !this.showNuevaMarca; this.nuevaMarcaNombre = ''; }
  guardarNuevaMarca(): void {
    if (!this.nuevaMarcaNombre.trim()) return;
    this.creandoMarca = true;
    const payload = { nombreMarca: this.nuevaMarcaNombre.trim(), estado: 'A' };
    this.api.post<Marca>('/marcas', payload).subscribe({
      next: (res) => { this.marcas.push(res); this.form.patchValue({ idMarca: res.idMarca }); this.toggleNuevaMarca(); },
      error: () => { const res: Marca = { ...payload, idMarca: Date.now() }; this.marcas.push(res); this.form.patchValue({ idMarca: res.idMarca }); this.toggleNuevaMarca(); },
      complete: () => { this.creandoMarca = false; }
    });
  }

  // --- Inline Creation: Presentacion ---
  showNuevaPresentacion = false;
  nuevaPresentacionNombre = '';
  creandoPresentacion = false;
  toggleNuevaPresentacion(): void { this.showNuevaPresentacion = !this.showNuevaPresentacion; this.nuevaPresentacionNombre = ''; }
  guardarNuevaPresentacion(): void {
    if (!this.nuevaPresentacionNombre.trim()) return;
    this.creandoPresentacion = true;
    const payload = { nombrePresentacion: this.nuevaPresentacionNombre.trim(), estado: 'A' };
    this.api.post<Presentacion>('/presentaciones', payload).subscribe({
      next: (res) => { this.presentaciones.push(res); this.form.patchValue({ idPresentacion: res.idPresentacion }); this.toggleNuevaPresentacion(); },
      error: () => { const res: Presentacion = { ...payload, idPresentacion: Date.now() }; this.presentaciones.push(res); this.form.patchValue({ idPresentacion: res.idPresentacion }); this.toggleNuevaPresentacion(); },
      complete: () => { this.creandoPresentacion = false; }
    });
  }

  adjustStock(prod: Producto, delta: number): void {
    const newStock = Math.max(0, prod.stock + delta);
    prod.stock = newStock;
    if (prod.idProducto) {
      this.api.put<Producto>(`/productos/${prod.idProducto}`, prod).subscribe();
    }
  }

  deleteProduct(prod: Producto): void {
    if (confirm(`¿Seguro que deseas eliminar el producto "${prod.nombre}"?`)) {
      if (prod.idProducto) {
        this.api.delete(`/productos/${prod.idProducto}`).subscribe({
          next: () => { this.productos = this.productos.filter((p) => p.idProducto !== prod.idProducto); },
          error: () => { this.productos = this.productos.filter((p) => p !== prod); }
        });
      } else {
        this.productos = this.productos.filter((p) => p !== prod);
      }
    }
  }

  private cargarDemo(): void {
    this.productos = [
      { idProducto: 1, codigoBarras: 'LIC-001', nombre: 'Whisky Johnnie Walker Black Label 750ml', descripcion: 'Whisky escocés blend 12 años', precioCompra: 80, precioVenta: 129.90, stock: 14, stockMinimo: 5, stockMaximo: 100, idCategoria: 1, idMarca: 1, idPresentacion: 1 },
      { idProducto: 2, codigoBarras: 'LIC-002', nombre: 'Vodka Absolut Original 750ml', descripcion: 'Vodka sueco destilado', precioCompra: 40, precioVenta: 69.00, stock: 4, stockMinimo: 6, stockMaximo: 100, idCategoria: 1, idMarca: 1, idPresentacion: 1 },
      { idProducto: 3, codigoBarras: 'LIC-003', nombre: 'Ron Cartavio Aniversario 750ml', descripcion: 'Ron peruano añejado', precioCompra: 25, precioVenta: 45.50, stock: 22, stockMinimo: 5, stockMaximo: 100, idCategoria: 1, idMarca: 1, idPresentacion: 1 },
      { idProducto: 4, codigoBarras: 'BEB-001', nombre: 'Cerveza Cusqueña Dorada Pack 6x330ml', descripcion: 'Cerveza premium malt', precioCompra: 18, precioVenta: 28.50, stock: 30, stockMinimo: 10, stockMaximo: 100, idCategoria: 2, idMarca: 1, idPresentacion: 1 },
      { idProducto: 5, codigoBarras: 'VIN-001', nombre: 'Vino Tacama Gran Blanco 750ml', descripcion: 'Vino fino peruano Ica', precioCompra: 20, precioVenta: 38.00, stock: 8, stockMinimo: 5, stockMaximo: 100, idCategoria: 3, idMarca: 1, idPresentacion: 1 }
    ];
    this.loading = false;
  }
}