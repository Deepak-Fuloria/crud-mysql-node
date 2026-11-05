import * as userRepository from "../repositories/userRepository.js";


export const getUsers = async () => {

    const users = await userRepository.getAllUsers();

    return users;

};


export const getUser = async (id) => {

    const user = await userRepository.getUserById(id);

    return user;

};


export const addUser = async (name, email, image) => {

    const user = await userRepository.createUser(
        name,
        email,
        image
    );

    return user;

};


export const editUser = async (id, name, email, image) => {

    const user = await userRepository.updateUser(
        id,
        name,
        email,
        image
    );

    return user;

};


export const removeUser = async (id) => {

    const result = await userRepository.deleteUser(id);

    return result;

};