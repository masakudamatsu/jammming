import React from 'react';
import './AudioPlayer.css';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="AudioPlayer">
        <h2>Now Playing...</h2>
        <div className="Track-information">
          <h3>{this.props.trackPlayingName}</h3>
          <p>{this.props.trackPlayingArtist} | {this.props.trackPlayingAlbum} | {this.props.trackPlayingPreviewURL}</p>
        </div>
        <audio className="AudioPlayerControl" controls autoPlay preload="metadata">
      	  <source src={this.props.trackPlayingPreviewURL} type="audio/mpeg" />
        	Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default AudioPlayer;
