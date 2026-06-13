import { useState } from "react";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form className="bg-white p-8 rounded-3xl shadow-xl w-96">

        <h1 className="text-4xl font-bold text-center mb-8">
          Sign Up
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-4 rounded-lg mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-4 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-4 rounded-lg mb-6"
        />

        <button
          className="w-full bg-green-600 text-white p-4 rounded-lg"
        >
          Create Account
        </button>

      </form>

    </div>
  );
}

export default Register;