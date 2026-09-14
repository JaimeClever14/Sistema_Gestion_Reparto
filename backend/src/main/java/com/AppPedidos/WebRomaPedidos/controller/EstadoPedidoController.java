package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.EstadoPedido;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.EstadoPedidoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/estados-pedido")
@RequiredArgsConstructor
public class EstadoPedidoController extends AbstractCrudController<EstadoPedido, Integer> {

    private final EstadoPedidoService service;

    @Override
    protected CrudService<EstadoPedido, Integer> service() {
        return service;
    }
}