const express = require("express");
const app = express();
const db = require("./config/db");
const { messageController } = require("./Controllers/user.controller");
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Update this to match your frontend's URL
  })
);

// Mock API endpoints

app.listen(port, () => console.log(`Server is running on port ${port}`));

// Mock API endpoint to fetch data from a database
db.connectDb();

// connect to the route
// app.use("/api/user", require("./routes/user.routes"));
app.use("/api/v1", messageController);

app.get("/", (req, res) => {
  res.send("Welcome ");
});