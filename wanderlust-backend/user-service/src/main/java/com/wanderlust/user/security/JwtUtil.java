package com.wanderlust.user.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    private static final String SECRET =
            "my-super-secret-key-my-super-secret-key"; // keep ≥ 32 chars

    private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());

    // 🔐 Generate Token
    public String generateToken(String username, String role) {
        return Jwts.builder()
                .setSubject(username)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    // 🔍 Extract Username
    public String extractUsername(String token) {
        return parseClaims(token).getBody().getSubject();
    }

    // 🔍 Extract Role
    public String extractRole(String token) {
        return parseClaims(token).getBody().get("role", String.class);
    }

    // 🔒 Centralized parsing (important improvement)
    private Jws<Claims> parseClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token);
    }

    // ❌ Optional: validation helper (you WILL need this later)
    public boolean isTokenValid(String token, String username) {
        return extractUsername(token).equals(username) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return parseClaims(token).getBody().getExpiration().before(new Date());
    }
}