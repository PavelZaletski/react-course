import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import movies from './moviesReducer';
import { moviesSaga } from '../actions/movies-actions';

export function* rootSaga() {
	yield all([
		moviesSaga(),
	]);
}

export default combineReducers({
	movies
});
