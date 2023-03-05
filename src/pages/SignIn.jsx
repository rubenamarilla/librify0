import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className="signIn-container">
      <h1>Bienvenido a Librify</h1>
      <h3>Inicia sesión con spotify para continuar</h3>
      <button className="sign-in" onClick={handleClick}>
        Iniciar sesion con Spotify
      </button>
    </div>
  );
};

export default SignIn;
