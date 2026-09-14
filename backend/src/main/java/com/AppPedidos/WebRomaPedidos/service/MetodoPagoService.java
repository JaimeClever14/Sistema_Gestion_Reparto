package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.MetodoPago;
import com.AppPedidos.WebRomaPedidos.repository.MetodoPagoRepository;
import org.springframework.stereotype.Service;

@Service
public class MetodoPagoService extends AbstractCrudService<MetodoPago, Integer> {

    public MetodoPagoService(MetodoPagoRepository repository) {
        super(repository);
    }
}