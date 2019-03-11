import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string,
    poster: PropTypes.string
  }
  render() {
    return (
      <div>
        <MoviePoster poster={this.props.poster} title={this.props.title} />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}


class MoviePoster extends Component {
  render() {
    return (
      <img src={this.props.poster} alt={this.props.title} width="320px" />
    );
  }
}

export default Movie;
 