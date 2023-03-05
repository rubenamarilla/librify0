import React from "react";
import "../styles/SignIn.css";

const SignIn = () => {
  return (
    <div className="signIn-container">
      <h1>Bienvenido a Librify</h1>
      <h3>Inicia sesión con spotify para continuar</h3>
      <button className="sign-in">Iniciar sesion con Spotify</button>
    </div>
  );
};

export default SignIn;
