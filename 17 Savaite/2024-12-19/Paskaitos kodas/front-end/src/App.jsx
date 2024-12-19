import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SessionContext from "./context/SessionContext";
import { useEffect, useState } from "react";
import About from "./pages/About";

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      const promise = await fetch("/server/api/auth/session/");
      const response = await promise.json();

      const currentPath = location.pathname;

      // Public settings
      if (
        !response.isLogged &&
        currentPath !== "/register" &&
        currentPath !== "/login" &&
        currentPath !== "/about"
      ) {
        navigate("/login");
      }

      // Private settings
      if (
        (currentPath === "/login" || currentPath === "/register") &&
        response.isLogged
      ) {
        navigate("/");
      }

      // Preventing flash of site while loading
      setLoading(false);
    }
    checkSession();
  }, []);

  if (loading) return <div>LOADING</div>;

  return (
    <SessionContext.Provider value={{}}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </SessionContext.Provider>
  );
}

export default App;
