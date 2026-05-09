package com.wanderlust.user.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class GatewayAuthFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        String path = request.getRequestURI();

        // 🔓 Allow public endpoints
        if (path.contains("/users/login") || path.contains("/users/register")) {
            filterChain.doFilter(request, response);
            return;
        }

        // 🔐 Read headers from API Gateway
        String user = request.getHeader("X-User");
        String role = request.getHeader("X-Role");

        // ❌ Block if missing (means request didn't come from gateway or no auth)
        if (user == null || role == null) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Unauthorized - Missing Gateway Headers");
            return;
        }

        // ✅ Continue request
        filterChain.doFilter(request, response);
    }
}