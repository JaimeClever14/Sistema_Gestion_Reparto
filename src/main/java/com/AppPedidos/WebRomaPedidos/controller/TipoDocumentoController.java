package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.TipoDocumento;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.TipoDocumentoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tipos-documento")
@RequiredArgsConstructor
public class TipoDocumentoController extends AbstractCrudController<TipoDocumento, Integer> {

    private final TipoDocumentoService service;

    @Override
    protected CrudService<TipoDocumento, Integer> service() {
        return service;
    }
}