import React, { useState } from "react";

const Repositories = ({ repositories, onDeleteRepo, onNewRepo }) => {
  const [newRepo, setNewrepo] = useState("");

  const repoNameOwner = (repoName, action) => {
    return action === "owner" ? repoName.substring(0, repoName.indexOf('/')) : repoName.substring(repoName.indexOf('/')+1)
  };

  return (
    <div className="repositories">
      <h2 className="title">Repositorios</h2>

      <ul className="list">
        {repositories.map((respository) => (
          <li className="item" key={respository._id}>
            <div className="info">
              <div className="owner">{repoNameOwner(respository.name, "owner")}</div>
              <div className="name">{repoNameOwner(respository.name, "name")}</div>
            </div>
            <button onClick={() => onDeleteRepo(respository)}>X</button>
          </li>
        ))}
      </ul>

      <div className="new">
        <label htmlFor="new-repo">Novo Repositorio:</label>
        <input
          type="url"
          name="new-repo"
          id="new-repo"
          value={newRepo}
          onChange={(e) => setNewrepo(e.target.value)}
        />
        <button onClick={() => onNewRepo(newRepo)}>Adicionar</button>
      </div>
    </div>
  );
};

export default Repositories;
