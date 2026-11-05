import * as userService from "../services/userService.js";


export const getUsers = async (req, res, next) => {

    try {

        const users = await userService.getUsers();

        res.status(200).json({
            users
        });

    } catch (error) {

        next(error);

    }

};


export const getUser = async (req, res, next) => {

    try {

        const { id } = req.params;

        const user = await userService.getUser(id);

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        res.status(200).json({
            user
        });

    } catch (error) {

        next(error);

    }

};


export const addUser = async (req, res, next) => {

    try {

        const { name, email } = req.body;
        const image = req.file.filename;
        const user = await userService.addUser(
            name,
            email,
            image
        );

        res.status(201).json({
            message: "User created successfully",
            user
        });

    } catch (error) {

        next(error);

    }

};


export const editUser = async (req, res, next) => {

    try {

        const { id } = req.params;

        const { name, email, image } = req.body;

        const user = await userService.editUser(
            id,
            name,
            email,
            image
        );

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        res.status(200).json({
            message: "User updated successfully",
            user
        });

    } catch (error) {

        next(error);

    }

};


export const removeUser = async (req, res, next) => {

    try {

        const { id } = req.params;

        const result = await userService.removeUser(id);

        if (!result) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {

        next(error);

    }

};