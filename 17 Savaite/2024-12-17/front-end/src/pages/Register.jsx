import "../css/register.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  async function sendForm(data) {
    const promise = await fetch("http://localhost/server/api/auth/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!promise.ok) {
      const errorMessage = await promise.json();
      const err = [];
      errorMessage.message.map((error) => err.push(error.message)) ||
        "Server responded with an error";
      setErrors(err);
    }
    return promise;
  }

  console.log(errors);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fromValues = {};

    formData.forEach((value, key) => {
      fromValues[key] = value;
    });

    // Password validacija
    if (
      !(fromValues.repeatPassword === fromValues.password && errors.length > 0)
    ) {
      // Jei nematchina
      setMessage("Password is not ok or something");
      return setTimeout(() => {
        setMessage("");
      }, "2000");
    } else {
      // Jei matchina
      setMessage("Account created");
      const fixedValues = {
        username: fromValues.username,
        email: fromValues.email,
        password: fromValues.password,
      };
      sendForm(fixedValues);

      return setTimeout(() => {
        navigate("/login");
      }, "2000");
    }
  }
  return (
    <main id="register">
      <h1
        style={
          message === "Account created" ? { color: "green" } : { color: "red" }
        }
      >
        {message}
      </h1>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="standard"
          // color="success"
          fullWidth
          name="username"
          sx={{ margin: "10px 0 " }}
        />
        <TextField
          label="Email"
          variant="standard"
          fullWidth
          name="email"
          sx={{ margin: "10px 0 " }}
        />
        <TextField
          label="Password"
          variant="standard"
          fullWidth
          name="password"
          sx={{ margin: "10px 0 " }}
        />
        <TextField
          label="Repeat Password"
          variant="standard"
          fullWidth
          name="repeatPassword"
          sx={{ margin: "10px 0 " }}
        />
        <Button
          sx={{ margin: "25px 0 " }}
          fullWidth
          variant="outlined"
          color="Black"
          endIcon={<SendIcon />}
          type="submit"
        >
          Register
        </Button>
      </form>
    </main>
  );
}
