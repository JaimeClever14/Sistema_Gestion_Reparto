package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.Compra;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompraRepository extends JpaRepository<Compra, Integer> {
}