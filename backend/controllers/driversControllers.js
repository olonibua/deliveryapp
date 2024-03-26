// controllers/DriverController.js

const expressAsyncHandler = require("express-async-handler");
const Driver = require("../models/driverModels");

const createDriver = expressAsyncHandler(async (req, res) => {
  const { firstname, lastname } = req.body;
  if (!firstname || !lastname) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const driver = await Driver.create({
    firstname,
    lastname,
  });
  res.status(200).json(driver);
});

const getAllDrivers = expressAsyncHandler(async (req, res) => {
  const drivers = await Driver.find();
  res.status(200).json(drivers);
});

const updateDriver = expressAsyncHandler(async (req, res) => {
  const driver = await Driver.findById(req.params.id);
  if (!driver) {
    res.status(400);
    throw new Error("Driver not found");
  }
  const updateDriver = await Driver.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateDriver);
});

const deleteDriver = expressAsyncHandler(async (req, res) => {
  const driver = await Driver.findById(req.params.id);
  if (!driver) {
    res.status(400);
    throw new Error("Driver not found!");
  }

  const deleteDriver = await Driver.findByIdAndDelete(req.params.id);
  res.status(200).json(deleteDriver);
});

module.exports = {
  createDriver,
  getAllDrivers,
  updateDriver,
  deleteDriver,
};
