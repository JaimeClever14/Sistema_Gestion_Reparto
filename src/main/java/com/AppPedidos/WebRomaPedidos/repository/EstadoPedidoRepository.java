package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.EstadoPedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EstadoPedidoRepository extends JpaRepository<EstadoPedido, Integer> {
}