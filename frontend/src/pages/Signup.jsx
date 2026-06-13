import { useState } from "react";
import axios from "axios";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      alert("Signup Successful");
      console.log(res.data);
    } catch (error) {
      alert(
        error.response?.data?.message || "Signup Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h2>

        <input
  type="text"
  placeholder="Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

        <button onClick={handleSignup}>
  Sign Up
</button>

        <p className="text-center mt-4">
  Already have an account?{" "}
  <a href="/login" className="text-blue-600">
    Login
  </a>
</p>
      </div>
    </div>
  );
}

export default Signup;