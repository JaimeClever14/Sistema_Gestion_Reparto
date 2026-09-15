import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  private readonly fb   = inject(FormBuilder);
  readonly authService  = inject(AuthService);

  isRegisterTab  = false;
  loading        = false;
  errorMessage   = '';
  successMessage = '';
  showPassword   = false;
  showRegisterPassword = false;
  showForgotModal = false;
  forgotSent      = false;
  forgotEmail     = '';
  rememberMe      = true;

  readonly loginForm = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  readonly registerForm = this.fb.nonNullable.group({
    nombres:     ['', [Validators.required]],
    apellidos:   ['', [Validators.required]],
    username:    ['', [Validators.required, Validators.minLength(3)]],
    email:       ['', [Validators.required, Validators.email]],
    telefono:    [''],
    direccion:   [''],
    password:    ['', [Validators.required, Validators.minLength(6)]],
    acceptTerms: [true, [Validators.requiredTrue]]
  });

  ngOnInit(): void {
    // Form fields start completely empty
  }

  switchTab(register: boolean): void {
    this.isRegisterTab = register;
    this.errorMessage  = '';
    this.successMessage = '';
  }

  submitLogin(): void {
    if (this.loginForm.invalid) { this.loginForm.markAllAsTouched(); return; }
    const { username, password } = this.loginForm.getRawValue();
    localStorage.setItem('roma_remembered_user', username);
    this.loading = true;
    this.errorMessage = '';

    this.authService.login({ username, password }).subscribe({
      next: () => {
        this.loading = false;
        // navigateHome uses the role stored in localStorage to pick the right route
        this.authService.navigateHome();
      },
      error: (err) => {
        this.loading = false;
        let msg = '';
        if (typeof err?.error?.message === 'string') {
          msg = err.error.message;
        } else if (typeof err?.error === 'string') {
          msg = err.error;
        } else if (typeof err?.message === 'string') {
          msg = err.message;
        }
        this.errorMessage = msg || 'Credenciales inválidas. Usa los perfiles demo si el servidor no está activo.';
      }
    });
  }

  submitRegister(): void {
    if (this.registerForm.invalid) { this.registerForm.markAllAsTouched(); return; }
    const { nombres, apellidos, username, email, password, telefono, direccion } = this.registerForm.getRawValue();
    this.loading = true;
    this.errorMessage = '';

    if (direccion) {
      localStorage.setItem('roma_user_address', direccion);
    }
    if (telefono) {
      localStorage.setItem('roma_user_phone', telefono);
    }

    // 🚀 Vincular usuario registrado con la lista de Clientes del sistema 🚀
    const newClientData: any = {
      idCliente: Date.now(),
      idTipoDocumento: 1,
      numeroDocumento: '4' + Math.floor(10000000 + Math.random() * 90000000),
      nombresRazonSocial: `${nombres} ${apellidos}`.trim(),
      nombresRazónSocial: `${nombres} ${apellidos}`.trim(),
      apellidos: apellidos,
      email: email,
      telefono: telefono || '987654321',
      direccionPrincipal: direccion || 'Av. Larco 123, Miraflores',
      limiteCredito: 2000,
      estado: 'A',
      fechaRegistro: new Date().toISOString()
    };

    try {
      const stored = localStorage.getItem('roma_registered_clients');
      let registeredList: any[] = stored ? JSON.parse(stored) : [];
      registeredList = registeredList.filter(c => c.email !== email);
      registeredList.unshift(newClientData);
      localStorage.setItem('roma_registered_clients', JSON.stringify(registeredList));
    } catch (e) {
      console.warn('Error saving registered client locally', e);
    }

    this.authService.register({ nombres, apellidos, username, email, password, telefono, direccion }).subscribe({
      next: () => { this.loading = false; this.authService.navigateHome(); },
      error: (err) => {
        this.loading = false;
        let msg = '';
        if (typeof err?.error?.message === 'string') {
          msg = err.error.message;
        } else if (typeof err?.error === 'string') {
          msg = err.error;
        } else if (typeof err?.message === 'string') {
          msg = err.message;
        }

        if (msg) {
          this.errorMessage = msg;
        } else if (err?.status === 0) {
          // Si es demo / fallback sin backend, guardar sesión localmente
          localStorage.setItem('roma_token', 'DEMO_MODE_TOKEN');
          localStorage.setItem('roma_username', username);
          localStorage.setItem('roma_role', 'CLIENTE');
          this.authService.navigateHome();
        } else {
          this.errorMessage = 'No se pudo completar el registro. Intenta de nuevo.';
        }
      }
    });
  }

  get passwordStrength(): number {
    const v = this.registerForm.get('password')?.value ?? '';
    if (!v) return 0;
    let s = 0;
    if (v.length >= 6) s += 25;
    if (v.length >= 8) s += 25;
    if (/[A-Z]/.test(v) && /[a-z]/.test(v)) s += 25;
    if (/\d/.test(v) || /\W/.test(v)) s += 25;
    return s;
  }
  get strengthLabel(): string {
    const s = this.passwordStrength;
    if (s <= 0)  return '';
    if (s <= 25) return 'Débil';
    if (s <= 50) return 'Regular';
    if (s <= 75) return 'Buena';
    return 'Excelente';
  }
  get strengthColor(): string {
    const s = this.passwordStrength;
    if (s <= 25) return '#f43f5e';
    if (s <= 50) return '#f59e0b';
    if (s <= 75) return '#3b82f6';
    return '#22c55e';
  }
  get passwordStrengthScore(): number { return this.passwordStrength; }
  get passwordStrengthLabel(): string  { return this.strengthLabel; }
  get passwordStrengthColor(): string  { return this.strengthColor; }

  toggleShowPassword(): void { this.showPassword = !this.showPassword; }
  toggleShowRegisterPassword(): void { this.showRegisterPassword = !this.showRegisterPassword; }

  openForgotPassword():  void { this.showForgotModal = true;  this.forgotSent = false; this.forgotEmail = ''; }
  closeForgotPassword(): void { this.showForgotModal = false; this.forgotSent = false; }
  sendPasswordRecovery(): void {
    if (!this.forgotEmail || !this.forgotEmail.includes('@')) return;
    this.forgotSent = true;
  }
}