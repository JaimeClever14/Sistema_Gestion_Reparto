package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.EstadoCuota;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.EstadoCuotaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/estados-cuota")
@RequiredArgsConstructor
public class EstadoCuotaController extends AbstractCrudController<EstadoCuota, Integer> {

    private final EstadoCuotaService service;

    @Override
    protected CrudService<EstadoCuota, Integer> service() {
        return service;
    }
}