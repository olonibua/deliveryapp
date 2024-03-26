import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";

export const useHandleDelete = () => {
  const dispatch = useDispatch();

  const deleteJob = async (user) => {
    console.log(user, "user");

    const url = `http://localhost:5001/api/jobs/${user}`;
    try {
      const response = await axios.delete(url);
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        dispatch(deleteJob(user._id));
      } else {
        // Handle non-successful response, e.g., display an error message to the user
        console.error(`Delete request failed with status ${response.status}`);
      }
      // setJobs(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return { deleteJob };
};
