package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Pago;
import com.AppPedidos.WebRomaPedidos.repository.PagoRepository;
import java.time.LocalDateTime;
import org.springframework.stereotype.Service;

@Service
public class PagoService extends AbstractCrudService<Pago, Integer> {

    public PagoService(PagoRepository repository) {
        super(repository);
    }

    @Override
    public Pago guardar(Pago entidad) {
        if (entidad.getFechaPago() == null) {
            entidad.setFechaPago(LocalDateTime.now());
        }
        return super.guardar(entidad);
    }
}