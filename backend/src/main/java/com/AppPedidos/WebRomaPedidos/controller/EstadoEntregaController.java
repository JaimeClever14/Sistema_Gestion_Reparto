package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.EstadoEntrega;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.EstadoEntregaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/estados-entrega")
@RequiredArgsConstructor
public class EstadoEntregaController extends AbstractCrudController<EstadoEntrega, Integer> {

    private final EstadoEntregaService service;

    @Override
    protected CrudService<EstadoEntrega, Integer> service() {
        return service;
    }
}