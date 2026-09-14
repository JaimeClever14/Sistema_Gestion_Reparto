import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { NotificationService } from '../core/notification.service';
import { filter } from 'rxjs/operators';

interface NavSection {
  title: string;
  items: {
    label: string;
    route: string;
    icon: string;
    badge?: string;
    adminOnly?: boolean;
  }[];
}

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css'
})
export class ShellComponent {

  readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  readonly notifService = inject(NotificationService);

  isMobileMenuOpen = false;
  showNotifMenu = false;

  readonly allNavSections: NavSection[] = [
    {
      title: 'OPERACIONES',
      items: [
        { label: 'Dashboard', route: '/admin/dashboard', icon: '📊' },
        { label: 'Informes & Reportes', route: '/admin/reportes', icon: '📈' },
        { label: 'Pedidos & Ventas', route: '/admin/pedidos', icon: '🛒' },
        { label: 'Catálogo de Licores', route: '/admin/productos', icon: '📦' },
        { label: 'Promociones y Ofertas', route: '/admin/promociones', icon: '🏷️' }
      ]
    },
    {
      title: 'GESTIÓN Y CRÉDITOS',
      items: [
        { label: 'Directorio de Clientes', route: '/admin/clientes', icon: '👥' },
        { label: 'Pagos y Cuotas', route: '/admin/pagos', icon: '💳' },
        { label: 'Usuarios y Accesos', route: '/admin/usuarios', icon: '👤', adminOnly: true }
      ]
    }
  ];

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isMobileMenuOpen = false;
    });
  }

  get navSections(): NavSection[] {
    const role = (this.authService.getRole() || 'CLIENTE').toUpperCase();
    if (role === 'ADMIN') {
      return this.allNavSections;
    }
    return this.allNavSections.map(sec => ({
      ...sec,
      items: sec.items.filter(it => !it.adminOnly)
    }));
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleNotifMenu(): void {
    this.showNotifMenu = !this.showNotifMenu;
    if (this.showNotifMenu) {
      this.notifService.markAllAsRead('ADMIN');
    }
  }

  onSelectNotification(n: any): void {
    this.showNotifMenu = false;
    this.notifService.markAsRead(n.id);
    if (n.orderCode) {
      this.router.navigate(['/admin/pedidos'], { queryParams: { orderCode: n.orderCode } });
    } else {
      this.router.navigate(['/admin/pedidos']);
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  logout(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.authService.logout();
  }
}
