import React, { useState } from "react";
import { Playlist } from "../Playlist/Playlist";

function Track({ track }) {
  return (
    <div>
      <h3>{track.name}</h3>
      <p>{track.artist}</p>
      <p>{track.album}</p>
    </div>
  );
}

export { Track };
