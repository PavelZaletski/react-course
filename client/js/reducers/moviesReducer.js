import {
	FETCH_MOVIES_FULFILLED,
	FETCH_MOVIES_REQUEST,
	SORT_MOVIES,
	FETCH_MOVIE_FULFILLED,
	FETCH_RELATED_MOVIES_FULFILLED,
	FETCH_REJECTED
} from '../actions/movies-actions';

let initialState = {
	movies: [],
	isFetching: false,
	fetched: false,
	sortBy: 'release',
	selectedMovie: {},
	selectedMovieFetched: false,
	relatedMovies: [],
	errorMessage: null
};

export default function (state = initialState, action){
	switch(action.type){
		case FETCH_MOVIES_REQUEST: {
			return {
				...state,
				isFetching: true
			};
		}

		case FETCH_MOVIES_FULFILLED: {
			return {
				...state,
				fetched: true,
				isFetching: false,
				movies: action.payload,
				errorMessage: null
			};
		}

		case FETCH_MOVIE_FULFILLED: {
			return {
				...state,
				isFetching: false,
				selectedMovie: action.payload,
				selectedMovieFetched: true,
				errorMessage: null
			};
		}

		case FETCH_RELATED_MOVIES_FULFILLED: {
			return {
				...state,
				isFetching: false,
				relatedMovies: action.payload,
				errorMessage: null
			};
		}

		case FETCH_REJECTED: {
			return {
				...state,
				errorMessage: action.payload
			};
		}

		case SORT_MOVIES: {
			let movies;
			let sortBy = action.payload;
			let sortFunc;

			if (sortBy === 'release') {
				sortFunc = (a, b) => new Date(b.release_date) - new Date(a.release_date);
			} else {
				sortFunc = (a, b) => b.vote_average - a.vote_average;
			}

			return { 
				...state,
				movies: [...state.movies].sort(sortFunc),
				sortBy
			};
		}
	}
	
	return state;
}

