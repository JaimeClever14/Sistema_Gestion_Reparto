package com.AppPedidos.WebRomaPedidos.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "producto")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto")
    private Integer idProducto;

    @Column(nullable = false, length = 200)
    private String nombre;

    @Column(name = "id_categoria", nullable = false)
    private Integer idCategoria;

    @Column(name = "id_marca", nullable = false)
    private Integer idMarca;

    @Column(name = "id_presentacion", nullable = false)
    private Integer idPresentacion;

    @Column(name = "codigo_barras", length = 50)
    private String codigoBarras;

    @Column(name = "precio_compra", nullable = false, precision = 10, scale = 2)
    private BigDecimal precioCompra;

    @Column(name = "precio_venta", nullable = false, precision = 10, scale = 2)
    private BigDecimal precioVenta;

    private Integer stock;

    @Column(name = "stock_minimo")
    private Integer stockMinimo;

    @Column(name = "stock_maximo")
    private Integer stockMaximo;

    @Column(name = "imagen_url", columnDefinition = "TEXT")
    private String imagenUrl;

    @Column(name = "descuento_porcentaje")
    private Integer descuentoPorcentaje = 0;

    @Column(name = "envio_gratis")
    private Boolean envioGratis = false;

    @Column(length = 500)
    private String descripcion;

    @Column
    private Boolean activo = true;

    @Column(name = "fecha_registro")
    private LocalDateTime fechaRegistro;

    @Column(name = "fecha_modificacion")
    private LocalDateTime fechaModificacion;
}