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
    let listenIcon;
    if (this.props.track.previewURL) {
      listenIcon = (
        <a onClick={this.handleListen}>
          <i className="fas fa-headphones-alt"></i>
        </a>
      );
    } else {
      listenIcon = <div></div>;
    }
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {listenIcon}
        <a className="Track-action"
           onClick={this.handleClick}>+</a>
      </div>
    );
  }
}

export default SearchResult;
