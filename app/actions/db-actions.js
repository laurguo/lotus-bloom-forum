"use server";

import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function getPosts(site) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM posts WHERE site = $1 ORDER BY created_at DESC",
      [site],
    );
    client.release();
    return result.rows;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
