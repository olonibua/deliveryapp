// controllers/JobController.js
const asyncHandler = require("express-async-handler");

const Job = require("../models/jobModels");

const getAllJobs = async (req, res) => {
  const jobs = await Job.find();
  res.status(200).json(jobs);
  // await Job.find()
  //   .then((jobs) => res.status(200).json(jobs))
  //   .catch((error) => res.status(500).json({ error: error.message }));
};

const createJob = asyncHandler(async (req, res) => {
  console.log("request body is ", req.body);
  const { jobDescription, pickupLocation, deliveryLocation, priority } =
    req.body;
  if (!jobDescription || !pickupLocation || !deliveryLocation || !priority) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const job = await Job.create({
    jobDescription,
    pickupLocation,
    deliveryLocation,
    priority,
    // user_id: req.user.id,
  });
  res.status(201).json(job);
});

const getJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    res.status(404);
    throw new Error("Job not found");
  }
  res.status(200).json(job);
});

const updateJob = asyncHandler(async (req, res) => {
  const job = Job.findById(req.params.id);
  if (!job) {
    res.status(400);
    throw new Error("Job not found");
  }

  const updateJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateJob);
});

const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    res.status(400);
    throw new Error("Job not found");
  }
  const deleteJob = await Job.findByIdAndDelete(req.params.id);
  res.status(200).json(`Job deleted, ${deleteJob._id}`);
});

module.exports = {
  createJob,
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
};
