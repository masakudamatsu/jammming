import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      trackPlayingName: '',
      trackPlayingArtist: '',
      trackPlayingAlbum: '',
      trackPlayingPreviewURL: '',
      playlistTracks: [],
      playlistName: 'New playlist'
    };
    this.search = this.search.bind(this);
    this.playTrack = this.playTrack.bind(this);
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
  playTrack(track) {
    this.setState({
      trackPlayingName: track.name,
      trackPlayingArtist: track.artist,
      trackPlayingAlbum: track.album,
      trackPlayingPreviewURL: track.previewURL
    });
    document.getElementById('audio').load(); // Without this line of code, the audio player won't recognize the new sample.
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
              search={this.search} />
            <AudioPlayer
              trackPlayingName={this.state.trackPlayingName}
              trackPlayingArtist={this.state.trackPlayingArtist}
              trackPlayingAlbum={this.state.trackPlayingAlbum}
              trackPlayingPreviewURL={this.state.trackPlayingPreviewURL} />
            <div className="App-playlist">
              <SearchResults
                tracks={this.state.tracks}
                playTrack={this.playTrack}
                addToPlaylist={this.addToPlaylist} />
              <Playlist
                playlistTracks={this.state.playlistTracks}
                removeFromPlaylist={this.removeFromPlaylist}
                playlistName={this.state.playlistName}
                changePlaylistName={this.changePlaylistName}
                onSave={this.savePlaylist} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
