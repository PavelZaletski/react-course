import './less/style';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../shared/root';
import { BrowserRouter } from 'react-router-dom';
import { getStore } from '../shared/store';
import Loadable from 'react-loadable';

const store = getStore(window.PRELOADED_STATE);

const root = document.getElementById('root');
Loadable.preloadReady().then(() => {
    ReactDOM.hydrate((
        <Root
            Router={BrowserRouter}
            store={store}
        />
    ), root);
});
