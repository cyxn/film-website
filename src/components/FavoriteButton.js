import React from 'react';

const FavoriteButton = (props) => {
  const { favorites, movie, removeFavorites, addFavorites } = props;
  const inFavorites = () => {
    return favorites
      .map(item => item.id)
      .includes(movie.id)
  }

  const favBtnClass =
    (inFavorites()) ?
    'favorite-button fav-added' :
    'favorite-button';

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    (inFavorites()) ? removeFavorites(movie.id) : addFavorites(movie.id)
  }

  return (
    <div onClick={handleClick} className={favBtnClass}>
      <div className='favorite-icon'></div>
    </div>
  )
}

export default FavoriteButton;
