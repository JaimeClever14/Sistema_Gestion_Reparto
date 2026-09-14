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
@Table(name = "promocion")
public class Promocion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_promocion")
    private Integer idPromocion;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(length = 500)
    private String descripcion;

    @Column(name = "tipo_descuento", nullable = false, length = 20)
    private String tipoDescuento;

    @Column(name = "valor_descuento", nullable = false, precision = 10, scale = 2)
    private BigDecimal valorDescuento;

    @Column(name = "fecha_inicio", nullable = false)
    private LocalDateTime fechaInicio;

    @Column(name = "fecha_fin", nullable = false)
    private LocalDateTime fechaFin;

    @Column(length = 20)
    private String aplicaA;

    @Column(name = "id_referencia")
    private Integer idReferencia;

    @Column(columnDefinition = "BIT")
    private Boolean activo = true;

    @Column(name = "fecha_registro", columnDefinition = "DATETIME2(0)")
    private LocalDateTime fechaRegistro;

    @Column(name = "fecha_modificacion", columnDefinition = "DATETIME2(0)")
    private LocalDateTime fechaModificacion;
}