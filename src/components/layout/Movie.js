import React from 'react';
import Spinner from './Spinner';
class Movie extends React.Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.imdbID);
  }

  render() {
    const {
      Title,
      Released,
      Runtime,
      Genre,
      Director,
      Country,
      Awards,
      imdbRating,
      Poster,
      Plot,
    } = this.props.movie;
    const {loading} = this.props;
    if (loading) return <Spinner />;

    return (
      <div className='movie'>
        <div className='movie-img'>
          <img src={Poster} alt='movie img' />
        </div>
        <div className='movie-details'>
          <p className='movie-details-item'>
            Title: <span>{Title}</span>
          </p>
          <p className='movie-details-item'>
            Short description: <span>{Plot}</span>
          </p>
          <p className='movie-details-item'>
            Genre: <span>{Genre}</span>
          </p>
          <p className='movie-details-item'>
            Released: <span>{Released}</span>
          </p>
          <p className='movie-details-item'>
            Length: <span>{Runtime}</span>
          </p>
          <p className='movie-details-item'>
            Rating(IMDB): <span>{imdbRating}</span>
          </p>
          <p className='movie-details-item'>
            Awards: <span>{Awards}</span>
          </p>
          <p className='movie-details-item'>
            Director: <span>{Director}</span>
          </p>
          <p className='movie-details-item'>
            Country: <span>{Country}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Movie;
