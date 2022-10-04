import React from "react";

import "./styles.css";

const MainPage = () => {
  const handleLogout = () => {
    console.log("logout");
  };

  const handleSearch = (query) => {
    console.log("query", query);
  };

  const handleClear = () => {
    console.log("clear");
  };

  const handleDeleteRepo = () => {
    console.log("delete repo");
  }

  const handleAddRepo = () => {
    console.log("add repo")
  }

  return (
    <div id="main">
      <div className="nav">
        <h1 className="logo">SisRepo</h1>
        <button onClick={handleLogout}>Sair</button>
      </div>

      <div className="search">
        <label htmlFor="query">Procurar</label>
        <input type="search" name="query" id="query" />
        <button onClick={handleClear}>Limpar</button>
        <button onClick={handleSearch}>Procurar</button>
      </div>

      <div className="repositories">
        <h2 className="title">Repositorios</h2>

        <ul className="list">
          <li className="item">
            <div className="info">
              <div className="owner">Facebook</div>
              <div className="name">react</div>
            </div>
            <button onClick={handleDeleteRepo}>X</button>
          </li>
        </ul>

        <div className="new">
            <label htmlFor="new-repo">Novo Repositorio:</label>
            <input type="url" name="new-repo" id="new-repo" />
            <button onClick={handleAddRepo}>Adicionar</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
