import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import "../styles/Artists.css"

const Artists = () => {
  const { token } = useParams();
  const spotifyApi = new SpotifyWebApi();
  const [artists, setArtists] = useState([]);
  spotifyApi.setAccessToken(token);

  useEffect(() => {
    spotifyApi
      .getMyTopArtists({ limit: "50", time_range: "short_term" })
      .then((response) => {
        setArtists(response.items);
        console.log(artists);
      });
  }, []);

  const selectTime = (time) => {
    spotifyApi
      .getMyTopArtists({ limit: "50", time_range: time })
      .then((response) => {
        setArtists(response.items);
        console.log(artists);
      });
  };
  return (
    <div className="content-container">
      <h1>Artistas</h1>
      <div className="column-father">
        <div className="column">
          <h2 onClick={() => selectTime("short_term")}>1 mes</h2>
          <h2 onClick={() => selectTime("medium_term")}>6 meses</h2>
          <h2 onClick={() => selectTime("long_term")}>todo</h2>
        </div>
        <div className="response-content">
          {artists.map((artist, idx) => (
            <div key={idx} className="artist-item">
              <Link to={artist.external_urls.spotify}>
                <img
                  alt={artist.name}
                  src={artist.images[2].url}
                  style={{ height: "3rem" }}
                />
              </Link>
              <p>{artist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
