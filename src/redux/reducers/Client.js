import { GET_CLIENT, GET_CLIENT_SUCCESS, GET_CLIENT_FAILURE } from '../constants/Client';

const initState = {
  loading: false,
  data: [], 
  error: null,
};

const clientReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CLIENT:
      return {
        ...state,
        loading: true,
      };
    case GET_CLIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_CLIENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default clientReducer;
