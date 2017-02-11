import fetch from 'isomorphic-fetch'

import {
  REQUEST_FILMS, RECEIVE_FILMS
} from '../constants/ActionTypes'

export function requestFilms() {
  return {
    type: REQUEST_FILMS
  }
}

export function receiveFilms(json, page) {
  return {
    type: RECEIVE_FILMS,
    page,
    films: json.results.map(item => item)
  }
}

export function fetchFilms(page = 1) {
  const link = `https://api.themoviedb.org/3/movie/popular?api_key=3e8db561aa337020f5a1157b37dfd439&language=en-US&page=${page}`
  return dispatch => {
    dispatch(requestFilms())
    return fetch(link)
      .then(response => response.json())
      .then(json => dispatch(receiveFilms(json, page)))
  }
}
