import {
	FETCH_MOVIES_FULFILLED,
	FETCH_MOVIES_REQUEST,
	FETCH_MOVIE_REQUEST,
	FETCH_RELATED_MOVIES_REQUEST,
	SORT_MOVIES,
	FETCH_MOVIE_FULFILLED,
	FETCH_RELATED_MOVIES_FULFILLED,
	FETCH_REJECTED,
	SEARCH_BY
} from '../actions/movies-actions';

let initialState = {
	movies: [],
	isFetching: false,
	fetched: false,
	sortBy: 'release',
	selectedMovie: {},
	selectedMovieFetched: false,
	relatedMovies: [],
	errorMessage: null,
	searchBy: 'title'
};

export default function (state = initialState, action){
	switch(action.type){
		case FETCH_MOVIE_REQUEST:
		case FETCH_RELATED_MOVIES_REQUEST:
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
			console.log(action.payload);
			return {
				...state,
				isFetching: false,
				selectedMovie: action.payload.movie,
				selectedMovieFetched: true,
				errorMessage: null,
				relatedMovies: action.payload.relatedMovies
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

		case SEARCH_BY: {
			return {
				...state,
				searchBy: action.payload
			};
		}
	}
	
	return state;
}

