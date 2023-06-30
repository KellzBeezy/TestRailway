import {
  CREATE_CONTRACT,
  RETRIEVE_CONTRACTS,
  DELETE_CONTRACT,
  DELETE_ALL_CONTRACTS,
  UPDATE_CONTRACT,
} from "../actions/Contracts/types";

const initialState = [];

function contractsReducer(contracts = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_CONTRACT:
      return [...contracts, payload];

    case RETRIEVE_CONTRACTS:
      return payload;

    case UPDATE_CONTRACT:
      return contracts.map((contract) => {
        if (contract.id === payload.id) {
          return {
            ...contract,
            ...payload,
          };
        } else {
          return contract;
        }
      });

    case DELETE_CONTRACT:
      return contracts.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_CONTRACTS:
      return [];

    default:
      return contracts;
  }
}

export default contractsReducer;
