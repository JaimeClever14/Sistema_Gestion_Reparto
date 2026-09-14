import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { Pago, Credito, MetodoPago, Pedido } from '../../core/models';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DecimalPipe, DatePipe],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent implements OnInit {

  private readonly api = inject(ApiService);
  private readonly fb = inject(FormBuilder);

  loading = true;
  pagos: Pago[] = [];
  creditos: Credito[] = [];
  metodosPago: MetodoPago[] = [];
  pedidos: Pedido[] = [];

  activeTab: 'PAGOS' | 'CREDITOS' = 'PAGOS';

  showModalNewPago = false;
  saving = false;

  readonly formPago = this.fb.nonNullable.group({
    idPedido: [null as number | null],
    idMetodoPago: [1, [Validators.required]],
    montoPago: [0, [Validators.required, Validators.min(0.1)]],
    numeroOperacion: [''],
    comprobanteUrl: ['']
  });

  ngOnInit(): void {
    this.cargarDatos();
  }

  // ─── Getters computados ────────────────────────────────────────

  get totalRecaudado(): number {
    return this.pagos.reduce((sum, p) => sum + (p.montoPago || 0), 0);
  }

  get metodoSeleccionado(): MetodoPago | undefined {
    const id = Number(this.formPago.get('idMetodoPago')?.value);
    return this.metodosPago.find((m) => m.idMetodoPago === id);
  }

  // ─── Helpers ───────────────────────────────────────────────────

  pagosPorMetodo(keyword: string): number {
    return this.pagos.filter((p) =>
      p.metodoPago?.nombreMetodo?.toLowerCase().includes(keyword.toLowerCase())
    ).length;
  }

  getClienteNombre(credito: Credito): string {
    const c = credito.cliente as any;
    if (!c) return `Cliente #${credito.idCliente}`;
    return c['nombresRaz\u00f3nSocial'] || c['nombresRazonSocial'] || `Cliente #${credito.idCliente}`;
  }

  getPedidoLabel(p: Pedido): string {
    const codigo = p.codigoPedido || `PED-${p.idPedido}`;
    const c = p.cliente as any;
    const nombre = c ? (c['nombresRaz\u00f3nSocial'] || c['nombresRazonSocial'] || 'Cliente') : 'Cliente';
    const total = (p.montoTotal || 0).toFixed(2);
    return `${codigo} (${nombre}) — S/ ${total}`;
  }

  getMetodoIcon(nombre?: string): string {
    if (!nombre) return '💵';
    const n = nombre.toLowerCase();
    if (n.includes('yape') || n.includes('plin') || n.includes('qr')) return '📱';
    if (n.includes('tarjeta') || n.includes('débito') || n.includes('crédito')) return '💳';
    if (n.includes('transfer')) return '🏦';
    return '💵';
  }

  // ─── Carga de datos ────────────────────────────────────────────

  cargarDatos(): void {
    this.loading = true;

    this.api.get<Pago[]>('/pagos').subscribe({
      next: (pgs) => {
        this.pagos = pgs && pgs.length > 0 ? pgs : this.demoPagos();
        this.loading = false;
      },
      error: () => {
        this.cargarDemo();
        this.loading = false;
      }
    });

    this.api.get<Credito[]>('/creditos').subscribe({
      next: (creds) => {
        if (creds && creds.length > 0) this.creditos = creds;
      }
    });

    this.api.get<MetodoPago[]>('/metodos-pago').subscribe({
      next: (mps) => {
        if (mps && mps.length > 0) this.metodosPago = mps;
      },
      error: () => {
        this.metodosPago = [
          { idMetodoPago: 1, nombre: 'Efectivo / Cash' },
          { idMetodoPago: 2, nombre: 'Yape / Plin (QR)' },
          { idMetodoPago: 3, nombre: 'Transferencia Bancaria' },
          { idMetodoPago: 4, nombre: 'Tarjeta Débito / Crédito' }
        ];
      }
    });

    this.api.get<Pedido[]>('/pedidos').subscribe({
      next: (peds) => {
        this.pedidos = peds || [];
      }
    });
  }

  // ─── Modal pago ────────────────────────────────────────────────

  openNewPagoModal(): void {
    this.formPago.reset({
      idPedido: this.pedidos.length > 0 ? (this.pedidos[0].idPedido || null) : null,
      idMetodoPago: this.metodosPago.length > 0 ? (this.metodosPago[0].idMetodoPago || 1) : 1,
      montoPago: 0,
      numeroOperacion: `OP-${Math.floor(100000 + Math.random() * 900000)}`,
      comprobanteUrl: ''
    });
    this.showModalNewPago = true;
  }

  closeNewPagoModal(): void {
    this.showModalNewPago = false;
  }

  savePago(): void {
    if (this.formPago.invalid) {
      this.formPago.markAllAsTouched();
      return;
    }

    this.saving = true;
    const formVal = this.formPago.getRawValue();
    const metodoSel = this.metodosPago.find((m) => m.idMetodoPago === Number(formVal.idMetodoPago));

    const nuevoPago: Pago = {
      idPedido: formVal.idPedido ? Number(formVal.idPedido) : undefined,
      idMetodoPago: Number(formVal.idMetodoPago),
      montoPago: formVal.montoPago,
      numeroOperacion: formVal.numeroOperacion,
      comprobanteUrl: formVal.comprobanteUrl || undefined,
      fechaPago: new Date().toISOString(),
      estado: 'A',
      metodoPago: metodoSel
    };

    this.api.post<Pago>('/pagos', nuevoPago).subscribe({
      next: (res) => {
        this.pagos.unshift(res);
        this.closeNewPagoModal();
      },
      error: () => {
        // Fallback optimista cuando el backend no está disponible
        const mockCreated: Pago = { ...nuevoPago, idPago: Date.now() };
        this.pagos.unshift(mockCreated);
        this.closeNewPagoModal();
      },
      complete: () => (this.saving = false)
    });
  }

  // ─── Datos demo ────────────────────────────────────────────────

  private demoPagos(): Pago[] {
    return [
      {
        idPago: 1,
        idPedido: 101,
        montoPago: 258.90,
        fechaPago: '2026-08-09T14:35:00',
        numeroOperacion: 'YAPE-948123',
        estado: 'A',
        metodoPago: { idMetodoPago: 2, nombre: 'Yape / Plin (QR)' }
      },
      {
        idPago: 2,
        idPedido: 102,
        montoPago: 145.00,
        fechaPago: '2026-08-09T16:15:00',
        numeroOperacion: 'EFEC-001',
        estado: 'A',
        metodoPago: { idMetodoPago: 1, nombre: 'Efectivo / Cash' }
      }
    ];
  }

  private cargarDemo(): void {
    this.pagos = this.demoPagos();

    this.creditos = [
      {
        idCredito: 1,
        idCliente: 1,
        montoTotalCredito: 1200.00,
        montoPendiente: 400.00,
        numeroCuotas: 3,
        fechaConcesion: '2026-08-01',
        cliente: { nombresRazónSocial: 'Inversiones Licoreras SAC', numeroDocumento: '20601234567' }
      },
      {
        idCredito: 2,
        idCliente: 2,
        montoTotalCredito: 600.00,
        montoPendiente: 600.00,
        numeroCuotas: 2,
        fechaConcesion: '2026-08-05',
        cliente: { nombresRazónSocial: 'Juan Carlos Mendoza', numeroDocumento: '45891234' }
      }
    ];

    this.metodosPago = [
      { idMetodoPago: 1, nombreMetodo: 'Efectivo / Cash' },
      { idMetodoPago: 2, nombreMetodo: 'Yape / Plin (QR)' },
      { idMetodoPago: 3, nombreMetodo: 'Transferencia Bancaria' },
      { idMetodoPago: 4, nombreMetodo: 'Tarjeta Débito / Crédito' }
    ];

    this.loading = false;
  }
}