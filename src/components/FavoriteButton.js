import React from 'react';

const inFavorites = (movie, favorites) => {
  return favorites
    .map(item => item.id)
    .includes(movie.id)
}

const FavoriteButton = (props) => {
  const { favorites, movie, removeFavorites, addFavorites } = props;

  const favBtnClass =
    (inFavorites(movie, favorites)) ?
    'favorite-button fav-added' :
    'favorite-button';

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    (inFavorites(movie, favorites)) ? removeFavorites(movie.id) : addFavorites(movie.id)
  } //impure

  return (
    <div onClick={handleClick} className={favBtnClass}>
      <div className='favorite-icon'></div>
    </div>
  )
}

export { inFavorites };
export default FavoriteButton;
