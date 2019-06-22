import React from 'react';
import './PlaylistTrack.css';

class PlaylistTrack extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.props.removeFromPlaylist(this.props.playlistTrack);
    event.preventDefault();
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.playlistTrack.name}</h3>
          <p>{this.props.playlistTrack.artist} | {this.props.playlistTrack.album}</p>
        </div>
        <a className="Track-action" onClick={this.handleClick}>-</a>
      </div>    )
  }
}

export default PlaylistTrack;
