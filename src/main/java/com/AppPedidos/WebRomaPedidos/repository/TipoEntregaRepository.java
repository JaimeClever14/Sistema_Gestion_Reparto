package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.TipoEntrega;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TipoEntregaRepository extends JpaRepository<TipoEntrega, Integer> {
}