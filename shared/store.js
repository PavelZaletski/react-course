import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from './reducers';

const middleware = applyMiddleware(promise(), thunk);

export let store = createStore(reducer, {}, middleware);

export const getStore = (state = {}) => {
    store = createStore(reducer, state, middleware);
    return store;
};
