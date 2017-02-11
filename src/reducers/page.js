import {
  ADD_FAVORITES, REMOVE_FAVORITES
} from '../constants/ActionTypes';

const initialState = {
  favoritesList: JSON.parse(localStorage.getItem('favoritesList')) || []
}

export default function page(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITES:
      const newFavList = [...state.favoritesList, action.id];
      localStorage.setItem('favoritesList', JSON.stringify(newFavList));
      return {...state, favoritesList: newFavList};
    case REMOVE_FAVORITES:
      const index = state.favoritesList.indexOf(action.id);
      const newFavList2 = [
        ...state.favoritesList.slice(0, index),
        ...state.favoritesList.slice(index + 1)
      ];
      localStorage.setItem('favoritesList', JSON.stringify(newFavList2));
      return {
        ...state,
        favoritesList: newFavList2
      }

    default:
      return state;
  }
}
