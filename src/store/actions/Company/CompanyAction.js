import {
  CREATE_COMPANY,
  RETRIEVE_COMPANIES,
  DELETE_COMPANY,
  //  DELETE_ALL_COMPANIES,
  UPDATE_COMPANY,
} from "./types";

import companyService from "../../../services/companyService";

export const createCompany = (data) => async (dispatch) => {
  const res = await companyService.create(data);

  dispatch({
    type: CREATE_COMPANY,
    payload: res.data,
  });
};

export const retrieveCompany = (id) => async (dispatch) => {
  try {
    const res = await companyService.get(id);

    dispatch({
      type: RETRIEVE_COMPANIES,
      payload: res.data.company,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateCompany = (id, data) => async (dispatch) => {
  try {
    const res = await companyService.update(id, data);

    dispatch({
      type: UPDATE_COMPANY,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deletedCompany = (id) => async (dispatch) => {
  try {
    await companyService.delete(id);

    dispatch({
      type: DELETE_COMPANY,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const findCompanyByName = (email) => async (dispatch) => {
  alert("in action", email);
  const res = await companyService.findByName(email);

  dispatch({
    type: RETRIEVE_COMPANIES,
    payload: res.data,
  });
};

// export const deleteAllCompanies = () => async (dispatch) => {
//     try {
//         const res = await companyService.deleteAll();

//         dispatch({
//             type: DELETE_ALL_COMPANIES,
//             payload: res.data,
//         });

//         return Promise.resolve(res.data);
//     } catch (err) {
//         return Promise.reject(err);
//     }
// };
