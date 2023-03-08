import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
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


  useEffect(() => {
    console.log(getTokenFromUrl());
    // window.location.hash = access_token

    // spotifyApi.setAccessToken(access_token)
    // spotifyApi.getMyTopTracks({limit: "50", time_range: "long_term"}).then(response => console.log(response))
  }, []);

  const handleLi = (value) => {
    navigate(`/home/${value}/${getTokenFromUrl().access_token}`);
  };
  return (
    <div className="container">
      <div className="nav-container">
        <Link to={"/home"} id={"logo"}>
          <h1>
            <span class="material-symbols-outlined">bar_chart</span> Librify
          </h1>
        </Link>
        <ul className="nav-lista">
          <li onClick={() => handleLi("song")}>Top Canciones</li>
          <li onClick={() => handleLi("artist")}>Top Artistas</li>
          <li onClick={() => handleLi("played")}>Reproducidos recientemente</li>
        </ul>
        <button className="log-out" onClick={() => navigate("/")}>
          Cerrar Sesión
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
