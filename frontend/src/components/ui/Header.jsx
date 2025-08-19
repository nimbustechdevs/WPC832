// components/ui/Header.jsx
"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if authToken exists in localStorage
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    router.push("/login");
  };

   return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="bg-gradient-to-r from-[#77bdf0] to-[#5a9bd5] w-full px-6 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="flex items-center cursor-pointer"
      >
        <img 
          src="/router_1.png" 
          alt="Logo" 
          className="h-12 mr-3 drop-shadow-md" 
        />
        <h1 className="text-2xl font-bold text-white tracking-tight">
          <span className="text-3xl font-extrabold">NT</span>-832
        </h1>
      </motion.div>

      {isLoggedIn && (
        <motion.button
          onClick={handleLogout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center bg-white/90 text-[#5a9bd5] px-5 py-2 rounded-full font-medium hover:bg-white transition-all duration-200 shadow-md"
        >
          <FiLogOut className="mr-2" />
          Logout
        </motion.button>
      )}
    </motion.header>
  );
}