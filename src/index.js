import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();




app.use(indexRoutes);
app.use(employeesRoutes);

app.listen(3000);

console.log("esta ejecutando en el puerto 3000")