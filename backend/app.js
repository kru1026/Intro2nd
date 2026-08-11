const express = require("express");
const messageRoutes = require("./routes/messages");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

app.get("/healthCheck", (req, res) => {
  res.json({
    status: "ok",
    origin: req.headers.origin
  });
});

app.use("/api/messages", messageRoutes);

module.exports = app;