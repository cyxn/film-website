import React from 'react';
import FavoriteButton from './FavoriteButton';

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
      <img style={{borderRadius: '5px'}}
       src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
       alt={movie.title} />
    </div>
  )
}

export default MovieImage;
