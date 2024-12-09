import { useEffect } from "react";
import { useState } from "react";

export default function darkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const getKey = localStorage.getItem("isDark");
    return getKey ? JSON.parse(getKey) : false;
  });

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDarkMode));
    document.body.style.backgroundColor = isDarkMode ? "black" : "white";
    document.body.style.color = isDarkMode ? "white" : "black";
  }, [isDarkMode]);

  return (
    <div>
      <button
        style={{
          backgroundColor: "#3b82f6",
          borderRadius: "6px",
          padding: "0.25rem 1rem 0.25rem 1rem",
          color: isDarkMode ? "white" : "black",
        }}
        onClick={() => setIsDarkMode((prev) => !prev)}
      >
        {isDarkMode ? "Change To Black" : "Change To White"}
      </button>
      <div>
        <h1>Hello</h1>
      </div>
    </div>
  );
}
