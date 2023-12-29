import React, { useState } from "react";
import App from "../App";
import { clientId, clientSecret } from "../SpotifyToken";

function SearchBar({ accessToken }) {
  const [query, setQuery] = useState("");
  console.log(accessToken);

  //Track keystroke
  const searchQuery = (e) => {
    setQuery(e.target.value);
  };

  async function search({ accessToken }) {
    // console.log(`Searching for ${query}`);
    var searchParameters = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer=" + accessToken,
      },
      body:
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
    };

    var songId = await fetch(
      "https://api.spotify.com/v1/search" +
        query +
        "&type=track" +
        searchParameters
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          id="search"
          type="text"
          name="search"
          value={query}
          onChange={searchQuery}
          placeholder="Mighty to save"
        />
        <button onClick={search}>Submit</button>
      </form>
    </div>
  );
}

export { SearchBar };
