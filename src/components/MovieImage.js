import React from 'react';
import { CardImage } from 'rebass';
import FavoriteButton from './FavoriteButton';
import taboo from '../img/taboo.jpg';

const MovieImage = (props) => {
  const { favorites, movie, FilmsListActions } = props;
  const {addFavorites, removeFavorites} = FilmsListActions;
  return (
    <div className='single-movie-image'>
      <FavoriteButton
          favorites={favorites}
          movie={movie}
          addFavorites={addFavorites}
          removeFavorites={removeFavorites} />
      <div className='play-button'>
        <div className='play-icon'></div>
      </div>
      <CardImage style={{borderRadius: '5px'}} src={taboo} />
    </div>
  )
}

export default MovieImage;
