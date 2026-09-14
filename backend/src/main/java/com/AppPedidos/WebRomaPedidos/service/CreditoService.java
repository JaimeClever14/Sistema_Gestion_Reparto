package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Credito;
import com.AppPedidos.WebRomaPedidos.repository.CreditoRepository;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import org.springframework.stereotype.Service;

@Service
public class CreditoService extends AbstractCrudService<Credito, Integer> {

    public CreditoService(CreditoRepository repository) {
        super(repository);
    }

    @Override
    public Credito guardar(Credito entidad) {
        BigDecimal montoTotal = entidad.getMontoTotal() == null ? BigDecimal.ZERO : entidad.getMontoTotal();
        BigDecimal montoPagado = entidad.getMontoPagado() == null ? BigDecimal.ZERO : entidad.getMontoPagado();
        entidad.setMontoTotal(montoTotal);
        entidad.setMontoPagado(montoPagado);
        entidad.setSaldoPendiente(montoTotal.subtract(montoPagado));
        if (entidad.getFechaInicio() == null) {
            entidad.setFechaInicio(LocalDateTime.now());
        }
        return super.guardar(entidad);
    }
}