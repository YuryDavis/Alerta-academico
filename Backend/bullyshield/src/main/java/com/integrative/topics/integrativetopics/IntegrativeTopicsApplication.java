package com.integrative.topics.integrativetopics;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class IntegrativeTopicsApplication {

	@Bean
	public ModelMapper mapper() {
		return new ModelMapper();
	}

	public static void main(String[] args) {
		SpringApplication.run(IntegrativeTopicsApplication.class, args);
	}

}
