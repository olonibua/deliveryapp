// server.js

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const JobController = require("./controllers/jobControllers");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
// const DriverController = require("./controllers/driverController");

// Connect to MongoDB
connectDb();

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
