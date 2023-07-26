import {pool} from "../db.js";


export const getEmployees = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employees");
  res.json(rows);
};

export const getEmployeeById = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employees WHERE id = ?", [req.params.id]);

  if (rows.length === 0) {
    return res.status(404).json({message: "Empleado no encontrado"});
  }

  res.json(rows[0]);
};

export const createEmployees = async (req, res) => {
  const {name, salary} = req.body;
  const [rows] = await pool.query("INSERT INTO employees (name, salary) VALUES (?, ?)", [name, salary]);
  res.send({
    id: rows.insertId,
    name,
    salary
  })
};

export const updateEmployees = (req, res) => res.send("Editando los empleados");

export const deleteEmployees = (req, res) => res.send("Eliminando los empleados");