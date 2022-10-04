import React, { useState } from "react";

const Repositories = ({ repositories, onDeleteRepo, onNewRepo}) => {
    const [ newRepo, setNewrepo] = useState("");

  return (
    <div className="repositories">
      <h2 className="title">Repositorios</h2>

      <ul className="list">
        <li className="item">
          <div className="info">
            <div className="owner">Facebook</div>
            <div className="name">react</div>
          </div>
          <button onClick={() => onDeleteRepo(null)}>X</button>
        </li>
      </ul>

      <div className="new">
        <label htmlFor="new-repo">Novo Repositorio:</label>
        <input type="url" name="new-repo" id="new-repo" value={newRepo} onChange={(e) => setNewrepo(e.target.value)} />
        <button onClick={() => onNewRepo(newRepo)}>Adicionar</button>
      </div>
    </div>
  );
};

export default Repositories;
