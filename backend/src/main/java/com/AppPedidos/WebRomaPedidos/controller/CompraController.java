package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.Compra;
import com.AppPedidos.WebRomaPedidos.service.CompraService;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/compras")
@RequiredArgsConstructor
public class CompraController extends AbstractCrudController<Compra, Integer> {

    private final CompraService service;

    @Override
    protected CrudService<Compra, Integer> service() {
        return service;
    }
}