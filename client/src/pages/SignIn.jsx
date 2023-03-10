import React from "react";
import { Link } from "react-router-dom";
import "../styles/SignIn.css";

const SignIn = () => {

  return (
    <div className="signIn-container">
      <h1>Bienvenido a Librify</h1>
      <h3>Inicia sesión con spotify para continuar</h3>
      <Link className="sign-in" to={`http://localhost:8888`}>
        Iniciar sesion con Spotify
      </Link>
    </div>
  );
};

export default SignIn;
