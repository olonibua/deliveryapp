import { DELETE_JOB, GET_JOBS } from "./const";

export const deleteJob = (jobId) => ({
  type: DELETE_JOB,
  payload: { jobId },
});

export const saveJobs = (jobs) => ({
  type: GET_JOBS,
  payload: jobs,
});
