import React from 'react';
import './FilmsList.sass';
import Movie from './Movie';
//import { Link } from 'react-router';


const FilmsList = ({movies, dataReady, ...rest}) => {
  const handleClick = () => {
    console.log('clicked');
  };
  //TODO: ADD SOME SPINNER HERE
  if (!dataReady) return (
    <h2>Loading...</h2>
  )
  return (
    <div className='movies-list'>
      {movies.map((item, i) => {
        return <Movie movie={item} key={i} {...rest} />
      })}
    </div>
  )
}

export default FilmsList;
