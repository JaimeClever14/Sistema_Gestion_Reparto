import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';

// Simple auth check - NO complex role routing here to avoid loops
export const authGuard: CanActivateFn = (_route, _state): boolean | UrlTree => {
  const router = inject(Router);
  const token = localStorage.getItem('roma_token');
  if (!token) {
    return router.createUrlTree(['/login']);
  }
  return true;
};

export const roleGuard = (allowedRoles: string[]): CanActivateFn => {
  return (_route, _state): boolean | UrlTree => {
    const router = inject(Router);
    const token = localStorage.getItem('roma_token');

    if (!token) {
      return router.createUrlTree(['/login']);
    }

    const role = (localStorage.getItem('roma_role') ?? 'CLIENTE').toUpperCase();
    const allowed = allowedRoles.map(r => r.toUpperCase());

    if (allowed.includes(role)) {
      return true;
    }

    // Not authorized - send to login, never loop to another guarded route
    return router.createUrlTree(['/login']);
  };
};
