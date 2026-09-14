package com.AppPedidos.WebRomaPedidos.repository;

import com.AppPedidos.WebRomaPedidos.domain.entity.TipoDocumento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TipoDocumentoRepository extends JpaRepository<TipoDocumento, Integer> {
}