import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "gsmt",
  password: "mypassword",
  port: 5432,
});

export default pool;