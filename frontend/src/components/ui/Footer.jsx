"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="backdrop-blur-sm text-black py-6 mt-auto justify-center text-center"
    >
        © {new Date().getFullYear()} Managed by <span className="text-xl text-rose-600">Nimbus technologies. </span>All rights reserved.
    </motion.footer>
  );
}