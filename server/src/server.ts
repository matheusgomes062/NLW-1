import express, { response } from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de usuários");

  response.send("Hello World");
});

app.post("/users", (request, response) => {
  const user = {
    name: "Diego",
    email: "diego@rocketseat.com.br",
  };

  return response.json(user);
});

app.listen(3333);
