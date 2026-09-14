package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Pedido;
import com.AppPedidos.WebRomaPedidos.repository.PedidoRepository;
import java.math.BigDecimal;
import org.springframework.stereotype.Service;

@Service
public class PedidoService extends AbstractCrudService<Pedido, Integer> {

    public PedidoService(PedidoRepository repository) {
        super(repository);
    }

    @Override
    public Pedido guardar(Pedido entidad) {
        BigDecimal subtotal = entidad.getSubtotal() == null ? BigDecimal.ZERO : entidad.getSubtotal();
        BigDecimal igv = entidad.getIgv() == null ? subtotal.multiply(new BigDecimal("0.18")) : entidad.getIgv();
        BigDecimal descuento = entidad.getDescuento() == null ? BigDecimal.ZERO : entidad.getDescuento();
        BigDecimal costoDelivery = entidad.getCostoDelivery() == null ? BigDecimal.ZERO : entidad.getCostoDelivery();
        entidad.setSubtotal(subtotal);
        entidad.setIgv(igv);
        entidad.setDescuento(descuento);
        entidad.setCostoDelivery(costoDelivery);
        entidad.setTotal(subtotal.add(igv).add(costoDelivery).subtract(descuento));
        return super.guardar(entidad);
    }
}