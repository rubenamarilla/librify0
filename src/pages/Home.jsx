import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

// https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term

const Home = () => {
  const navigate = useNavigate();

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
  const access_token = getTokenFromUrl().access_token;

  const redirect = (site) => {
    navigate(`/home/${site}/${access_token}`);
  };
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
