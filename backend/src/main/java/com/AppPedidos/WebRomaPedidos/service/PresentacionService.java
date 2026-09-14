package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Presentacion;
import com.AppPedidos.WebRomaPedidos.repository.PresentacionRepository;
import org.springframework.stereotype.Service;

@Service
public class PresentacionService extends AbstractCrudService<Presentacion, Integer> {

    public PresentacionService(PresentacionRepository repository) {
        super(repository);
    }
}