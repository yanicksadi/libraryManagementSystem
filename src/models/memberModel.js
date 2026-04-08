import pool from "../config/db.js";

export const getAllMembersService = async () => {
  const result = await pool.query("SELECT * FROM members");
  return result.rows;
};

export const getMemberByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM members where id = $1", [id]);
  return result.rows[0];  
};

export const createMemberService = async (name, email) => {
  const result = await pool.query("INSERT INTO members (name, email) VALUES ($1, $2) RETURNING * ", [name, email]);
  return result.rows[0]; 
};

export const updateMemberService = async (id, name, email) => {
  const result = await pool.query("UPDATE members SET name=$1, email=$2 WHERE id=$3 RETURNING *", [name, email, id]);
  return result.rows[0];
};

export const deleteMemberService = async (id) => {
  const result = await pool.query("DELETE FROM members WHERE id = $1 RETURNING *", [id]);
  return result.rows[0]
}