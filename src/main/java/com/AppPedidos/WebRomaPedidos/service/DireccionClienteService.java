package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.DireccionCliente;
import com.AppPedidos.WebRomaPedidos.repository.DireccionClienteRepository;
import org.springframework.stereotype.Service;

@Service
public class DireccionClienteService extends AbstractCrudService<DireccionCliente, Integer> {

    public DireccionClienteService(DireccionClienteRepository repository) {
        super(repository);
    }
}