import {
  ADD_FAVORITES, REMOVE_FAVORITES, FILM_DETAIL
} from '../constants/ActionTypes';

export function addFavorites(id) {
  return (dispatch, getState) => {
    const filmsArr = getState().films.filmsArr;
    return dispatch({
      type: ADD_FAVORITES,
      filmsArr,
      id
    })
  }
}

export function removeFavorites(id) {
  return (dispatch, getState) => {
    const filmsArr = getState().films.filmsArr;
    return dispatch({
      type: REMOVE_FAVORITES,
      filmsArr,
      id
    })
  }
}

export function filmDetail(id) {
  return {
    type: FILM_DETAIL,
    id
  }
}
