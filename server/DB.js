// Here we will contain logic to communicate with the PostgreSQL database
const Pool = require("pg").Pool;
// import { Pool } from 'pg';

const pool = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "ConvertThatClimb"
});

module.exports = pool;