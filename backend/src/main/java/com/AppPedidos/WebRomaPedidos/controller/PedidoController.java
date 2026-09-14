package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.domain.entity.Pedido;
import com.AppPedidos.WebRomaPedidos.service.CrudService;
import com.AppPedidos.WebRomaPedidos.service.PedidoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pedidos")
@RequiredArgsConstructor
public class PedidoController extends AbstractCrudController<Pedido, Integer> {

    private final PedidoService service;
    private final com.AppPedidos.WebRomaPedidos.repository.UsuarioRepository usuarioRepository;
    private final com.AppPedidos.WebRomaPedidos.repository.PedidoRepository pedidoRepository;
    private final com.AppPedidos.WebRomaPedidos.repository.ClienteRepository clienteRepository;
    private final com.AppPedidos.WebRomaPedidos.repository.DetallePedidoRepository detallePedidoRepository;

    @Override
    protected CrudService<Pedido, Integer> service() {
        return service;
    }

    @org.springframework.web.bind.annotation.PostMapping
    @Override
    public org.springframework.http.ResponseEntity<Pedido> crear(@org.springframework.web.bind.annotation.RequestBody Pedido entidad) {
        org.springframework.security.core.Authentication auth = org.springframework.security.core.context.SecurityContextHolder.getContext().getAuthentication();
        if (auth != null && auth.isAuthenticated() && !auth.getPrincipal().equals("anonymousUser")) {
            String username = auth.getName();
            usuarioRepository.findByUsernameOrEmail(username, username).ifPresent(u -> {
                entidad.setIdUsuario(u.getIdUsuario());
                clienteRepository.findByEmail(u.getEmail()).ifPresent(c -> entidad.setIdCliente(c.getIdCliente()));
            });
        }
        
        if (entidad.getIdCliente() == null) entidad.setIdCliente(1);
        if (entidad.getIdUsuario() == null) entidad.setIdUsuario(1);
        if (entidad.getIdEstado() == null) entidad.setIdEstado(1);
        if (entidad.getIdTipoEntrega() == null) entidad.setIdTipoEntrega(1);
        if (entidad.getEstado() == null) entidad.setEstado("P");

        Pedido savedPedido = service().guardar(entidad);
        if (entidad.getDetalles() != null && !entidad.getDetalles().isEmpty()) {
            for (com.AppPedidos.WebRomaPedidos.domain.entity.DetallePedido det : entidad.getDetalles()) {
                det.setIdPedido(savedPedido.getIdPedido());
                detallePedidoRepository.save(det);
            }
            savedPedido.setDetalles(entidad.getDetalles());
        }
        return org.springframework.http.ResponseEntity.status(org.springframework.http.HttpStatus.CREATED).body(savedPedido);
    }

    @org.springframework.web.bind.annotation.GetMapping("/mis-pedidos")
    public org.springframework.http.ResponseEntity<java.util.List<Pedido>> misPedidos(java.security.Principal principal) {
        if (principal == null) return org.springframework.http.ResponseEntity.status(401).build();
        String username = principal.getName();
        return usuarioRepository.findByUsernameOrEmail(username, username)
            .map(u -> {
                Integer clientId = clienteRepository.findByEmail(u.getEmail())
                        .map(com.AppPedidos.WebRomaPedidos.domain.entity.Cliente::getIdCliente)
                        .orElse(-1);
                return org.springframework.http.ResponseEntity.ok(pedidoRepository.findByIdUsuarioOrIdCliente(u.getIdUsuario(), clientId));
            })
            .orElseGet(() -> org.springframework.http.ResponseEntity.status(401).build());
    }
}