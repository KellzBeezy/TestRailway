import {
  CREATE_DRIVER,
  RETRIEVE_DRIVERS,
  DELETE_DRIVER,
  DELETE_ALL_DRIVERS,
  UPDATE_DRIVER,
} from "../actions/Drivers/types";

const initialState = [];

function driverReducer(drivers = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_DRIVER:
      return [...drivers, payload];

    case RETRIEVE_DRIVERS:
      return payload;

    case UPDATE_DRIVER:
      return drivers.map((driver) => {
        if (driver.id === payload.id) {
          return {
            ...driver,
            ...payload,
          };
        } else {
          return driver;
        }
      });
    //id !== payload.id
    case DELETE_DRIVER:
      return drivers.filter(({ id }) => id.toString() !== payload.id);

    case DELETE_ALL_DRIVERS:
      return [];

    default:
      return drivers;
  }
}

export default driverReducer;
