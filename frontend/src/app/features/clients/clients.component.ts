import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { Cliente, TipoDocumento, DireccionCliente } from '../../core/models';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {

  private readonly api = inject(ApiService);
  private readonly fb = inject(FormBuilder);

  loading = true;
  clientes: Cliente[] = [];
  tiposDocumento: TipoDocumento[] = [];

  searchTerm = '';

  showModal = false;
  editingCliente: Cliente | null = null;
  saving = false;

  readonly form = this.fb.nonNullable.group({
    idTipoDocumento: [1],
    numeroDocumento: ['', [Validators.required]],
    nombresRazonSocial: ['', [Validators.required]],
    apellidos: [''],
    telefono: [''],
    email: ['', [Validators.email]],
    direccionPrincipal: [''],
    limiteCredito: [1000, [Validators.min(0)]]
  });

  // Direcciones locales dentro del modal (aún no guardadas en backend si es cliente nuevo)
  tempDirecciones: DireccionCliente[] = [];
  deletedDireccionesIds: number[] = [];

  readonly formDir = this.fb.nonNullable.group({
    direccion: ['', [Validators.required]],
    referencia: [''],
    distrito: [''],
    predeterminada: [false]
  });

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.loading = true;

    this.api.get<Cliente[]>('/clientes').subscribe({
      next: (clis) => {
        this.clientes = clis;
      },
      error: () => {
        this.cargarDemo();
      }
    });

    this.api.get<TipoDocumento[]>('/tipos-documento').subscribe({
      next: (tds) => {
        this.tiposDocumento = tds;
      },
      error: () => {
        this.tiposDocumento = [
          { idTipoDocumento: 1, nombreTipoDocumento: 'DNI', codigoSunat: '1' },
          { idTipoDocumento: 2, nombreTipoDocumento: 'RUC', codigoSunat: '6' }
        ];
      },
      complete: () => (this.loading = false)
    });
  }

  getClienteNombre(c: Cliente): string {
    const obj = c as any;
    return obj['nombresRaz\u00f3nSocial'] || obj['nombresRazonSocial'] || 'Sin nombre';
  }

  get clientesFiltrados(): Cliente[] {
    if (!this.searchTerm) return this.clientes;
    const term = this.searchTerm.toLowerCase();
    return this.clientes.filter((c) => {
      const nombre = this.getClienteNombre(c).toLowerCase();
      return nombre.includes(term) ||
        (c.apellidos && c.apellidos.toLowerCase().includes(term)) ||
        (c.numeroDocumento && c.numeroDocumento.includes(term)) ||
        (c.email && c.email.toLowerCase().includes(term));
    });
  }

  openNewModal(): void {
    this.editingCliente = null;
    this.tempDirecciones = [];
    this.deletedDireccionesIds = [];
    this.form.reset({
      idTipoDocumento: 1,
      numeroDocumento: '',
      nombresRazonSocial: '',
      apellidos: '',
      telefono: '',
      email: '',
      direccionPrincipal: '',
      limiteCredito: 1000
    });
    this.formDir.reset();
    this.showModal = true;
  }

  openEditModal(cliente: Cliente): void {
    this.editingCliente = cliente;
    this.tempDirecciones = [];
    this.deletedDireccionesIds = [];
    
    // Fetch addresses for this client to edit them inline
    if (cliente.idCliente) {
      this.api.get<DireccionCliente[]>('/direcciones-cliente').subscribe({
        next: (allDirs) => {
          this.tempDirecciones = allDirs.filter(d => d.idCliente === cliente.idCliente);
        }
      });
    }

    const obj = cliente as any;
    const nombre = obj['nombresRaz\u00f3nSocial'] || obj['nombresRazonSocial'] || obj.razonSocial || '';
    
    this.form.patchValue({
      idTipoDocumento: cliente.idTipoDocumento || 1,
      numeroDocumento: cliente.numeroDocumento || '',
      nombresRazonSocial: nombre,
      apellidos: cliente.apellidos || '',
      telefono: cliente.telefono || '',
      email: cliente.email || '',
      direccionPrincipal: cliente.direccionPrincipal || '',
      limiteCredito: cliente.limiteCredito || 1000
    });
    this.formDir.reset();
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingCliente = null;
  }

  saveCliente(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving = true;
    const formVal = this.form.getRawValue() as any;
    
    const clienteData: any = {
      ...formVal,
      razonSocial: formVal.nombresRazonSocial,
      idTipo: formVal.idTipoDocumento,
      'nombresRaz\u00f3nSocial': formVal.nombresRazonSocial // Fallback
    };
    delete clienteData.nombresRazonSocial;

    if (this.editingCliente && this.editingCliente.idCliente) {
      const updated: Cliente = { ...this.editingCliente, ...clienteData };
      this.api.put<Cliente>(`/clientes/${this.editingCliente.idCliente}`, updated).subscribe({
        next: (res) => {
          this.syncDirecciones(res.idCliente!);
          const idx = this.clientes.findIndex((c) => c.idCliente === res.idCliente);
          if (idx !== -1) this.clientes[idx] = res;
        },
        error: () => {
          const idx = this.clientes.findIndex((c) => c.idCliente === this.editingCliente!.idCliente);
          if (idx !== -1) this.clientes[idx] = { ...updated };
          this.closeModal();
          this.saving = false;
        }
      });
    } else {
      const newCli: Cliente = { ...clienteData, estado: 'A' };
      this.api.post<Cliente>('/clientes', newCli).subscribe({
        next: (res) => {
          this.syncDirecciones(res.idCliente!);
          this.clientes.unshift(res);
        },
        error: () => {
          const mockCreated: any = { ...newCli, idCliente: Date.now() };
          this.clientes.unshift(mockCreated);
          this.closeModal();
          this.saving = false;
        }
      });
    }
  }

  private syncDirecciones(idCliente: number): void {
    // 1. Delete removed addresses
    for (const idDir of this.deletedDireccionesIds) {
      this.api.delete(`/direcciones-cliente/${idDir}`).subscribe();
    }
    // 2. Save new addresses
    const newDirs = this.tempDirecciones.filter(d => !d.idDireccion);
    for (const d of newDirs) {
      d.idCliente = idCliente;
      d.estado = 'A';
      this.api.post('/direcciones-cliente', d).subscribe();
    }
    
    setTimeout(() => {
      this.closeModal();
      this.saving = false;
    }, 500);
  }

  deleteCliente(cliente: Cliente): void {
    if (confirm(`¿Seguro que deseas eliminar al cliente "${cliente.nombresRazónSocial}"?`)) {
      if (cliente.idCliente) {
        this.api.delete(`/clientes/${cliente.idCliente}`).subscribe({
          next: () => {
            this.clientes = this.clientes.filter((c) => c.idCliente !== cliente.idCliente);
          },
          error: () => {
            this.clientes = this.clientes.filter((c) => c !== cliente);
          }
        });
      } else {
        this.clientes = this.clientes.filter((c) => c !== cliente);
      }
    }
  }

  // ---- DIRECCIONES INLINE LOGIC ----
  addTempDireccion(): void {
    if (this.formDir.invalid) {
      this.formDir.markAllAsTouched();
      return;
    }
    const val = this.formDir.getRawValue();
    this.tempDirecciones.push({
      idCliente: 0,
      direccion: val.direccion,
      distrito: val.distrito,
      referencia: val.referencia,
      predeterminada: val.predeterminada,
      estado: 'A'
    });
    this.formDir.reset({ predeterminada: false });
  }

  removeTempDireccion(index: number): void {
    const dir = this.tempDirecciones[index];
    if (dir.idDireccion) {
      this.deletedDireccionesIds.push(dir.idDireccion);
    }
    this.tempDirecciones.splice(index, 1);
  }

  private cargarDemo(): void {
    this.clientes = [
      { idCliente: 1, idTipoDocumento: 2, numeroDocumento: '20601234567', nombresRazónSocial: 'Inversiones Licoreras SAC', telefono: '987654321', email: 'contacto@licoreras.pe', direccionPrincipal: 'Av. Larco 456, Miraflores', limiteCredito: 5000, estado: 'A' },
      { idCliente: 2, idTipoDocumento: 1, numeroDocumento: '45891234', nombresRazónSocial: 'Juan Carlos', apellidos: 'Mendoza', telefono: '912345678', email: 'juan.mendoza@gmail.com', direccionPrincipal: 'Calle Los Olivos 123, San Isidro', limiteCredito: 1500, estado: 'A' },
      { idCliente: 3, idTipoDocumento: 1, numeroDocumento: '78451296', nombresRazónSocial: 'María Elena', apellidos: 'Quispe Rivas', telefono: '954123876', email: 'mquispe@hotmail.com', direccionPrincipal: 'Av. Brasil 1820, Pueblo Libre', limiteCredito: 2000, estado: 'A' }
    ];
    this.loading = false;
  }
}