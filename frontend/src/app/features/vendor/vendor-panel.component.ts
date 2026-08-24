import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { Cliente, DetallePedido, Pedido, Producto, DireccionCliente } from '../../core/models';

@Component({
  selector: 'app-vendor-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, DecimalPipe, DatePipe],
  templateUrl: './vendor-panel.component.html',
  styleUrl: './vendor-panel.component.css'
})
export class VendorPanelComponent implements OnInit {

  private api  = inject(ApiService);
  auth         = inject(AuthService);

  activeTab: 'nueva-venta' | 'pedidos' | 'clientes' | 'catalogo' = 'nueva-venta';

  clientes:  Cliente[]  = [];
  productos: Producto[] = [];
  pedidos:   Pedido[]   = [];

  loadingC = true;
  loadingP = true;
  loadingO = true;

  // Formulario venta
  selectedClienteId:  number | null = null;
  selectedProductoId: number | null = null;
  itemCantidad = 1;
  direccionEntrega = '';
  observaciones    = '';

  direccionesCliente: DireccionCliente[] = [];
  selectedDireccionId: number | null = null;

  cart: { producto: Producto; cantidad: number; precioUnitario: number; subtotal: number }[] = [];

  saving      = false;
  toastOk     = '';
  toastErr    = '';
  clienteQ    = '';
  pedidoQ     = '';
  productoQ   = '';

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.api.get<Cliente[]>('/clientes').subscribe({
      next: d => { this.clientes  = d ?? this.demoClientes(); this.loadingC = false; },
      error:()  => { this.clientes  = this.demoClientes();        this.loadingC = false; }
    });
    this.api.get<Producto[]>('/productos').subscribe({
      next: d => { this.productos = d ?? this.demoProductos(); this.loadingP = false; },
      error:()  => { this.productos = this.demoProductos();        this.loadingP = false; }
    });
    this.api.get<Pedido[]>('/pedidos').subscribe({
      next: d => { this.pedidos = this.merge(d ?? []); this.loadingO = false; },
      error:()  => { this.pedidos = this.merge([]);         this.loadingO = false; }
    });
  }

  private merge(base: Pedido[]): Pedido[] {
    try {
      const raw = localStorage.getItem('roma_shared_orders');
      if (!raw) return base;
      const saved: Pedido[] = JSON.parse(raw);
      const map = new Map<string, Pedido>();
      base.forEach(p  => map.set(String(p.idPedido ?? p.codigoPedido), p));
      saved.forEach(p => { const k = String(p.idPedido ?? p.codigoPedido); if (!map.has(k)) map.set(k, p); });
      return Array.from(map.values());
    } catch { return base; }
  }

  // ── CARRITO ────────────────────────────────────────────────────────
  addToCart(): void {
    const prod = this.productos.find(p => p.idProducto === Number(this.selectedProductoId));
    if (!prod) return;
    const qty = Math.max(1, Number(this.itemCantidad) || 1);
    const ex  = this.cart.find(i => i.producto.idProducto === prod.idProducto);
    if (ex) { ex.cantidad += qty; ex.subtotal = +(ex.cantidad * ex.precioUnitario).toFixed(2); }
    else    { this.cart.push({ producto: prod, cantidad: qty, precioUnitario: prod.precioVenta, subtotal: +(qty * prod.precioVenta).toFixed(2) }); }
    this.itemCantidad = 1;
  }

  removeFromCart(i: number): void { this.cart.splice(i, 1); }

  get subtotal(): number { return +this.cart.reduce((s, i) => s + i.subtotal, 0).toFixed(2); }
  get igv():      number { return +(this.subtotal * 0.18).toFixed(2); }
  get total():    number { return +(this.subtotal + this.igv).toFixed(2); }

  // ── CONFIRMAR VENTA ────────────────────────────────────────────────
  confirmarVenta(): void {
    if (!this.selectedClienteId || this.cart.length === 0) return;
    this.saving = true;
    const cliente = this.clientes.find(c => c.idCliente === Number(this.selectedClienteId));
    const pedido: Pedido = {
      codigoPedido:    'PED-' + Date.now(),
      idCliente:       Number(this.selectedClienteId),
      cliente:         cliente,
      montoSubtotal:   this.subtotal,
      montoIgv:        this.igv,
      montoTotal:      this.total,
      direccionEntrega: this.direccionEntrega || cliente?.direccionPrincipal || '',
      observaciones:   this.observaciones,
      estado:          'A',
      fechaPedido:     new Date().toISOString(),
      detalles:        this.cart.map(i => ({
        idProducto:     i.producto.idProducto,
        cantidad:       i.cantidad,
        precioUnitario: i.precioUnitario,
        subtotal:       i.subtotal,
        producto:       i.producto
      } as DetallePedido))
    };

    this.api.post<Pedido>('/pedidos', pedido).subscribe({
      next:  saved  => this.afterVenta(saved  ?? pedido),
      error: ()     => this.afterVenta(pedido)
    });
  }

  private afterVenta(p: Pedido): void {
    this.pedidos = [p, ...this.pedidos];
    const existing: Pedido[] = JSON.parse(localStorage.getItem('roma_shared_orders') ?? '[]');
    localStorage.setItem('roma_shared_orders', JSON.stringify([p, ...existing]));
    this.cart = []; this.selectedClienteId = null; this.direccionEntrega = ''; this.observaciones = '';
    this.saving = false;
    this.toast(`✅ Pedido ${p.codigoPedido} registrado — S/ ${p.montoTotal.toFixed(2)}`);
    this.activeTab = 'pedidos';
  }

  private toast(msg: string): void {
    this.toastOk = msg;
    setTimeout(() => { if (this.toastOk === msg) this.toastOk = ''; }, 5000);
  }

  // ── GETTERS DE NOMBRE ──────────────────────────────────────────────
  nombre(c: any): string {
    return c?.nombresRazónSocial ?? c?.nombresRazonSocial ?? c?.razonSocial ?? '—';
  }

  get clientesF(): Cliente[] {
    if (!this.clienteQ) return this.clientes;
    const q = this.clienteQ.toLowerCase();
    return this.clientes.filter(c => this.nombre(c).toLowerCase().includes(q) || (c.numeroDocumento ?? '').includes(q));
  }

  get pedidosF(): Pedido[] {
    if (!this.pedidoQ) return this.pedidos;
    const q = this.pedidoQ.toLowerCase();
    return this.pedidos.filter(p => (p.codigoPedido ?? '').toLowerCase().includes(q) || this.nombre(p.cliente).toLowerCase().includes(q));
  }

  get productosF(): Producto[] {
    if (!this.productoQ) return this.productos;
    const q = this.productoQ.toLowerCase();
    return this.productos.filter(p => p.nombre.toLowerCase().includes(q));
  }

  get kpiPedidos(): number { return this.pedidos.length; }
  get kpiMonto():   number { return +this.pedidos.reduce((s, p) => s + (p.montoTotal ?? 0), 0).toFixed(2); }

  logout(): void { this.auth.logout(); }

  seleccionarCliente(id: number | undefined): void {
    this.selectedClienteId = id ?? null;
    this.activeTab = 'nueva-venta';
    this.onClienteChange();
  }

  onClienteChange(): void {
    this.direccionesCliente = [];
    this.selectedDireccionId = null;
    this.direccionEntrega = '';
    
    if (this.selectedClienteId) {
      this.api.get<DireccionCliente[]>('/direcciones-cliente').subscribe({
        next: (allDirs) => {
          this.direccionesCliente = allDirs.filter(d => d.idCliente === Number(this.selectedClienteId));
          const predet = this.direccionesCliente.find(d => d.predeterminada);
          if (predet) {
            this.selectedDireccionId = predet.idDireccion || null;
            this.direccionEntrega = predet.direccion;
          }
        }
      });
    }
  }

  onDireccionChange(): void {
    if (this.selectedDireccionId) {
      const dir = this.direccionesCliente.find(d => d.idDireccion === Number(this.selectedDireccionId));
      this.direccionEntrega = dir ? dir.direccion : '';
    } else {
      this.direccionEntrega = '';
    }
  }

  seleccionarProducto(id: number | undefined): void {
    this.selectedProductoId = id ?? null;
    this.activeTab = 'nueva-venta';
  }

  badgeEstado(e?: string): string {
    if (e === 'A') return '⏳ En Proceso';
    if (e === 'E') return '🛵 En Ruta';
    if (e === 'F') return '✅ Entregado';
    return '—';
  }

  badgeClass(e?: string): string {
    if (e === 'A') return 'badge-a';
    if (e === 'E') return 'badge-e';
    if (e === 'F') return 'badge-f';
    return '';
  }

  // ── DEMO DATA ──────────────────────────────────────────────────────
  private demoClientes(): Cliente[] {
    return [
      { idCliente: 1, nombresRazónSocial: 'Inversiones Licoreras SAC', numeroDocumento: '20601234567', telefono: '987654321', email: 'contacto@licoreras.pe', direccionPrincipal: 'Av. Larco 456, Miraflores', limiteCredito: 5000, estado: 'A' },
      { idCliente: 2, nombresRazónSocial: 'Juan Carlos Mendoza',       numeroDocumento: '45891234',    telefono: '912345678', email: 'juan.m@gmail.com',       direccionPrincipal: 'Calle Los Olivos 123, San Isidro', limiteCredito: 1500, estado: 'A' },
      { idCliente: 3, nombresRazónSocial: 'Bodega Don Pepe EIRL',      numeroDocumento: '20554433221', telefono: '945678123', email: 'donpepe@bodega.pe',      direccionPrincipal: 'Av. Javier Prado 1850, Lince', limiteCredito: 3000, estado: 'A' }
    ];
  }

  private demoProductos(): Producto[] {
    return [
      { idProducto: 1, codigoBarras: 'LIC-001', nombre: 'Whisky Johnnie Walker Black Label 750ml', descripcion: 'Whisky escocés 12 años', precioCompra: 80, precioVenta: 129.90, stock: 24, estado: 'A' },
      { idProducto: 2, codigoBarras: 'LIC-002', nombre: 'Vodka Absolut Original 750ml',            descripcion: 'Vodka sueco de trigo',   precioCompra: 40, precioVenta:  69.00, stock: 18, estado: 'A' },
      { idProducto: 3, codigoBarras: 'LIC-003', nombre: 'Ron Cartavio Aniversario 750ml',           descripcion: 'Ron peruano añejado',    precioCompra: 25, precioVenta:  45.50, stock: 12, estado: 'A' },
      { idProducto: 4, codigoBarras: 'LIC-004', nombre: 'Pisco Cuatro Gallos Quebranta 750ml',     descripcion: 'Pisco puro de Ica',      precioCompra: 25, precioVenta:  42.00, stock: 20, estado: 'A' },
      { idProducto: 5, codigoBarras: 'BEB-001', nombre: 'Cerveza Cusqueña Dorada Pack 6x330ml',    descripcion: 'Cerveza premium',        precioCompra: 18, precioVenta:  28.50, stock: 45, estado: 'A' },
      { idProducto: 6, codigoBarras: 'VIN-001', nombre: 'Vino Tacama Gran Blanco 750ml',           descripcion: 'Vino blanco peruano',    precioCompra: 20, precioVenta:  38.00, stock: 16, estado: 'A' }
    ];
  }
}
