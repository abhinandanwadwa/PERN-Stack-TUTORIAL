const Pool = require('pg').Pool;
const dotenv = require('dotenv').config();

const pool = new Pool({
    user: "postgres",
    password: process.env.postgres_password,
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;