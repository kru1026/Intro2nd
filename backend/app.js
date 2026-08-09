const express = require("express");
const cors = require("cors");
const messageRoutes = require("./routes/messages");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ name: 'John Doe' })
});

app.get("/healthCheck", (req, res) => {
    res.status(200).json({ name: 'Health Check' })
});

app.use("/api/messages", messageRoutes);

module.exports = app;