import React from "react";

function SearchResults() {
  const songList = [
    "song 1",
    "song 2",
    "song 3",
    "song 3",
    "song 4",
    "song 5",
    "song 6",
    "song 7",
    "song 8",
    "song 9",
    "song 10",
  ];
  return (
    <div>
      <h2>Results</h2>
      <form>
        <ul>
          {songList.map((song, index) => (
            <li key={index}>
              {song}
              <span>
                <button type="submit">+</button>
              </span>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export { SearchResults };
