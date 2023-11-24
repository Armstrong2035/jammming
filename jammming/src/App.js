import logo from "./logo.svg";
import "./App.css";
import { SearchBarComponent } from "./SearchBar/SearchBarComponent";
import { SearchResults } from "./SearchResults/SearchResultsComponent";
import { Playlist } from "./Playlist/PlaylistComponent";

function App() {
  return (
    <div className="App">
      <SearchBarComponent />
      <SearchResults />
      <Playlist />
    </div>
  );
}

export default App;
