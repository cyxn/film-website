import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Movie from './Movie';
import MySpinner from './MySpinner';
import '../styles/FilmsList.sass';

const FilmsList = (
    { movies, dataReady, page = 0, RequestActions, ...rest }
) => {
    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={RequestActions.fetchFilms.bind(null, page + 1)}
            hasMore={true}
            initialLoad={true}
            loader={MySpinner}
        >

            <div className="movies-list">
                {movies.map((item, i) => {
                    return (
                        <Movie
                            movie={item}
                            key={i}
                            RequestActions={RequestActions}
                            {...rest}
                        />
                    );
                })}
            </div>
            {!dataReady && <MySpinner />}
        </InfiniteScroll>
    );
};

export default FilmsList;
