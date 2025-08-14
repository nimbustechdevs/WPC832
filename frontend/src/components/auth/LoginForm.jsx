
"use client";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";


export default function LoginForm() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!userName) {
      setError("Please enter your username");
      setLoading(false);
      return;
    }

    if (!password) {
      setError("Please enter your password");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: userName, password }),
  });
  const data = await res.json();
  if (!res.ok) {
    setError(data.message || "Login failed");
  } else {
    // Redirect or show success (you can use router.push or similar)
    setError("");
    // window.location.href = "/dashboard"; // Example redirect
  }
} catch (err) {
  setError("Network error");
} finally {
  setLoading(false);
}
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ boxShadow: "0 0 30px rgb(94, 171, 214)" }}
      className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md relative z-10"
    >
      <h2 className="text-3xl font-bold text-center text-gray-600 mb-6">
        Welcome User!
      </h2>

      {error && (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [0, -8, 8, -8, 0] }}
          transition={{ duration: 0.4 }}
          className="bg-red-100 text-red-700 p-3 mb-4 rounded-lg text-sm"
        >
          {error}
        </motion.div>
      )}

      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block text-gray-600 mb-1">Username</label>
          <input
            type="text"
            className="text-gray-500 w-full p-3 rounded-lg focus:ring-2 focus:ring-[#a6cde9] focus:outline-none"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="text-gray-500 w-full p-3 rounded-lg focus:ring-2 focus:ring-[#a6cde9] focus:outline-none pr-10"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-[#77BEF0] text-white p-3 rounded-lg font-semibold hover:bg-[#459cda] transition flex justify-center items-center"
          disabled={loading}
        >
          {loading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Login"
          )}
        </motion.button>
      </form>

      <p className="text-center text-gray-500 text-sm mt-6">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="text-[#1797f3] hover:underline font-semibold"
        >
          Sign up
        </Link>
      </p>
    </motion.div>
  );
}