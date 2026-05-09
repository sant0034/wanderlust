package com.wanderlust.booking_service.dto;

import lombok.Data;

@Data
public class BookingRequest {
    private String destination;
    private String travelDate;
    private int numberOfPeople;
}
