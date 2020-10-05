import React, {Fragment} from 'react';
import MovieCard from './MovieCard';
import Spinner from '../Spinner';

const MoviesList = ({loading, movies, title}) => {
  if (loading) return <Spinner width='100px' />;
  return (
    <Fragment>
      {title && (
        <p className='found_result'>
          Found result: <span>'{title}'</span>
        </p>
      )}
      <div className='movies'>
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </Fragment>
  );
};
export default MoviesList;
