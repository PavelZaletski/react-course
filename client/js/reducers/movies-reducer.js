let initialState = {
	movies: [],
	fetched: false,
	sortBy: 'release'
};

export default function (state = initialState, action){
	switch(action.type){
		case 'FETCH_MOVIES_FULFILLED': {
			return Object.assign({}, state, {
				fetched: true,
				movies: action.payload
			});
		}

		case 'SORT_MOVIES': {
			let movies;
			let sortBy = action.payload;

			if (sortBy === 'release') {
				movies = state.movies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
			} else {
				movies = state.movies.sort((a, b) => b.vote_average - a.vote_average);
			}
			return Object.assign({}, state, {
				fetched: true,
				movies,
				sortBy
			});
		}
	}
	
	return state;
}

