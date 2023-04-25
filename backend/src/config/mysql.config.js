import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

// create a queue 
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimite: process.env.DB_CONNECTION_LIMIT 
});

export default pool;
