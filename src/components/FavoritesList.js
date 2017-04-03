import React from 'react';
import { Link } from 'react-router';
import { Button } from 'rebass';
import InfiniteScroll from 'react-infinite-scroller';

import MySpinner from './MySpinner';
import { findGenreNames } from '../utils';
import MovieImage from './MovieImage';
import '../styles/FavoritesList.sass';

function FavoritesList(props) {
    const { favorites, quantity, FilmsListActions, genres } = props;
    function hasMoreItems(favorites, quantity) {
        return quantity < favorites.length;
    }
    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={FilmsListActions.loadFavorites}
            hasMore={hasMoreItems(favorites, quantity)}
            initialLoad={false}
            loader={MySpinner}
        >
            <div className="favorites-list">
                <h1>Your Favorites list</h1>
                {favorites.map((item, i) => {
                    if (i >= quantity) return null;
                    const link = `/view/${item.id}`;
                    return (
                        <div key={i} className="favorite-item">
                            <Link to={link} className="single-movie">
                                <MovieImage movie={item} {...props} />
                            </Link>
                            <div className="favorite-item-info">
                                <h2>{item.title}</h2>
                                <p className="fav-item-genre">
                                    {findGenreNames(item, genres)}
                                </p>
                                <p className="fav-item-overview">
                                    {item.overview}
                                </p>
                                <Link to={link}>
                                    <Button
                                        backgroundColor="blue"
                                        color="white"
                                        theme={null}
                                    >
                                        Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </InfiniteScroll>
    );
}

FavoritesList.propTypes = {
    FilmsListActions: React.PropTypes.object.isRequired,
    favorites: React.PropTypes.array.isRequired,
    genres: React.PropTypes.array.isRequired,
    quantity: React.PropTypes.number.isRequired,
};

export default FavoritesList;
