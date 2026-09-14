package com.AppPedidos.WebRomaPedidos.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.LocalTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "pedido")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pedido")
    private Integer idPedido;

    @Column(name = "id_cliente", nullable = false)
    private Integer idCliente;

    @Column(name = "id_usuario", nullable = false)
    private Integer idUsuario;

    @Column(name = "id_estado", nullable = false)
    private Integer idEstado;

    @Column(name = "id_tipo_entrega", nullable = false)
    private Integer idTipoEntrega;

    private LocalDateTime fecha;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal subtotal;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal igv;

    @Column(precision = 10, scale = 2)
    private BigDecimal descuento;

    @Column(name = "costo_delivery", precision = 10, scale = 2)
    private BigDecimal costoDelivery;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal total;

    @Column(length = 500)
    private String observaciones;

    @Column(name = "fecha_entrega_programada")
    private LocalDateTime fechaEntregaProgramada;

    @Column(name = "hora_entrega_desde")
    private LocalTime horaEntregaDesde;

    @Column(name = "hora_entrega_hasta")
    private LocalTime horaEntregaHasta;

    @Column(name = "codigo_seguimiento", length = 20)
    private String codigoSeguimiento;

    @Column(length = 1)
    private String estado;

    @jakarta.persistence.Transient
    private java.util.List<DetallePedido> detalles;
}