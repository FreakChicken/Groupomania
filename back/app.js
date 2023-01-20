const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

const app = express();

mongoose
    .connect(
        "mongodb+srv://" +
            process.env.DB_USERNAME +
            ":" +
            process.env.DB_PASSWORD +
            "@" +
            process.env.DB_HOST +
            "?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

module.exports = app;
