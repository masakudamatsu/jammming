import React from 'react';
import './AudioPlayer.css';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let trackInfo;
    if (this.props.trackPlayingName) {
      trackInfo = (
        <div className="AudioPlayerInfo">
          <h3>{this.props.trackPlayingName}</h3>
          <p>{this.props.trackPlayingArtist} | {this.props.trackPlayingAlbum}</p>
        </div>
      );
    } else {
      trackInfo = (
        <div className="AudioPlayerInfo">
        </div>
      );
    }
    return (
      <div className="AudioPlayer">
        <h2>Now Playing...</h2>
        {trackInfo}
        <audio
          id="audio"
          className="AudioPlayerControl"
          controls
          autoPlay
          preload="metadata">
      	  <source
            src={this.props.trackPlayingPreviewURL}
            type="audio/mpeg" />
        	Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default AudioPlayer;
