package com.wanderlust.booking_service.controller;

import com.wanderlust.booking_service.dto.BookingRequest;
import com.wanderlust.booking_service.entity.Booking;
import com.wanderlust.booking_service.security.RoleValidator;
import com.wanderlust.booking_service.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingService service;

    @Autowired
    private RoleValidator roleValidator;

    @PostMapping
    public Booking createBooking(
            @RequestHeader("X-User") String user,
            @RequestHeader("X-Role") String role,
            @RequestBody BookingRequest request
    ) {
        roleValidator.checkUser(role);
        return service.createBooking(request,user);
    }

    @GetMapping
    public List<Booking> getAll(@RequestHeader("X-Role") String role) {
        if (!role.equals("ADMIN")) {
            throw new RuntimeException("Only ADMIN can view all bookings");
        }

        return service.getAllBookings();
    }

    // 🔥 WRITE YOUR ADMIN DELETE API HERE
    @DeleteMapping("/admin/delete/{id}")
    public String deleteBooking(
            @PathVariable Long id,
            @RequestHeader("X-Role") String role
    ) {
        roleValidator.checkAdmin(role);

        service.deleteBooking(id);
        return "Deleted successfully";
    }
}