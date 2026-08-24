import { Routes } from '@angular/router';
import { roleGuard } from './core/role.guard';
import { ShellComponent } from './shell/shell.component';
import { StoreShellComponent } from './store/store-shell.component';

export const routes: Routes = [
  // Público
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent)
  },

  // ── ADMIN ────────────────────────────────────────────────────
  {
    path: 'admin',
    component: ShellComponent,
    canActivate: [roleGuard(['ADMIN'])],
    children: [
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'clientes',  loadComponent: () => import('./features/clients/clients.component').then(m => m.ClientsComponent) },
      { path: 'productos', loadComponent: () => import('./features/catalog/catalog.component').then(m => m.CatalogComponent) },
      { path: 'promociones', loadComponent: () => import('./features/promotions/promotions.component').then(m => m.PromotionsComponent) },
      { path: 'pedidos',   loadComponent: () => import('./features/orders/orders.component').then(m => m.OrdersComponent) },
      { path: 'usuarios',  loadComponent: () => import('./features/users/users.component').then(m => m.UsersComponent) },
      { path: 'pagos',     loadComponent: () => import('./features/payments/payments.component').then(m => m.PaymentsComponent) },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  },

  // ── VENDEDOR (panel propio, sin ShellComponent) ───────────────
  {
    path: 'vendedor',
    canActivate: [roleGuard(['VENDEDOR', 'ADMIN'])],
    children: [
      {
        path: 'panel',
        loadComponent: () => import('./features/vendor/vendor-panel.component').then(m => m.VendorPanelComponent)
      },
      { path: '', pathMatch: 'full', redirectTo: 'panel' }
    ]
  },

  // ── REPARTIDOR (panel propio) ─────────────────────────────────
  {
    path: 'repartidor',
    canActivate: [roleGuard(['REPARTIDOR', 'ADMIN'])],
    children: [
      {
        path: 'panel',
        loadComponent: () => import('./features/delivery/delivery-panel.component').then(m => m.DeliveryPanelComponent)
      },
      { path: '', pathMatch: 'full', redirectTo: 'panel' }
    ]
  },

  // ── CLIENTE (tienda) ──────────────────────────────────────────
  {
    path: 'store',
    component: StoreShellComponent,
    canActivate: [roleGuard(['CLIENTE', 'ADMIN'])],
    children: [
      { path: 'catalog', loadComponent: () => import('./features/store/catalog-store.component').then(m => m.CatalogStoreComponent) },
      { path: '', pathMatch: 'full', redirectTo: 'catalog' }
    ]
  },

  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' }
];