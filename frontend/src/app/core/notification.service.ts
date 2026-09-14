import { Injectable, signal } from '@angular/core';

export interface AppNotification {
  id: string;
  targetRole: 'ADMIN' | 'CLIENTE' | 'REPARTIDOR' | 'VENDEDOR' | 'ALL';
  title: string;
  message: string;
  orderCode?: string;
  timestamp: number;
  read: boolean;
  type?: 'info' | 'success' | 'warning';
}

const STORAGE_KEY = 'roma_app_notifications_v1';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  readonly notifications = signal<AppNotification[]>(this.loadStorage());

  constructor() {
    // Escuchar cambios de almacenamiento local entre distintas pestañas
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (e) => {
        if (e.key === STORAGE_KEY) {
          this.notifications.set(this.loadStorage());
        }
      });
    }
  }

  private loadStorage(): AppNotification[] {
    try {
      if (typeof localStorage === 'undefined') return [];
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : this.initialDemoNotifications();
    } catch {
      return [];
    }
  }

  private saveStorage(list: AppNotification[]): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
        this.notifications.set(list);
      }
    } catch (e) {
      console.warn('Error saving notifications', e);
    }
  }

  notify(
    targetRole: 'ADMIN' | 'CLIENTE' | 'REPARTIDOR' | 'VENDEDOR' | 'ALL',
    title: string,
    message: string,
    orderCode?: string,
    type: 'info' | 'success' | 'warning' = 'info'
  ): void {
    const newNotif: AppNotification = {
      id: 'notif_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
      targetRole,
      title,
      message,
      orderCode,
      timestamp: Date.now(),
      read: false,
      type
    };

    const current = this.loadStorage();
    const updated = [newNotif, ...current].slice(0, 50); // Conservar máximo 50
    this.saveStorage(updated);
  }

  getNotificationsForRole(role: string): AppNotification[] {
    const r = (role || '').toUpperCase();
    return this.notifications().filter(
      n => n.targetRole === 'ALL' || n.targetRole === r || (r === 'ADMIN' && n.targetRole === 'VENDEDOR')
    );
  }

  getUnreadCount(role: string): number {
    return this.getNotificationsForRole(role).filter(n => !n.read).length;
  }

  markAsRead(id: string): void {
    const current = this.loadStorage();
    const updated = current.map(n => n.id === id ? { ...n, read: true } : n);
    this.saveStorage(updated);
  }

  markAllAsRead(role: string): void {
    const r = (role || '').toUpperCase();
    const current = this.loadStorage();
    const updated = current.map(n => {
      if (n.targetRole === 'ALL' || n.targetRole === r || (r === 'ADMIN' && n.targetRole === 'VENDEDOR')) {
        return { ...n, read: true };
      }
      return n;
    });
    this.saveStorage(updated);
  }

  clearNotifications(role: string): void {
    const r = (role || '').toUpperCase();
    const current = this.loadStorage();
    const updated = current.filter(
      n => !(n.targetRole === 'ALL' || n.targetRole === r || (r === 'ADMIN' && n.targetRole === 'VENDEDOR'))
    );
    this.saveStorage(updated);
  }

  private initialDemoNotifications(): AppNotification[] {
    return [
      {
        id: 'n1',
        targetRole: 'ADMIN',
        title: '🛒 Nuevo Pedido',
        message: 'El cliente Juan Mendoza realizó el pedido #PED-2026-881 por S/ 199.90.',
        orderCode: 'PED-2026-881',
        timestamp: Date.now() - 3600000,
        read: false,
        type: 'info'
      },
      {
        id: 'n2',
        targetRole: 'REPARTIDOR',
        title: '🛵 Nuevo Despacho Asignado',
        message: 'Se te asignó el pedido #PED-2026-904 para entregar en Calle Los Olivos 123.',
        orderCode: 'PED-2026-904',
        timestamp: Date.now() - 1800000,
        read: false,
        type: 'warning'
      }
    ];
  }
}
