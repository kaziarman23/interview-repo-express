const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const HomeRoute = require("./Routers/HomeRoute.js");
const connectDB = require("./Configs/Database.js");

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Connecting Database
connectDB();

app.get("/", HomeRoute);

app.listen(port, () => {
  console.log(`backend server is runing on : ${port}`);
});
