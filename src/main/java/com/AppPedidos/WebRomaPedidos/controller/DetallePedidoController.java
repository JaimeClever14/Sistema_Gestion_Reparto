package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.DetallePedido;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.DetallePedidoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/detalles-pedido")
@RequiredArgsConstructor
public class DetallePedidoController extends AbstractCrudController<DetallePedido, Integer> {

    private final DetallePedidoService service;

    @Override
    protected CrudService<DetallePedido, Integer> service() {
        return service;
    }
}