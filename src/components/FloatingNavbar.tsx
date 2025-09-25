"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FloatingNavbar() {
  const [active, setActive] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Navbar */}
      <motion.nav
        layout
        className={`fixed top-6 left-1/2 -translate-x-1/2 
          h-16 bg-white shadow-lg flex items-center px-6
          ${active ? "w-20 rounded-full justify-center" : "w-11/12 rounded-2xl justify-between"}`}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <motion.div layout className="text-white">
          {/* Logo */}
          <div
            className={`flex items-center justify-center font-bold 
              ${active ? "bg-blue-600 w-12 h-12 rounded-full text-xl" : "text-gray-800 text-lg"}`}
          >
            L
          </div>
        </motion.div>

        {!active && (
          <button
            onClick={() => setActive(true)}
            className="px-4 py-1 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600"
          >
            Switch
          </button>
        )}
      </motion.nav>

      {/* New UI */}
      {active && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800">🚀 New UI</h1>
          <p className="text-gray-600 mt-2">Placeholder content here</p>
          <button
            onClick={() => setActive(false)}
            className="mt-6 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700"
          >
            Back
          </button>
        </motion.div>
      )}
    </div>
  );
}
