package com.AppPedidos.WebRomaPedidos.controller;

import com.AppPedidos.WebRomaPedidos.service.CrudService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RequiredArgsConstructor
public abstract class AbstractCrudController<T, ID> {

    protected abstract CrudService<T, ID> service();

    @GetMapping
    public ResponseEntity<List<T>> listar() {
        return ResponseEntity.ok(service().listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<T> obtenerPorId(@PathVariable ID id) {
        return service().buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<T> crear(@RequestBody T entidad) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service().guardar(entidad));
    }

    @PutMapping("/{id}")
    public ResponseEntity<T> actualizar(@PathVariable ID id, @RequestBody T entidad) {
        if (service().buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(service().guardar(entidad));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable ID id) {
        service().eliminar(id);
        return ResponseEntity.noContent().build();
    }
}