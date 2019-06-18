import React, { useState, useContext } from "react";
import GithubContext from "../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { getRepos, clearRepos } = githubContext;
  const [username, setUsername] = useState("");

  const onChange = e => setUsername(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getRepos(username);
  };

  const clearForm = e => {
    setUsername("");
    clearRepos();
  };

  return (
    <div className="search">
      <form onSubmit={onSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Username..."
          value={username}
          onChange={onChange}
        />
        <button id="sumbit-btn" type="submit">
          Go Search
        </button>
        <button id="clear-btn" type="button" onClick={clearForm}>
          Clear all users
        </button>
      </form>
    </div>
  );
};

export default Search;
