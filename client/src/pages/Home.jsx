import React from "react";
import { useNavigate } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const redirect = (site) => {
    navigate(`/home/${site}`);
  };

  const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});
  };

  if (window.location.hash) {
    const token = getTokenFromUrl().access_token;
    reactLocalStorage.set("access_token", token);
    window.location.hash = "";
  }

  return (
    <div className="content-container">
      <div className="home-container">
        <h2>Empieza a ver tu ranking</h2>
        <button onClick={() => redirect("song")}>Top Canciones</button>
        <button onClick={() => redirect("artist")}>Top Artistas</button>
        <button onClick={() => redirect("played")}>
          Reproducidas recientemente
        </button>
      </div>
    </div>
  );
};

export default Home;
