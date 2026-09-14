package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.EstadoCuota;
import com.AppPedidos.WebRomaPedidos.repository.EstadoCuotaRepository;
import org.springframework.stereotype.Service;

@Service
public class EstadoCuotaService extends AbstractCrudService<EstadoCuota, Integer> {

    public EstadoCuotaService(EstadoCuotaRepository repository) {
        super(repository);
    }
}