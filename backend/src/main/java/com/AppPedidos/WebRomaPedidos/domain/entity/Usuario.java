package com.AppPedidos.WebRomaPedidos.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Integer idUsuario;

    @Column(nullable = false, length = 100)
    private String nombres;

    @Column(nullable = false, length = 100)
    private String apellidos;

    @Column(nullable = false, unique = true, length = 50)
    private String username;

    @Column(name = "contrasena", nullable = false, length = 255)
    private String contrasena;

    @Column(nullable = false, unique = true, length = 100)
    private String email;

    @Column(name = "id_rol", nullable = false)
    private Integer idRol;

    @Column(name = "fecha_registro", columnDefinition = "DATETIME2(0)")
    private LocalDateTime fechaRegistro;

    @Column(name = "fecha_modificacion", columnDefinition = "DATETIME2(0)")
    private LocalDateTime fechaModificacion;

    @Column(name = "ultimo_acceso")
    private LocalDateTime ultimoAcceso;

    @Column(columnDefinition = "BIT")
    private Boolean activo = true;
}