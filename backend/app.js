const express = require("express");
const cors = require("cors");
const messageRoutes = require("./routes/messages");

const app = express();

app.use(cors({
  origin: (origin, callback) => {
    console.log("Incoming origin:", origin);

    const allowedOrigins = [
      "http://localhost:3000",
      "https://intro2nd.vercel.app"
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked: ${origin}`));
    }
  }
}));

app.use(express.json());

app.use("/api/messages", messageRoutes);

module.exports = app;