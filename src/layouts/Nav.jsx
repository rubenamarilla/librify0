import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import "../styles/Nav.css";

const Nav = () => {
  const navigate = useNavigate();

  const handleLi = (value) => {
    navigate(`/home/${value}`);
  };

  const singOut = () => {
    reactLocalStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const token = reactLocalStorage.get("access_token");
    const params = new URLSearchParams(window.location.search);
    const error = params.get('error');

    if (error === 'access_denied') {
      navigate("/")
    } else if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="container">
      <nav className="nav-container">
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
        <button className="log-out" onClick={singOut}>
          Cerrar Sesión
        </button>
      </nav>
      <Outlet />
      <footer>
        <h2>©2023 - Librify</h2>
        <p>Librify utiliza la API de Spotify para fines de entretenimiento <br /> Librify no tiene relaciones con Spotify</p>
        <div>

        </div>
      </footer>
    </div>
  );
};

export default Nav;
