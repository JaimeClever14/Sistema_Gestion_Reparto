package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.TipoMovimiento;
import com.AppPedidos.WebRomaPedidos.repository.TipoMovimientoRepository;
import org.springframework.stereotype.Service;

@Service
public class TipoMovimientoService extends AbstractCrudService<TipoMovimiento, Integer> {

    public TipoMovimientoService(TipoMovimientoRepository repository) {
        super(repository);
    }
}