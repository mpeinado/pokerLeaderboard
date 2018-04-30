import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter } from 'react-router-redux';
import allReducers from './reducers';

import LeaderboardPage from './containers/leaderboard/LeadearboardPage';
import App from './components/App';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                <Route exact path="/" component={LeaderboardPage}/>
            </App>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

