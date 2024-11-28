import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import User from "./models/User.model.js";
import multer from "multer";
import session from "./config/session.js";

const root = path.dirname(fileURLToPath(import.meta.url));
const publicFolder = path.join(root, "public");
const pagesFolder = path.join(publicFolder, "pages");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session);

await User.sync({ alert: true });

// Main page (add-file.html)
app.get("/", (req, res) => {
  if (req.session.user) {
    console.log(`Welcome ${req.session.user.username}`);
    res.sendFile(path.join(pagesFolder, "add-file.html"));
  } else {
    res.redirect("/login");
  }
  //   res.redirect("/login");
});

// User upload
// app.post("/", (req,res)=>{

// })

// Protected page
app.get("/protected", (req, res) => {
  if (req.session.user) {
    console.log(`Welcome ${req.session.user.username}`);
    res.sendFile(path.join(pagesFolder, "protected.html"));
  } else {
    res.redirect("/login");
  }
  //   res.redirect("/login");
});

// Public page
app.get("/public", (req, res) => {
  if (req.session.user) {
    console.log(`Welcome ${req.session.user.username}`);
    res.sendFile(path.join(pagesFolder, "public.html"));
  } else {
    res.redirect("/login");
  }
  //   res.redirect("/login");
});

// Login page
app.get("/login", (req, res) => {
  res.sendFile(path.join(pagesFolder, "login.html"));
});

// Login user
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExist = await User.findOne({
      where: { username },
    });

    if (userExist && userExist.password === password) {
      req.session.user = { id: userExist.id, username: userExist.username };
      return res.redirect("/");
    }
    res.redirect("/login");
  } catch (error) {
    res.status(400).send("Cant send user data to server");
  }
});

// Log-out
app.get("/logout", (req, res) => {
  req.session.destroy(() => res.redirect("/login"));
});

// Register page
app.get("/register", (req, res) => {
  res.sendFile(path.join(pagesFolder, "register.html"));
});

// Register User *
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExist = await User.findOne({
      where: { username },
    });
    if (userExist) {
      return res.redirect("/register");
    }
    await User.create({
      username,
      password,
    });
    res.redirect("/login");
  } catch (error) {
    res.status(400).send("Cant send user data to server");
  }
});

app.listen(3000, () => {
  console.log("Serveris veikia. http://localhost:3000");
});
