import { Router } from "express";
import { getEmployees, getEmployeeById, createEmployees, updateEmployees, deleteEmployees } from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeeById);
router.post("/employees", createEmployees);
router.put("/employees", updateEmployees);
router.delete("/employees/:id", deleteEmployees);

export default router;