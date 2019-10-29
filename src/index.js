import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import {routerMiddleware, ConnectedRouter} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';

import createRootReducer from 'reducers';
import routes from 'routes';

import ErrorBoundary from 'components/error-boundary';

const history = createBrowserHistory();
const middleware = [thunk, routerMiddleware(history)];
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ConnectedRouter history={history}>
                {routes}
            </ConnectedRouter>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);