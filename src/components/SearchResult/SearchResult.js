import React from 'react';
import './SearchResult.css';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.handleListen = this.handleListen.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleListen(event) {
    this.props.playTrack(this.props.track);
    event.preventDefault();
  }
  handleClick(event) {
    this.props.addToPlaylist(this.props.track);
    event.preventDefault();
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a onClick={this.handleListen}>
          <img src="./headphones-alt-solid.svg" alt="LISTEN"/>
        </a>
        <a className="Track-action"
           onClick={this.handleClick}>+</a>
      </div>
    );
  }
}

export default SearchResult;
