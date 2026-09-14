package com.AppPedidos.WebRomaPedidos.config;

import com.AppPedidos.WebRomaPedidos.domain.entity.Rol;
import com.AppPedidos.WebRomaPedidos.domain.entity.Usuario;
import com.AppPedidos.WebRomaPedidos.repository.RolRepository;
import com.AppPedidos.WebRomaPedidos.repository.UsuarioRepository;
import java.time.LocalDateTime;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

/**
 * Siembra los roles del sistema y usuarios demo iniciales si la base de datos está vacía.
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final RolRepository     rolRepository;
    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder   passwordEncoder;

    @Override
    public void run(String... args) {
        log.info("=== RomaPedidos: sembrando roles del sistema ===");
        Rol adminRol      = seedRol("ADMIN",      "Administrador del sistema con acceso total");
        Rol vendedorRol   = seedRol("VENDEDOR",   "Personal de ventas");
        Rol repartidorRol = seedRol("REPARTIDOR", "Personal de entregas");
        Rol clienteRol    = seedRol("CLIENTE",    "Cliente registrado");

        if (usuarioRepository.count() == 0) {
            log.info("=== Sembrando usuarios demo iniciales ===");
            seedUsuario("admin",      "admin123",      "Admin",      "Sistema",    "admin@romapedidos.com",      adminRol);
            seedUsuario("vendedor",   "vendedor123",   "Vendedor",   "Roma",       "vendedor@romapedidos.com",   vendedorRol);
            seedUsuario("repartidor", "repartidor123", "Repartidor", "Roma",       "repartidor@romapedidos.com", repartidorRol);
            seedUsuario("cliente",    "cliente123",    "Cliente",    "Demo",       "cliente@romapedidos.com",    clienteRol);
        }
    }

    private Rol seedRol(String nombre, String descripcion) {
        return rolRepository.findByNombreRolIgnoreCase(nombre)
                .orElseGet(() -> rolRepository.save(Rol.builder()
                        .nombreRol(nombre)
                        .descripcion(descripcion)
                        .fechaRegistro(LocalDateTime.now())
                        .build()));
    }

    private void seedUsuario(String username, String password, String nombres, String apellidos, String email, Rol rol) {
        if (!usuarioRepository.existsByUsername(username)) {
            usuarioRepository.save(Usuario.builder()
                    .username(username)
                    .contrasena(passwordEncoder.encode(password))
                    .nombres(nombres)
                    .apellidos(apellidos)
                    .email(email)
                    .idRol(rol.getIdRol())
                    .fechaRegistro(LocalDateTime.now())
                    .activo(true)
                    .build());
            log.info("  Usuario creado: {} ({})", username, rol.getNombreRol());
        }
    }
}