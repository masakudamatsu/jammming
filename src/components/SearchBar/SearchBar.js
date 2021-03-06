import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.search(this.state.term);
    } else {
      return;
    }
  }
  handleSearch(event) {
    this.props.search(this.state.term);
    event.preventDefault();
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
          onKeyPress={this.handleKeyPress} />
        <a onClick={this.handleSearch}>
          SEARCH
        </a>
      </div>
    );
  }
}

export default SearchBar;
