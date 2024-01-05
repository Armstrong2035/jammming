import React, { useState, useEffect } from "react";
import App from "../App";
import { Track } from "../Track/Track";

function SearchResults({ result, updatedPlaylist }) {
  const [trackList, setTrackList] = useState([]);

  const addToPlaylist = (selectedTrack) => {
    updatedPlaylist(selectedTrack);
  };

  useEffect(() => {
    const tracksToAdd = result.map((i, index) => ({
      id: index,
      title: i.name,
      artist: i.artists[0].name,
      album: i.album.name,
      image: i.album.images[0].url,
      uri: i.uri,
    }));
    // tracks.push(track);

    setTrackList((prevTrackList) => [...prevTrackList, ...tracksToAdd]);
  }, [result]);

  console.log(result);
  console.log(trackList);
  // console.log(result[0].name); this works
  // console.log(result[0].album.name); this works as well

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
