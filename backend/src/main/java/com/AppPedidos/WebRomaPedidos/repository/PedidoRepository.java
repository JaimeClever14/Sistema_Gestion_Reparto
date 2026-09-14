package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Integer> {
    java.util.List<Pedido> findByIdUsuarioOrIdCliente(Integer idUsuario, Integer idCliente);
}