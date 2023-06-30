import {
  CREATE_LOCATION,
  // DELETE_ALL_LOCATIONS,
  DELETE_LOCATION,
  RETRIEVE_LOCATIONS,
  UPDATE_LOCATION,
} from "../actions/Locations/types";

const initialState = [];

function locationReducer(locations = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_LOCATION:
      return [...locations, payload];

    case RETRIEVE_LOCATIONS:
      return payload;

    case UPDATE_LOCATION:
      return locations.map((location) => {
        if (location.id === payload.id) {
          return {
            ...location,
            ...payload,
          };
        } else {
          return location;
        }
      });

    case DELETE_LOCATION:
      return locations.filter(({ id }) => id.toString() !== payload.id);

    // case DELETE_ALL_LOCATIONS:
    //     return [];

    default:
      return locations;
  }
}

export default locationReducer;
