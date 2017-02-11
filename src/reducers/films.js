import {
  REQUEST_FILMS, RECEIVE_FILMS
} from '../constants/ActionTypes';
import genres from '../constants/genres';

const initialState = {
  dataReady: false,
  genres: genres,
  filmsArr: []
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
    default:
      return state;
  }
}
