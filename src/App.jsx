import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  );
};
export default App;
