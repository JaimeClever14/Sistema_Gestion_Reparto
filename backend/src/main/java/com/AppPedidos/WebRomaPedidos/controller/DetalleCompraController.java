package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.DetalleCompra;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.DetalleCompraService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/detalles-compra")
@RequiredArgsConstructor
public class DetalleCompraController extends AbstractCrudController<DetalleCompra, Integer> {

    private final DetalleCompraService service;

    @Override
    protected CrudService<DetalleCompra, Integer> service() {
        return service;
    }
}