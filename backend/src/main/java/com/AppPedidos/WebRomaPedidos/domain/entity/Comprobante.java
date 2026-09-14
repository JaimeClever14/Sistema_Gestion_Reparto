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
@Table(name = "comprobante")
public class Comprobante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_comprobante")
    private Integer idComprobante;

    @Column(name = "id_pedido", nullable = false, unique = true)
    private Integer idPedido;

    @Column(name = "id_tipo_comprobante", nullable = false)
    private Integer idTipoComprobante;

    @Column(nullable = false, length = 10)
    private String serie;

    @Column(nullable = false, length = 20)
    private String numero;

    @Column(name = "fecha_emision")
    private LocalDateTime fechaEmision;

    @Column(length = 11)
    private String ruc;

    @Column(name = "razon_social", length = 200)
    private String razonSocial;

    @Column(name = "direccion_fiscal", length = 200)
    private String direccionFiscal;

    @Column(columnDefinition = "BIT")
    private Boolean activo = true;

    @Column(columnDefinition = "varchar(max)")
    private String xml;

    @Column(name = "pdf_url", length = 255)
    private String pdfUrl;

    @Column(name = "sunat_codigo", length = 50)
    private String sunatCodigo;
}