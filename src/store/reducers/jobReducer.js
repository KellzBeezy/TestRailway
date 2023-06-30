import {
  CREATE_JOB,
  RETRIEVE_JOBS,
  DELETE_JOB,
  DELETE_ALL_JOBS,
  UPDATE_JOBS,
} from "../actions/Jobs/types";

const initialState = [];

function jobReducer(jobs = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_JOB:
      return [...jobs, payload];

    case RETRIEVE_JOBS:
      return payload;

    case UPDATE_JOBS:
      return jobs.map((job) => {
        if (job.id === payload.id) {
          return {
            ...job,
            ...payload,
          };
        } else {
          return job;
        }
      });
    //id !== payload.id
    case DELETE_JOB:
      return jobs.filter(({ id }) => id.toString() !== payload.id);

    case DELETE_ALL_JOBS:
      return [];

    default:
      return jobs;
  }
}

export default jobReducer;
