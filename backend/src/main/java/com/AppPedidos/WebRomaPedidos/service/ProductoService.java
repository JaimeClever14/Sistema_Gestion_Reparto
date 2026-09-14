package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Producto;
import com.AppPedidos.WebRomaPedidos.repository.ProductoRepository;
import org.springframework.stereotype.Service;

@Service
public class ProductoService extends AbstractCrudService<Producto, Integer> {

    public ProductoService(ProductoRepository repository) {
        super(repository);
    }
}