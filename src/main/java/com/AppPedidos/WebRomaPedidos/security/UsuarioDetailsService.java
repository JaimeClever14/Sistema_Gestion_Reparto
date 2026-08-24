package com.AppPedidos.WebRomaPedidos.security;

import com.AppPedidos.WebRomaPedidos.domain.entity.Rol;
import com.AppPedidos.WebRomaPedidos.domain.entity.Usuario;
import com.AppPedidos.WebRomaPedidos.repository.RolRepository;
import com.AppPedidos.WebRomaPedidos.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsuarioDetailsService implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;
    private final RolRepository rolRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByUsernameOrEmail(username, username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado: " + username));

        String roleName = "CLIENTE";
        if (usuario.getIdRol() != null) {
            roleName = rolRepository.findById(usuario.getIdRol())
                    .map(Rol::getNombreRol)
                    .orElse("CLIENTE");
        }

        String estado = usuario.getEstado();
        boolean enabled = estado == null || estado.equalsIgnoreCase("A");

        return new UsuarioPrincipal(usuario.getUsername(), usuario.getContrasena(), roleName, enabled);
    }
}