import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { reactLocalStorage } from "reactjs-localstorage";
import "../styles/main.css";
import { ThreeDots } from "react-loader-spinner";

const Songs = () => {
  const access_token = reactLocalStorage.get("access_token");
  const spotifyApi = new SpotifyWebApi();
  const [songs, setSongs] = useState([]);
  const [showLoad, setShowLoad] = useState(true);
  const [seleccionado, setSeleccionado] = useState('short_term');

  spotifyApi.setAccessToken(access_token);

  useEffect(() => {
    spotifyApi
      .getMyTopTracks({ limit: "50", time_range: "short_term" })
      .then((response) => {
        setSongs(response.items);
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
      .getMyTopTracks({ limit: "50", time_range: time })
      .then((response) => setSongs(response.items));
  };

  return (
    <div className="content-container">
      <h1>Canciones</h1>
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
          <div className="response-content">
            <table>
              <thead>
                <tr>
                  <th>Portada</th>
                  <th>Titulo</th>
                  <th>Artista</th>
                  <th>Album</th>
                </tr>
              </thead>
              <tbody>
                {songs.map((song, idx) => (
                  <tr key={idx}>
                    <td>
                      <img alt={song.name} src={song.album.images[2].url} />
                    </td>
                    <td>{song.name}</td>
                    <td>{song.artists[0].name}</td>
                    <td>{song.album.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Songs;
