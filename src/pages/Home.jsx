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
        {/* <div>
          <h2>Tu propio ranking personal</h2>
          <p>Revisa tus canciones y artistas más escuchados y cambia entre 3 periodos de tiempo. Tus datos son actualizados aproximadamente cada día</p>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
