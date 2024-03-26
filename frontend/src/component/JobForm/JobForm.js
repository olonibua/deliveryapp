// components/JobForm.js

import React, { useState } from "react";
import axios from "axios";

const JobForm = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5001/api/jobs/";
      await axios.post(url, {
        jobDescription,
        pickupLocation,
        deliveryLocation,
        priority,
      });
      setJobDescription("");
      setPickupLocation("");
      setDeliveryLocation("");
      setPriority("");
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  return (
    <div className="m-5 p-5 border">
      <h2 className="pb-2">Create Job</h2>
      <div className="grid">
        <form onSubmit={handleSubmit} className="grid md:grid-flow-col">
          <div className="grid mx-1 my-1">
            <p className="text-[12px] md:text-[15px] justify-start">
              Job description
            </p>
            <input
              type="text"
              placeholder="Job description"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
              className="border p-[3px] md:p-1 text-[11px]"
            />
          </div>
          <div className="grid mx-1 my-1">
            <p className="text-[12px] md:text-[15px] justify-start">
              Pickup Location
            </p>
            <input
              type="text"
              placeholder="Pickup Location"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              required
              className="border p-[3px] md:p-1 text-[11px]"
            />
          </div>
          <div className="grid mx-1 my-1">
            <p className="text-[12px] md:text-[15px] justify-start">
              Delivery Location
            </p>
            <input
              type="text"
              placeholder="Delivery Location"
              value={deliveryLocation}
              onChange={(e) => setDeliveryLocation(e.target.value)}
              required
              className="border p-[3px] md:p-1 text-[11px]"
            />
          </div>
          <div className="grid mx-1 my-1">
            <p className="text-[12px] md:text-[15px] justify-start">Priority</p>
            <input
              type="text"
              placeholder="high/medium/low"
              value={priority}
              onChange={(e) => setPriority(e.target.value.toLowerCase())}
              required
              className="border p-[3px] md:p-1 text-[11px]"
            />
          </div>

          <button
            className="my-3 text-[13px] md:text-[15px] font-semibold text-white bg-black md:mx-4 md:p-1"
            type="submit"
          >
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
