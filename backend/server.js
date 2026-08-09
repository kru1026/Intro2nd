require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/mongoDB");
const PORT = process.env.PORT || 8080;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();