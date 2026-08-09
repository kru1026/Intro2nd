require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/mongoDB");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://intro2nd.vercel.app"
  ]
}));

app.get("/healthCheck", (req, res) => {
    res.status(200).json({ name: 'John Doe' })
});

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();