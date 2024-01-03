import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { SearchBar, SearchBarComponent } from "./SearchBar/SearchBar";
import { SearchResults } from "./SearchResults/SearchResults";
import { Playlist } from "./Playlist/Playlist";
import { Track } from "./Track/Track";
import { AuthorizeUser } from "./AuthorizeUser";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [result, setResult] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const receiveAccessToken = (token) => {
    setAccessToken(token);
    // console.log(accessToken);
  };

  const receiveResult = (result) => {
    setResult(result);
    // console.log(result);
  };
  const updatedPlaylist = (selectedTrack) => {
    setPlaylist([...playlist, selectedTrack]);
  };

  const removeFromPlaylist = (trackId) => {
    setPlaylist(playlist.filter((track) => track.id !== trackId));
  };

  return (
    <div className="App">
      <AuthorizeUser receiveAccessToken={receiveAccessToken} />
      <SearchBar accessToken={accessToken} receiveResult={receiveResult} />
      <SearchResults updatedPlaylist={updatedPlaylist} result={result} />
      <Playlist playlist={playlist} removeFromPlaylist={removeFromPlaylist} />
    </div>
  );
}

export default App;
