import {
  CREATE_JOB,
  RETRIEVE_JOBS,
  DELETE_JOB,
  DELETE_ALL_JOBS,
  UPDATE_JOBS,
} from "./types";

import JobDataService from "../../../services/jobService";

export const createJob = (data) => async (dispatch) => {
  // try {
  const res = await JobDataService.create(data);

  dispatch({
    type: CREATE_JOB,
    payload: res.data,
  });

  //   return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const retrieveJobs = (company_id) => async (dispatch) => {
  // try {
  const res = await JobDataService.getAll();

  dispatch({
    type: RETRIEVE_JOBS,
    payload: res.data.jobs,
  });
  // } catch (err) {
  //   console.log(err);
  // }
};

export const updateJob = (id, data) => async (dispatch) => {
  //try {
  const res = await JobDataService.update(id, data);

  dispatch({
    type: UPDATE_JOBS,
    payload: res.data,
  });

  //return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const deletedJob = (id) => async (dispatch) => {
  //try {
  await JobDataService.delete(id);

  dispatch({
    type: DELETE_JOB,
    payload: { id: id },
  });
  // } catch (err) {
  //   console.log(err);
  // }
};

export const deleteAllJobs = () => async (dispatch) => {
  //try {
  const res = await JobDataService.deleteAll();

  dispatch({
    type: DELETE_ALL_JOBS,
    payload: res.data,
  });

  //   return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const findJobByName = (name) => async (dispatch) => {
  try {
    const res = await JobDataService.findByTitle(name);

    dispatch({
      type: RETRIEVE_JOBS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
