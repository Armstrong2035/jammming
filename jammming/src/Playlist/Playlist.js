import React, { useState } from "react";
import { Track } from "../Track/Track";

function Playlist({ playlist }) {
  const newPlaylist = playlist;
  const [name, setName] = useState("");
  const namePlaylist = (e) => {
    setName(e.target.value);
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
                <button type="button">-</button>
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
