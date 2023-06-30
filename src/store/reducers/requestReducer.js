import {
  CREATE_REQUEST,
  RETRIEVE_REQUESTS,
  DELETE_REQUEST,
  DELETE_ALL_REQUESTS,
  UPDATE_REQUESTS,
} from "../actions/Requests/types";

const initialState = [];

function requestReducer(requests = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_REQUEST:
      return [...requests, payload];

    case RETRIEVE_REQUESTS:
      return payload;

    case UPDATE_REQUESTS:
      return requests.map((job) => {
        if (job.id === payload.id) {
          return {
            ...job,
            ...payload,
          };
        } else {
          return job;
        }
      });
    //id !== payload.id
    case DELETE_REQUEST:
      return requests.filter(({ id }) => id.toString() !== payload.id);

    case DELETE_ALL_REQUESTS:
      return [];

    default:
      return requests;
  }
}

export default requestReducer;
