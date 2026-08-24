package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Proveedor;
import com.AppPedidos.WebRomaPedidos.repository.ProveedorRepository;
import org.springframework.stereotype.Service;

@Service
public class ProveedorService extends AbstractCrudService<Proveedor, Integer> {

    public ProveedorService(ProveedorRepository repository) {
        super(repository);
    }
}