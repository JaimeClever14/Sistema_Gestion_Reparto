package com.AppPedidos.WebRomaPedidos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class WebRomaPedidosApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebRomaPedidosApplication.class, args);
	}

}
