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
@Table(name = "credito")
public class Credito {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_credito")
    private Integer idCredito;

    @Column(name = "id_cliente", nullable = false)
    private Integer idCliente;

    @Column(name = "monto_total", nullable = false, precision = 10, scale = 2)
    private BigDecimal montoTotal;

    @Column(name = "monto_pagado", precision = 10, scale = 2)
    private BigDecimal montoPagado;

    @Column(name = "saldo_pendiente", nullable = false, precision = 10, scale = 2)
    private BigDecimal saldoPendiente;

    @Column(name = "plazo_dias", nullable = false)
    private Integer plazoDias;

    @Column(name = "fecha_inicio")
    private LocalDateTime fechaInicio;

    @Column(name = "fecha_vencimiento", nullable = false)
    private LocalDateTime fechaVencimiento;

    @Column(name = "tasa_interes", precision = 5, scale = 2)
    private BigDecimal tasaInteres;

    @Column(name = "id_estado_credito", nullable = false)
    private Integer idEstadoCredito;

    @Column(length = 500)
    private String observaciones;

    @Column(name = "autorizado_por", nullable = false)
    private Integer autorizadoPor;

    @Column(name = "fecha_autorizacion")
    private LocalDateTime fechaAutorizacion;
}