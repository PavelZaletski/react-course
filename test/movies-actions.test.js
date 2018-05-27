import * as actions from '../client/js/actions/movies-actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });

    it('creates FETCH_MOVIES_FULFILLED when fetching movies has been done', () => {
        const text = 'test';
        const data = {
            body: {
                data: [text]
            },
            headers: {
                'content-type': 'application/json'
            } 
        };
        const params = { search: 'rocky', searchBy: 'title' };
        let url = 'http://react-cdp-api.herokuapp.com/movies?limit=12';

        for (let key in params) {
            const value = params[key];
            url += `&${key}=${value}`;
        }

        fetchMock.getOnce(url, data);

        const expectedActions = [
            { type: actions.FETCH_MOVIES_REQUEST },
            { type: actions.FETCH_MOVIES_FULFILLED, payload: [text] }
        ];
        const store = mockStore({ movies: { movies:[] } });

        return store.dispatch(actions.fetchMovies(params)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
});

describe('actions', () => {
    it('should create an action to fetch movies', () => {
        const payload = 'lorem ipsum dolor';
        const expectedAction = {
            type: actions.FETCH_MOVIES_FULFILLED,
            payload
        }
        expect(actions.moviesFetched(payload)).toEqual(expectedAction)
    });
});

describe('actions', () => {
    it('should create an action to sort movies', () => {
        const payload = 'lorem ipsum';
        const expectedAction = {
            type: actions.SORT_MOVIES,
            payload
        }
        expect(actions.sortMovies(payload)).toEqual(expectedAction)
    });
});

describe('actions', () => {
    it('should create an action to request movies', () => {
        const expectedAction = {
            type: actions.FETCH_MOVIES_REQUEST
        }
        expect(actions.requestSent()).toEqual(expectedAction)
    });
});

describe('actions', () => {
    it('should create an action to request movie', () => {
        const payload = 'test';
        const expectedAction = {
            type: actions.FETCH_MOVIE_FULFILLED,
            payload
        }
        expect(actions.movieFetched(payload)).toEqual(expectedAction)
    });
});

describe('actions', () => {
    it('should create an action to request related movie', () => {
        const payload = 'test';
        const expectedAction = {
            type: actions.FETCH_RELATED_MOVIES_FULFILLED,
            payload
        }
        expect(actions.relatedFetched(payload)).toEqual(expectedAction)
    });
});

describe('actions', () => {
    it('should create an action to request related movie', () => {
        const payload = 'test';
        const expectedAction = {
            type: actions.FETCH_REJECTED,
            payload: { errorMessage: payload}
        };
        expect(actions.fetchRejected(payload)).toEqual(expectedAction)
    });
});