package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.TipoComprobante;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TipoComprobanteRepository extends JpaRepository<TipoComprobante, Integer> {
}