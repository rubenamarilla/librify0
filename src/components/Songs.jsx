import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import "../styles/main.css";

const Songs = () => {
  const { token } = useParams();
  const spotifyApi = new SpotifyWebApi();
  const [songs, setSongs] = useState([]);
  spotifyApi.setAccessToken(token);

  useEffect(() => {
    spotifyApi
      .getMyTopTracks({ limit: "50", time_range: "short_term" })
      .then((response) => {
        setSongs(response.items);
        console.log(songs);
      });
  }, []);

  const selectTime = (time) => {
    spotifyApi
      .getMyTopTracks({ limit: "50", time_range: time })
      .then((response) => {
        setSongs(response.items);
        console.log(songs);
      });
  };

  return (
    <div className="content-container">
      <h1>Canciones</h1>
      <div className="column-father">
        <div className="column">
          <h2 onClick={() => selectTime("short_term")}>1 mes</h2>
          <h2 onClick={() => selectTime("medium_term")}>6 meses</h2>
          <h2 onClick={() => selectTime("long_term")}>todo</h2>
        </div>
        <div className="response-content">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Titulo</th>
                <th>Artista</th>
                <th>Album</th>
              </tr>
            </thead>
            <tbody>
              {
                songs.map((song, idx)=> (
                  <tr key={idx}>
                    <td><img alt={song.name} src={song.album.images[2].url}/></td>
                    <td>{song.name}</td>
                    <td>{song.artists[0].name}</td>
                    <td>{song.album.name}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Songs;
