// components/JobList.js

import axios from "axios";
import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { useGetJobs } from "./hook/useGetJobs";
import { useDispatch, useSelector } from "react-redux";
import { saveJobs } from "../../redux/actions";
import { useHandleDelete } from "./hook/useHandleDelete";

const JobList = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.helpers.jobs);
  const { fetchJobs } = useGetJobs();
  const { deleteJob } = useHandleDelete();

  const getFetchJobs = async () => {
    const jobs = await fetchJobs();
    dispatch(saveJobs(jobs));
  };

  useEffect(() => {
    getFetchJobs();
  }, [jobs]);

  const getBackgroundColor = (priority) => {
    if (priority === "high") {
      return "#900000";
    } else if (priority === "medium") {
      return "yellow"; // Change to your desired color
    } else {
      return "green";
    }
  };

  return (
    <div>
      <ul className="p-5">
        <h2 className="my-2 font-medium">Jobs</h2>
        <ul className="grid grid-cols-4 border-b pb-2 text-[11px] md:text-[14px] font-medium">
          <li>Job description</li>
          <li>Pickup Location</li>
          <li>Delivery Location</li>
          <li>Priority</li>
        </ul>
        {jobs.map((job) => (
          <li key={job._id} className="grid grid-cols-4">
            <p className="border-b md:p-2 text-[10px] md:text-[13px]">
              <span className="">{job.jobDescription}</span>
            </p>
            <p className="border-b md:p-2 text-[10px] md:text-[13px]">
              <span className="">{job.pickupLocation}</span>
            </p>
            <p className="border-b md:p-2 text-[10px] md:text-[13px]">
              <span className="">{job.deliveryLocation}</span>
            </p>
            <p className="border-b md:p-2 text-[10px] md:text-[13px] flex ">
              <button
                style={{
                  backgroundColor: getBackgroundColor(job.priority),
                }}
                className=" rounded-full h-5 md:h-6 p-[2px] w-10 items-center text-center align-middle text-white"
              >
                {job.priority}
              </button>
              <button
                onClick={() => deleteJob(job._id)}
                className="mx-4 md:mx-8 text-red-600 items-center text-center align-middle"
              >
                <MdDelete />
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
