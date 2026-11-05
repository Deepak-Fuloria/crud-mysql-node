import "dotenv/config";

import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";


const app = express();


// Middlewares
app.use(cors());

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "app working fine"
    });
});


// Routes
app.use("/api/users", userRoutes);


// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});