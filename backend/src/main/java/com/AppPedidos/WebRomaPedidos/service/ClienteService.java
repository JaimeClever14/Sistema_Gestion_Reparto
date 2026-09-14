package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Cliente;
import com.AppPedidos.WebRomaPedidos.repository.ClienteRepository;
import org.springframework.stereotype.Service;

@Service
public class ClienteService extends AbstractCrudService<Cliente, Integer> {

    public ClienteService(ClienteRepository repository) {
        super(repository);
    }
}