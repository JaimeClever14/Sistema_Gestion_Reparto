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
@Table(name = "cuota")
public class Cuota {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cuota")
    private Integer idCuota;

    @Column(name = "id_credito", nullable = false)
    private Integer idCredito;

    @Column(name = "numero_cuota", nullable = false)
    private Integer numeroCuota;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal monto;

    @Column(name = "monto_pagado", precision = 10, scale = 2)
    private BigDecimal montoPagado;

    @Column(name = "fecha_vencimiento", nullable = false)
    private LocalDateTime fechaVencimiento;

    @Column(name = "fecha_pago")
    private LocalDateTime fechaPago;

    @Column(name = "id_estado_cuota", nullable = false)
    private Integer idEstadoCuota;

    @Column(length = 200)
    private String observaciones;
}