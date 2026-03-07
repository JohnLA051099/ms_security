package com.ms_security;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain; // IMPORTANTE: Falta este import

@SpringBootApplication
public class MsSecurityApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsSecurityApplication.class, args);
	}
}

@Configuration
class SecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
				.csrf(csrf -> csrf.disable())
				.authorizeHttpRequests(auth -> auth
						.anyRequest().permitAll()
				)
				.httpBasic(Customizer.withDefaults());

		return http.build(); // Esto construye la configuración
	}
}