package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.Rol;
import com.AppPedidos.WebRomaPedidos.domain.entity.Usuario;
import com.AppPedidos.WebRomaPedidos.dto.auth.AuthResponse;
import com.AppPedidos.WebRomaPedidos.dto.auth.LoginRequest;
import com.AppPedidos.WebRomaPedidos.dto.auth.RegisterRequest;
import com.AppPedidos.WebRomaPedidos.repository.RolRepository;
import com.AppPedidos.WebRomaPedidos.repository.UsuarioRepository;
import com.AppPedidos.WebRomaPedidos.security.JwtService;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final RolRepository     rolRepository;
    private final PasswordEncoder   passwordEncoder;
    private final JwtService        jwtService;
    private final com.AppPedidos.WebRomaPedidos.repository.ClienteRepository clienteRepository;

    // ──────────────────────────────────────────────────────────────────────────
    // REGISTER
    // ──────────────────────────────────────────────────────────────────────────
    @Transactional
    public AuthResponse register(RegisterRequest req) {

        // Validaciones básicas manuales (sin @Valid para que los mensajes sean claros)
        if (req.username() == null || req.username().isBlank()) {
            throw new IllegalArgumentException("El nombre de usuario es obligatorio.");
        }
        if (req.password() == null || req.password().isBlank()) {
            throw new IllegalArgumentException("La contraseña es obligatoria.");
        }
        if (req.email() == null || req.email().isBlank() || !req.email().contains("@")) {
            throw new IllegalArgumentException("El correo electrónico no es válido.");
        }
        if (req.nombres() == null || req.nombres().isBlank()) {
            throw new IllegalArgumentException("El nombre es obligatorio.");
        }
        if (req.apellidos() == null || req.apellidos().isBlank()) {
            throw new IllegalArgumentException("El apellido es obligatorio.");
        }

        // Verificar duplicados (búsqueda sin distinción de mayúsculas/minúsculas)
        if (usuarioRepository.existsByUsernameIgnoreCase(req.username().trim())) {
            throw new IllegalArgumentException("El usuario '" + req.username() + "' ya existe. Elige otro nombre de usuario.");
        }
        if (usuarioRepository.existsByEmailIgnoreCase(req.email().trim())) {
            throw new IllegalArgumentException("El correo '" + req.email() + "' ya está registrado.");
        }

        // Determinar rol: si NO hay ningún usuario en el sistema → ADMIN
        boolean esAdmin = usuarioRepository.count() == 0;
        String  rolNombre = esAdmin ? "ADMIN" : "CLIENTE";

        Rol rol = rolRepository.findByNombreRolIgnoreCase(rolNombre)
                .orElseGet(() -> rolRepository.save(
                        Rol.builder()
                                .nombreRol(rolNombre)
                                .descripcion(esAdmin ? "Administrador del sistema" : "Cliente registrado")
                                .fechaRegistro(LocalDateTime.now())
                                .build()
                ));

        Usuario usuario = Usuario.builder()
                .nombres(req.nombres().trim())
                .apellidos(req.apellidos().trim())
                .username(req.username().trim())
                .contrasena(passwordEncoder.encode(req.password()))
                .email(req.email().trim().toLowerCase())
                .idRol(rol.getIdRol())
                .fechaRegistro(LocalDateTime.now())
                .activo(true)
                .build();

        usuarioRepository.save(usuario);
        log.info("Usuario registrado: {} con rol {}", usuario.getUsername(), rol.getNombreRol());

        if ("CLIENTE".equalsIgnoreCase(rol.getNombreRol())) {
            try {
                String fullNombre = (req.nombres().trim() + " " + req.apellidos().trim()).trim();
                com.AppPedidos.WebRomaPedidos.domain.entity.Cliente cliente = com.AppPedidos.WebRomaPedidos.domain.entity.Cliente.builder()
                        .idTipo(1)
                        .numeroDocumento("4" + String.format("%07d", (int)(Math.random() * 10000000)))
                        .razonSocial(fullNombre)
                        .email(req.email().trim().toLowerCase())
                        .fechaRegistro(LocalDateTime.now())
                        .activo(true)
                        .build();
                clienteRepository.save(cliente);
                log.info("Entidad Cliente vinculada automáticamente para {}", fullNombre);
            } catch (Exception e) {
                log.warn("No se pudo crear automáticamente el registro de Cliente: {}", e.getMessage());
            }
        }

        String token = jwtService.generateToken(adapt(usuario.getUsername(), usuario.getContrasena(), rol.getNombreRol()));
        return new AuthResponse(token, "Bearer", usuario.getUsername(), rol.getNombreRol());
    }

    // ──────────────────────────────────────────────────────────────────────────
    // LOGIN
    // ──────────────────────────────────────────────────────────────────────────
    @Transactional
    public AuthResponse login(LoginRequest req) {
        if (req.username() == null || req.username().isBlank()) {
            throw new IllegalArgumentException("El usuario o correo es obligatorio.");
        }
        if (req.password() == null || req.password().isBlank()) {
            throw new IllegalArgumentException("La contraseña es obligatoria.");
        }

        String input = req.username().trim();
        Usuario usuario = usuarioRepository.findByUsernameIgnoreCaseOrEmailIgnoreCase(input, input)
                .orElseThrow(() -> new IllegalArgumentException("No existe una cuenta con ese usuario o correo."));

        // Verificar contraseña (con soporte para texto plano heredado)
        boolean valid = false;
        String stored = usuario.getContrasena();
        if (stored != null) {
            if (stored.startsWith("$2")) {
                valid = passwordEncoder.matches(req.password(), stored);
            } else {
                // Texto plano: migrar a BCrypt automáticamente
                valid = stored.equals(req.password());
                if (valid) {
                    usuario.setContrasena(passwordEncoder.encode(req.password()));
                }
            }
        }

        if (!valid) {
            throw new IllegalArgumentException("Contraseña incorrecta. Verifica e intenta de nuevo.");
        }

        String rolNombre = "CLIENTE";
        if (usuario.getIdRol() != null) {
            rolNombre = rolRepository.findById(usuario.getIdRol())
                    .map(Rol::getNombreRol)
                    .orElse("CLIENTE");
        }

        usuario.setUltimoAcceso(LocalDateTime.now());
        usuarioRepository.save(usuario);

        String token = jwtService.generateToken(adapt(usuario.getUsername(), usuario.getContrasena(), rolNombre));
        return new AuthResponse(token, "Bearer", usuario.getUsername(), rolNombre);
    }

    // ──────────────────────────────────────────────────────────────────────────
    // ADAPTER
    // ──────────────────────────────────────────────────────────────────────────
    private UserDetails adapt(String username, String password, String role) {
        return new UserDetails() {
            @Override public Collection<? extends GrantedAuthority> getAuthorities() {
                return List.of(new SimpleGrantedAuthority("ROLE_" + role));
            }
            @Override public String getPassword() { return password; }
            @Override public String getUsername() { return username; }
            @Override public boolean isAccountNonExpired()     { return true; }
            @Override public boolean isAccountNonLocked()      { return true; }
            @Override public boolean isCredentialsNonExpired() { return true; }
            @Override public boolean isEnabled()               { return true; }
        };
    }
}