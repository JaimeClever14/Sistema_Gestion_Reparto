package com.AppPedidos.WebRomaPedidos.service;

import java.util.List;
import java.util.Optional;

public interface CrudService<T, ID> {

    List<T> listar();

    Optional<T> buscarPorId(ID id);

    T guardar(T entidad);

    void eliminar(ID id);
}