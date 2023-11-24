import React from "react";

function SearchBarComponent() {
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

export { SearchBarComponent };
