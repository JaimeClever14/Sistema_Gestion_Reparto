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
        const base = (clis && clis.length > 0) ? clis : this.defaultDemoClientes();
        this.clientes = this.mergeWithRegisteredClients(base);
      },
      error: () => {
        this.cargarDemo();
      },
      complete: () => {
        this.loading = false;
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
      }
    });
  }

  selectedDocFilter = 'TODOS';
  selectedCreditoFilter = 'TODOS';

  get totalClientesCount(): number { return this.clientes.length; }
  get rucClientesCount(): number { return this.clientes.filter(c => String(c.idTipoDocumento) === '2' || (c.numeroDocumento && c.numeroDocumento.length === 11)).length; }
  get dniClientesCount(): number { return this.clientes.filter(c => String(c.idTipoDocumento) === '1' || (c.numeroDocumento && c.numeroDocumento.length === 8)).length; }
  get limiteCreditoTotal(): number {
    return +this.clientes.reduce((sum, c) => sum + (c.limiteCredito || 0), 0).toFixed(2);
  }

  getClienteNombre(c: Cliente): string {
    if (!c) return 'Cliente General';
    const obj = c as any;
    return obj['nombresRazónSocial'] || obj['nombresRazonSocial'] || obj['razonSocial'] || (obj['nombres'] ? `${obj.nombres} ${obj.apellidos || ''}`.trim() : 'Cliente Registrado');
  }

  get clientesFiltrados(): Cliente[] {
    return this.clientes.filter((c) => {
      const nombre = this.getClienteNombre(c).toLowerCase();
      const email = (c.email || '').toLowerCase();
      
      // Excluir cuentas de Administradores y Personal del Sistema del Directorio de Clientes
      if (nombre.includes('admin') || email.includes('admin') || (c as any).role === 'ADMIN' || (c as any).role === 'VENDEDOR' || (c as any).role === 'REPARTIDOR') {
        return false;
      }

      const term = (this.searchTerm || '').toLowerCase().trim();
      const matchSearch = !term ||
        nombre.includes(term) ||
        (c.apellidos && c.apellidos.toLowerCase().includes(term)) ||
        (c.numeroDocumento && c.numeroDocumento.toLowerCase().includes(term)) ||
        (c.email && c.email.toLowerCase().includes(term)) ||
        (c.direccionPrincipal && c.direccionPrincipal.toLowerCase().includes(term));

      const isRuc = String(c.idTipoDocumento) === '2' || (c.numeroDocumento && c.numeroDocumento.length === 11);
      const matchDoc = this.selectedDocFilter === 'TODOS' ||
        (this.selectedDocFilter === 'RUC' && isRuc) ||
        (this.selectedDocFilter === 'DNI' && !isRuc);

      const matchCred = this.selectedCreditoFilter === 'TODOS' ||
        (this.selectedCreditoFilter === 'CON_CREDITO' && (c.limiteCredito || 0) > 0) ||
        (this.selectedCreditoFilter === 'ACTIVOS' && (c.estado === 'A' || !c.estado));

      return matchSearch && matchDoc && matchCred;
    });
  }

  abrirWhatsapp(tel?: string, nombre?: string): void {
    if (!tel) return;
    const cleanNum = tel.replace(/\D/g, '');
    const numConCodigo = cleanNum.startsWith('51') ? cleanNum : '51' + cleanNum;
    const msg = encodeURIComponent(`Hola ${nombre || 'estimado(a)'}, te contactamos de Licorería Roma.`);
    window.open(`https://wa.me/${numConCodigo}?text=${msg}`, '_blank');
  }

  abrirMapa(dir?: string): void {
    if (!dir) return;
    window.open(`https://maps.google.com?q=${encodeURIComponent(dir + ', Lima, Peru')}`, '_blank');
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
      nombresRazonSocial: formVal.nombresRazonSocial
    };

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

  private mergeWithRegisteredClients(baseClients: Cliente[]): Cliente[] {
    const list = [...baseClients];
    try {
      const stored = localStorage.getItem('roma_registered_clients');
      if (stored) {
        const registered: Cliente[] = JSON.parse(stored);
        for (const reg of registered) {
          const regName = this.getClienteNombre(reg).toLowerCase();
          const regEmail = (reg.email || '').toLowerCase();
          
          // No incluir cuentas de Administrador o Personal del sistema en la lista de clientes
          if (regName.includes('admin') || regEmail.includes('admin') || (reg as any).role === 'ADMIN' || (reg as any).role === 'VENDEDOR' || (reg as any).role === 'REPARTIDOR') {
            continue;
          }

          const exists = list.some(c => 
            (c.email && reg.email && c.email.toLowerCase() === reg.email.toLowerCase()) ||
            (this.getClienteNombre(c).toLowerCase() === regName)
          );
          if (!exists) {
            list.unshift(reg);
          }
        }
      }
    } catch (e) {
      console.warn('Error merging registered clients', e);
    }
    return list;
  }

  private defaultDemoClientes(): Cliente[] {
    return [];
  }

  private cargarDemo(): void {
    this.clientes = this.mergeWithRegisteredClients([]);
    this.loading = false;
  }
}