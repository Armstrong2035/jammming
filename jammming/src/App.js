import logo from "./logo.svg";
import "./App.css";
import { SearchBar, SearchBarComponent } from "./SearchBar/SearchBar";
import { SearchResults } from "./SearchResults/SearchResults";
import { Playlist } from "./Playlist/Playlist";
import { Track } from "./Track/Track";

function App() {
  const trackList = [
    {
      id: 1,
      name: "Amazing Grace",
      artist: "Chris Tomlin",
      album: "See the Morning",
    },
    {
      id: 2,
      name: "How Great Thou Art",
      artist: "Carrie Underwood",
      album: "My Savior",
    },
    {
      id: 3,
      name: "Oceans (Where Feet May Fail)",
      artist: "Hillsong UNITED",
      album: "Zion",
    },
    {
      id: 4,
      name: "Good Good Father",
      artist: "Chris Tomlin",
      album: "Good Good Father",
    },
    {
      id: 5,
      name: "What a Beautiful Name",
      artist: "Hillsong Worship",
      album: "Let There Be Light",
    },
    {
      id: 6,
      name: "10,000 Reasons (Bless the Lord)",
      artist: "Matt Redman",
      album: "10,000 Reasons",
    },
    {
      id: 7,
      name: "Holy Spirit",
      artist: "Francesca Battistelli",
      album: "If Were Honest",
    },
    {
      id: 8,
      name: "Way Maker",
      artist: "Sinach",
      album: "Way Maker (Live)",
    },
    {
      id: 9,
      name: "In Christ Alone",
      artist: "Keith & Kristyn Getty",
      album: "In Christ Alone",
    },
    {
      id: 10,
      name: "Mighty To Save",
      artist: "Hillsong Worship",
      album: "Mighty To Save",
    },
  ];
  return (
    <div className="App">
      <SearchBar />
      <SearchResults tracks={trackList} />
      <Playlist />
    </div>
  );
}

export default App;
