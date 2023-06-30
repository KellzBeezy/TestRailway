import {
  CREATE_DRIVER,
  RETRIEVE_DRIVERS,
  DELETE_DRIVER,
  DELETE_ALL_DRIVERS,
  UPDATE_DRIVER,
} from "./types";

import DriverDataService from "../../../services/driverService";

export const createDriver = (data) => async (dispatch) => {
  // try {
  const res = await DriverDataService.create(data);

  dispatch({
    type: CREATE_DRIVER,
    payload: res.data,
  });

  //   return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const retrieveDrivers = (company_id) => async (dispatch) => {
  // try {
  const res = await DriverDataService.get(company_id);

  dispatch({
    type: RETRIEVE_DRIVERS,
    payload: res.data.driver,
  });
  // } catch (err) {
  //   console.log(err);
  // }
};

export const updateDriver = (id, data) => async (dispatch) => {
  //try {
  const res = await DriverDataService.update(id, data);

  dispatch({
    type: UPDATE_DRIVER,
    payload: res.data,
  });

  //return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const deletedDriver = (id) => async (dispatch) => {
  //try {
  await DriverDataService.delete(id);

  dispatch({
    type: DELETE_DRIVER,
    payload: { id: id },
  });
  // } catch (err) {
  //   console.log(err);
  // }
};

export const deleteAllDrivers = () => async (dispatch) => {
  //try {
  const res = await DriverDataService.deleteAll();

  dispatch({
    type: DELETE_ALL_DRIVERS,
    payload: res.data,
  });

  //   return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const findDriverByName = (name) => async (dispatch) => {
  try {
    const res = await DriverDataService.findByTitle(name);

    dispatch({
      type: RETRIEVE_DRIVERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
