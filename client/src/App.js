import React from "react";

import GithubState from "./context/github/GithubState";
import Header from "./components/Header";
import FinderContanier from "./components/FinderContanier";
import "./index.css";

function App() {
  return (
    <div className="App">
      <GithubState>
        <Header />
        <FinderContanier />
      </GithubState>
    </div>
  );
}

export default App;
