import { Router } from "express";

const router = Router();

router.get("/employees", (req, res) => res.send("Obteniendo los empleados"));
router.post("/employees", (req, res) => res.send("Creando los empleados"));
router.put("/employees", (req, res) => res.send("Editando los empleados"));
router.delete("/employees", (req, res) => res.send("Eliminando los empleados"));

export default router;