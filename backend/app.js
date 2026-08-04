const express = require("express");
const cors = require("cors");
const messageRoutes = require("./routes/messages");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running");
});

app.use("/api/messages", messageRoutes);

module.exports = app;