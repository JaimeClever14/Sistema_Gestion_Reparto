package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Marca;
import com.AppPedidos.WebRomaPedidos.repository.MarcaRepository;
import org.springframework.stereotype.Service;

@Service
public class MarcaService extends AbstractCrudService<Marca, Integer> {

    public MarcaService(MarcaRepository repository) {
        super(repository);
    }
}