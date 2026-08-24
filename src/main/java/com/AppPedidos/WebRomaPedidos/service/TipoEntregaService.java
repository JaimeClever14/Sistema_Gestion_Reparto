package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.TipoEntrega;
import com.AppPedidos.WebRomaPedidos.repository.TipoEntregaRepository;
import org.springframework.stereotype.Service;

@Service
public class TipoEntregaService extends AbstractCrudService<TipoEntrega, Integer> {

    public TipoEntregaService(TipoEntregaRepository repository) {
        super(repository);
    }
}