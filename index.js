const express = require("express");
const { connection } = require("./db");
const interviewRouter = require("./routes/interviewRouter");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(require("cors")());
app.use("/interview", interviewRouter);
app.get("/", (req, res) => {
  res.setHeader("content-type", "text/html");
  res.send("<h1>Welcome to Master base Interview</h1>");
});

async function startServer() {
  try {
    await connection;
    console.log("Connected to the Database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the Database:", error);
  }
}

startServer();
