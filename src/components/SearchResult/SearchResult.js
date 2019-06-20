import React from 'react';
import './SearchResult.css';
import Track from '../Track/Track';

class SearchResult extends React.Component {
  render() {
    return (
      <div className="Track">
        <Track track={this.props.track} />
        <a className="Track-action">+</a>
      </div>    )
  }
}

export default SearchResult;
