package com.AppPedidos.WebRomaPedidos.dto.auth;

public record RegisterRequest(
        String nombres,
        String apellidos,
        String username,
        String password,
        String email,
        String telefono,
        String direccion) {
}