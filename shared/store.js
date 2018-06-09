import { applyMiddleware, createStore } from 'redux';
import reducer, { rootSaga } from './reducers';
import createSagaMiddleware, { END } from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const getStore = (initialState) => {
  const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);

  return store;
};

export const store = getStore();
