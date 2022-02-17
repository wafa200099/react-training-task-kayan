const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "wafa3",
  password: "123w",
  port: 5432,
});

//async function poolDemo() {
// const pool = new Pool(credentials);
//const now = await pool.query("SELECT NOW()");
//await pool.end();

//return now;
//}

module.exports = pool;
