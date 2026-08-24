package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.DetalleCompra;
import com.AppPedidos.WebRomaPedidos.repository.DetalleCompraRepository;
import org.springframework.stereotype.Service;

@Service
public class DetalleCompraService extends AbstractCrudService<DetalleCompra, Integer> {

    public DetalleCompraService(DetalleCompraRepository repository) {
        super(repository);
    }
}