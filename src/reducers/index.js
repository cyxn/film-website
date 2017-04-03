import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import page from './page';
import films from './films';
import detailedFilm from './detailedFilm';

export default combineReducers({
    page,
    films,
    detailedFilm,
    routing: routerReducer,
});
