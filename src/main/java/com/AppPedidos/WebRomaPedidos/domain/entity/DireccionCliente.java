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
@Table(name = "direccion_cliente")
public class DireccionCliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_direccion")
    private Integer idDireccion;

    @Column(name = "id_cliente", nullable = false)
    private Integer idCliente;

    @Column(nullable = false, length = 200)
    private String direccion;

    @Column(length = 100)
    private String referencia;

    @Column(length = 50)
    private String distrito;

    @Column(length = 50)
    private String provincia;

    @Column(length = 50)
    private String departamento;

    @Column(precision = 10, scale = 8)
    private BigDecimal latitud;

    @Column(precision = 11, scale = 8)
    private BigDecimal longitud;

    private Boolean predeterminada;

    @Column(length = 1)
    private String estado;

    @Column(name = "fecha_registro")
    private LocalDateTime fechaRegistro;
}