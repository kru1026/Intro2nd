const express = require("express");
const messageRoutes = require("./routes/messages");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://intro2nd.vercel.app"
  ]
}));

app.get("/healthCheck", (req, res) => {
    res.status(200).json({ name: 'John Doe' })
});

app.use("/api/messages", messageRoutes);

module.exports = app;