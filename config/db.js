import mysql from "mysql2/promise";

const db = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "simple_crud",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

try {
    const connection = await db.getConnection();
    console.log("MySQL connected successfully");
    connection.release();
} catch (error) {
    console.error("MySQL connection failed:", error.message);
}

export default db;