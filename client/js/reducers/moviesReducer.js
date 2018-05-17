import {
	FETCH_MOVIES_FULFILLED,
	FETCH_MOVIES_REQUEST,
	SORT_MOVIES
} from '../actions/movies-actions';

let initialState = {
	movies: [],
	fetched: false,
	sortBy: 'release'
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
				movies: action.payload
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

