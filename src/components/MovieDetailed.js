import React from 'react';

import FavoriteButton from './FavoriteButton';
import MySpinner from './MySpinner';
import Movie from './Movie';
import '../styles/MovieDetailed.sass';
import { inFavorites } from '../utils';

function MovieDetailed(props) {
    const {
        currentFilm,
        favorites,
        FilmsListActions,
        dataReady,
        recommendations,
        similar,
        RequestActions,
        ...rest
    } = props;

    const { addFavorites, removeFavorites } = FilmsListActions;

    function moreFilms(films, text) {
        return (
            <div>
                <h2 className="more-film-header">{text}</h2>
                <div className="movies-list">
                    {films.map((item, i) => {
                        if (i > 3) return null;
                        return (
                            <Movie
                                movie={item}
                                favorites={favorites}
                                key={i}
                                RequestActions={RequestActions}
                                FilmsListActions={FilmsListActions}
                                {...rest}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
    if (!dataReady) return <MySpinner />;
    return (
        <div>
            <div className="movie-detailed">
                <div className="movie-detailed-header">
                    <div className="film-title">
                        <h1>{currentFilm.original_title}</h1>
                        <h2>{currentFilm.tagline}</h2>
                    </div>
                    <div className="favorite">
                        <div className="favorite-text">
                            {inFavorites(currentFilm, favorites)
                                ? <p>Delete from favorites</p>
                                : <p>Add to favorites</p>}
                        </div>
                        <FavoriteButton
                            favorites={favorites}
                            movie={currentFilm}
                            addFavorites={addFavorites}
                            removeFavorites={removeFavorites}
                        />
                    </div>
                </div>
                <div className="image-section">
                    <img
                        src={
                            `https://image.tmdb.org/t/p/w300_and_h450_bestv2${currentFilm.poster_path}`
                        }
                        style={{ minHeight: '370px' }}
                        width="250px"
                        alt={currentFilm.original_title}
                    />
                    <p>Rating: {currentFilm.vote_average}</p>
                </div>
                <div className="overview">
                    <h2>Overview: </h2>
                    <p className="overview-text">{currentFilm.overview}</p>
                    <p className="overview-text">
                        <b>Genres: </b>
                        {currentFilm.genres.map(item => item.name).join(', ')}
                    </p>
                    <p className="overview-text">
                        <b>Languages: </b>
                        {currentFilm.spoken_languages
                            .map(item => item.name)
                            .join(', ')}
                    </p>
                    <p className="overview-text">
                        <b>Release year: </b>
                        {currentFilm.release_date.split('-')[0]}
                    </p>
                    <p className="overview-text">
                        <b>Countries: </b>
                        {currentFilm.production_countries
                            .map(item => item.name)
                            .join(', ')}
                    </p>
                    {currentFilm.adult &&
                        <p className="overview-text">
                            <b>Age: </b>
                            18+
                        </p>}
                    <p className="overview-text">
                        <b>Status: </b>
                        {currentFilm.status}
                    </p>
                </div>
            </div>
            <div className="more-movies">
                {similar.length > 0 && moreFilms(similar, 'Similar')}
                {recommendations.length > 0 &&
                    moreFilms(recommendations, 'Recommended')}
            </div>
        </div>
    );
}

MovieDetailed.propTypes = {
    RequestActions: React.PropTypes.object.isRequired,
    FilmsListActions: React.PropTypes.object.isRequired,
    dataReady: React.PropTypes.bool,
    favorites: React.PropTypes.array.isRequired,
    recommendations: React.PropTypes.array,
    similar: React.PropTypes.array,
    currentFilm: React.PropTypes.object,
};

export default MovieDetailed;
