import express from "express";

import {
    getUsers,
    getUser,
    addUser,
    editUser,
    removeUser
} from "../controllers/userController.js";

import upload from "../utils/upload.js";


const router = express.Router();


router.get("/test", function (req, res) {
    //http://localhost:4000/api/users/test
    res.send("server is running")
});


router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", upload.single("image"), addUser);

router.put("/:id", upload.single("image"), editUser);

router.delete("/:id", removeUser);


export default router;