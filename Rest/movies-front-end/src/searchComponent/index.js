import React, { Component } from 'react'

class SearchComponent extends Component {

  state = {
    keyword: null
  }

  searchMovies = () => {
    this.props.search("movies", this.state.keyword)
  }

  setKeyword = (event) => {
    this.setState({keyword: event.target.value})
  }

  render() {
    return (
      <>
      <input type='text' onChange={this.setKeyword} placeholder="Movie Search" />
      <button onClick={this.searchMovies}>Search</button>
      </>
    )
  }
}

export default SearchComponent