import React from "react";
import App from "../App";
import { Track } from "../Track/Track";

function SearchResults({ tracks }) {
  return (
    <div className="searchResults">
      <h2>Results</h2>
      <div>
        <ul>
          {tracks.map((track) => (
            <li>
              <Track key={track.id} track={track} />
              <span>
                <button type="submit">+</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { SearchResults };
