package com.AppPedidos.WebRomaPedidos.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
@Table(name = "tipo_movimiento")
public class TipoMovimiento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_tipo_movimiento")
    private Integer idTipoMovimiento;

    @Column(nullable = false, unique = true, length = 30)
    private String nombre;

    @Column(length = 100)
    private String descripcion;

    private Integer signo;

    @Column(name = "fecha_registro", columnDefinition = "DATETIME2(0)")
    private LocalDateTime fechaRegistro;

    @Column(name = "fecha_modificacion", columnDefinition = "DATETIME2(0)")
    private LocalDateTime fechaModificacion;
}