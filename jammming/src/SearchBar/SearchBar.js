import React, { useState } from "react";
import App from "../App";
import { clientId, clientSecret } from "../AuthorizeUser";

function SearchBar({ accessToken }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  // console.log(accessToken);

  //Track keystroke
  const searchQuery = (e) => {
    setQuery(e.target.value);
  };

  async function search() {
    var headers = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    var songId = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=track`,
      headers
    )
      .then((response) => response.json())
      .then((data) => setResult(data));
  }

  console.log(result);

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
