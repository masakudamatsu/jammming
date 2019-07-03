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
          <h3>Brand New Days</h3>
          <p>Luna Sea | LUV</p>
        </div>
        <audio className="AudioPlayerControl" controls preload="metadata">
      	<source src="https://p.scdn.co/mp3-preview/8e415aa95cfbb89c4172863b8fe0d296793d4ad9?cid=a3ab6dd2b49a45c5b30ad99ef16db769" type="audio/mpeg" />
        	Your browser does not support the audio element.
      </audio>
      </div>
    );
  }
}

export default AudioPlayer;

// <div className="Track-information">
//   <h3>{this.props.trackPlaying.name}</h3>
//   <p>{this.props.trackPlaying.artist} | {this.props.trackPlaying.album}</p>
// </div>
