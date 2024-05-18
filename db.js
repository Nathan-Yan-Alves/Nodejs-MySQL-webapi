const { createPool } = require('mysql2/promise');
require('dotenv').config();

const db = createPool({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function selectStudents() { 
    const res = await db.query("SELECT * FROM alunos")
    return res;
}

module.exports = { selectStudents };