package com.AppPedidos.WebRomaPedidos.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
@Table(name = "entrega")
public class Entrega {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_entrega")
    private Integer idEntrega;

    @Column(name = "id_pedido", nullable = false, unique = true)
    private Integer idPedido;

    @Column(name = "id_repartidor", nullable = false)
    private Integer idRepartidor;

    @Column(name = "id_direccion", nullable = false)
    private Integer idDireccion;

    @Column(name = "id_estado_entrega", nullable = false)
    private Integer idEstadoEntrega;

    @Column(name = "fecha_asignacion")
    private LocalDateTime fechaAsignacion;

    @Column(name = "fecha_salida")
    private LocalDateTime fechaSalida;

    @Column(name = "fecha_entrega")
    private LocalDateTime fechaEntrega;

    @Column(name = "hora_estimada_entrega")
    private LocalTime horaEstimadaEntrega;

    @Column(name = "evidencia_foto", length = 255)
    private String evidenciaFoto;

    @Column(name = "evidencia_firma", length = 255)
    private String evidenciaFirma;

    @Column(name = "motivo_fallo", length = 200)
    private String motivoFallo;

    @Column(length = 500)
    private String observaciones;
}