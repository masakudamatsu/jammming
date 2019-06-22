import React from 'react';
import './Playlist.css';
import PlaylistTrack from '../PlaylistTrack/PlaylistTrack';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input value='New Playlist' />
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
