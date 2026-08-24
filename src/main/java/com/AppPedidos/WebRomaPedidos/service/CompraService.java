package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Compra;
import com.AppPedidos.WebRomaPedidos.repository.CompraRepository;
import org.springframework.stereotype.Service;

@Service
public class CompraService extends AbstractCrudService<Compra, Integer> {

    public CompraService(CompraRepository repository) {
        super(repository);
    }
}