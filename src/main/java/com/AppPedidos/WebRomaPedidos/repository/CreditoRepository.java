package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.Credito;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CreditoRepository extends JpaRepository<Credito, Integer> {
}