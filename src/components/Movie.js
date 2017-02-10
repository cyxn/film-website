import React from 'react';
import { Card, CardImage, Heading, Text } from 'rebass';
import './Movie.sass';
import { Link } from 'react-router';
import taboo from '../img/taboo.jpg'

//TODO: image should be taken from props
const Movie = ({movie, genres}) => {

  const filterGenres = (item, i, array) => {
    const index = movie.genre_ids.indexOf(item.id);
    return array[index];
  }

  const genreNames =
    genres
      .filter(filterGenres)
      .map(item => item.name)
      .join(', ');

  const CardStyle = {
    border: 'none',
    marginLeft: '15px',
    marginRight: '15px',
    marginBottom: '50px'
  }

  return (
    <div className='single-movie'>
      <Card style={CardStyle} width={180}>
        <div className='single-movie-image'>
          <div className='favorite-button'>
            <div className='favorite-icon'></div>
          </div>
          <CardImage style={{borderRadius: '5px'}} src={taboo} />
        </div>
        <Heading size={3}>
          {movie.original_title}
        </Heading>
        <Text>
          {genreNames}
        </Text>
      </Card>
    </div>
  )
}

export default Movie;
