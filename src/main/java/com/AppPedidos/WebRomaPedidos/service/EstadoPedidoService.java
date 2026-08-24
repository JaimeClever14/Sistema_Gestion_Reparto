package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.EstadoPedido;
import com.AppPedidos.WebRomaPedidos.repository.EstadoPedidoRepository;
import org.springframework.stereotype.Service;

@Service
public class EstadoPedidoService extends AbstractCrudService<EstadoPedido, Integer> {

    public EstadoPedidoService(EstadoPedidoRepository repository) {
        super(repository);
    }
}