package com.wanderlust.booking_service.security;

import com.wanderlust.booking_service.enums.Role;
import org.springframework.stereotype.Component;

@Component
public class RoleValidator {

    public void checkAdmin(String role){
        if(!Role.ADMIN.name().equals(role)){
            throw new RuntimeException("Access Denied");
        }
    }

    public void checkUser(String role){
        if(!Role.USER.name().equals(role) && !Role.ADMIN.name().equals(role)){
            throw new RuntimeException("Access Denied");
        }
    }
}