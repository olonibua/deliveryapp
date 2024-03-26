import { DELETE_JOB, GET_JOBS } from "./const";

const initialState = {
  jobs: [],
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case DELETE_JOB:
      const { jobId } = action.payload;
      // Implement your logic to remove the service with the specified ID
      const updatedJobs = state.jobs.filter((job) => job._id !== jobId);
      return {
        ...state,
        jobs: updatedJobs,
      };

    // Add other cases as needed for different actions

    default:
      return state;
  }
};
