import React, { useState } from "react";
import App from "../App";

function SearchBar() {
  const [query, setQuery] = useState("");

  //Track keystroke
  const searchQuery = (e) => {
    setQuery(e.target.value);
  };

  function search() {
    console.log(`Searching for ${query}`);
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

// function SearchBar() {
//   const [query, setQuery] = useState("");

//   // Track keystroke
//   const searchQuery = (e) => {
//     setQuery(e.target.value);
//   };

//   const search = () => {
//     console.log(`Searching for ${query}`);
//   };

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           //prevent default behaviour or reloading page when a form is submitted
//           e.preventDefault();
//           search();
//         }}
//       >
//         <input
//           id="search"
//           type="text"
//           name="search"
//           value={query}
//           onChange={searchQuery}
//           placeholder="Mighty to save"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

export { SearchBar };
