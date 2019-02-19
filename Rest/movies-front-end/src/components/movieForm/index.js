import React, { Component } from 'react'

class MovieForm extends Component {

  state = {
    title: '',
    year: ''
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  render() {
    return(
      <>
      <h3>Add A Movie</h3>
      <input 
      type='text'
      id='title'
      placeholder='movie title'
      onChange={this.handleFieldChange}
      />
      <input 
      type='text'
      id='year'
      placeholder='year released'
      onChange={this.handleFieldChange}
      />
      <button onClick={() => this.props.create("movies", this.state)}>Save Movie</button>
      </>
    )
  }
}

export default MovieForm