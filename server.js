const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/prompts", require("./routes/promptRoutes"));
app.use("/api/images", require("./routes/imageRoutes"));

// connect DB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
