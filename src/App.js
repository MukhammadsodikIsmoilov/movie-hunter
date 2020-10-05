import React, {Fragment} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import MoviesList from './components/layout/Card/MoviesList';
import Movie from './components/layout/Movie';
import SearchBar from './components/layout/SearchMovie';
import './App.css';

class App extends React.Component {
  state = {
    movies: [],
    loading: false,
    movie_title: '',
    movie: {},
  };

  //Search IMDB Movie
  searchMovie = async (text, type, year) => {
    this.setState({loading: true});

    const res = await axios.get(
      `http://omdbapi.com/?s=${text}&type=${type}&y=${year}&apikey=9dcba1b1`
    );

    this.setState({
      movies: res.data.Search,
      loading: false,
      movie_title: text,
    });
  };

  getMovie = async id => {
    this.setState({loading: true});

    const res = await axios.get(
      `http://omdbapi.com/?i=${id}&plot=full&apikey=9dcba1b1`
    );

    this.setState({
      movie: res.data,
      loading: false,
    });
  };

  render() {
    const {movies, loading, movie, movie_title} = this.state;
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Navbar>
              <SearchBar searchMovie={this.searchMovie} />
            </Navbar>
            <Switch>
              <Route
                exact
                path='/movie'
                render={() => {
                  if (movies) {
                    return (
                      <MoviesList
                        movies={movies}
                        loading={loading}
                        title={movie_title}
                      />
                    );
                  } else
                    return (
                      <h1 style={{textAlign: 'center', marginTop: '2rem'}}>
                        Not Found
                      </h1>
                    );
                }}
              />
              <Route
                exact
                path='/movie/:imdbID'
                render={props => (
                  <Fragment>
                    <Movie
                      {...props}
                      getMovie={this.getMovie}
                      movie={movie}
                      loading={loading}
                    />
                  </Fragment>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
