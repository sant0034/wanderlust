package com.wanderlust.user.controller;

import com.wanderlust.user.entity.User;
import com.wanderlust.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService service;

    // ✅ REGISTER USER
    @PostMapping("/register")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return ResponseEntity.ok(service.saveUser(user));
    }

    // ✅ GET ALL USERS
    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(service.getAllUsers());
    }

    // ✅ GET USER BY ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getUserById(id));
    }

    // 🔥 LOGIN (FIXED → returns JWT TOKEN)
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        String token = service.login(user);
        return ResponseEntity.ok(new AuthResponse(token));
    }

    // 🔐 Simple response wrapper
    public static class AuthResponse {
        private String token;

        public AuthResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }

        public void setToken(String token) {
            this.token = token;
        }
    }
}