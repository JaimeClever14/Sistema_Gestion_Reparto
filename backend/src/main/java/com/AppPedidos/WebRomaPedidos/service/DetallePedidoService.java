package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.DetallePedido;
import com.AppPedidos.WebRomaPedidos.repository.DetallePedidoRepository;
import org.springframework.stereotype.Service;

@Service
public class DetallePedidoService extends AbstractCrudService<DetallePedido, Integer> {

    public DetallePedidoService(DetallePedidoRepository repository) {
        super(repository);
    }
}