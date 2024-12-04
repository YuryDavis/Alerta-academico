const express = require("express");
const conn = require("./db/conn");
const app = express();

const AlunosRoutes = require("./routes/AlunosRoutes");
const MensagensRoutes = require("./routes/MensagensRoutes");

// read body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(express.static("public"));

app.use("/api/alunos", AlunosRoutes);
app.use("/api/mensagens", MensagensRoutes);

app.listen(3000);
