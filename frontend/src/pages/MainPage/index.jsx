import React from "react";

import Nav from "./Nav";
import Search from "./Search";
import Repositories from "./Repositories";

import "./styles.css";

const MainPage = () => {
  const handleLogout = () => {
    console.log("logout");
  };

  const handleSearch = (query) => {
    console.log("query", query);
  };

  const handleDeleteRepo = (repository) => {
    console.log("delete repo", repository);
  };

  const handleNewRepo = (url) => {
    console.log("new repo", url);
  };

  return (
    <div id="main">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <Repositories
        repositories={[]}
        onDeleteRepo={handleDeleteRepo}
        onNewRepo={handleNewRepo}
      />
    </div>
  );
};

export default MainPage;
