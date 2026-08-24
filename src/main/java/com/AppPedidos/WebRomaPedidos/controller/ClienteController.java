package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.Cliente;
import com.AppPedidos.WebRomaPedidos.service.ClienteService;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/clientes")
@RequiredArgsConstructor
public class ClienteController extends AbstractCrudController<Cliente, Integer> {

    private final ClienteService service;

    @Override
    protected CrudService<Cliente, Integer> service() {
        return service;
    }
}