// models/Driver.js

const mongoose = require("mongoose");

const driverSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  // Define other properties of the driver entity here
});

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
