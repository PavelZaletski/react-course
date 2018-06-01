import './less/style';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../shared/store';
import Root from '../shared/root';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';

const root = document.getElementById('root');

ReactDOM.render((
    <Root
        Router={BrowserRouter}
        store={store}
    />
), root);

