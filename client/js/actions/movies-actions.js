import axios from 'axios';

const url = 'http://react-cdp-api.herokuapp.com/movies'

export function fetchMovies(params){
	return function (dispatch) {
		params.limit = 12;
		return axios({
			url: url,
			method: 'get',
			params
		})
		.then((response) => {
			dispatch({ type: 'FETCH_MOVIES_FULFILLED', payload: response.data.data });
		});
	}
}

export function sortMovies(param) {
	return function (dispatch) {
		dispatch({ type: 'SORT_MOVIES', payload: param });
	}
}
