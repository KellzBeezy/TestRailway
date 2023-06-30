import {
  CREATE_USER,
  RETRIEVE_USERS,
  DELETE_USER,
  DELETE_ALL_USERS,
  UPDATE_USER,
} from "./types";

import UserDataService from "../../../services/usersService";

export const createUser = (userData) => async (dispatch) => {
  try {
    const res = await UserDataService.create(userData);

    dispatch({
      type: CREATE_USER,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveUsers = () => async (dispatch) => {
  try {
    const res = await UserDataService.getAll();

    dispatch({
      type: RETRIEVE_USERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (id, data) => async (dispatch) => {
  const res = await UserDataService.update(id, data);

  dispatch({
    type: UPDATE_USER,
    payload: res.data,
  });
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await UserDataService.delete(id);

    dispatch({
      type: DELETE_USER,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllUsers = () => async (dispatch) => {
  try {
    const res = await UserDataService.deleteAll();

    dispatch({
      type: DELETE_ALL_USERS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findUserByName = (name) => async (dispatch) => {
  try {
    const res = await UserDataService.findByTitle(name);

    dispatch({
      type: RETRIEVE_USERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
