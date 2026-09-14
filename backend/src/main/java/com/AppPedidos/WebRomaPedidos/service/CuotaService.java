package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Cuota;
import com.AppPedidos.WebRomaPedidos.repository.CuotaRepository;
import org.springframework.stereotype.Service;

@Service
public class CuotaService extends AbstractCrudService<Cuota, Integer> {

    public CuotaService(CuotaRepository repository) {
        super(repository);
    }
}