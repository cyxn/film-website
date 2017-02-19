import React from 'react';
import { Card, Heading } from 'rebass';
import { Link } from 'react-router';
import './Movie.sass';
import MovieImage from './MovieImage';

//TODO: image should be taken from props
const Movie = (props) => {
  const { movie, genres } = props;
  const singleFilmLink = `/view/${movie.id}`;
  const CardStyle = {
    border: 'none',
    marginLeft: '15px',
    marginRight: '15px',
    marginBottom: '50px'
  };
  const genreNames = findGenreNames(movie, genres);
  return (
    <Card style={CardStyle} width={180}>
      <Link to={singleFilmLink} className='single-movie'>
        <MovieImage {...props} />
        <Heading size={3}>
          {movie.original_title}
        </Heading>
        <p>
          {genreNames}
        </p>
      </Link>
    </Card>
  )
}

export function findGenreNames(movie, genres) {
  if (typeof movie.genre_ids === 'undefined') {
    return movie.genres
        .map(item => item.name)
        .join(', ');
  }
  return genres
      .filter((item, i, array) => {
        const index = movie.genre_ids.indexOf(item.id);
        return array[index];
      })
      .map(item => item.name)
      .join(', ');
}

export default Movie;
