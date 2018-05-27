export const FETCH_MOVIES_FULFILLED = 'FETCH_MOVIES_FULFILLED';
export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const SORT_MOVIES = 'SORT_MOVIES';
export const FETCH_MOVIE_FULFILLED = 'FETCH_MOVIE_FULFILLED';
export const FETCH_RELATED_MOVIES_FULFILLED = 'FETCH_THE_SAME_GENRE_MOVIES_FULFILLED';
export const FETCH_REJECTED = 'FETCH_REJECTED';
export const url = 'http://react-cdp-api.herokuapp.com/movies'

export const fetchMovies = (params) => (dispatch) => {
	dispatch(requestSent())
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
		)
		.catch(err =>
			dispatch(fetchRejected('Fetch movies error. Please, try again.'))
		);
}

export const fetchMovieById = (id) => (dispatch) => {
	dispatch(requestSent())

	return fetch(`${url}/${id}`)
		.then(res => res.json())
		.then(( data ) => (
			dispatch(movieFetched(data))
		))
		.then((data) => (
			dispatch(fetchMoviesByGenres(data.payload.genres))
		))
		.catch(err =>
			dispatch(fetchRejected('Fetch movie error. Please, try again.'))
		);
}

export const fetchMoviesByGenres = (genres) => (dispatch) => {
	let newUrl = url + '?limit=12&searchBy=genres&search=' + genres[0];

	return fetch( newUrl)
		.then(res => res.json())
		.then(({ data }) =>
			dispatch(relatedFetched(data))
		);
}

export const moviesFetched = (payload) => (
	{ type: FETCH_MOVIES_FULFILLED, payload }
);

export const movieFetched = (payload) => (
	{ type: FETCH_MOVIE_FULFILLED, payload }
);

export const requestSent = () => (
	{ type: FETCH_MOVIES_REQUEST }
);

export const sortMovies = (payload) => (
	{ type: SORT_MOVIES, payload }
);

export const relatedFetched = (payload) => (
	{ type: FETCH_RELATED_MOVIES_FULFILLED, payload }
);

export const fetchRejected = (err) => (
	{ type: FETCH_REJECTED, payload: { errorMessage: err } }
);
