import React from 'react';
import Alert from 'react-s-alert';

import { inFavorites } from '../utils';

const alertProps = {
    position: 'bottom-right',
    effect: 'scale',
    timeout: 3000,
};

function FavoriteButton(props) {
    const { favorites, movie, removeFavorites, addFavorites } = props;

    const favBtnClass = inFavorites(movie, favorites)
        ? 'favorite-button fav-added'
        : 'favorite-button';

    const handleClick = e => {
        e.preventDefault();
        e.stopPropagation();
        const inFav = inFavorites(movie, favorites);
        if (inFav) {
            removeFavorites(movie.id);
        } else {
            addFavorites(movie.id);
        }
        const message = inFav
            ? `${movie.title} removed from your favorites list`
            : `${movie.title} added to your favorites list`;
        Alert.info(message, alertProps);
    };

    return (
        <div onClick={handleClick} className={favBtnClass}>
            <div className="favorite-icon" />
        </div>
    );
}

FavoriteButton.propTypes = {
    addFavorites: React.PropTypes.func.isRequired,
    removeFavorites: React.PropTypes.func.isRequired,
    favorites: React.PropTypes.array.isRequired,
    movie: React.PropTypes.object.isRequired,
};

export default FavoriteButton;
