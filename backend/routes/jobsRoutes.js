const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobControllers");

router.route("/").get(getAllJobs);

router.route("/").post(createJob);

router.route("/:id").get(getJob);

router.route("/:id").put(updateJob);

router.route("/:id").delete(deleteJob);

module.exports = router;
