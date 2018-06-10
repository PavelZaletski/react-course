import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter } from 'react-router-dom';
import './less/style';
import 'babel-polyfill';
import Root from '../shared/root';
import { getStore } from '../shared/store';

const store = getStore(window.PRELOADED_STATE);

const root = document.getElementById('root');
Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(
    (
        <Root
            Router={BrowserRouter}
            store={store}
        />
    ), root,
  );
});
