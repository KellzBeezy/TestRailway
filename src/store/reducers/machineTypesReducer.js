import {
  CREATE_MACHINE_TYPE,
  RETRIEVE_MACHINE_TYPES,
  DELETE_MACHINE_TYPE,
  DELETE_ALL_MACHINE_TYPES,
  UPDATE_MACHINE_TYPE,
} from "../actions/MachineTypes/types";

const initialState = [];

function machineTypeReducer(machineTypes = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_MACHINE_TYPE:
      return [...machineTypes, payload];

    case RETRIEVE_MACHINE_TYPES:
      return payload;

    case UPDATE_MACHINE_TYPE:
      return machineTypes.map((machineType) => {
        if (machineType.id === payload.id) {
          return {
            ...machineTypes,
            ...payload,
          };
        } else {
          return machineTypes;
        }
      });

    case DELETE_MACHINE_TYPE:
      return machineTypes.filter(({ id }) => id.toString() !== payload.id);

    case DELETE_ALL_MACHINE_TYPES:
      return [];

    default:
      return machineTypes;
  }
}

export default machineTypeReducer;
