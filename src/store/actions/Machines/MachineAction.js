import {
  CREATE_MACHINE,
  RETRIEVE_MACHINES,
  DELETE_MACHINE,
  DELETE_ALL_MACHINES,
  UPDATE_MACHINE,
} from "./types";

import MachineDataService from "../../../services/machineService";

export const createMachine = (machineData) => async (dispatch) => {
  // try {
  const res = await MachineDataService.create(machineData);

  dispatch({
    type: CREATE_MACHINE,
    payload: res.data,
  });

  //   return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const retrieveMachines = (id) => async (dispatch) => {
  // try {
  const res = await MachineDataService.get(id);

  dispatch({
    type: RETRIEVE_MACHINES,
    payload: res.data.machine,
  });
  // } catch (err) {
  //   console.log(err);
  // }
};

export const updateMachine = (id, data) => async (dispatch) => {
  // try {
  const res = await MachineDataService.update(id, data);

  dispatch({
    type: UPDATE_MACHINE,
    payload: res.data,
  });

  //   return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const deleteMachine = (id) => async (dispatch) => {
  // try {
  await MachineDataService.delete(id);

  dispatch({
    type: DELETE_MACHINE,
    payload: { id },
  });
  // } catch (err) {
  //   console.log(err);
  // }
};

export const deleteAllMachines = () => async (dispatch) => {
  // try {
  const res = await MachineDataService.deleteAll();

  dispatch({
    type: DELETE_ALL_MACHINES,
    payload: res.data,
  });

  //   return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const findMachineByName = (name) => async (dispatch) => {
  // try {
  const res = await MachineDataService.findByTitle(name);

  dispatch({
    type: RETRIEVE_MACHINES,
    payload: res.data,
  });
  // } catch (err) {
  //   console.log(err);
  // }
};
