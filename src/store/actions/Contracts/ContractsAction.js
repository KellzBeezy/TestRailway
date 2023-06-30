import {
  CREATE_CONTRACT,
  RETRIEVE_CONTRACTS,
  DELETE_CONTRACT,
  DELETE_ALL_CONTRACTS,
  UPDATE_CONTRACT,
} from "./types";

import ContractDataService from "../../../services/contractsService";

export const createContract = (details) => async (dispatch) => {
  try {
    const res = await ContractDataService.create({ details });

    dispatch({
      type: CREATE_CONTRACT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveContracts = (id) => async (dispatch) => {
  const res = await ContractDataService.getAll(id);

  dispatch({
    type: RETRIEVE_CONTRACTS,
    payload: res.data.contract,
  });
};

export const updateContract = (id, data) => async (dispatch) => {
  // try {
  const res = await ContractDataService.update(id, data);

  dispatch({
    type: UPDATE_CONTRACT,
    payload: res.data,
  });

  //   return Promise.resolve(res.data);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export const deletedContract = (id) => async (dispatch) => {
  await ContractDataService.delete(id);

  dispatch({
    type: DELETE_CONTRACT,
    payload: { id },
  });
};

export const deleteAllContracts = () => async (dispatch) => {
  try {
    const res = await ContractDataService.deleteAll();

    dispatch({
      type: DELETE_ALL_CONTRACTS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findContractByName = (name) => async (dispatch) => {
  try {
    const res = await ContractDataService.findByTitle(name);

    dispatch({
      type: RETRIEVE_CONTRACTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
