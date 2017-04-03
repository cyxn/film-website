import {
    REQUEST_FILMS,
    RECEIVE_FILMS,
    LOAD_FAVORITES,
    SEARCH,
    RECEIVE_SEARCH,
} from '../constants/ActionTypes';
import genres from '../constants/genres';

const initialState = {
    dataReady: false,
    genres: genres,
    quantity: 5,
    filmsArr: [],
    searchResult: [],
};

const redObj = {
    [REQUEST_FILMS]: (state, action) => ({
        ...state,
        isFetching: true,
        dataReady: false,
    }),
    [LOAD_FAVORITES]: (state, action) => ({
        ...state,
        quantity: state.quantity + 5,
    }),
    [SEARCH]: (state, action) => ({ ...state, isSearching: true }),
    [RECEIVE_SEARCH]: (state, action) => ({
        ...state,
        isSearching: false,
        searchResult: action.payload,
    }),
    [RECEIVE_FILMS]: (state, action) => {
        return Object.assign({}, state, {
            isFetching: false,
            dataReady: true,
            page: action.page,
            filmsArr: [...state.filmsArr, ...action.payload],
        });
    },
};

export default function films(state = initialState, action) {
    const executor = redObj[action.type];
    if (!executor) return state;
    return executor(state, action);
}
