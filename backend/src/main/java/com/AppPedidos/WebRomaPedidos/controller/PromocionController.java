package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.Promocion;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.PromocionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/promociones")
@RequiredArgsConstructor
public class PromocionController extends AbstractCrudController<Promocion, Integer> {

    private final PromocionService service;

    @Override
    protected CrudService<Promocion, Integer> service() {
        return service;
    }
}