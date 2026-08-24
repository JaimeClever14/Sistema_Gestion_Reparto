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
@Table(name = "compra")
public class Compra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_compra")
    private Integer idCompra;

    @Column(name = "id_proveedor", nullable = false)
    private Integer idProveedor;

    @Column(name = "id_usuario", nullable = false)
    private Integer idUsuario;

    @Column(name = "id_tipo_comprobante", nullable = false)
    private Integer idTipoComprobante;

    @Column(name = "numero_comprobante", nullable = false, length = 50)
    private String numeroComprobante;

    @Column(length = 10)
    private String serie;

    @Column(name = "fecha_comprobante", nullable = false)
    private LocalDateTime fechaComprobante;

    @Column(name = "fecha_registro")
    private LocalDateTime fechaRegistro;

    @Column(length = 500)
    private String observaciones;

    @Column(length = 1)
    private String estado;
}