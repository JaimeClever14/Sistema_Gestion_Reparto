import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const token = localStorage.getItem('roma_token');

  // Do not send demo token to real backend to avoid MalformedJwtException
  if (!token || token === 'DEMO_MODE_TOKEN') {
    return next(request);
  }

  return next(request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  }));
};