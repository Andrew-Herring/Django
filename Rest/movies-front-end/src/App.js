import React, { Component } from 'react';
import SearchComponent from "./searchComponent"
import MovieList from "./components/movies"
import MovieForm from './components/movieForm'

// import './App.css';

class App extends Component {

  state = {
    movies: [],
    apiUrl: 'http://127.0.0.1:8000/api/v1/'
  }


  setMovieState = (movies) => this.setState({movies})

  create = (resource, newObj) => {
    let formData = new FormData()
    for (let key in newObj) {
      formData.append(key, newObj[key])
    }

    fetch(`${this.state.apiUrl}${resource}/`, {
      method: 'POST',
      body: formData
    })
    .then(newData => newData.json())
    .then(newData => {
      console.log("added?", newData)
      this.getAll(resource)
    })
  }

  // This API logic should end up in a manager of some sort
  getAll = (resource, keyword=null) => {
    let url = `${this.state.apiUrl}${resource}/`
    if (keyword)
      url += keyword

    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("movies list", data)
      this.setState({[resource]: data})
    })
    .catch(err => console.log("oh no!", err))
  }

  search = (resource, keyword) => {
    let query = `?search=${keyword}`
    this.getAll(resource, query)
  }

  render() {
    return (
    <div>
    <SearchComponent search={this.search} />
    <MovieList getAll={this.getAll} movies={this.state.movies} />
    <MovieForm create={this.create} />
    </div>
    )
  }
}

export default App;
