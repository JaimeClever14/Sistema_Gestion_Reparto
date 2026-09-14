package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.Categoria;
import com.AppPedidos.WebRomaPedidos.service.CategoriaService;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/categorias")
@RequiredArgsConstructor
public class CategoriaController extends AbstractCrudController<Categoria, Integer> {

    private final CategoriaService service;

    @Override
    protected CrudService<Categoria, Integer> service() {
        return service;
    }
}