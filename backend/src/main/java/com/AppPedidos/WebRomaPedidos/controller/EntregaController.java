package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.Entrega;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.EntregaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/entregas")
@RequiredArgsConstructor
public class EntregaController extends AbstractCrudController<Entrega, Integer> {

    private final EntregaService service;

    @Override
    protected CrudService<Entrega, Integer> service() {
        return service;
    }
}