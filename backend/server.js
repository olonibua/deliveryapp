// server.js

const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
// const DriverController = require("./controllers/driverController");
const mongoose = require("mongoose");
// Connect to MongoDB
// connectDb();

mongoose
  .connect(process.env.CONNECTION_STRING, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB is Connected..");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());

// Job routes

app.use("/api/jobs", require("./routes/jobsRoutes"));

// Driver routes
app.use("/api/drivers", require("./routes/driversRoutes"));

// User routes
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
