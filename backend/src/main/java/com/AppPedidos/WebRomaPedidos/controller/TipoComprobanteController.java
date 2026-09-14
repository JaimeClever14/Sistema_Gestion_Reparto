package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.TipoComprobante;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.TipoComprobanteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tipos-comprobante")
@RequiredArgsConstructor
public class TipoComprobanteController extends AbstractCrudController<TipoComprobante, Integer> {

    private final TipoComprobanteService service;

    @Override
    protected CrudService<TipoComprobante, Integer> service() {
        return service;
    }
}