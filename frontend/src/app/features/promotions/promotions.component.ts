import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { Promocion } from '../../core/models';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.css'
})
export class PromotionsComponent implements OnInit {

  private readonly api = inject(ApiService);
  private readonly fb = inject(FormBuilder);

  loading = true;
  promociones: Promocion[] = [];
  searchTerm = '';

  showModal = false;
  editingPromocion: Promocion | null = null;
  saving = false;

  readonly form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required]],
    descripcion: [''],
    tipoDescuento: ['PORCENTAJE', [Validators.required]],
    valorDescuento: [0, [Validators.required, Validators.min(0.01)]],
    fechaInicio: ['', [Validators.required]],
    fechaFin: ['', [Validators.required]]
  });

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.loading = true;
    this.api.get<Promocion[]>('/promociones').subscribe({
      next: (proms) => {
        this.promociones = proms || [];
        this.loading = false;
      },
      error: () => {
        this.cargarDemo();
        this.loading = false;
      }
    });
  }

  get promocionesFiltradas(): Promocion[] {
    if (!this.searchTerm) return this.promociones;
    const term = this.searchTerm.toLowerCase();
    return this.promociones.filter((p) =>
      p.nombre.toLowerCase().includes(term) || (p.descripcion && p.descripcion.toLowerCase().includes(term))
    );
  }

  openNewModal(): void {
    this.editingPromocion = null;
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    this.form.reset({
      nombre: '',
      descripcion: '',
      tipoDescuento: 'PORCENTAJE',
      valorDescuento: 10,
      fechaInicio: today.toISOString().slice(0, 16),
      fechaFin: nextWeek.toISOString().slice(0, 16)
    });
    this.showModal = true;
  }

  openEditModal(prom: Promocion): void {
    this.editingPromocion = prom;
    this.form.patchValue({
      nombre: prom.nombre,
      descripcion: prom.descripcion || '',
      tipoDescuento: prom.tipoDescuento,
      valorDescuento: prom.valorDescuento,
      fechaInicio: prom.fechaInicio ? new Date(prom.fechaInicio).toISOString().slice(0, 16) : '',
      fechaFin: prom.fechaFin ? new Date(prom.fechaFin).toISOString().slice(0, 16) : ''
    });
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingPromocion = null;
  }

  savePromocion(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving = true;
    const formVal = this.form.getRawValue();
    const payload: Partial<Promocion> = {
      ...formVal,
      fechaInicio: new Date(formVal.fechaInicio).toISOString(),
      fechaFin: new Date(formVal.fechaFin).toISOString(),
      aplicaA: 'GENERAL',
      estado: 'A'
    };

    if (this.editingPromocion && this.editingPromocion.idPromocion) {
      const updated: Promocion = { ...this.editingPromocion, ...payload } as Promocion;
      this.api.put<Promocion>(`/promociones/${this.editingPromocion.idPromocion}`, updated).subscribe({
        next: (res) => {
          const idx = this.promociones.findIndex((p) => p.idPromocion === res.idPromocion);
          if (idx !== -1) this.promociones[idx] = res;
          this.closeModal();
        },
        error: () => {
          const idx = this.promociones.findIndex((p) => p.idPromocion === this.editingPromocion!.idPromocion);
          if (idx !== -1) this.promociones[idx] = { ...updated };
          this.closeModal();
        },
        complete: () => (this.saving = false)
      });
    } else {
      this.api.post<Promocion>('/promociones', payload).subscribe({
        next: (res) => {
          this.promociones.unshift(res);
          this.closeModal();
        },
        error: () => {
          const mockCreated: Promocion = { ...(payload as Promocion), idPromocion: Date.now() };
          this.promociones.unshift(mockCreated);
          this.closeModal();
        },
        complete: () => (this.saving = false)
      });
    }
  }

  deletePromocion(prom: Promocion): void {
    if (confirm(`¿Seguro que deseas eliminar la promoción "${prom.nombre}"?`)) {
      if (prom.idPromocion) {
        this.api.delete(`/promociones/${prom.idPromocion}`).subscribe({
          next: () => {
            this.promociones = this.promociones.filter((p) => p.idPromocion !== prom.idPromocion);
          },
          error: () => {
            this.promociones = this.promociones.filter((p) => p !== prom);
          }
        });
      } else {
        this.promociones = this.promociones.filter((p) => p !== prom);
      }
    }
  }

  private cargarDemo(): void {
    this.promociones = [
      { idPromocion: 1, nombre: 'Cyber Days Licores', descripcion: 'Descuento general en todos los licores', tipoDescuento: 'PORCENTAJE', valorDescuento: 20, fechaInicio: '2026-08-01T00:00:00', fechaFin: '2026-08-15T23:59:59', aplicaA: 'CATEGORIA', estado: 'A' },
      { idPromocion: 2, nombre: 'Promo Cervezas', descripcion: 'S/ 5 de descuento en packs de cerveza', tipoDescuento: 'MONTO', valorDescuento: 5.00, fechaInicio: '2026-08-10T00:00:00', fechaFin: '2026-08-30T23:59:59', aplicaA: 'PRODUCTO', estado: 'A' }
    ];
  }
}
