// Server side rendering.

import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const app = express();

const root = path.dirname(fileURLToPath(import.meta.url));

const example = path.join(root, "example");

app.get("/", (req, res) => {
  res.sendFile(path.join(example, "index.html"));
});

app.listen(3000, () => {
  console.log("Serveris veikia. http://localhost:3000");
});
