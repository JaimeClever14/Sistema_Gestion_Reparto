package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.EstadoCuota;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EstadoCuotaRepository extends JpaRepository<EstadoCuota, Integer> {
}