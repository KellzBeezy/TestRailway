import {
  CREATE_COMPANY,
  // DELETE_ALL_COMPANIES,
  DELETE_COMPANY,
  RETRIEVE_COMPANIES,
  UPDATE_COMPANY,
} from "../actions/Company/types";

const initialState = {};

function companyReducer(companies = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_COMPANY:
      companies = payload;
      return companies;

    case RETRIEVE_COMPANIES:
      return payload;

    case UPDATE_COMPANY:
      return companies.map((company) => {
        if (company.id === payload.id) {
          return {
            ...company,
            ...payload,
          };
        } else {
          return company;
        }
      });

    case DELETE_COMPANY:
      return companies.filter(({ id }) => id !== payload.id);

    // case DELETE_ALL_COMPANIES:
    //     return [];

    default:
      return companies;
  }
}

export default companyReducer;
