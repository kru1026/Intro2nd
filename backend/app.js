const express = require("express");
const cors = require("cors");
const messageRoutes = require("./routes/messages");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/healthCheck", (req, res) => {
    res.status(200).json({ name: 'John Doe' })
});

app.use("/api/messages", messageRoutes);

module.exports = app;