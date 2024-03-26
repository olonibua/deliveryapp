import axios from "axios";
import React from "react";

export const useGetJobs = () => {
  const fetchJobs = async () => {
    try {
      const url = "http://localhost:5001/api/jobs/";
      const response = await axios.get(url);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return { fetchJobs };
};
