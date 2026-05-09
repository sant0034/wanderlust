import { useEffect, useState } from "react";
import { getBookings } from "../services/bookingService";

const BookingsList = () => {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings().then(setBookings);
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>

      {bookings.map((b) => (
        <div key={b.id}>
          <p>{b.customerName}</p>
          <p>{b.email}</p>
          <p>{b.travelDate}</p>
        </div>
      ))}
    </div>
  );
};

export default BookingsList;