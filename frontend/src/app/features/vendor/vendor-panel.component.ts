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

  posSearchQuery = '';
  selectedCatFilter = 'TODOS';

  posClienteSearchQuery = '';

  cart: { producto: Producto; cantidad: number; precioUnitario: number; subtotal: number }[] = [];

  saving      = false;
  toastOk     = '';
  toastErr    = '';
  clienteQ    = '';
  pedidoQ     = '';
  productoQ   = '';

  // Modal crear nuevo cliente desde vendedor
  showModalNewCliente = false;
  newClienteNombre = '';
  newClienteDoc = '';
  newClienteTel = '';
  newClienteEmail = '';
  newClienteDir = '';
  newClienteLimite = 1000;

  clienteDocFilter = 'TODOS';

  get posClientesFiltrados(): Cliente[] {
    const list = this.clientes;
    if (!this.posClienteSearchQuery.trim()) return list;
    const q = this.posClienteSearchQuery.trim().toLowerCase();
    return list.filter(c => {
      const nm = this.nombre(c).toLowerCase();
      const doc = (c.numeroDocumento || '').toLowerCase();
      const tel = (c.telefono || '').toLowerCase();
      const em = (c.email || '').toLowerCase();
      const dir = (c.direccionPrincipal || '').toLowerCase();
      const ap = (c.apellidos || '').toLowerCase();
      return nm.includes(q) || doc.includes(q) || tel.includes(q) || em.includes(q) || dir.includes(q) || ap.includes(q);
    });
  }

  get selectedClienteObj(): Cliente | undefined {
    return this.clientes.find(c => c.idCliente === Number(this.selectedClienteId));
  }

  selectClientePos(c: Cliente): void {
    this.selectedClienteId = c.idCliente ?? null;
    this.posClienteSearchQuery = '';
    this.onClienteChange();
  }

  clearSelectedCliente(): void {
    this.selectedClienteId = null;
    this.direccionEntrega = '';
    this.direccionesCliente = [];
    this.selectedDireccionId = null;
  }

  get posProductosFiltrados(): Producto[] {
    let prods = this.productos;
    if (this.selectedCatFilter !== 'TODOS') {
      const cat = this.selectedCatFilter.toLowerCase();
      prods = prods.filter(p => p.nombre.toLowerCase().includes(cat) || (p.descripcion && p.descripcion.toLowerCase().includes(cat)));
    }
    if (this.posSearchQuery.trim()) {
      const q = this.posSearchQuery.trim().toLowerCase();
      prods = prods.filter(p => 
        p.nombre.toLowerCase().includes(q) ||
        (p.codigoBarras && p.codigoBarras.toLowerCase().includes(q)) ||
        (p.descripcion && p.descripcion.toLowerCase().includes(q))
      );
    }
    return prods;
  }

  quickAddToCart(prod: Producto): void {
    if (!prod || prod.stock <= 0) return;
    const ex = this.cart.find(i => i.producto.idProducto === prod.idProducto);
    if (ex) {
      ex.cantidad += 1;
      ex.subtotal = +(ex.cantidad * ex.precioUnitario).toFixed(2);
    } else {
      this.cart.push({
        producto: prod,
        cantidad: 1,
        precioUnitario: prod.precioVenta,
        subtotal: prod.precioVenta
      });
    }
  }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.api.get<Cliente[]>('/clientes').subscribe({
      next: d => { 
        const base = (d && d.length > 0) ? d : this.demoClientes();
        this.clientes = this.mergeWithRegisteredClients(base); 
        this.loadingC = false; 
      },
      error:()  => { 
        this.clientes = this.mergeWithRegisteredClients(this.demoClientes()); 
        this.loadingC = false; 
      }
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

  private mergeWithRegisteredClients(baseClients: Cliente[]): Cliente[] {
    const list = [...baseClients];
    try {
      const stored = localStorage.getItem('roma_registered_clients');
      if (stored) {
        const registered: Cliente[] = JSON.parse(stored);
        for (const reg of registered) {
          const regName = this.nombre(reg).toLowerCase();
          const exists = list.some(c => 
            (c.email && reg.email && c.email.toLowerCase() === reg.email.toLowerCase()) ||
            (c.numeroDocumento && reg.numeroDocumento && c.numeroDocumento === reg.numeroDocumento) ||
            (this.nombre(c).toLowerCase() === regName)
          );
          if (!exists) {
            list.unshift(reg);
          }
        }
      }

      const profileStr = localStorage.getItem('roma_user_profile');
      if (profileStr) {
        const profile = JSON.parse(profileStr);
        if (profile && profile.email) {
          const name = profile.nombre || profile.nombres || profile.email;
          const exists = list.some(c => c.email && c.email.toLowerCase() === profile.email.toLowerCase());
          if (!exists) {
            list.unshift({
              idCliente: Date.now(),
              idTipoDocumento: 1,
              numeroDocumento: profile.dni || profile.documento || '45891201',
              nombresRazonSocial: name,
              nombresRazónSocial: name,
              telefono: profile.telefono || '987654321',
              email: profile.email,
              direccionPrincipal: profile.direccion || 'Av. Principal 123, Lima',
              limiteCredito: 1500,
              estado: 'A'
            });
          }
        }
      }
    } catch (e) {
      console.warn('Error merging registered clients', e);
    }
    return list;
  }

  private merge(base: Pedido[]): Pedido[] {
    try {
      const raw = localStorage.getItem('roma_shared_orders_DISABLED');
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
    
    const sub = this.subtotal;
    const igvVal = this.igv;
    const tot = this.total;

    const payload: any = {
      codigoPedido: 'PED-' + Date.now(),
      idCliente: Number(this.selectedClienteId),
      idUsuario: 1,
      idEstado: 1,
      idTipoEntrega: 1,
      subtotal: sub,
      igv: igvVal,
      total: tot,
      montoSubtotal: sub,
      montoIgv: igvVal,
      montoTotal: tot,
      direccionEntrega: this.direccionEntrega || cliente?.direccionPrincipal || '',
      observaciones: this.observaciones,
      estado: 'A',
      detalles: this.cart.map(i => ({
        idProducto: i.producto.idProducto,
        cantidad: i.cantidad,
        precioUnitario: i.precioUnitario,
        subtotal: i.subtotal
      }))
    };

    this.api.post<Pedido>('/pedidos', payload).subscribe({
      next: saved => {
        const fullOrder: Pedido = {
          ...payload,
          ...saved,
          cliente: cliente,
          detalles: this.cart.map(i => ({
            idProducto: i.producto.idProducto,
            cantidad: i.cantidad,
            precioUnitario: i.precioUnitario,
            subtotal: i.subtotal,
            producto: i.producto
          }))
        };
        this.afterVenta(fullOrder);
      },
      error: () => {
        const fullOrder: Pedido = {
          idPedido: Date.now(),
          ...payload,
          cliente: cliente,
          detalles: this.cart.map(i => ({
            idProducto: i.producto.idProducto,
            cantidad: i.cantidad,
            precioUnitario: i.precioUnitario,
            subtotal: i.subtotal,
            producto: i.producto
          }))
        };
        this.afterVenta(fullOrder);
      }
    });
  }

  private afterVenta(p: Pedido): void {
    this.pedidos = [p, ...this.pedidos];
    const existing: Pedido[] = JSON.parse(localStorage.getItem('roma_shared_orders_DISABLED') ?? '[]');
    localStorage.setItem('roma_shared_orders_DISABLED', JSON.stringify([p, ...existing]));
    this.cart = []; this.selectedClienteId = null; this.direccionEntrega = ''; this.observaciones = '';
    this.saving = false;
    this.toast(`✅ Pedido ${p.codigoPedido} registrado — S/ ${(p.total || p.montoTotal || 0).toFixed(2)}`);
    this.activeTab = 'pedidos';
  }

  private toast(msg: string): void {
    this.toastOk = msg;
    setTimeout(() => { if (this.toastOk === msg) this.toastOk = ''; }, 5000);
  }

  // ── GETTERS DE NOMBRE & FILTRADO DE CLIENTES ───────────────────────
  nombre(c: any): string {
    if (!c) return '—';
    const nm = c.nombresRazónSocial || c.nombresRazonSocial || c.razonSocial;
    if (nm && nm.trim()) return nm.trim();
    if (c.nombres || c.apellidos) return `${c.nombres || ''} ${c.apellidos || ''}`.trim();
    if (c.email) return c.email;
    return '—';
  }

  get clientesF(): Cliente[] {
    return this.clientes.filter(c => {
      const q = (this.clienteQ || '').trim().toLowerCase();
      const nm = this.nombre(c).toLowerCase();
      const doc = (c.numeroDocumento || '').toLowerCase();
      const tel = (c.telefono || '').toLowerCase();
      const em = (c.email || '').toLowerCase();
      const dir = (c.direccionPrincipal || '').toLowerCase();
      const ap = (c.apellidos || '').toLowerCase();

      const matchSearch = !q || nm.includes(q) || doc.includes(q) || tel.includes(q) || em.includes(q) || dir.includes(q) || ap.includes(q);

      const isRuc = String(c.idTipoDocumento) === '2' || doc.length === 11;
      const matchDoc = this.clienteDocFilter === 'TODOS' ||
        (this.clienteDocFilter === 'RUC' && isRuc) ||
        (this.clienteDocFilter === 'DNI' && !isRuc);

      return matchSearch && matchDoc;
    });
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
  get kpiMonto():   number { return +this.pedidos.reduce((s, p) => s + (p.total ?? p.montoTotal ?? 0), 0).toFixed(2); }

  logout(): void { this.auth.logout(); }

  seleccionarCliente(id: number | undefined): void {
    this.selectedClienteId = id ?? null;
    this.activeTab = 'nueva-venta';
    this.onClienteChange();
  }

  openModalNewCliente(): void {
    this.newClienteNombre = '';
    this.newClienteDoc = '';
    this.newClienteTel = '';
    this.newClienteEmail = '';
    this.newClienteDir = '';
    this.newClienteLimite = 1000;
    this.showModalNewCliente = true;
  }

  closeModalNewCliente(): void {
    this.showModalNewCliente = false;
  }

  saveNuevoCliente(): void {
    if (!this.newClienteNombre.trim() || !this.newClienteDoc.trim()) {
      alert('Debes ingresar al menos el nombre/razón social y el número de documento.');
      return;
    }

    const newCli: Cliente = {
      idCliente: Date.now(),
      idTipoDocumento: this.newClienteDoc.trim().length === 11 ? 2 : 1,
      numeroDocumento: this.newClienteDoc.trim(),
      nombresRazónSocial: this.newClienteNombre.trim(),
      nombresRazonSocial: this.newClienteNombre.trim(),
      telefono: this.newClienteTel.trim() || '987654321',
      email: this.newClienteEmail.trim() || 'cliente@roma.pe',
      direccionPrincipal: this.newClienteDir.trim() || 'Av. Principal 123, Miraflores',
      limiteCredito: this.newClienteLimite,
      estado: 'A'
    };

    this.api.post<Cliente>('/clientes', newCli).subscribe({
      next: res => {
        this.clientes.unshift(res);
        this.saveRegisteredClientLocal(res);
        this.closeModalNewCliente();
        this.toast(`✅ Cliente "${newCli.nombresRazonSocial}" creado exitosamente`);
      },
      error: () => {
        this.clientes.unshift(newCli);
        this.saveRegisteredClientLocal(newCli);
        this.closeModalNewCliente();
        this.toast(`✅ Cliente "${newCli.nombresRazonSocial}" registrado localmente`);
      }
    });
  }

  private saveRegisteredClientLocal(c: Cliente): void {
    try {
      const stored = localStorage.getItem('roma_registered_clients');
      let registeredList: any[] = stored ? JSON.parse(stored) : [];
      registeredList = registeredList.filter(item => item.email !== c.email);
      registeredList.unshift(c);
      localStorage.setItem('roma_registered_clients', JSON.stringify(registeredList));
    } catch (e) {
      console.warn('Error saving registered client', e);
    }
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
      { idProducto: 1, codigoBarras: 'LIC-001', nombre: 'Whisky Johnnie Walker Black Label 750ml', descripcion: 'Whisky escocés 12 años', precioCompra: 80, precioVenta: 129.90, stock: 24, estado: 'A', imagenUrl: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&auto=format&fit=crop&q=80' },
      { idProducto: 2, codigoBarras: 'LIC-002', nombre: 'Vodka Absolut Original 750ml',            descripcion: 'Vodka sueco de trigo',   precioCompra: 40, precioVenta:  69.00, stock: 18, estado: 'A', imagenUrl: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=500&auto=format&fit=crop&q=80' },
      { idProducto: 3, codigoBarras: 'LIC-003', nombre: 'Ron Cartavio Aniversario 750ml',           descripcion: 'Ron peruano añejado',    precioCompra: 25, precioVenta:  45.50, stock: 12, estado: 'A', imagenUrl: 'https://images.unsplash.com/photo-1614313511387-1436a4480edd?w=500&auto=format&fit=crop&q=80' },
      { idProducto: 4, codigoBarras: 'LIC-004', nombre: 'Pisco Cuatro Gallos Quebranta 750ml',     descripcion: 'Pisco puro de Ica',      precioCompra: 25, precioVenta:  42.00, stock: 20, estado: 'A', imagenUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=80' },
      { idProducto: 5, codigoBarras: 'BEB-001', nombre: 'Cerveza Cusqueña Dorada Pack 6x330ml',    descripcion: 'Cerveza premium',        precioCompra: 18, precioVenta:  28.50, stock: 45, estado: 'A', imagenUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&auto=format&fit=crop&q=80' },
      { idProducto: 6, codigoBarras: 'VIN-001', nombre: 'Vino Tacama Gran Blanco 750ml',           descripcion: 'Vino blanco peruano',    precioCompra: 20, precioVenta:  38.00, stock: 16, estado: 'A', imagenUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format&fit=crop&q=80' }
    ];
  }
}
