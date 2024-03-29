import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./Movie.css";

function Movie({ id, year, rating, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          id,
          year,
          rating,
          title,
          summary,
          poster,
          genres
        }
      }}>
      <div className="movie">
          <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li key={index} className="genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 150)}</p>
          <h5 className="movie__rating">Rating: {rating}</h5>
        </div>
      </div>
    </Link>
  )}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;