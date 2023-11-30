import React from "react";
import App from "../App";
import { Track } from "../Track/Track";

function SearchResults({ tracks, updatedPlaylist }) {
  const addToPlaylist = (selectedTrack) => {
    updatedPlaylist(selectedTrack);
  };

  return (
    <div className="searchResults">
      <h2>Results</h2>
      <div>
        <ul>
          {tracks.map((track) => (
            <li>
              <Track key={track.id} track={track} />
              <span>
                <button type="button" onClick={() => addToPlaylist(track)}>
                  +
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { SearchResults };
