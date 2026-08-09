const express = require("express");
const messageRoutes = require("./routes/messages");

const app = express();

app.use(express.json());

app.use("/api/messages", messageRoutes);

module.exports = app;