package com.AppPedidos.WebRomaPedidos.config;

import com.AppPedidos.WebRomaPedidos.domain.entity.Rol;
import com.AppPedidos.WebRomaPedidos.repository.RolRepository;
import java.time.LocalDateTime;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Siembra ÚNICAMENTE los roles básicos del sistema.
 * ⚠ NO crea ningún usuario.
 * El primer usuario que se registre vía /api/auth/register recibirá rol ADMIN automáticamente.
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final RolRepository rolRepository;

    @Override
    public void run(String... args) {
        log.info("=== RomaPedidos: sembrando roles del sistema ===");
        seedRol("ADMIN",      "Administrador del sistema con acceso total");
        seedRol("VENDEDOR",   "Personal de ventas");
        seedRol("REPARTIDOR", "Personal de entregas");
        seedRol("CLIENTE",    "Cliente registrado");
        log.info("=== Roles listos. El PRIMER usuario que se registre será ADMIN. ===");
    }

    private void seedRol(String nombre, String descripcion) {
        if (rolRepository.findByNombreRolIgnoreCase(nombre).isEmpty()) {
            rolRepository.save(Rol.builder()
                    .nombreRol(nombre)
                    .descripcion(descripcion)
                    .fechaRegistro(LocalDateTime.now())
                    .build());
            log.info("  Rol creado: {}", nombre);
        }
    }
}