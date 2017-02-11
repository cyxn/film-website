import React from 'react';
import { Card, CardImage, Heading, Text } from 'rebass';
import './Movie.sass';
import { Link } from 'react-router';
import taboo from '../img/taboo.jpg';

//TODO: image should be taken from props
const Movie = (props) => {
  const {movie, genres, favorites, FilmsListActions} = props;
  const {addFavorites, removeFavorites} = FilmsListActions;
  const inFavorites = favorites.includes(movie.id);
  const singleFilmLink = `/view/${movie.id}`;
  const CardStyle = {
    border: 'none',
    marginLeft: '15px',
    marginRight: '15px',
    marginBottom: '50px'
  };
  const favBtnClass =
    (inFavorites) ?
    'favorite-button fav-added' :
    'favorite-button';

  const handleClick = (e) => {
    e.preventDefault();
    (inFavorites) ? removeFavorites(movie.id) : addFavorites(movie.id)
  }

  const filterGenres = (item, i, array) => {
    const index = movie.genre_ids.indexOf(item.id);
    return array[index];
  }

  const genreNames =
    genres
      .filter(filterGenres)
      .map(item => item.name)
      .join(', ');


  return (
    <Card style={CardStyle} width={180}>
      <Link to={singleFilmLink} className='single-movie'>
        <div className='single-movie-image'>
          <div onClick={handleClick} className={favBtnClass}>
            <div className='favorite-icon'></div>
          </div>
          <div className='play-button'>
            <div className='play-icon'></div>
          </div>
          <CardImage style={{borderRadius: '5px'}} src={taboo} />
        </div>
        <Heading size={3}>
          {movie.original_title}
        </Heading>
        <Text>
          {genreNames}
        </Text>
      </Link>
    </Card>
  )
}

export default Movie;
