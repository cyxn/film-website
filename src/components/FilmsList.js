import React from 'react';
import './FilmsList.sass';
import Movie from './Movie';
import MDSpinner from 'react-md-spinner';
import InfiniteScroll from 'react-infinite-scroller';
//import { Link } from 'react-router';


const FilmsList = ({movies, dataReady, page, RequestActions, ...rest}) => {

  //NOTE: maybe change spinner to react-redux-loading-bar
  const MySpinner = () => (
    <div className='movies-list'>
      <MDSpinner
          className='spinner'
          size='55'
          singleColor='rgb(66, 165, 245)'/>
    </div>
  )
  page = page || 0;
  return (
    <InfiniteScroll
        pageStart={0}
        loadMore={RequestActions.fetchFilms.bind(null, page + 1)}
        hasMore={true}
        initialLoad={true}
        loader={MySpinner}>

        <div className='movies-list'>
          {movies.map((item, i) => {
            return <Movie movie={item} key={i} {...rest} />
          })}
        </div>
        {!dataReady && <MySpinner />}
    </InfiniteScroll>
  )
}

export default FilmsList;
