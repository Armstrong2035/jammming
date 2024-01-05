import React, { useState } from "react";
import { Playlist } from "../Playlist/Playlist";

function Track({ track }) {
  return (
    <div>
      <h3>{track.title}</h3>
      <p>{track.artist}</p>
      <p>{track.album}</p>
      <img src={track.image} />
    </div>
  );
}

export { Track };
