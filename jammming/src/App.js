import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { SearchBar, SearchBarComponent } from "./SearchBar/SearchBar";
import { SearchResults } from "./SearchResults/SearchResults";
import { Playlist } from "./Playlist/Playlist";
import { Track } from "./Track/Track";
import { AuthorizeUser } from "./SpotifyToken";

function App() {
  // const clientId = "5012b99bc5384012a9b77e50d955c3b6";
  // const clientSecret = "dfb1f61bdbb7494e80ac84cc8aa7d484";
  const trackList = [
    {
      id: 1,
      name: "Amazing Grace",
      artist: "Chris Tomlin",
      album: "See the Morning",
      uri: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
    },
    {
      id: 2,
      name: "How Great Thou Art",
      artist: "Carrie Underwood",
      album: "My Savior",
      uri: "spotify:track:2takcwOaAZWiXQijPHIx7B",
    },
    {
      id: 3,
      name: "Oceans (Where Feet May Fail)",
      artist: "Hillsong UNITED",
      album: "Zion",
      uri: "spotify:track:1i1fxkWeaMmKEB4T7zqbzK",
    },

    {
      id: 4,
      name: "Good Good Father",
      artist: "Chris Tomlin",
      album: "Good Good Father",
      uri: "spotify:track:1hUV0zH3fw2oRlXW1e3F8d",
    },

    {
      id: 5,
      name: "What a Beautiful Name",
      artist: "Hillsong Worship",
      album: "Let There Be Light",
      uri: "spotify:track:6S5Mb2wce6KopUd5bSPG6n",
    },
    {
      id: 6,
      name: "10,000 Reasons (Bless the Lord)",
      artist: "Matt Redman",
      album: "10,000 Reasons",
      uri: "spotify:track:3cT1uCm6weuMywq8c14Awk",
    },
    {
      id: 7,
      name: "Holy Spirit",
      artist: "Francesca Battistelli",
      album: "If Were Honest",
      uri: "spotify:track:3RSMqu36JZnmMkrnNmnqyd",
    },
    {
      id: 8,
      name: "Way Maker",
      artist: "Sinach",
      album: "Way Maker (Live)",
      uri: "spotify:track:4jtyUzZm9WLc2AdaJ1dso7",
    },
    {
      id: 9,
      name: "In Christ Alone",
      artist: "Keith & Kristyn Getty",
      album: "In Christ Alone",
      uri: "spotify:track:3pXF1nA74528Edde4of9CC",
    },
    {
      id: 10,
      name: "Mighty To Save",
      artist: "Hillsong Worship",
      album: "Mighty To Save",
      uri: "spotify:track:2dgrYdgguVZKeCsrVb9XEs",
    },
  ];

  const [playlist, setPlaylist] = useState([]);

  const updatedPlaylist = (selectedTrack) => {
    setPlaylist([...playlist, selectedTrack]);
  };

  const removeFromPlaylist = (trackId) => {
    setPlaylist(playlist.filter((track) => track.id !== trackId));
  };

  return (
    <div className="App">
      <AuthorizeUser />
      <SearchBar />
      <SearchResults tracks={trackList} updatedPlaylist={updatedPlaylist} />
      <Playlist playlist={playlist} removeFromPlaylist={removeFromPlaylist} />
    </div>
  );
}

export default App;
