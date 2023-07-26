import {pool} from "../db.js";

export const ping = async (req, res) => {
  const [result] = await pool.query('SELECT "hello worlds" AS result')
  res.json(result[0]);
}