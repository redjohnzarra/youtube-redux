import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route }  from 'react-router';
import { createStore, applyMiddleWare } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './stores/configureStore'
import App from './containers/App';
import './styles/bootstrap.min.css';
import './styles/app.css';

var initialState = {};
const store = configureStore(initialState, browserHistory);
const enhancedHistory = syncHistoryWithStore(browserHistory, store);

var Routes=(
    <Provider store={store}>
        <Router history={enhancedHistory}>
            <Route path="/" component={App}>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(Routes, document.getElementById('app'));
