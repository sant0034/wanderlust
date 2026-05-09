import { useState } from "react";
import { loginUser } from "../services/authService";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
  try {
    const response = await loginUser({ email, password });

    console.log("Login success:", response);

    // ✅ FIX: token is inside response.data.token
    localStorage.setItem("token", response.data.token);

    window.location.href = "/";
  } catch (error) {
    console.error("Login failed", error);
  }
};

  return (
    <div>
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;