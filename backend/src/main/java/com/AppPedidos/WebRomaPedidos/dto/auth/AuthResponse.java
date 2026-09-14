package com.AppPedidos.WebRomaPedidos.dto.auth;

public record AuthResponse(
        String token,
        String tokenType,
        String username,
        String role) {
}