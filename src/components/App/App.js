import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [
        {
          id: 1,
          name: 'Tiny Dancer',
          artist: 'Elton John',
          album: 'Madman Across The Water'
        },
        {
          id: 2,
          name: 'Tiny Dancer',
          artist: 'Tim McGraw',
          album: 'Love Story'
        }
      ],
      playlistTracks: [],
      playlistName: 'New playlist'
    };
    this.addToPlaylist = this.addToPlaylist.bind(this);
    this.removeFromPlaylist = this.removeFromPlaylist.bind(this);
    this.changePlaylistName = this.changePlaylistName.bind(this);
  }
  addToPlaylist(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    this.setState({
      playlistTracks: [...this.state.playlistTracks, track]
    });
  }
  removeFromPlaylist(track) {
    const newPlaylist = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({
      playlistTracks: newPlaylist
    })
  }
  changePlaylistName(newName) {
    this.setState({
      playlistName: newName
    });
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
            <SearchBar />
            <div class="App-playlist">
              <SearchResults
                tracks={this.state.tracks}
                addToPlaylist={this.addToPlaylist}/>
              <Playlist
                playlistTracks={this.state.playlistTracks}
                removeFromPlaylist={this.removeFromPlaylist}
                playlistName={this.state.playlistName}
                changePlaylistName={this.changePlaylistName}/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
