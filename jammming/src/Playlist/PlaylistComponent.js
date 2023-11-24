import React from "react";

function Playlist() {
  const songList = [
    "song 1",
    "song 2",
    "song 3",
    "song 3",
    "song 4",
    "song 5",
    "song 6",
    "song 7",
    "song 8",
    "song 9",
    "song 10",
  ];
  return (
    <div>
      <form>
        <input type="text" name="Playlist Name" placeholder="Playlist Name" />
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
      </form>
    </div>
  );
}

export { Playlist };
