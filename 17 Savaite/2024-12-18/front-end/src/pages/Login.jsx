import {
  Button,
  Grid2 as Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import "../css/login.css";
import { useState } from "react";
import Alert from "@mui/material/Alert";

export default function LoginPage() {
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginData = {
      usernameOrEmail: formData.get("usernameOrEmail"),
      password: formData.get("password"),
    };

    const promise = await fetch("http://localhost/server/api/auth/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    if (promise.ok) return (window.location.href = "/");
    else {
      setError("Login information is incorrect");
      setTimeout(() => {
        setError("");
      }, 10000);
    }
  }
  return (
    <Paper id="login">
      <Typography variant="h5">Prisijungimas</Typography>
      <hr />
      {error === "" ? "" : <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ mt: "2rem" }}>
          <Grid size={12}>
            <TextField
              type="text"
              variant="standard"
              label="Username or Email address"
              name="usernameOrEmail"
              fullWidth
            />
          </Grid>
          <Grid size={12}>
            <TextField
              type="password"
              variant="standard"
              label="Password"
              name="password"
              fullWidth
            />
          </Grid>
          <Grid size={12}>
            <Button type="submit" variant="outlined" sx={{ mt: "1rem" }}>
              Prisijungti
            </Button>
          </Grid>
        </Grid>
      </form>

      <a href="/register" className="link-mt">
        Go to Registration
      </a>
    </Paper>
  );
}
