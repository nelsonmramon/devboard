import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = ({ isDark, toggleTheme }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full  border-b  px-6 py-4 flex items-center justify-between ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}
    >
      <h1
        className={`text-xl font-bold  tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}
      >
        Dev <span className="text-blue-400">Board</span>
      </h1>

      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${isDark ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </motion.nav>
  );
};

export default Navbar;
