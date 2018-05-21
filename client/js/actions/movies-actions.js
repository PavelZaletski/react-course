import fetch from 'cross-fetch';

export const FETCH_MOVIES_FULFILLED = 'FETCH_MOVIES_FULFILLED';
export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const SORT_MOVIES = 'SORT_MOVIES';
const url = 'http://react-cdp-api.herokuapp.com/movies'

export const fetchMovies = (params) => (dispatch) => {
	dispatch(requestMovies())
	let urlWithParams = url + '?limit=12';

	for (let key in params) {
		const value = params[key];
		urlWithParams += `&${key}=${value}`;
	}

	return fetch(urlWithParams, {
			method: 'get'
		})
		.then(res => res.json())
		.then(({data}) =>
			dispatch(moviesFetched(data))
		);
}

export const moviesFetched = (payload) => (
	{ type: FETCH_MOVIES_FULFILLED, payload }
);

export const requestMovies = () => (
	{ type: FETCH_MOVIES_REQUEST }
);

export const sortMovies = (payload) => (
	{ type: SORT_MOVIES, payload }
);
