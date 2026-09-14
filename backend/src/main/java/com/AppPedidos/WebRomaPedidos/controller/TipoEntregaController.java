package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.TipoEntrega;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.TipoEntregaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tipos-entrega")
@RequiredArgsConstructor
public class TipoEntregaController extends AbstractCrudController<TipoEntrega, Integer> {

    private final TipoEntregaService service;

    @Override
    protected CrudService<TipoEntrega, Integer> service() {
        return service;
    }
}