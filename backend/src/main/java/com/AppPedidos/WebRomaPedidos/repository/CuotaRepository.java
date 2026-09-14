package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.Cuota;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CuotaRepository extends JpaRepository<Cuota, Integer> {
}