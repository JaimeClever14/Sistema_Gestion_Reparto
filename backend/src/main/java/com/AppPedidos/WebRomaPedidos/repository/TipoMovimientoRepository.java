package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.TipoMovimiento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TipoMovimientoRepository extends JpaRepository<TipoMovimiento, Integer> {
}