package com.AppPedidos.WebRomaPedidos.service;

import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;

@RequiredArgsConstructor
public abstract class AbstractCrudService<T, ID> implements CrudService<T, ID> {

    private final JpaRepository<T, ID> repository;

    @Override
    public List<T> listar() {
        return repository.findAll();
    }

    @Override
    public Optional<T> buscarPorId(ID id) {
        return repository.findById(id);
    }

    @Override
    public T guardar(T entidad) {
        return repository.save(entidad);
    }

    @Override
    public void eliminar(ID id) {
        repository.deleteById(id);
    }
}