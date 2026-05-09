package com.wanderlust.user.service;

import com.wanderlust.user.entity.User;
import com.wanderlust.user.repository.UserRepository;
import com.wanderlust.user.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    @Autowired
    private JwtUtil jwtUtil;

    // ✅ REGISTER USER
    public User saveUser(User user) {
        return repo.save(user);
    }

    // ✅ GET ALL USERS
    public List<User> getAllUsers() {
        return repo.findAll();
    }

    // ✅ GET USER BY ID
    public User getUserById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    // 🔥 LOGIN (FINAL FIXED VERSION)
    public String login(User user) {

        Optional<User> userOpt = repo.findByEmail(user.getEmail());

        if (userOpt.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        User dbUser = userOpt.get();

        if (!dbUser.getPassword().equals(user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        return jwtUtil.generateToken(dbUser.getEmail(), dbUser.getRole());
    }
}