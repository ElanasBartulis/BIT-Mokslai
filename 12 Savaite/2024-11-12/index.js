import express from "express";
const server = express();
server.use(express.json());

server.listen(8080, () => {
  console.log("Express serveris sekmingai paleistas. http://localhost:8080");
});

const idGen = generateId(3);
const users = [
  {
    id: 1,
    name: "Jonas",
    age: 27,
  },
  {
    id: 2,
    name: "Saulius",
    age: 32,
  },
  {
    id: 3,
    name: "Petras",
    age: 22,
  },
];
// Gauti visus users
server.get("/users", (req, res) => {
  res.status(200).json(users);
});
// Gauti konkretu user
server.get("/users/:id", (req, res) => {
  const id = +req.params.id;
  const user = users.find((usr) => usr.id === id);
  if (!user) return res.status(404).send("Naudotojas nerastas...");
  res.status(200).json(user);
});
// Prideti user
server.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = idGen.next().value;
  users.push(newUser);
  res.status(201).json(newUser);
});
// Edit user
server.put("/users/:id", (req, res) => {
  const id = +req.params.id;
  const foundUser = users.find((usr) => usr.id === id);
  if (!foundUser) return res.status(404).send("Naudotojas nerastas...");
  const updateUserData = req.body;

  if (updateUserData.name) foundUser.name = updateUserData.name;
  if (updateUserData.age) foundUser.age = updateUserData.age;

  res.status(201).json(foundUser);
});
// Delete user
server.delete("/users/:id", (req, res) => {
  const id = +req.params.id;
  const index = users.findIndex((usr) => usr.id === id);
  if (index === -1) return res.status(404).send("Naudotojas nerastas...");
  users.splice(index, 1);
  res.status(204).json({ message: "sekmingai ivykdytas istrinimas" });
});

// Sugeneruoti Id
function* generateId(startId = 0) {
  while (true) {
    startId++;
    yield startId;
  }
}
