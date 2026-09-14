package com.AppPedidos.WebRomaPedidos.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class ProductoPromocionId implements Serializable {

    @Column(name = "id_promocion")
    private Integer idPromocion;

    @Column(name = "id_producto")
    private Integer idProducto;
}