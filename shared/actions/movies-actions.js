import { call, put, all, takeLatest } from 'redux-saga/effects';

export const FETCH_MOVIES_FULFILLED = 'FETCH_MOVIES_FULFILLED';
export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const SORT_MOVIES = 'SORT_MOVIES';
export const FETCH_MOVIE_FULFILLED = 'FETCH_MOVIE_FULFILLED';
export const FETCH_RELATED_MOVIES_FULFILLED = 'FETCH_THE_SAME_GENRE_MOVIES_FULFILLED';
export const FETCH_REJECTED = 'FETCH_REJECTED';
export const SEARCH_BY = 'SEARCH_BY';
export const url = 'http://react-cdp-api.herokuapp.com/movies';

let params;
let id;

export const moviesFetched = payload => (
  { type: FETCH_MOVIES_FULFILLED, payload }
);

export const movieFetched = payload => (
  { type: FETCH_MOVIE_FULFILLED, payload }
);

export function* fetchMoviesAsync() {
  let urlWithParams = `${url}?limit=12`;

  for (const key in params) {
    const value = params[key];
    urlWithParams += `&${key}=${value}`;
  }

  const response = yield call(fetch, urlWithParams);
  const movies = yield response.json();

  yield put(moviesFetched(movies.data));
}

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES_REQUEST, fetchMoviesAsync);
}

export function* fetchMovieByIdAsync() {
  const response = yield call(fetch, `${url}/${id}`);
  const movie = yield response.json();

  const newUrl = `${url}?limit=12&searchBy=genres&search=${movie.genres[0]}`;

  const response2 = yield call(fetch, newUrl);
  const relatedMovies = yield response2.json();

  yield put(movieFetched({ movie, relatedMovies: relatedMovies.data }));
}

export function* watchFetchMovieById() {
  yield takeLatest(FETCH_MOVIE_REQUEST, fetchMovieByIdAsync);
}

export function* moviesSaga() {
  yield all([
    watchFetchMovies(),
    watchFetchMovieById(),
  ]);
}

export const fetchMovies = (_params) => {
  params = _params;
  return { type: FETCH_MOVIES_REQUEST };
};

export const fetchMovieById = (_id) => {
  id = _id;
  return { type: FETCH_MOVIE_REQUEST };
};

export const sortMovies = payload => (
  { type: SORT_MOVIES, payload }
);

export const fetchRejected = err => (
  { type: FETCH_REJECTED, payload: { errorMessage: err } }
);

export const changeSearchBy = payload => (
  { type: SEARCH_BY, payload }
);
