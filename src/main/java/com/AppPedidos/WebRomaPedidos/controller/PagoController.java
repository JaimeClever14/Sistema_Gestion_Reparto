package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.Pago;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.PagoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pagos")
@RequiredArgsConstructor
public class PagoController extends AbstractCrudController<Pago, Integer> {

    private final PagoService service;

    @Override
    protected CrudService<Pago, Integer> service() {
        return service;
    }
}