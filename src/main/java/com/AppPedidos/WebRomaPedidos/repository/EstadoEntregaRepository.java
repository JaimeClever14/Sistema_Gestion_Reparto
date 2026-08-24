package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.EstadoEntrega;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EstadoEntregaRepository extends JpaRepository<EstadoEntrega, Integer> {
}