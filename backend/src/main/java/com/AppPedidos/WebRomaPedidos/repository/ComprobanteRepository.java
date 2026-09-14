package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.Comprobante;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComprobanteRepository extends JpaRepository<Comprobante, Integer> {
}