import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component {
//   static propTypes = {
//     title: PropTypes.string,
//     poster: PropTypes.string
//   }
//   render() {
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster} title={this.props.title} />
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }


// class MoviePoster extends Component {
//   render() {
//     return (
//       <img src={this.props.poster} alt={this.props.title} width="320px" />
//     );
//   }
// }

function Movie({title, subtitle, poster}) {
  return (
      <div>
        <MoviePoster poster={poster} title={title} />
        <h1>{title}. {subtitle}</h1>
      </div>
  )
}
Movie.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string
}

function MoviePoster({poster, title}) {
  return (
    <img src={poster} alt={title} className="avatar"/>
  )
}

MoviePoster.propTypes = {
  title: PropTypes.string.isRequired
}

export default Movie;
 