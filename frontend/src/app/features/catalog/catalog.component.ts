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

  activeTab: 'productos' | 'categorias' | 'marcas' = 'productos';

  loading = true;
  productos: Producto[] = [];
  categorias: Categoria[] = [];
  marcas: Marca[] = [];
  presentaciones: Presentacion[] = [];

  searchTerm = '';
  selectedCategoriaId: number | null = null;

  // --- Modal Producto ---
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
    imagenUrl: [''],
    idCategoria: [null as number | null],
    idMarca: [null as number | null],
    idPresentacion: [null as number | null]
  });

  // --- Modal Categoría ---
  showCategoriaModal = false;
  editingCategoria: Categoria | null = null;
  savingCategoria = false;
  readonly catForm = this.fb.nonNullable.group({
    nombre: ['', [Validators.required]],
    descripcion: ['']
  });

  // --- Modal Marca ---
  showMarcaModal = false;
  editingMarca: Marca | null = null;
  savingMarca = false;
  readonly marcaForm = this.fb.nonNullable.group({
    nombre: ['', [Validators.required]],
    descripcion: ['']
  });

  // --- Modal Presentación ---
  showPresentacionModal = false;
  editingPresentacion: Presentacion | null = null;
  savingPresentacion = false;
  readonly presForm = this.fb.nonNullable.group({
    nombre: ['', [Validators.required]],
    descripcion: ['']
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
          { idCategoria: 1, nombre: 'Licores & Destilados', descripcion: 'Bebidas alcohólicas destiladas' },
          { idCategoria: 2, nombre: 'Cervezas', descripcion: 'Cervezas nacionales e importadas' },
          { idCategoria: 3, nombre: 'Vinos', descripcion: 'Vinos tintos, blancos y espumantes' }
        ];
      }
    });

    this.api.get<Marca[]>('/marcas').subscribe({
      next: (m) => { this.marcas = m; },
      error: () => {
        this.marcas = [{ idMarca: 1, nombre: 'Genérica', descripcion: 'Marca general' }];
      }
    });

    this.api.get<Presentacion[]>('/presentaciones').subscribe({
      next: (p) => { this.presentaciones = p; },
      error: () => {
        this.presentaciones = [{ idPresentacion: 1, nombre: 'Unidad', descripcion: 'Presentación unitaria' }];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  getNombreCat(cat: Categoria): string {
    return cat.nombre || cat.nombreCategoria || '';
  }

  getNombreMarc(m: Marca): string {
    return m.nombre || m.nombreMarca || '';
  }

  getNombrePres(p: Presentacion): string {
    return p.nombre || p.nombrePresentacion || '';
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

  // --- CRUD PRODUCTOS ---
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
      imagenUrl: '',
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
      imagenUrl: prod.imagenUrl || '',
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
    const productData: any = {
      ...formVal,
      idCategoria: formVal.idCategoria ? Number(formVal.idCategoria) : (this.categorias[0]?.idCategoria || 1),
      idMarca: formVal.idMarca ? Number(formVal.idMarca) : (this.marcas[0]?.idMarca || 1),
      idPresentacion: formVal.idPresentacion ? Number(formVal.idPresentacion) : (this.presentaciones[0]?.idPresentacion || 1)
    };

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

  // --- CRUD CATEGORIAS ---
  openCategoriaModal(cat?: Categoria): void {
    this.editingCategoria = cat || null;
    this.catForm.reset({
      nombre: cat ? (cat.nombre || cat.nombreCategoria || '') : '',
      descripcion: cat ? (cat.descripcion || '') : ''
    });
    this.showCategoriaModal = true;
  }

  closeCategoriaModal(): void {
    this.showCategoriaModal = false;
    this.editingCategoria = null;
  }

  saveCategoria(): void {
    if (this.catForm.invalid) {
      this.catForm.markAllAsTouched();
      return;
    }
    this.savingCategoria = true;
    const val = this.catForm.getRawValue();
    const payload = {
      nombre: val.nombre.trim(),
      descripcion: val.descripcion ? val.descripcion.trim() : ''
    };

    if (this.editingCategoria && this.editingCategoria.idCategoria) {
      this.api.put<Categoria>(`/categorias/${this.editingCategoria.idCategoria}`, payload).subscribe({
        next: (res) => {
          const idx = this.categorias.findIndex(c => c.idCategoria === res.idCategoria);
          if (idx !== -1) this.categorias[idx] = res;
          this.closeCategoriaModal();
        },
        error: () => {
          const idx = this.categorias.findIndex(c => c.idCategoria === this.editingCategoria!.idCategoria);
          if (idx !== -1) this.categorias[idx] = { ...this.editingCategoria, ...payload };
          this.closeCategoriaModal();
        },
        complete: () => { this.savingCategoria = false; }
      });
    } else {
      this.api.post<Categoria>('/categorias', payload).subscribe({
        next: (res) => {
          this.categorias.push(res);
          this.form.patchValue({ idCategoria: res.idCategoria });
          this.closeCategoriaModal();
        },
        error: () => {
          const mockCat: Categoria = { idCategoria: Date.now(), ...payload };
          this.categorias.push(mockCat);
          this.form.patchValue({ idCategoria: mockCat.idCategoria });
          this.closeCategoriaModal();
        },
        complete: () => { this.savingCategoria = false; }
      });
    }
  }

  deleteCategoria(cat: Categoria): void {
    const nombre = this.getNombreCat(cat);
    if (confirm(`¿Seguro que deseas eliminar la categoría "${nombre}"?`)) {
      if (cat.idCategoria) {
        this.api.delete(`/categorias/${cat.idCategoria}`).subscribe({
          next: () => { this.categorias = this.categorias.filter(c => c.idCategoria !== cat.idCategoria); },
          error: () => { this.categorias = this.categorias.filter(c => c.idCategoria !== cat.idCategoria); }
        });
      } else {
        this.categorias = this.categorias.filter(c => c !== cat);
      }
    }
  }

  // --- CRUD MARCAS ---
  openMarcaModal(m?: Marca): void {
    this.editingMarca = m || null;
    this.marcaForm.reset({
      nombre: m ? (m.nombre || m.nombreMarca || '') : '',
      descripcion: m ? (m.descripcion || '') : ''
    });
    this.showMarcaModal = true;
  }

  closeMarcaModal(): void {
    this.showMarcaModal = false;
    this.editingMarca = null;
  }

  saveMarca(): void {
    if (this.marcaForm.invalid) {
      this.marcaForm.markAllAsTouched();
      return;
    }
    this.savingMarca = true;
    const val = this.marcaForm.getRawValue();
    const payload = {
      nombre: val.nombre.trim(),
      descripcion: val.descripcion ? val.descripcion.trim() : ''
    };

    if (this.editingMarca && this.editingMarca.idMarca) {
      this.api.put<Marca>(`/marcas/${this.editingMarca.idMarca}`, payload).subscribe({
        next: (res) => {
          const idx = this.marcas.findIndex(m => m.idMarca === res.idMarca);
          if (idx !== -1) this.marcas[idx] = res;
          this.closeMarcaModal();
        },
        error: () => {
          const idx = this.marcas.findIndex(m => m.idMarca === this.editingMarca!.idMarca);
          if (idx !== -1) this.marcas[idx] = { ...this.editingMarca, ...payload };
          this.closeMarcaModal();
        },
        complete: () => { this.savingMarca = false; }
      });
    } else {
      this.api.post<Marca>('/marcas', payload).subscribe({
        next: (res) => {
          this.marcas.push(res);
          this.form.patchValue({ idMarca: res.idMarca });
          this.closeMarcaModal();
        },
        error: () => {
          const mock: Marca = { idMarca: Date.now(), ...payload };
          this.marcas.push(mock);
          this.form.patchValue({ idMarca: mock.idMarca });
          this.closeMarcaModal();
        },
        complete: () => { this.savingMarca = false; }
      });
    }
  }

  deleteMarca(m: Marca): void {
    const nombre = this.getNombreMarc(m);
    if (confirm(`¿Seguro que deseas eliminar la marca "${nombre}"?`)) {
      if (m.idMarca) {
        this.api.delete(`/marcas/${m.idMarca}`).subscribe({
          next: () => { this.marcas = this.marcas.filter(x => x.idMarca !== m.idMarca); },
          error: () => { this.marcas = this.marcas.filter(x => x.idMarca !== m.idMarca); }
        });
      } else {
        this.marcas = this.marcas.filter(x => x !== m);
      }
    }
  }

  // --- CRUD PRESENTACIONES ---
  openPresentacionModal(p?: Presentacion): void {
    this.editingPresentacion = p || null;
    this.presForm.reset({
      nombre: p ? (p.nombre || p.nombrePresentacion || '') : '',
      descripcion: p ? (p.descripcion || '') : ''
    });
    this.showPresentacionModal = true;
  }

  closePresentacionModal(): void {
    this.showPresentacionModal = false;
    this.editingPresentacion = null;
  }

  savePresentacion(): void {
    if (this.presForm.invalid) {
      this.presForm.markAllAsTouched();
      return;
    }
    this.savingPresentacion = true;
    const val = this.presForm.getRawValue();
    const payload = {
      nombre: val.nombre.trim(),
      descripcion: val.descripcion ? val.descripcion.trim() : '',
      capacidadMl: 250
    };

    if (this.editingPresentacion && this.editingPresentacion.idPresentacion) {
      this.api.put<Presentacion>(`/presentaciones/${this.editingPresentacion.idPresentacion}`, payload).subscribe({
        next: (res) => {
          const idx = this.presentaciones.findIndex(x => x.idPresentacion === res.idPresentacion);
          if (idx !== -1) this.presentaciones[idx] = res;
          this.closePresentacionModal();
        },
        error: () => {
          const idx = this.presentaciones.findIndex(x => x.idPresentacion === this.editingPresentacion!.idPresentacion);
          if (idx !== -1) this.presentaciones[idx] = { ...this.editingPresentacion, ...payload };
          this.closePresentacionModal();
        },
        complete: () => { this.savingPresentacion = false; }
      });
    } else {
      this.api.post<Presentacion>('/presentaciones', payload).subscribe({
        next: (res) => {
          this.presentaciones.push(res);
          this.form.patchValue({ idPresentacion: res.idPresentacion });
          this.closePresentacionModal();
        },
        error: () => {
          const mock: Presentacion = { idPresentacion: Date.now(), ...payload };
          this.presentaciones.push(mock);
          this.form.patchValue({ idPresentacion: mock.idPresentacion });
          this.closePresentacionModal();
        },
        complete: () => { this.savingPresentacion = false; }
      });
    }
  }

  deletePresentacion(p: Presentacion): void {
    const nombre = this.getNombrePres(p);
    if (confirm(`¿Seguro que deseas eliminar la presentación "${nombre}"?`)) {
      if (p.idPresentacion) {
        this.api.delete(`/presentaciones/${p.idPresentacion}`).subscribe({
          next: () => { this.presentaciones = this.presentaciones.filter(x => x.idPresentacion !== p.idPresentacion); },
          error: () => { this.presentaciones = this.presentaciones.filter(x => x.idPresentacion !== p.idPresentacion); }
        });
      } else {
        this.presentaciones = this.presentaciones.filter(x => x !== p);
      }
    }
  }

  readonly PRESET_IMAGES = [
    { label: 'Whisky 🥃', url: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&auto=format&fit=crop&q=80' },
    { label: 'Vodka 🍸', url: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=500&auto=format&fit=crop&q=80' },
    { label: 'Ron 🍹', url: 'https://images.unsplash.com/photo-1614313511387-1436a4480edd?w=500&auto=format&fit=crop&q=80' },
    { label: 'Pisco / Tequila 🥂', url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=80' },
    { label: 'Cerveza 🍺', url: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&auto=format&fit=crop&q=80' },
    { label: 'Vino 🍷', url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format&fit=crop&q=80' },
    { label: 'Champagne 🍾', url: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?w=500&auto=format&fit=crop&q=80' },
    { label: 'Gin 🍸', url: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&auto=format&fit=crop&q=80' }
  ];

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64Url = reader.result as string;
        this.form.patchValue({ imagenUrl: base64Url });
      };
      reader.readAsDataURL(file);
    }
  }

  selectPresetImage(url: string): void {
    this.form.patchValue({ imagenUrl: url });
  }

  clearImage(): void {
    this.form.patchValue({ imagenUrl: '' });
  }

  private cargarDemo(): void {
    this.productos = [
      { idProducto: 1, codigoBarras: 'LIC-001', nombre: 'Whisky Johnnie Walker Black Label 750ml', descripcion: 'Whisky escocés blend 12 años', precioCompra: 80, precioVenta: 129.90, stock: 14, stockMinimo: 5, stockMaximo: 100, idCategoria: 1, idMarca: 1, idPresentacion: 1, imagenUrl: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&auto=format&fit=crop&q=80' },
      { idProducto: 2, codigoBarras: 'LIC-002', nombre: 'Vodka Absolut Original 750ml', descripcion: 'Vodka sueco destilado', precioCompra: 40, precioVenta: 69.00, stock: 4, stockMinimo: 6, stockMaximo: 100, idCategoria: 1, idMarca: 1, idPresentacion: 1, imagenUrl: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=500&auto=format&fit=crop&q=80' },
      { idProducto: 3, codigoBarras: 'LIC-003', nombre: 'Ron Cartavio Aniversario 750ml', descripcion: 'Ron peruano añejado', precioCompra: 25, precioVenta: 45.50, stock: 22, stockMinimo: 5, stockMaximo: 100, idCategoria: 1, idMarca: 1, idPresentacion: 1, imagenUrl: 'https://images.unsplash.com/photo-1614313511387-1436a4480edd?w=500&auto=format&fit=crop&q=80' },
      { idProducto: 4, codigoBarras: 'BEB-001', nombre: 'Cerveza Cusqueña Dorada Pack 6x330ml', descripcion: 'Cerveza premium malt', precioCompra: 18, precioVenta: 28.50, stock: 30, stockMinimo: 10, stockMaximo: 100, idCategoria: 2, idMarca: 1, idPresentacion: 1, imagenUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&auto=format&fit=crop&q=80' },
      { idProducto: 5, codigoBarras: 'VIN-001', nombre: 'Vino Tacama Gran Blanco 750ml', descripcion: 'Vino fino peruano Ica', precioCompra: 20, precioVenta: 38.00, stock: 8, stockMinimo: 5, stockMaximo: 100, idCategoria: 3, idMarca: 1, idPresentacion: 1, imagenUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format&fit=crop&q=80' }
    ];
    this.loading = false;
  }
}