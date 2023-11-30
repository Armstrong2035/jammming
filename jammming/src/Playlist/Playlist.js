import React, { useState } from "react";

function Playlist() {
  const songList = [];
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
        />
      </h3>
      <div>
        <ul>
          {songList.map((song, index) => (
            <li key={index}>
              {song}{" "}
              <span>
                <button type="submit">-</button>
              </span>
            </li>
          ))}
        </ul>
        <button type="submit">Add To Spotify</button>
      </div>
    </div>
  );
}

export { Playlist };
