import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  const navigate = useNavigate();

  const handleLi = (value) => {
    navigate(`/home/${value}`);
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
          <li onClick={(e) => handleLi("song")}>Top Canciones</li>
          <li onClick={(e) => handleLi("artist")}>Top Artistas</li>
          <li onClick={(e) => handleLi("played")}>
            Reproducidos recientemente
          </li>
        </ul>
        <button>Cerrar Sesión</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
