import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { reactLocalStorage } from "reactjs-localstorage";
import { ThreeDots } from "react-loader-spinner";

const Played = () => {
  const access_token = reactLocalStorage.get("access_token");
  const spotifyApi = new SpotifyWebApi();
  const [songs, setSongs] = useState([]);
  const [showLoad, setShowLoad] = useState(true);
  spotifyApi.setAccessToken(access_token);

  useEffect(() => {
    spotifyApi.getMyRecentlyPlayedTracks({ limit: "50" }).then((response) => {
      setSongs(response.items);
      setShowLoad(false);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="content-container">
      <h1>Reproducidas recientemente</h1>
      <div className="response-content">
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
                    <img
                      alt={song.track.name}
                      src={song.track.album.images[2].url}
                    />
                  </td>
                  <td>{song.track.name}</td>
                  <td>{song.track.artists[0].name}</td>
                  <td>{song.track.album.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Played;
