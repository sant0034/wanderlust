package com.wanderlust.apigateway.filter;

import com.wanderlust.apigateway.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.List;

@Component
public class JwtAuthFilter implements GlobalFilter {

    @Autowired
    private JwtUtil jwtUtil;

    private static final List<String> OPEN_PATHS = List.of(
            "/users/login",
            "/users/register"
    );

    @Override
    public Mono<Void> filter(ServerWebExchange exchange,
                             org.springframework.cloud.gateway.filter.GatewayFilterChain chain) {

        String path = exchange.getRequest().getURI().getPath();

        // 🔓 Skip JWT for public endpoints
        if (OPEN_PATHS.stream().anyMatch(path::contains)) {
            return chain.filter(exchange);
        }

        // 🔐 Get Authorization header
        String authHeader = exchange.getRequest()
                .getHeaders()
                .getFirst(HttpHeaders.AUTHORIZATION);

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }

        String token = authHeader.substring(7);

        // ❌ Invalid token
        if (!jwtUtil.validateToken(token)) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }

        // ✅ Extract data from token
        String username = jwtUtil.extractUsername(token);
        String role = jwtUtil.extractRole(token);

        // 🔥 Forward headers to downstream services
        ServerHttpRequest modifiedRequest = exchange.getRequest()
                .mutate()
                .header("X-User", username)
                .header("X-Role", role)
                .build();

        return chain.filter(exchange.mutate().request(modifiedRequest).build());
    }
}