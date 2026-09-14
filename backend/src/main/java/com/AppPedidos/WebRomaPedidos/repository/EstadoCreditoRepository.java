package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.EstadoCredito;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EstadoCreditoRepository extends JpaRepository<EstadoCredito, Integer> {
}