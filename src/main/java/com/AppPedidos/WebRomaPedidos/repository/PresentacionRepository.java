package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.Presentacion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PresentacionRepository extends JpaRepository<Presentacion, Integer> {
}