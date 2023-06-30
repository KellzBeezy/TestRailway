import {
  CREATE_ADMIN,
  // DELETE_ALL_ADMINS,
  DELETE_ADMIN,
  RETRIEVE_ADMINS,
  UPDATE_ADMIN,
} from "../actions/Admins/types";

const initialState = {};

function adminReducer(admins = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ADMIN:
      return [...admins, payload];

    case RETRIEVE_ADMINS:
      return payload;

    case UPDATE_ADMIN:
      return admins.map((admin) => {
        if (admins.id === payload.id) {
          return {
            ...admin,
            ...payload,
          };
        } else {
          return admin;
        }
      });

    case DELETE_ADMIN:
      return admins.filter(({ id }) => id.toString() !== payload.id);

    // case DELETE_ALL_ADMINS:
    //     return [];

    default:
      return admins;
  }
}

export default adminReducer;
