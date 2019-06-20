import React from 'react';
import './PlaylistTrack.css';

class PlaylistTrack extends React.Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.playlistTrack.name}</h3>
          <p>{this.props.playlistTrack.artist} | {this.props.playlistTrack.album}</p>
        </div>
        <a className="Track-action">-</a>
      </div>    )
  }
}

export default PlaylistTrack;
