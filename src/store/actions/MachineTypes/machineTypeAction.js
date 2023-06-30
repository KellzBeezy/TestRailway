import {
  CREATE_MACHINE_TYPE,
  RETRIEVE_MACHINE_TYPES,
  DELETE_MACHINE_TYPE,
  DELETE_ALL_MACHINE_TYPES,
  UPDATE_MACHINE_TYPE,
} from "./types";

import MachineTypeDataService from "../../../services/machineTypesService";

export const createMachineType = (machineData) => async (dispatch) => {
  // try {
  const res = await MachineTypeDataService.create(machineData);

  dispatch({
    type: CREATE_MACHINE_TYPE,
    payload: res.data,
  });

  //   return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const retrieveMachineTypes = (id) => async (dispatch) => {
  // try {
  const res = await MachineTypeDataService.getAll();

  dispatch({
    type: RETRIEVE_MACHINE_TYPES,
    payload: res.data.machineType,
  });
  // } catch (err) {
  //   console.log(err);
  // }
};

export const updateMachineType = (id, data) => async (dispatch) => {
  // try {
  const res = await MachineTypeDataService.update(id, data);

  dispatch({
    type: UPDATE_MACHINE_TYPE,
    payload: res.data,
  });

  //   return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const deleteMachineType = (id) => async (dispatch) => {
  // try {
  await MachineTypeDataService.delete(id);

  dispatch({
    type: DELETE_MACHINE_TYPE,
    payload: { id },
  });
  // } catch (err) {
  //   console.log(err);
  // }
};

export const deleteAllMachineTypes = () => async (dispatch) => {
  // try {
  const res = await MachineTypeDataService.deleteAll();

  dispatch({
    type: DELETE_ALL_MACHINE_TYPES,
    payload: res.data,
  });

  //   return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const findMachineTypeByName = (name) => async (dispatch) => {
  // try {
  const res = await MachineTypeDataService.findByTitle(name);

  dispatch({
    type: RETRIEVE_MACHINE_TYPES,
    payload: res.data,
  });
  // } catch (err) {
  //   console.log(err);
  // }
};
