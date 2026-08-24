package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Categoria;
import com.AppPedidos.WebRomaPedidos.repository.CategoriaRepository;
import org.springframework.stereotype.Service;

@Service
public class CategoriaService extends AbstractCrudService<Categoria, Integer> {

    public CategoriaService(CategoriaRepository repository) {
        super(repository);
    }
}