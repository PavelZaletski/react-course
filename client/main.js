import './less/style';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './js/store';
import App from './js/app';

// const store = createNewStore(window.PRELOADED_STATE);

delete window.PRELOADED_STATE;

const root = document.getElementById('root');

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), root)
