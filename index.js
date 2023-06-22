import express from "express";

const app = express();

app.get('/', (req, res) => res.send("Bienvenido a mi API"));

app.get("/employees", (req, res) => res.send("Obteniendo los empleados"));
app.post("/employees", (req, res) => res.send("Creando los empleados"));
app.put("/employees", (req, res) => res.send("Editando los empleados"));
app.delete("/employees", (req, res) => res.send("Eliminando los empleados"));

app.listen(3000);

console.log("esta ejecutando en el puerto 3000")