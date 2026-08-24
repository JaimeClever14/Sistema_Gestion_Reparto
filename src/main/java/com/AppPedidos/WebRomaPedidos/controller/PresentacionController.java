package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.Presentacion;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.PresentacionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/presentaciones")
@RequiredArgsConstructor
public class PresentacionController extends AbstractCrudController<Presentacion, Integer> {

    private final PresentacionService service;

    @Override
    protected CrudService<Presentacion, Integer> service() {
        return service;
    }
}