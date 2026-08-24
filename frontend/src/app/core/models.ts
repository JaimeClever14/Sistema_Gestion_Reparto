export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  nombres: string;
  apellidos: string;
  username: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  tokenType: string;
  username: string;
  role: string;
}

export interface Categoria {
  idCategoria?: number;
  nombreCategoria: string;
  descripcion?: string;
  estado?: string;
}

export interface Marca {
  idMarca?: number;
  nombreMarca: string;
  estado?: string;
}

export interface Presentacion {
  idPresentacion?: number;
  nombrePresentacion: string;
  estado?: string;
}

export interface Producto {
  idProducto?: number;
  nombre: string;
  idCategoria?: number;
  idMarca?: number;
  idPresentacion?: number;
  codigoBarras?: string;
  precioCompra: number;
  precioVenta: number;
  stock: number;
  stockMinimo?: number;
  stockMaximo?: number;
  imagenUrl?: string;
  descripcion?: string;
  estado?: string;
  fechaRegistro?: string;

  // Relations (optional for frontend expansion)
  categoria?: Categoria;
  marca?: Marca;
  presentacion?: Presentacion;
}

export interface TipoDocumento {
  idTipoDocumento?: number;
  nombreTipoDocumento: string;
  codigoSunat?: string;
}

export interface Cliente {
  idCliente?: number;
  idTipoDocumento?: number;
  numeroDocumento?: string;
  nombresRazónSocial: string;
  apellidos?: string;
  telefono?: string;
  email?: string;
  direccionPrincipal?: string;
  limiteCredito?: number;
  fechaRegistro?: string;
  estado?: string;
  tipoDocumento?: TipoDocumento;
  direcciones?: DireccionCliente[];
}

export interface EstadoPedido {
  idEstadoPedido?: number;
  nombreEstado: string;
  descripcion?: string;
}

export interface TipoEntrega {
  idTipoEntrega?: number;
  nombreTipoEntrega: string;
  descripcion?: string;
}

export interface DetallePedido {
  idDetallePedido?: number;
  idPedido?: number;
  idProducto?: number;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
  producto?: Producto;
}

export interface Pedido {
  idPedido?: number;
  codigoPedido?: string;
  idCliente?: number;
  idUsuarioVendedor?: number;
  idEstadoPedido?: number;
  idTipoEntrega?: number;
  fechaPedido?: string;
  montoSubtotal: number;
  montoIgv: number;
  montoTotal: number;
  direccionEntrega?: string;
  observaciones?: string;
  estado?: string;
  cliente?: Cliente;
  estadoPedido?: EstadoPedido;
  tipoEntrega?: TipoEntrega;
  detalles?: DetallePedido[];
}

export interface MetodoPago {
  idMetodoPago?: number;
  nombreMetodo: string;
  descripcion?: string;
}

export interface Pago {
  idPago?: number;
  idPedido?: number;
  idMetodoPago?: number;
  montoPago: number;
  fechaPago?: string;
  numeroOperacion?: string;
  comprobanteUrl?: string;
  estado?: string;
  metodoPago?: MetodoPago;
}

export interface EstadoCredito {
  idEstadoCredito?: number;
  nombreEstado: string;
}

export interface EstadoCuota {
  idEstadoCuota?: number;
  nombreEstado: string;
}

export interface Credito {
  idCredito?: number;
  idCliente?: number;
  idPedido?: number;
  montoTotalCredito: number;
  montoPendiente: number;
  numeroCuotas: number;
  fechaConcesion?: string;
  idEstadoCredito?: number;
  estadoCredito?: EstadoCredito;
  cliente?: Cliente;
}

export interface Cuota {
  idCuota?: number;
  idCredito?: number;
  numeroCuota: number;
  montoCuota: number;
  fechaVencimiento: string;
  fechaPago?: string;
  idEstadoCuota?: number;
  estadoCuota?: EstadoCuota;
}

export interface Proveedor {
  idProveedor?: number;
  ruc?: string;
  razonSocial: string;
  contacto?: string;
  telefono?: string;
  email?: string;
}

export interface StatCard {
  label: string;
  value: string;
  description: string;
  tone: 'primary' | 'accent' | 'success' | 'danger';
  icon?: string;
}

export interface Rol {
  idRol?: number;
  nombreRol: string;
  descripcion?: string;
}

export interface Usuario {
  idUsuario?: number;
  nombres: string;
  apellidos: string;
  username: string;
  email: string;
  contrasena?: string; // Solo para creacion
  idRol?: number;
  estado?: string;
  rol?: Rol; // Relacion opcional
}

export interface Entrega {
  idEntrega?: number;
  idPedido?: number;
  idRepartidor?: number;
  idDireccion?: number;
  idEstadoEntrega?: number;
  fechaAsignacion?: string;
  fechaSalida?: string;
  fechaEntrega?: string;
  repartidor?: Usuario; // Opcional, para mostrar nombre del repartidor
}

export interface ToastMessage {
  id: number;
  type: 'success' | 'error' | 'info';
  text: string;
}

export interface DireccionCliente {
  idDireccion?: number;
  idCliente: number;
  direccion: string;
  referencia?: string;
  distrito?: string;
  provincia?: string;
  departamento?: string;
  latitud?: number;
  longitud?: number;
  predeterminada?: boolean;
  estado?: string;
  fechaRegistro?: string;
}

export interface Promocion {
  idPromocion?: number;
  nombre: string;
  descripcion?: string;
  tipoDescuento: string; // Ej: 'PORCENTAJE', 'MONTO'
  valorDescuento: number;
  fechaInicio: string;
  fechaFin: string;
  aplicaA?: string;
  idReferencia?: number;
  estado?: string;
  fechaRegistro?: string;
}

export interface ProductoPromocion {
  idProducto: number;
  idPromocion: number;
  estado?: string;
  producto?: Producto;
  promocion?: Promocion;
}