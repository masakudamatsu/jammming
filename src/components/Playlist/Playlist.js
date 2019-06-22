import React from 'react';
import './Playlist.css';
import PlaylistTrack from '../PlaylistTrack/PlaylistTrack';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event) {
    this.props.changePlaylistName(event.target.value);
  }
  render() {
    return (
      <div className="Playlist">
        <input defaultValue='New Playlist'
               value={this.props.playlistName}
               onChange={this.handleNameChange}/>
        <div className="TrackList">
          {
            this.props.playlistTracks.map(playlistTrack => {
              return <PlaylistTrack key={playlistTrack.id} playlistTrack={playlistTrack} removeFromPlaylist={this.props.removeFromPlaylist}/>;
            })
          }
        </div>
        <a class="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist;
