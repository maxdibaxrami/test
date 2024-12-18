import { GET_CLIENT, GET_CLIENT_SUCCESS, GET_CLIENT_FAILURE} from '../constants/Client'

export const getClient = () => {
  console.log("3333");

  return {
    type: GET_CLIENT,
  };
};

export const getClientSuccess = (data) => {
  return {
    type: GET_CLIENT_SUCCESS,
    payload: data,
  };
};

export const getClientFailure = (error) => {
  return {
    type: GET_CLIENT_FAILURE,
    error,
  };
};
