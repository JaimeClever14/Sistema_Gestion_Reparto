package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Entrega;
import com.AppPedidos.WebRomaPedidos.repository.EntregaRepository;
import java.time.LocalDateTime;
import org.springframework.stereotype.Service;

@Service
public class EntregaService extends AbstractCrudService<Entrega, Integer> {

    public EntregaService(EntregaRepository repository) {
        super(repository);
    }

    @Override
    public Entrega guardar(Entrega entidad) {
        if (entidad.getFechaAsignacion() == null) {
            entidad.setFechaAsignacion(LocalDateTime.now());
        }
        return super.guardar(entidad);
    }
}