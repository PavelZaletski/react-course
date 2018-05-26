import './less/style';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './js/store';
import RootRouter from './js/rootRouter';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

const root = document.getElementById('root');

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <RootRouter />
        </Router>
    </Provider>
), root)
