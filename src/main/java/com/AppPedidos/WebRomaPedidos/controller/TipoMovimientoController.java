package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.TipoMovimiento;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.TipoMovimientoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tipos-movimiento")
@RequiredArgsConstructor
public class TipoMovimientoController extends AbstractCrudController<TipoMovimiento, Integer> {

    private final TipoMovimientoService service;

    @Override
    protected CrudService<TipoMovimiento, Integer> service() {
        return service;
    }
}