import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      playlistTracks: [],
      playlistName: 'New playlist'
    };
    this.search = this.search.bind(this);
    this.addToPlaylist = this.addToPlaylist.bind(this);
    this.removeFromPlaylist = this.removeFromPlaylist.bind(this);
    this.changePlaylistName = this.changePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }
  search(term) {
    Spotify.getAccessToken();
    Spotify.search(term).then(tracks => {
      this.setState({
        tracks: tracks
      })
    });
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
    });
  }
  changePlaylistName(newName) {
    this.setState({
      playlistName: newName
    });
  }
  savePlaylist() {
    const trackURIs = [];
    this.state.playlistTracks.forEach(track => {
      trackURIs.push(track.uri);
    });
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
    this.setState({
      playlistTracks: [],
      playlistName: 'New playlist'
    });
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
            <SearchBar
              search={this.search}/>
            <div className="App-playlist">
              <SearchResults
                tracks={this.state.tracks}
                addToPlaylist={this.addToPlaylist}/>
              <Playlist
                playlistTracks={this.state.playlistTracks}
                removeFromPlaylist={this.removeFromPlaylist}
                playlistName={this.state.playlistName}
                changePlaylistName={this.changePlaylistName}
                onSave={this.savePlaylist}/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
