package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.TipoComprobante;
import com.AppPedidos.WebRomaPedidos.repository.TipoComprobanteRepository;
import org.springframework.stereotype.Service;

@Service
public class TipoComprobanteService extends AbstractCrudService<TipoComprobante, Integer> {

    public TipoComprobanteService(TipoComprobanteRepository repository) {
        super(repository);
    }
}