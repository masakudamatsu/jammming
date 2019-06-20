import React from 'react';
import './SearchResults.css';
import SearchResult from '../SearchResult/SearchResult';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <div className="TrackList">
          <SearchResult />
        </div>
      </div>
    )
  }
}

export default SearchResults;
