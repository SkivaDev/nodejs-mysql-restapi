import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routers.js";

const app = express();


app.use(express.json());

app.use(indexRoutes);
app.use('/api', employeesRoutes);

app.listen(3000);

console.log("esta ejecutando en el puerto 3000")