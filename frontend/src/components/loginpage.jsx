"use client"
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState, useEffect } from "react"
import Footer from "./footer";



export default function LoginPage() {

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(" ");

    const handleLogin= (e) => {
        e.preventDefault();
    

    if(!userName){
        console.log("Please enter your username");
    }

    if(!password){
        console.log("Please enter your password");
    } 

    if (password.length < 6) {
  setError("Password must be at least 6 characters.");
  return; 
}

setError("");
alert(`Welcome, ${userName}!`);

    }

  useEffect(() => {
    // Only run on client
    if (typeof window !== "undefined") {
      import("particles.js").then(() => {
        window.particlesJS.load('particles-js', '/particles.json', function() {
          console.log('particles.js loaded');
        });
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Particles.js background */}
      <div className="absolute inset-0 z-0">
        <div id="particles-js" className="w-full h-full"></div>
      </div>
      {/* Main content above particles */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ boxShadow: "0 0 30px rgb(94, 171, 214)" }}
          className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center text-gray-600 mb-6">
            Welcome User!
          </h2>

          {error && (
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, -8, 8, -8, 0] }}
              transition={{ duration: 0.4 }}
              className="bg-[#77BEF0] text-red-700 p-3 mb-4 rounded-lg text-sm"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username Field */}
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

            {/* Password Field with Toggle */}
            <div>
              <label className="block text-gray-600 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="text-gray-500 w-full p-3  rounded-lg focus:ring-2 focus:ring-[#a6cde9] focus:outline-none pr-10"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#77BEF0] text-white p-3 rounded-lg font-semibold hover:bg-[#459cda] transition"
            >
              Login
            </motion.button>
          </form>

          {/* Footer Links */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-[#1797f3] hover:underline font-semibold">
              Sign up
            </a>
          </p>
        </motion.div>
      </div>
      {/* <div className="flex bottom-0 w-full justify-bottom">
        <Footer />
      </div> */}
    </div>
  )
}
