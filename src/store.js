import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createLogger from 'redux-logger';

export function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware, logger)
    );
    return store;
}

export function configureHistory(store) {
    const history = syncHistoryWithStore(browserHistory, store);
    return history;
}
