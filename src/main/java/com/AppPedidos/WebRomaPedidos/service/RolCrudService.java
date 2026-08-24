package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Rol;
import com.AppPedidos.WebRomaPedidos.repository.RolRepository;
import org.springframework.stereotype.Service;

@Service
public class RolCrudService extends AbstractCrudService<Rol, Integer> {

    public RolCrudService(RolRepository repository) {
        super(repository);
    }
}