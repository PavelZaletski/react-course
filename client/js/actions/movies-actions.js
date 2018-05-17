import axios from 'axios';

export const FETCH_MOVIES_FULFILLED = 'FETCH_MOVIES_FULFILLED';
export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const SORT_MOVIES = 'SORT_MOVIES';
const url = 'http://react-cdp-api.herokuapp.com/movies'

export const fetchMovies = (params) => (dispatch) => {
	dispatch(requestMovies())
	params.limit = 12;

	return axios({
			url: url,
			method: 'get',
			params
		})
		.then(({data}) =>
			dispatch(moviesFetched(data.data))
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
