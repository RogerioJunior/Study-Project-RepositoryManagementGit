import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import Search from "./Search";
import Repositories from "./Repositories";
import { getRepositories } from "../../services/api";

import "./styles.css";

const MainPage = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const loadData = async (query = "") => {
    try {
      setLoading(true);
      const response = await getRepositories("633c423ab3ea13bd2cc19cdd");
      console.log(response.data);
      setRepositories(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoadingError(true);
    }
  };

  useEffect(() => {
    (async () => await loadData())();
  }, []);

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

  if (loadingError) {
    return (
      <div className="loading">
        Erro ao carregar os dados de repositorio.{" "}
        <Link to="/login">Voltar</Link>
      </div>
    );
  }

  if (loading) {
    return (
    <div className="loading">Carregando...</div>
    );
  }

  return (
    <div id="main">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <Repositories
        repositories={repositories}
        onDeleteRepo={handleDeleteRepo}
        onNewRepo={handleNewRepo}
      />
    </div>
  );
};

export default MainPage;
