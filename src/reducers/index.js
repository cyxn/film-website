import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import page from './page'
import films from './films'

export default combineReducers({
  page,
  films,
  routing: routerReducer
})
