import {
  CREATE_LOCATION,
  RETRIEVE_LOCATIONS,
  DELETE_LOCATION,
  //DELETE_ALL_LOCATION,
  UPDATE_LOCATION,
} from "./types";

import locationService from "../../../services/locationService";

export const createLocation = (data) => async (dispatch) => {
  try {
    const res = await locationService.create(data);

    dispatch({
      type: CREATE_LOCATION,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveLocations = () => async (dispatch) => {
  try {
    const res = await locationService.getAll();

    dispatch({
      type: RETRIEVE_LOCATIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const getLocation = (user_id) => async (dispatch) => {
  try {
    const res = await locationService.get(user_id);

    dispatch({
      type: RETRIEVE_LOCATIONS,
      payload: res.data.admin,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateLocation = (id, data) => async (dispatch) => {
  try {
    const res = await locationService.update(id, data);

    dispatch({
      type: UPDATE_LOCATION,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deletedLocation = (id) => async (dispatch) => {
  try {
    await locationService.delete(id);

    dispatch({
      type: DELETE_LOCATION,
      payload: { id },
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

// export const deleteAllLocations = () => async (dispatch) => {
//     try {
//         const res = await locationService.deleteAll();

//         dispatch({
//             type: DELETE_ALL_LOCATION,
//             payload: res.data,
//         });

//         return Promise.resolve(res.data);
//     } catch (err) {
//         return Promise.reject(err);
//     }
// };

// export const findAdminByName = (name) => async (dispatch) => {
//     try {
//         const res = await locationService.findByTitle(name);

//         dispatch({
//             type: RETRIEVE_LOCATION,
//             payload: res.data,
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };
