import express from "express";
import {pool} from "./db.js";

const app = express();

app.get('/', (req, res) => res.send("Bienvenido a mi API"));

app.get("/ping", async (req, res) => {
  const [result] = await pool.query('SELECT "hello worlds" AS result')
  res.json(result[0]);
});

app.get("/employees", (req, res) => res.send("Obteniendo los empleados"));
app.post("/employees", (req, res) => res.send("Creando los empleados"));
app.put("/employees", (req, res) => res.send("Editando los empleados"));
app.delete("/employees", (req, res) => res.send("Eliminando los empleados"));

app.listen(3000);

console.log("esta ejecutando en el puerto 3000")