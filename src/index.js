const express = require('express');
const dotenv = require("dotenv").config();
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")

const dbConnect = require("./config/dbConnect");
dbConnect();

const app = express();

//Middlewares
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

//Starting Server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server is running at port, ${PORT}`)
})