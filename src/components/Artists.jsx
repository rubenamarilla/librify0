import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import "../styles/Artists.css";
import { reactLocalStorage } from "reactjs-localstorage";
import { ThreeDots } from "react-loader-spinner";

const Artists = () => {
  const access_token = reactLocalStorage.get("access_token");
  const spotifyApi = new SpotifyWebApi();
  const [artists, setArtists] = useState([]);
  const [showLoad, setShowLoad] = useState(true);
  const [seleccionado, setSeleccionado] = useState('short_term');
  spotifyApi.setAccessToken(access_token);

  useEffect(() => {
    spotifyApi
      .getMyTopArtists({ limit: "50", time_range: "short_term" })
      .then((response) => {
        setArtists(response.items);
        setShowLoad(false);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const selectTime = (time) => {
    const valorSeleccionado = time;
    // Si el valor seleccionado es diferente al valor actual, actualizar el estado
    if (valorSeleccionado !== seleccionado) {
      setSeleccionado(valorSeleccionado);
    }
    spotifyApi
      .getMyTopArtists({ limit: "50", time_range: time })
      .then((response) => {
        setArtists(response.items);
        setShowLoad(false);
      });
  };
  return (
    <div className="content-container">
      <h1>Artistas</h1>
      <div className="column-father">
        <div className="column">
          <h2 className={seleccionado === 'short_term' ? 'activo' : ''} onClick={() => selectTime("short_term")}>1 mes</h2>
          <h2 className={seleccionado === 'medium_term' ? 'activo' : ''} onClick={() => selectTime("medium_term")}>6 meses</h2>
          <h2 className={seleccionado === 'long_term' ? 'activo' : ''} onClick={() => selectTime("long_term")}>todo</h2>
        </div>
        {showLoad ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            className="loadingDots"
            visible={showLoad}
          />
        ) : (
          <div className="response-content artists-grid">
            {artists.map((artist, idx) => (
              <div key={idx} className="artist-item">
                <Link to={artist.external_urls.spotify}>
                  <img
                    alt={artist.name}
                    src={artist.images[2].url}
                    className="artist-img"
                  />
                </Link>
                <p>{artist.name}</p>
              </div>
            ))}
            <p>Todas las imágenes estan protegidas con Copyright por sus respectivos dueños</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artists;
