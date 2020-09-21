const express = require("express");
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.json());

const users = [
  {
    id: "1",
    name: "project1",
    description: "blah blah",
  },
  {
    id: "2",
    name: "project2",
    description: "blah blah",
  },
];

server.get("/project", (req, res) => {
  res.json(users);
});

server.get("/project/:id", (req, res) => {
  const user = users.find((u) => {
    return u.id === req.params.id;
  });
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ errorMessage: "Title was not found" });
  }
});

server.post("/project", (req, res) => {
  users.push(req.body);
  res.json(users);
});

server.listen(3000, () => {
  console.log("The server is running");
});
