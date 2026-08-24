package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.DireccionCliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DireccionClienteRepository extends JpaRepository<DireccionCliente, Integer> {
}