package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Usuario;
import com.AppPedidos.WebRomaPedidos.repository.UsuarioRepository;
import java.time.LocalDateTime;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioCrudService extends AbstractCrudService<Usuario, Integer> {

    private final PasswordEncoder passwordEncoder;

    public UsuarioCrudService(UsuarioRepository repository, PasswordEncoder passwordEncoder) {
        super(repository);
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Usuario guardar(Usuario entidad) {
        if (entidad.getFechaRegistro() == null) {
            entidad.setFechaRegistro(LocalDateTime.now());
        }
        if (entidad.getEstado() == null || entidad.getEstado().isBlank()) {
            entidad.setEstado("A");
        }
        if (entidad.getContrasena() != null && !entidad.getContrasena().isBlank()) {
            // Encode only if not already a BCrypt hash
            if (!entidad.getContrasena().startsWith("$2a$") && !entidad.getContrasena().startsWith("$2b$")) {
                entidad.setContrasena(passwordEncoder.encode(entidad.getContrasena()));
            }
        }
        return super.guardar(entidad);
    }
}