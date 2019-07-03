import React from 'react';
import './SearchResult.css';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
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
        <a className="Track-action"
           onClick={this.handleClick}>+</a>
      </div>
    );
  }
}

export default SearchResult;
