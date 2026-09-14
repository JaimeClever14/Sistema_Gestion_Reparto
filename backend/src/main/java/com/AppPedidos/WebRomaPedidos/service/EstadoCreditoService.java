package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.EstadoCredito;
import com.AppPedidos.WebRomaPedidos.repository.EstadoCreditoRepository;
import org.springframework.stereotype.Service;

@Service
public class EstadoCreditoService extends AbstractCrudService<EstadoCredito, Integer> {

    public EstadoCreditoService(EstadoCreditoRepository repository) {
        super(repository);
    }
}