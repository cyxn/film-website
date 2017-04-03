import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import 'normalize.css';
import './index.css';
import App from './containers/App';
import Browse from './containers/Browse';
import Favorites from './containers/Favorites';
import SingleFilm from './containers/SingleFilm';
import { configureStore, configureHistory } from './store';

const store = configureStore();
const history = configureHistory(store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Browse} />
                <Route path="favorites" component={Favorites} />
                <Route path="view/:id" component={SingleFilm} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
