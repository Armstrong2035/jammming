import React, { useState } from "react";
import App from "../App";
import { Track } from "../Track/Track";

function SearchResults({ result, updatedPlaylist }) {
  const [trackList, setTrackList] = useState([]);

  const addToPlaylist = (selectedTrack) => {
    updatedPlaylist(selectedTrack);
  };

  console.log(result);

  return (
    <div className="searchResults">
      <h2>Results</h2>
      <div>
        <ul>
          {trackList.map((track) => (
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
