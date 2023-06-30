import {
  CREATE_REQUEST,
  RETRIEVE_REQUESTS,
  DELETE_REQUEST,
  DELETE_ALL_REQUESTS,
  UPDATE_REQUESTS,
} from "./types";

import RequestDataService from "../../../services/requestService";

export const createRequest = (data) => async (dispatch) => {
  // try {
  const res = await RequestDataService.create(data);

  dispatch({
    type: CREATE_REQUEST,
    payload: res.data,
  });

  //   return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const retrieveRequests = (company_id) => async (dispatch) => {
  // try {
  const res = await RequestDataService.getAll();

  dispatch({
    type: RETRIEVE_REQUESTS,
    payload: res.data.Requests,
  });
  // } catch (err) {
  //   console.log(err);
  // }
};

export const updateRequest = (id, data) => async (dispatch) => {
  //try {
  //const res =
  await RequestDataService.update(id, data);

  dispatch({
    type: UPDATE_REQUESTS,
    payload: data,
  });

  //return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const deletedRequest = (id) => async (dispatch) => {
  //try {
  await RequestDataService.delete(id);

  dispatch({
    type: DELETE_REQUEST,
    payload: { id: id },
  });
  // } catch (err) {
  //   console.log(err);
  // }
};

export const deleteAllRequests = () => async (dispatch) => {
  //try {
  const res = await RequestDataService.deleteAll();

  dispatch({
    type: DELETE_ALL_REQUESTS,
    payload: res.data,
  });

  //   return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const findRequestByName = (name) => async (dispatch) => {
  try {
    const res = await RequestDataService.findByTitle(name);

    dispatch({
      type: RETRIEVE_REQUESTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
