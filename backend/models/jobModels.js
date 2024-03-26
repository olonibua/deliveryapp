// models/Job.js

const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    // user_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    jobDescription: {
      type: String,
      required: [true, "please add the pickupLocation"],
    },
    pickupLocation: {
      type: String,
      required: [true, "please add the pickupLocation"],
    },
    deliveryLocation: {
      type: String,
      required: [true, "please add the deliveryLocation"],
    },
    priority: {
      type: String,
      required: [true, "please add the priority"],
    },

    // Define other properties of the job entity here
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
