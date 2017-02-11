import {
  ADD_FAVORITES, REMOVE_FAVORITES
} from '../constants/ActionTypes';

const initialState = {
  favoritesList: []
}

export default function page(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITES:
      return {...state, favoritesList: [...state.favoritesList, action.id]}
    case REMOVE_FAVORITES:
      const index = state.favoritesList.indexOf(action.id);
      return {
        ...state,
        favoritesList: [
          ...state.favoritesList.slice(0, index),
          ...state.favoritesList.slice(index + 1)
        ]
      }
    default:
      return state;
  }
}
