package com.AppPedidos.WebRomaPedidos.domain.entity;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "producto_promocion")
public class ProductoPromocion {

    @EmbeddedId
    private ProductoPromocionId id;
}