import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import "../styles/Nav.css";

const Nav = () => {
  const navigate = useNavigate();

  const handleLi = (value) => {
    navigate(`/home/${value}`);
  };

  const singOut = ()=> {
    reactLocalStorage.clear()
    navigate("/")
  }

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
        <button className="log-out" onClick={singOut}>
          Cerrar Sesión
        </button>
      </div>
      <Outlet />
      <footer>contenido here</footer>
    </div>
  );
};

export default Nav;
