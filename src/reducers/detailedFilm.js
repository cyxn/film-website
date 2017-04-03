import { FILM_DETAIL, RECEIVE_DETAILED } from '../constants/ActionTypes';

const initialState = {
    currentFilm: [],
};

export default function detailedFilm(state = initialState, action) {
    switch (action.type) {
        case FILM_DETAIL:
            return {
                ...state,
                isFetching: true,
                dataReady: false,
            };
        case RECEIVE_DETAILED:
            return Object.assign({}, state, {
                isFetching: false,
                dataReady: true,
                id: action.id,
                currentFilm: action.detailed,
                recommendations: action.recommendations.results,
                similar: action.similar.results,
            });
        default:
            return state;
    }
}
