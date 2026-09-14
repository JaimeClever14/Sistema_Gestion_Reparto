package com.AppPedidos.WebRomaPedidos.service;

import com.AppPedidos.WebRomaPedidos.domain.entity.TipoDocumento;
import com.AppPedidos.WebRomaPedidos.repository.TipoDocumentoRepository;
import org.springframework.stereotype.Service;

@Service
public class TipoDocumentoService extends AbstractCrudService<TipoDocumento, Integer> {

    public TipoDocumentoService(TipoDocumentoRepository repository) {
        super(repository);
    }
}