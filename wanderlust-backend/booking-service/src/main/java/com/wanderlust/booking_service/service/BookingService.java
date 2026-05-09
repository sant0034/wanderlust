package com.wanderlust.booking_service.service;

import com.wanderlust.booking_service.client.UserClient;
import com.wanderlust.booking_service.dto.BookingRequest;
import com.wanderlust.booking_service.entity.Booking;
import com.wanderlust.booking_service.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserClient userClient;

    public Object getUser(Long userId){
        return userClient.getUserById(userId);
    }

    public Booking createBooking(BookingRequest request,String userEmail){


        Booking booking = new Booking();
        booking.setEmail(userEmail); // ✅ TRUSTED DATA (from JWT)
        booking.setDestination(request.getDestination());
        booking.setTravelDate(request.getTravelDate());
        booking.setNumberOfPeople(request.getNumberOfPeople());

        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings(){
        return bookingRepository.findAll();
    }

    public void deleteBooking(Long id){
        bookingRepository.deleteById(id);
    }
}
