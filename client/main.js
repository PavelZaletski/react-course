import './less/style';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../shared/root';
import { Provider } from 'react-redux';
import { store } from '../shared/store';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';

const root = document.getElementById('root');

ReactDOM.hydrate((
    <Root
        Router={BrowserRouter}
        store={store}
    />
), root);

