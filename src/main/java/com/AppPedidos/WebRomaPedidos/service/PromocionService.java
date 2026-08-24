package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Promocion;
import com.AppPedidos.WebRomaPedidos.repository.PromocionRepository;
import org.springframework.stereotype.Service;

@Service
public class PromocionService extends AbstractCrudService<Promocion, Integer> {

    public PromocionService(PromocionRepository repository) {
        super(repository);
    }
}