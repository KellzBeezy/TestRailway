import {
  CREATE_ADMIN,
  RETRIEVE_ADMINS,
  DELETE_ADMIN,
  //DELETE_ALL_ADMINS,
  UPDATE_ADMIN,
} from "./types";

import adminService from "../../../services/adminService";

export const createAdmin = (data) => async (dispatch) => {
  try {
    const res = await adminService.create(data);

    dispatch({
      type: CREATE_ADMIN,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveAdmins = () => async (dispatch) => {
  try {
    const res = await adminService.getAll();

    dispatch({
      type: RETRIEVE_ADMINS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const getAdmin = (user_id) => async (dispatch) => {
  try {
    const res = await adminService.get(user_id);

    dispatch({
      type: RETRIEVE_ADMINS,
      payload: res.data.admin,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateAdmin = (id, data) => async (dispatch) => {
  try {
    const res = await adminService.update(id, data);

    dispatch({
      type: UPDATE_ADMIN,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deletedAdmin = (id) => async (dispatch) => {
  await adminService.delete(id);

  dispatch({
    type: DELETE_ADMIN,
    payload: { id },
  });
};

// export const deleteAllAdmins = () => async (dispatch) => {
//     try {
//         const res = await adminService.deleteAll();

//         dispatch({
//             type: DELETE_ALL_ADMINS,
//             payload: res.data,
//         });

//         return Promise.resolve(res.data);
//     } catch (err) {
//         return Promise.reject(err);
//     }
// };

// export const findAdminByName = (name) => async (dispatch) => {
//     try {
//         const res = await adminService.findByTitle(name);

//         dispatch({
//             type: RETRIEVE_ADMINS,
//             payload: res.data,
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };
