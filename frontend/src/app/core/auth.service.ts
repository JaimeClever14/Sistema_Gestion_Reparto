import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthResponse, LoginRequest, RegisterRequest } from './models';

const DEMO_ACCOUNTS: Record<string, { password: string; role: string }> = {
  admin:       { password: 'Admin123!',       role: 'ADMIN' },
  vendedor:    { password: 'Vendedor123!',    role: 'VENDEDOR' },
  repartidor:  { password: 'Repartidor123!',  role: 'REPARTIDOR' },
  cliente:     { password: 'Cliente123!',     role: 'CLIENTE' }
};

const DEMO_TOKEN = 'DEMO_MODE_TOKEN';
const ROLE_HOME: Record<string, string> = {
  ADMIN:       '/admin/dashboard',
  VENDEDOR:    '/vendedor/panel',
  REPARTIDOR:  '/repartidor/panel',
  CLIENTE:     '/store/catalog'
};

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly http    = inject(HttpClient);
  private readonly router  = inject(Router);
  private readonly API_URL = 'http://localhost:8080/api/auth';

  // ─── LOGIN ──────────────────────────────────────────────────────────────
  login(req: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/login`, req).pipe(
      tap(res  => this.store(res)),
      catchError(err => {
        const demo = DEMO_ACCOUNTS[req.username.toLowerCase()];
        if (demo && demo.password === req.password) {
          const res: AuthResponse = { token: DEMO_TOKEN, tokenType: 'Bearer', username: req.username, role: demo.role };
          this.store(res);
          return of(res);
        }
        return throwError(() => err);
      })
    );
  }

  // ─── REGISTER ───────────────────────────────────────────────────────────
  register(req: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/register`, req).pipe(
      tap(res => this.store(res))
      // NO demo fallback on register: if backend fails the user must know so data is not lost silently
    );
  }

  // ─── NAVIGATE after auth ─────────────────────────────────────────────────
  navigateHome(): void {
    const role = this.getRole();
    const path = ROLE_HOME[role] ?? '/login';
    this.router.navigate([path]);
  }

  // ─── LOGOUT ─────────────────────────────────────────────────────────────
  logout(): void {
    localStorage.removeItem('roma_token');
    localStorage.removeItem('roma_username');
    localStorage.removeItem('roma_role');
    this.router.navigate(['/login']);
  }

  // ─── HELPERS ────────────────────────────────────────────────────────────
  isAuthenticated(): boolean { return !!localStorage.getItem('roma_token'); }
  isDemoMode():      boolean { return localStorage.getItem('roma_token') === DEMO_TOKEN; }
  getToken():  string | null { return localStorage.getItem('roma_token'); }
  getUsername(): string      { return localStorage.getItem('roma_username') ?? 'Usuario'; }
  getRole():     string      { return (localStorage.getItem('roma_role') ?? 'CLIENTE').toUpperCase(); }

  private store(res: AuthResponse): void {
    if (res?.token) {
      localStorage.setItem('roma_token',    res.token);
      localStorage.setItem('roma_username', res.username ?? 'Usuario');
      localStorage.setItem('roma_role',     (res.role ?? 'CLIENTE').toUpperCase());
    }
  }
}