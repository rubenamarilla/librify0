import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const redirect = (site) => {
    navigate(`/home/${site}`);
  };
  return (
    <div className="content-container">
      <div className="home-container">
        <h2>Empieza a ver tu ranking</h2>
        <button onClick={(e) => redirect("song")}>Top Canciones</button>
        <button onClick={(e) => redirect("artist")}>Top Artistas</button>
        <button onClick={(e) => redirect("played")}>
          Reproducidas recientemente
        </button>
      </div>
    </div>
  );
};

export default Home;
