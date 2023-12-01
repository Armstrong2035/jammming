import React, { useState } from "react";
import { Track } from "../Track/Track";
import App from "../App";

function Playlist({ playlist, removeFromPlaylist }) {
  const newPlaylist = playlist;
  const [name, setName] = useState("");
  const namePlaylist = (e) => {
    setName(e.target.value);
  };

  const removeTrack = (track) => {
    removeFromPlaylist(track);
  };

  return (
    <div>
      <h3>
        <input
          id="name"
          placeholder="New Playlist"
          type="text"
          name="name"
          value={name}
          onChange={namePlaylist}
        />
      </h3>
      <div>
        <ul>
          {newPlaylist.map((track) => (
            <li key={track.id}>
              <Track track={track} />
              <span>
                <button type="button" onClick={() => removeTrack(track.id)}>
                  -
                </button>
              </span>
            </li>
          ))}
        </ul>
        <button type="button">Add To Spotify</button>
      </div>
    </div>
  );
}

export { Playlist };
