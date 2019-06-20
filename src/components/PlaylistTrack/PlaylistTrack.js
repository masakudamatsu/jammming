import React from 'react';
import './PlaylistTrack.css';
import Track from '../Track/Track';

class PlaylistTrack extends React.Component {
  render() {
    return (
      <div className="Track">
        <a className="Track-action">-</a>
      </div>    )
  }
}

export default PlaylistTrack;
