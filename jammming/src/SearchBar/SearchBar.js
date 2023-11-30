import React from "react";
import App from "../App";

function SearchBar() {
  return (
    <div>
      <form>
        <label for="search">Search for a song</label>
        <input id="search" type="text" name="search" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { SearchBar };
