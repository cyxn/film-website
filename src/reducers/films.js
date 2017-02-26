import {
  REQUEST_FILMS, RECEIVE_FILMS,
  LOAD_FAVORITES, SEARCH,
  RECEIVE_SEARCH
} from '../constants/ActionTypes';
import genres from '../constants/genres';

const initialState = {
  dataReady: false,
  genres: genres,
  quantity: 5,
  filmsArr: [],
  searchResult: []
}

export default function films(state = initialState, action) {
  switch (action.type) {
    case REQUEST_FILMS:
      return {...state, isFetching: true, dataReady: false}
    case RECEIVE_FILMS:
      return Object.assign({}, state, {
        isFetching: false,
        dataReady: true,
        page: action.page,
        filmsArr: [...state.filmsArr, ...action.films]
      })
    case LOAD_FAVORITES:
      return {...state, quantity: state.quantity + 5}
    case SEARCH:
      return {...state, isSearching: true}
    case RECEIVE_SEARCH:
      return Object.assign({}, state, {
        isSearching: false,
        searchResult: action.searchResult
      })
    default:
      return state;
  }
}
