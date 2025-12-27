import React from "react";

const ThemeToggle = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        padding: "6px 10px",
        borderRadius: "50%",
        border: "none",
        background: "#6366f1",
        color: "white",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      Switch🌓
    </button>
  );
};

export default ThemeToggle;
