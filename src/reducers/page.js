import {
  ADD_FAVORITES, REMOVE_FAVORITES
} from '../constants/ActionTypes';

const initialState = {
  favoritesList: JSON.parse(localStorage.getItem('favoritesList')) || []
}

export default function page(state = initialState, action) {
  const { id, filmsArr, currentFilm, type } = action;
  const indexById = (id, filmsArr) => {
    return filmsArr.map(item => item.id).indexOf(id);
  }

  switch (type) {
    case ADD_FAVORITES:
      const newFavList =
        (filmsArr.length === 0) ?
          [...state.favoritesList, currentFilm]:
          [...state.favoritesList, filmsArr[indexById(id, filmsArr)]];
      localStorage.setItem('favoritesList', JSON.stringify(newFavList));
      return {...state, favoritesList: newFavList};

    case REMOVE_FAVORITES:
      const index = indexById(id, state.favoritesList);
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
