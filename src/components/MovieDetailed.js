import React from 'react';
import FavoriteButton from './FavoriteButton';
import './MovieDetailed.sass';

const MovieDetailed = (props) => {
  const {currentFilm, favorites, FilmsListActions} = props;
  const {addFavorites, removeFavorites} = FilmsListActions;
  return (
    <div className='movie-detailed'>
      <div className='movie-detailed-header'>
        <div className='film-title'>
          <h1>{currentFilm.original_title}</h1>
          <h2>{currentFilm.tagline}</h2>
        </div>
        <div className='favorite'>
          <FavoriteButton
              favorites={favorites}
              movie={currentFilm}
              addFavorites={addFavorites}
              removeFavorites={removeFavorites} />
        </div>
      </div>
    </div>
  )
}

export default MovieDetailed;
