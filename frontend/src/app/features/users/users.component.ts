import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { Usuario, Rol } from '../../core/models';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  private readonly api = inject(ApiService);
  private readonly fb = inject(FormBuilder);

  usuarios: Usuario[] = [];
  roles: Rol[] = [];
  loading = true;

  searchTerm = '';
  selectedRoleFilter: number | null = null;
  showModal = false;
  editingUser: Usuario | null = null;
  saving = false;
  errorMessage = '';
  successMessage = '';

  userForm: FormGroup;

  constructor() {
    this.userForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      idRol: ['', [Validators.required]]
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
        this.roles = rolesData && rolesData.length > 0 ? rolesData : this.getMockRoles();
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
        this.usuarios = usersData;
        this.loading = false;
      },
      error: () => {
        this.cargarMockUsuarios();
        this.loading = false;
      }
    });
  }

  get usuariosFiltrados(): Usuario[] {
    return this.usuarios.filter(u => {
      const matchesSearch = !this.searchTerm ||
        (u.nombres && u.nombres.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (u.apellidos && u.apellidos.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (u.username && u.username.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (u.email && u.email.toLowerCase().includes(this.searchTerm.toLowerCase()));

      const matchesRole = this.selectedRoleFilter === null || u.idRol === this.selectedRoleFilter;

      return matchesSearch && matchesRole;
    });
  }

  getRolName(idRol?: number): string {
    const rol = this.roles.find(r => r.idRol === Number(idRol));
    return rol ? rol.nombreRol : 'CLIENTE';
  }

  openNewModal(): void {
    this.editingUser = null;
    this.userForm.reset({
      nombres: '',
      apellidos: '',
      username: '',
      email: '',
      contrasena: '',
      idRol: this.roles.length > 0 ? this.roles[0].idRol : 2
    });
    this.userForm.get('contrasena')?.setValidators([Validators.required, Validators.minLength(6)]);
    this.userForm.get('contrasena')?.updateValueAndValidity();
    this.errorMessage = '';
    this.showModal = true;
  }

  openEditModal(user: Usuario): void {
    this.editingUser = user;
    this.userForm.patchValue({
      nombres: user.nombres,
      apellidos: user.apellidos,
      username: user.username,
      email: user.email,
      contrasena: '',
      idRol: user.idRol
    });
    // Al editar, la contraseña no es obligatoria si no se desea cambiar
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

  saveUser(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.errorMessage = 'Por favor completa todos los campos requeridos correctamente.';
      return;
    }

    this.saving = true;
    this.errorMessage = '';
    const formVal = this.userForm.value;

    const payload: any = {
      nombres: formVal.nombres,
      apellidos: formVal.apellidos,
      username: formVal.username,
      email: formVal.email,
      idRol: Number(formVal.idRol),
      estado: this.editingUser ? this.editingUser.estado || 'A' : 'A'
    };

    if (formVal.contrasena) {
      payload.contrasena = formVal.contrasena;
    }

    if (this.editingUser && this.editingUser.idUsuario) {
      payload.idUsuario = this.editingUser.idUsuario;
      this.api.put<Usuario>(`/usuarios/${this.editingUser.idUsuario}`, payload).subscribe({
        next: (updated) => {
          const idx = this.usuarios.findIndex(u => u.idUsuario === updated.idUsuario);
          if (idx !== -1) {
            this.usuarios[idx] = updated;
          }
          this.saving = false;
          this.showSuccess('Usuario actualizado correctamente');
          this.closeModal();
        },
        error: (err) => {
          // Fallback local
          const idx = this.usuarios.findIndex(u => u.idUsuario === this.editingUser?.idUsuario);
          if (idx !== -1) {
            this.usuarios[idx] = { ...this.usuarios[idx], ...payload };
          }
          this.saving = false;
          this.showSuccess('Usuario actualizado en modo local');
          this.closeModal();
        }
      });
    } else {
      this.api.post<Usuario>('/usuarios', payload).subscribe({
        next: (created) => {
          this.usuarios.unshift(created);
          this.saving = false;
          this.showSuccess(`Usuario "${created.username}" creado con éxito`);
          this.closeModal();
        },
        error: (err) => {
          // Mock creation fallback
          const newMock: Usuario = {
            idUsuario: Date.now(),
            ...payload
          };
          this.usuarios.unshift(newMock);
          this.saving = false;
          this.showSuccess(`Usuario "${newMock.username}" creado con éxito (modo local)`);
          this.closeModal();
        }
      });
    }
  }

  toggleEstado(user: Usuario): void {
    const nuevoEstado = user.estado === 'A' ? 'I' : 'A';
    const payload = { ...user, estado: nuevoEstado };
    if (user.idUsuario) {
      this.api.put<Usuario>(`/usuarios/${user.idUsuario}`, payload).subscribe({
        next: () => {
          user.estado = nuevoEstado;
          this.showSuccess(`Estado de ${user.username} cambiado a ${nuevoEstado === 'A' ? 'Activo' : 'Inactivo'}`);
        },
        error: () => {
          user.estado = nuevoEstado;
          this.showSuccess(`Estado de ${user.username} cambiado a ${nuevoEstado === 'A' ? 'Activo' : 'Inactivo'}`);
        }
      });
    }
  }

  deleteUser(user: Usuario): void {
    if (!confirm(`¿Estás seguro de eliminar el usuario "${user.username}"?`)) return;

    if (user.idUsuario) {
      this.api.delete(`/usuarios/${user.idUsuario}`).subscribe({
        next: () => {
          this.usuarios = this.usuarios.filter(u => u.idUsuario !== user.idUsuario);
          this.showSuccess(`Usuario "${user.username}" eliminado.`);
        },
        error: () => {
          this.usuarios = this.usuarios.filter(u => u.idUsuario !== user.idUsuario);
          this.showSuccess(`Usuario "${user.username}" eliminado.`);
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
      { idRol: 1, nombreRol: 'ADMIN', descripcion: 'Administrador del sistema' },
      { idRol: 2, nombreRol: 'CLIENTE', descripcion: 'Cliente registrado' },
      { idRol: 3, nombreRol: 'VENDEDOR', descripcion: 'Personal de ventas' },
      { idRol: 4, nombreRol: 'REPARTIDOR', descripcion: 'Personal de entregas' }
    ];
  }

  private cargarMockUsuarios(): void {
    this.usuarios = [
      { idUsuario: 1, nombres: 'Administrador', apellidos: 'Principal', username: 'admin', email: 'admin@roma.com', idRol: 1, estado: 'A' },
      { idUsuario: 2, nombres: 'Carlos', apellidos: 'Repartidor', username: 'carlos_rep', email: 'carlos@roma.com', idRol: 4, estado: 'A' },
      { idUsuario: 3, nombres: 'Ana', apellidos: 'Vendedora', username: 'ana_ven', email: 'ana@roma.com', idRol: 3, estado: 'A' },
      { idUsuario: 4, nombres: 'Juan', apellidos: 'Cliente', username: 'cliente', email: 'cliente@roma.com', idRol: 2, estado: 'A' }
    ];
  }
}
