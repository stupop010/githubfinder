import React from "react";

const ResultItem = ({ repo }) => {
  return (
    <div className="repo">
      <a href={repo.html_url}>{repo.name}</a>
      <ul>
        <li>Stars: {repo.stargazers_count}</li>
        <li>Forks: {repo.forks}</li>
        <li>Watchers: {repo.watchers}</li>
      </ul>
    </div>
  );
};

export default ResultItem;
