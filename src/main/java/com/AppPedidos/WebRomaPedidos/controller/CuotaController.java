package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.Cuota;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.CuotaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cuotas")
@RequiredArgsConstructor
public class CuotaController extends AbstractCrudController<Cuota, Integer> {

    private final CuotaService service;

    @Override
    protected CrudService<Cuota, Integer> service() {
        return service;
    }
}