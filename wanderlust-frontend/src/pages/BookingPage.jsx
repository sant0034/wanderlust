import { useState } from "react";
import { createBooking } from "../services/bookingService";

const BookingPage = () => {

  const [form, setForm] = useState({
    destinationId: 1,
    customerName: "",
    email: "",
    travelDate: "",
    people: 1
  });

  const handleSubmit = async () => {
    try {
      const res = await createBooking(form);
      console.log("Booking saved:", res);
      alert("Booking successful ✅");
    } catch (err) {
      console.error(err);
      alert("Booking failed ❌");
    }
  };

  return (
    <div>
      <input placeholder="Name"
        onChange={(e) => setForm({ ...form, customerName: e.target.value })}
      />

      <input placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input type="date"
        onChange={(e) => setForm({ ...form, travelDate: e.target.value })}
      />

      <input type="number"
        onChange={(e) => setForm({ ...form, people: e.target.value })}
      />

      <button onClick={handleSubmit}>Book Now</button>
    </div>
  );
};

export default BookingPage;