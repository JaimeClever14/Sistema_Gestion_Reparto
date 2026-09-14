package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.Comprobante;
import com.AppPedidos.WebRomaPedidos.service.ComprobanteService;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/comprobantes")
@RequiredArgsConstructor
public class ComprobanteController extends AbstractCrudController<Comprobante, Integer> {

    private final ComprobanteService service;

    @Override
    protected CrudService<Comprobante, Integer> service() {
        return service;
    }
}