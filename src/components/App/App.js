import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Songs from '../Songs/Songs';
import Playlist from '../Playlist/Playlist';

function App() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
          <SearchBar />
          <div class="App-playlist">
            <Songs />
            <Playlist />
          </div>
      </div>
    </div>
  );
}

export default App;
