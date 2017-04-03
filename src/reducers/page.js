import { ADD_FAVORITES, REMOVE_FAVORITES } from '../constants/ActionTypes';

const initialState = {
    favoritesList: JSON.parse(localStorage.getItem('favoritesList')) || [],
};

export default function page(state = initialState, action) {
    const { id, filmsArr, currentFilm, type } = action;
    const indexById = (id, filmsArr) => {
        return filmsArr.map(item => item.id).indexOf(id);
    };

    switch (type) {
        case ADD_FAVORITES:
            const newFavList = indexById(id, filmsArr) === -1
                ? [...state.favoritesList, currentFilm]
                : [...state.favoritesList, filmsArr[indexById(id, filmsArr)]];
            localStorage.setItem('favoritesList', JSON.stringify(newFavList));
            return { ...state, favoritesList: newFavList };

        case REMOVE_FAVORITES:
            const index = indexById(id, state.favoritesList);
            const newFavList2 = state.favoritesList.filter(
                (item, i) => i !== index
            );
            localStorage.setItem('favoritesList', JSON.stringify(newFavList2));
            return {
                ...state,
                favoritesList: newFavList2,
            };

        default:
            return state;
    }
}
