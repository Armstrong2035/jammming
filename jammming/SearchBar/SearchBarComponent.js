import React from "react";

function SearchBar() {
  return (
    <div>
      <form>
        <label for="search">Search for a song</label>
        <input id="search" type="text" name="search" value="search" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchBar;
