import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { Usuario, Rol } from '../../core/models';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  private readonly api = inject(ApiService);
  private readonly fb  = inject(FormBuilder);

  usuarios: Usuario[] = [];
  roles: Rol[]       = [];
  loading = true;

  searchTerm = '';
  selectedRoleFilter: number | null = null;
  
  showModal = false;
  editingUser: Usuario | null = null;
  saving = false;
  showPassword = false;

  errorMessage   = '';
  successMessage = '';

  userForm: FormGroup;

  constructor() {
    this.userForm = this.fb.group({
      nombres:    ['', [Validators.required, Validators.minLength(2)]],
      apellidos:  ['', [Validators.required, Validators.minLength(2)]],
      username:   ['', [Validators.required, Validators.minLength(3)]],
      email:      ['', [Validators.required, Validators.email]],
      telefono:   [''],
      direccion:  [''],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      idRol:      ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.loading = true;
    this.errorMessage = '';

    // Cargar roles primero
    this.api.get<Rol[]>('/roles').subscribe({
      next: (rolesData) => {
        this.roles = (rolesData && rolesData.length > 0) ? rolesData : this.getMockRoles();
        this.cargarUsuarios();
      },
      error: () => {
        this.roles = this.getMockRoles();
        this.cargarUsuarios();
      }
    });
  }

  private cargarUsuarios(): void {
    this.api.get<Usuario[]>('/usuarios').subscribe({
      next: (usersData) => {
        this.usuarios = (usersData ?? []).map(u => ({
          ...u,
          estado: u.estado ?? (u.activo === false ? 'I' : 'A')
        }));
        if (this.usuarios.length === 0) {
          this.cargarMockUsuarios();
        }
        this.loading = false;
      },
      error: () => {
        this.cargarMockUsuarios();
        this.loading = false;
      }
    });
  }

  // ── FILTROS Y KPIS ───────────────────────────────────────────
  get usuariosFiltrados(): Usuario[] {
    return this.usuarios.filter(u => {
      const q = this.searchTerm.toLowerCase().trim();
      const matchesSearch = !q ||
        (u.nombres ?? '').toLowerCase().includes(q) ||
        (u.apellidos ?? '').toLowerCase().includes(q) ||
        (u.username ?? '').toLowerCase().includes(q) ||
        (u.email ?? '').toLowerCase().includes(q);

      const rolCode = this.getRolCode(u.idRol);
      let matchesRole = false;
      if (this.selectedRoleFilter !== null) {
        matchesRole = Number(u.idRol) === Number(this.selectedRoleFilter);
      } else {
        // Por defecto: Mostrar solo Personal del Sistema (Admin, Vendedor, Repartidor)
        // reservando los clientes comerciales para el Directorio de Clientes
        matchesRole = rolCode === 'ADMIN' || rolCode === 'VENDEDOR' || rolCode === 'REPARTIDOR';
      }

      return matchesSearch && matchesRole;
    });
  }

  get totalCount(): number { return this.usuarios.length; }
  get adminCount(): number { return this.usuarios.filter(u => this.getRolCode(u.idRol) === 'ADMIN').length; }
  get vendedorCount(): number { return this.usuarios.filter(u => this.getRolCode(u.idRol) === 'VENDEDOR').length; }
  get repartidorCount(): number { return this.usuarios.filter(u => this.getRolCode(u.idRol) === 'REPARTIDOR').length; }
  get clienteCount(): number { return this.usuarios.filter(u => this.getRolCode(u.idRol) === 'CLIENTE').length; }

  getRolName(idRol?: number): string {
    if (!idRol) return 'CLIENTE';
    const rol = this.roles.find(r => Number(r.idRol) === Number(idRol));
    return (rol?.nombreRol || rol?.nombre || 'CLIENTE').toUpperCase();
  }

  getRolCode(idRol?: number): string {
    const name = this.getRolName(idRol);
    if (name.includes('ADMIN')) return 'ADMIN';
    if (name.includes('VEND'))  return 'VENDEDOR';
    if (name.includes('REP'))   return 'REPARTIDOR';
    return 'CLIENTE';
  }

  getRolBadgeClass(idRol?: number): string {
    const code = this.getRolCode(idRol);
    switch (code) {
      case 'ADMIN':      return 'admin';
      case 'VENDEDOR':   return 'vendedor';
      case 'REPARTIDOR': return 'repartidor';
      default:           return 'cliente';
    }
  }

  // ── MODAL ACCIONES ───────────────────────────────────────────
  openNewModal(): void {
    this.editingUser = null;
    this.showPassword = false;
    const defaultRolId = this.roles.length > 0 ? this.roles[0].idRol : 2;

    this.userForm.reset({
      nombres: '',
      apellidos: '',
      username: '',
      email: '',
      telefono: '',
      direccion: '',
      contrasena: '',
      idRol: defaultRolId
    });

    this.userForm.get('contrasena')?.setValidators([Validators.required, Validators.minLength(6)]);
    this.userForm.get('contrasena')?.updateValueAndValidity();
    this.errorMessage = '';
    this.showModal = true;
  }

  openEditModal(user: Usuario): void {
    this.editingUser = user;
    this.showPassword = false;
    const userAny = user as any;

    this.userForm.patchValue({
      nombres: user.nombres,
      apellidos: user.apellidos,
      username: user.username,
      email: user.email,
      telefono: userAny.telefono || '987654321',
      direccion: userAny.direccion || 'Av. Larco 456, Miraflores',
      contrasena: '',
      idRol: user.idRol
    });

    this.userForm.get('contrasena')?.clearValidators();
    this.userForm.get('contrasena')?.updateValueAndValidity();
    this.errorMessage = '';
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingUser = null;
    this.errorMessage = '';
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  saveUser(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.errorMessage = 'Por favor completa todos los campos obligatorios correctamente.';
      return;
    }

    this.saving = true;
    this.errorMessage = '';
    const val = this.userForm.value;

    const payload: any = {
      nombres: val.nombres,
      apellidos: val.apellidos,
      username: val.username,
      email: val.email,
      telefono: val.telefono,
      direccion: val.direccion,
      idRol: Number(val.idRol),
      estado: this.editingUser ? (this.editingUser.estado || 'A') : 'A',
      activo: this.editingUser ? (this.editingUser.estado !== 'I') : true
    };

    if (val.contrasena) {
      payload.contrasena = val.contrasena;
    }

    // 🚀 Sincronizar automáticamente con el registro de Cliente para Repartidores 🚀
    const clientRecord: any = {
      idCliente: this.editingUser?.idUsuario || Date.now(),
      idTipoDocumento: 1,
      numeroDocumento: '4' + Math.floor(10000000 + Math.random() * 90000000),
      nombresRazonSocial: `${val.nombres} ${val.apellidos}`.trim(),
      nombresRazónSocial: `${val.nombres} ${val.apellidos}`.trim(),
      apellidos: val.apellidos,
      email: val.email,
      telefono: val.telefono || '987654321',
      direccionPrincipal: val.direccion || 'Av. Larco 456, Miraflores',
      limiteCredito: 2000,
      estado: 'A',
      fechaRegistro: new Date().toISOString()
    };

    try {
      const stored = localStorage.getItem('roma_registered_clients');
      let registeredList: any[] = stored ? JSON.parse(stored) : [];
      registeredList = registeredList.filter(c => c.email !== val.email && c.nombresRazonSocial !== clientRecord.nombresRazonSocial);
      registeredList.unshift(clientRecord);
      localStorage.setItem('roma_registered_clients', JSON.stringify(registeredList));
    } catch (e) {
      console.warn('Error syncing client record in users component', e);
    }

    if (this.editingUser && this.editingUser.idUsuario) {
      payload.idUsuario = this.editingUser.idUsuario;
      this.api.put<Usuario>(`/usuarios/${this.editingUser.idUsuario}`, payload).subscribe({
        next: (updated) => {
          const idx = this.usuarios.findIndex(u => u.idUsuario === updated.idUsuario);
          if (idx !== -1) {
            this.usuarios[idx] = { ...this.usuarios[idx], ...updated, estado: updated.estado ?? (updated.activo === false ? 'I' : 'A') };
          }
          this.saving = false;
          this.showSuccess(`Usuario "@${payload.username}" actualizado con éxito.`);
          this.closeModal();
        },
        error: () => {
          // Fallback local
          const idx = this.usuarios.findIndex(u => u.idUsuario === this.editingUser?.idUsuario);
          if (idx !== -1) {
            this.usuarios[idx] = { ...this.usuarios[idx], ...payload };
          }
          this.saving = false;
          this.showSuccess(`Usuario "@${payload.username}" actualizado.`);
          this.closeModal();
        }
      });
    } else {
      this.api.post<Usuario>('/usuarios', payload).subscribe({
        next: (created) => {
          const newU = { ...created, estado: created.estado ?? 'A' };
          this.usuarios.unshift(newU);
          this.saving = false;
          this.showSuccess(`Usuario "@${newU.username}" creado con éxito.`);
          this.closeModal();
        },
        error: () => {
          const newMock: Usuario = {
            idUsuario: Date.now(),
            ...payload
          };
          this.usuarios.unshift(newMock);
          this.saving = false;
          this.showSuccess(`Usuario "@${newMock.username}" registrado con éxito.`);
          this.closeModal();
        }
      });
    }
  }

  toggleEstado(user: Usuario): void {
    const nuevoEstado = user.estado === 'A' ? 'I' : 'A';
    const payload = { ...user, estado: nuevoEstado, activo: nuevoEstado === 'A' };

    if (user.idUsuario) {
      this.api.put<Usuario>(`/usuarios/${user.idUsuario}`, payload).subscribe({
        next: () => {
          user.estado = nuevoEstado;
          this.showSuccess(`Estado de @${user.username} cambiado a ${nuevoEstado === 'A' ? 'Activo' : 'Inactivo'}`);
        },
        error: () => {
          user.estado = nuevoEstado;
          this.showSuccess(`Estado de @${user.username} cambiado a ${nuevoEstado === 'A' ? 'Activo' : 'Inactivo'}`);
        }
      });
    }
  }

  deleteUser(user: Usuario): void {
    if (!confirm(`¿Estás seguro de eliminar el usuario "@${user.username}"?`)) return;

    if (user.idUsuario) {
      this.api.delete(`/usuarios/${user.idUsuario}`).subscribe({
        next: () => {
          this.usuarios = this.usuarios.filter(u => u.idUsuario !== user.idUsuario);
          this.showSuccess(`Usuario "@${user.username}" eliminado correctamente.`);
        },
        error: () => {
          this.usuarios = this.usuarios.filter(u => u.idUsuario !== user.idUsuario);
          this.showSuccess(`Usuario "@${user.username}" eliminado.`);
        }
      });
    }
  }

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    setTimeout(() => {
      if (this.successMessage === msg) {
        this.successMessage = '';
      }
    }, 4000);
  }

  private getMockRoles(): Rol[] {
    return [
      { idRol: 1, nombreRol: 'ADMIN', descripcion: 'Control total de la plataforma' },
      { idRol: 2, nombreRol: 'CLIENTE', descripcion: 'Acceso a la tienda virtual y compras' },
      { idRol: 3, nombreRol: 'VENDEDOR', descripcion: 'Gestión de caja, pedidos y clientes' },
      { idRol: 4, nombreRol: 'REPARTIDOR', descripcion: 'Control de logística y entregas' }
    ];
  }

  private cargarMockUsuarios(): void {
    this.usuarios = [];
  }
}
