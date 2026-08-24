package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.Credito;
import com.AppPedidos.WebRomaPedidos.service.CreditoService;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/creditos")
@RequiredArgsConstructor
public class CreditoController extends AbstractCrudController<Credito, Integer> {

    private final CreditoService service;

    @Override
    protected CrudService<Credito, Integer> service() {
        return service;
    }
}