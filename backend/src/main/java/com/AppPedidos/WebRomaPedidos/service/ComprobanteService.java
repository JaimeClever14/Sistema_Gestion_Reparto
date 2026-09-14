package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Comprobante;
import com.AppPedidos.WebRomaPedidos.repository.ComprobanteRepository;
import java.time.LocalDateTime;
import org.springframework.stereotype.Service;

@Service
public class ComprobanteService extends AbstractCrudService<Comprobante, Integer> {

    public ComprobanteService(ComprobanteRepository repository) {
        super(repository);
    }

    @Override
    public Comprobante guardar(Comprobante entidad) {
        if (entidad.getFechaEmision() == null) {
            entidad.setFechaEmision(LocalDateTime.now());
        }
        return super.guardar(entidad);
    }
}