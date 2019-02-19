import React, {Component} from "react"


export default class MovieList extends Component {

  componentDidMount() {
    this.props.getAll("movies")
  }

  render() {
    const movieList = this.props.movies.map( movie => {
      return (<li key={movie.id}>{movie.title}</li>)
    })
    return (
      <div className="App">
       <ul>
        {movieList}
       </ul>
      </div>
    );
  }
}