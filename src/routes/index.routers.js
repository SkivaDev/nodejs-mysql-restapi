import { Router } from "express";
import {ping} from "../controllers/index.controller.js";

const router = Router();

router.get('/', (req, res) => res.send("Bienvenido a mi API"));

router.get("/ping", ping);

export default router;

