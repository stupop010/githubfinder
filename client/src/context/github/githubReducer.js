import {
  SET_LOADING,
  REPOS_FECTHED,
  REPOS_CLEARED,
  GET_REPOS_ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case REPOS_FECTHED:
      return {
        ...state,
        repos: action.payload,
        loading: false,
        error: null
      };
    case REPOS_CLEARED:
      return {
        ...state,
        repos: [],
        loading: false,
        error: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_REPOS_ERROR:
      return {
        ...state,
        repos: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
