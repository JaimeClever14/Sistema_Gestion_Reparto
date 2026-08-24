package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.EstadoCredito;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.EstadoCreditoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/estados-credito")
@RequiredArgsConstructor
public class EstadoCreditoController extends AbstractCrudController<EstadoCredito, Integer> {

    private final EstadoCreditoService service;

    @Override
    protected CrudService<EstadoCredito, Integer> service() {
        return service;
    }
}