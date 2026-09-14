package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.Proveedor;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.ProveedorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/proveedores")
@RequiredArgsConstructor
public class ProveedorController extends AbstractCrudController<Proveedor, Integer> {

    private final ProveedorService service;

    @Override
    protected CrudService<Proveedor, Integer> service() {
        return service;
    }
}