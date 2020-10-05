import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = ({movie}) => {
  const {Title, Poster, imdbID, Year} = movie;
  return (
    <div className='movie-card'>
      <img src={Poster} alt='Movie img' className='image' />
      <div className='movie-info'>
        <h3>
          <Link to={`/movie/${imdbID}`}>{Title}</Link>
        </h3>
        <p className='released-year'>
          Released: <span>{Year}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
