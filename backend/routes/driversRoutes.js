const express = require("express");
const router = express.Router();
const {
  createDriver,
  getAllDrivers,
  updateDriver,
  deleteDriver,
} = require("../controllers/driversControllers");

router.route("/").get(getAllDrivers);

router.route("/").post(createDriver);
router.route("/:id").put(updateDriver);
router.route("/:id").delete(deleteDriver);

module.exports = router;
