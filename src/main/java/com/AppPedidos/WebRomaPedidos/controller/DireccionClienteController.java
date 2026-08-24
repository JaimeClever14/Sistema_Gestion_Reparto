package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.DireccionCliente;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.DireccionClienteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/direcciones-cliente")
@RequiredArgsConstructor
public class DireccionClienteController extends AbstractCrudController<DireccionCliente, Integer> {

    private final DireccionClienteService service;

    @Override
    protected CrudService<DireccionCliente, Integer> service() {
        return service;
    }
}