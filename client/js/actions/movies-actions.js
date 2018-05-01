import axios from 'axios';

const url = 'http://react-cdp-api.herokuapp.com/movies'

export function fetchMovies(params){
	return axios({
		url: url,
		method: 'get',
		params
	});
}

