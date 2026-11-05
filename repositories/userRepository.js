import db from "../config/db.js";
import User from "../models/User.js";


export const getAllUsers = async () => {

    const [rows] = await db.query(
        "SELECT id, name, email, image FROM users"
    );

    return rows.map(row => {

        return new User(
            row.id,
            row.name,
            row.email,
            row.image
        );

    });

};


export const getUserById = async (id) => {

    const [rows] = await db.query(
        "SELECT id, name, email, image FROM users WHERE id = ?",
        [id]
    );

    if (rows.length === 0) {

        return null;

    }

    const row = rows[0];

    return new User(
        row.id,
        row.name,
        row.email,
        row.image
    );

};


export const createUser = async (name, email, image) => {

    const [result] = await db.query(
        "INSERT INTO users (name, email, image) VALUES (?, ?, ?)",
        [name, email, image]
    );

    return new User(
        result.insertId,
        name,
        email,
        image
    );

};


export const updateUser = async (id, name, email, image) => {

    const [result] = await db.query(
        "UPDATE users SET name = ?, email = ?, image = ? WHERE id = ?",
        [name, email, image, id]
    );

    if (result.affectedRows === 0) {

        return null;

    }

    return new User(
        id,
        name,
        email,
        image
    );

};


export const deleteUser = async (id) => {

    const [result] = await db.query(
        "DELETE FROM users WHERE id = ?",
        [id]
    );

    return result.affectedRows > 0;

};