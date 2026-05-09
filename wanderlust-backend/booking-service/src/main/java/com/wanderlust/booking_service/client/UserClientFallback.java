package com.wanderlust.booking_service.client;

import org.springframework.context.annotation.Configuration;

@Configuration
public class UserClientFallback implements UserClient{
    public Object getUserById(Long id){
        return "User service is down, fallback response";
    }
}
