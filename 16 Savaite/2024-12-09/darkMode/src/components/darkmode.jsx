import { useEffect } from "react";
import { useState } from "react";

export default function darkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const getKey = localStorage.getItem("isDark");
    if (!getKey) {
      localStorage.setItem("isDark", JSON.stringify(isDarkMode));
    }
  }, [isDarkMode]);

  const darkModeSwitch = isDarkMode ? "black" : "white";

  return (
    <div>
      <button
        style={{
          backgroundColor: "#3b82f6",
          borderRadius: "6px",
          padding: "0.25rem 1rem 0.25rem 1rem",
          color: darkModeSwitch,
        }}
        onClick={() => {
          setIsDarkMode((prev) => !prev);
          localStorage.setItem("isDark", JSON.stringify(isDarkMode));
          document.body.style.backgroundColor = darkModeSwitch;
          document.body.style.color = isDarkMode ? "white" : "black";
        }}
      >
        {isDarkMode ? "Change To Black" : "Change To White"}
      </button>
      <div>
        <h1>Hello</h1>
      </div>
    </div>
  );
}
