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
@Table(name = "pago")
public class Pago {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pago")
    private Integer idPago;

    @Column(name = "id_pedido", nullable = false)
    private Integer idPedido;

    @Column(name = "id_metodo", nullable = false)
    private Integer idMetodo;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal monto;

    @Column(name = "fecha_pago")
    private LocalDateTime fechaPago;

    @Column(length = 50)
    private String referencia;

    @Column(columnDefinition = "BIT")
    private Boolean activo = true;

    @Column(length = 200)
    private String observaciones;
}