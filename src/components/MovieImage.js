import React from 'react';
import FavoriteButton from './FavoriteButton';

const imageStyle = {
    borderRadius: '5px',
    minHeight: '270px',
};

function MovieImage(props) {
    const { favorites, movie, FilmsListActions } = props;
    const { addFavorites, removeFavorites } = FilmsListActions;
    return (
        <div className="single-movie-image">
            <FavoriteButton
                favorites={favorites}
                movie={movie}
                addFavorites={addFavorites}
                removeFavorites={removeFavorites}
            />
            <div className="play-button">
                <div className="play-icon" />
            </div>
            <img
                style={imageStyle}
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                alt={movie.title}
            />
        </div>
    );
}

MovieImage.propTypes = {
    FilmsListActions: React.PropTypes.object.isRequired,
    favorites: React.PropTypes.array.isRequired,
    movie: React.PropTypes.object.isRequired,
};

export default MovieImage;
