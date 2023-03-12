import React from "react";
import { Link } from "react-router-dom";
import "../styles/SignIn.css";

const SignIn = () => {
  const authEndPoint = "https://accounts.spotify.com/authorize";
  const redirectURI = "http://localhost:3000/home";
  const clientID = "a89f4d1644a74252a58c731bc82d8745";
  const scope = ["user-top-read", "user-read-recently-played"];

  const login = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scope.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

  return (
    <div className="signIn-container">
      <h1>Bienvenido a Librify</h1>
      <h3>Inicia sesión con spotify para continuar</h3>
      <Link className="sign-in" to={login}>
        Iniciar sesion con Spotify
      </Link>
    </div>
  );
};

export default SignIn;
