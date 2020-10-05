import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Search = ({searchMovie}) => {
  const [text, setText] = useState('');
  const [type, setType] = useState('movie');
  const [year, setYear] = useState('');
  const history = useHistory();
  const onSubmit = e => {
    e.preventDefault();
    searchMovie(text, type, year);
    setText('');
    setType('movie');
    setYear('');
  };

  return (
    <form onSubmit={onSubmit}>
      <select
        name='type'
        defaultValue={type}
        onChange={e => setType(e.target.value)}
      >
        <option value='movie'>Movie</option>
        <option value='series'>Series</option>
      </select>
      <input
        type='number'
        name='number'
        placeholder='Year'
        min='1888'
        max='2020'
        value={year}
        onChange={e => setYear(e.target.value)}
      />
      <input
        type='text'
        name='text'
        placeholder='Search movies, series...'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        type='submit'
        className='btn btn-light'
        onClick={() => history.push('/movie')}
      >
        <i className='fas fa-search'></i>
      </button>
    </form>
  );
};

export default Search;
