import {
  ADD_FAVORITES, REMOVE_FAVORITES
} from '../constants/ActionTypes';

export function addFavorites(id) {
  return {
    type: ADD_FAVORITES,
    id
  }
}

export function removeFavorites(id) {
  return {
    type: REMOVE_FAVORITES,
    id
  }
}
