package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.ProductoPromocion;
import com.AppPedidos.WebRomaPedidos.domain.entity.ProductoPromocionId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoPromocionRepository extends JpaRepository<ProductoPromocion, ProductoPromocionId> {
}