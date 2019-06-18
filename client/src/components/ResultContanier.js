import React, { useContext } from "react";
import GithubContext from "../context/github/githubContext";
import ResultItem from "./ResultItem";
import Loading from "./Loading";

const ResultContanier = () => {
  const githubContext = useContext(GithubContext);
  const { repos, loading, error } = githubContext;

  if (error) {
    return <div class="error">{error}</div>;
  }
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="repo-contanier">
        {repos.map(repo => (
          <ResultItem key={repo.id} repo={repo} />
        ))}
      </div>
    );
  }
};

export default ResultContanier;
