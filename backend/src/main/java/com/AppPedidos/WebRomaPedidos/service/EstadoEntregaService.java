package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.EstadoEntrega;
import com.AppPedidos.WebRomaPedidos.repository.EstadoEntregaRepository;
import org.springframework.stereotype.Service;

@Service
public class EstadoEntregaService extends AbstractCrudService<EstadoEntrega, Integer> {

    public EstadoEntregaService(EstadoEntregaRepository repository) {
        super(repository);
    }
}