import API_BASE from "../api";

// CREATE booking
export const createBooking = async (data) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

// FETCH bookings  👇 (YOUR QUESTION)
export const getBookings = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}/bookings`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  return res.json();
};