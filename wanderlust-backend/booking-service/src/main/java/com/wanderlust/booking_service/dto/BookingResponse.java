package com.wanderlust.booking_service.dto;

import lombok.Data;

@Data
public class BookingResponse {
    private Long bookingId;
    private String destination;
    private String status;
}
