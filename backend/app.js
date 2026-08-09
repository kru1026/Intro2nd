const express = require("express");
const cors = require("cors");
const messageRoutes = require("./routes/messages");

const app = express();

app.use(express.json());

app.use("/api/messages", messageRoutes);

module.exports = app;