import React, { useReducer } from "react";
import axios from "axios";
import GithubReducer from "./githubReducer";
import GithubContext from "./githubContext";
import {
  SET_LOADING,
  REPOS_FECTHED,
  REPOS_CLEARED,
  GET_REPOS_ERROR
} from "../types";

const GithubState = props => {
  const initialState = {
    users: [],
    repos: [],
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  console.log(GithubState);

  const getRepos = async userName => {
    setLoading();

    try {
      const res = await axios.get(
        `https://api.github.com/users/${userName}/repos?per_page=100&sort=created:asc`
      );
      dispatch({ type: REPOS_FECTHED, payload: res.data });
    } catch (error) {
      dispatch({
        type: GET_REPOS_ERROR,
        payload: "Can not found any repos for this user"
      });
    }
  };

  const clearRepos = () => dispatch({ type: REPOS_CLEARED });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        setLoading,
        getRepos,
        clearRepos,
        error: state.error
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
