import moviesReducer from '../client/js/reducers/moviesReducer';

describe('moviesReducer', () => {
    it('should save movies in store', () => {
        const testData = [{ id: 1, genres: [] }, { id: 2, genres: [] }];

        let action = {
            type: 'FETCH_MOVIES_FULFILLED',
            payload: testData
        };

        let result = moviesReducer(null, action);
        expect(result).toMatchObject({
            movies: testData,
            fetched: true
        });
    });

    it('should sort movies properly', () => {
        const testData = [
            { id: 1, release_date: '2016', vote_average: 9 },
            { id: 2, release_date: '2017', vote_average: 7 },
            { id: 3, release_date: '2018', vote_average: 6 },
            { id: 4, release_date: '2015', vote_average: 8 }
        ];

        let action = {
            type: 'SORT_MOVIES',
            payload: 'release'
        };

        let result = moviesReducer({movies: testData}, action)
        expect(result).toMatchObject({
            movies: [
                { id: 3, release_date: '2018', vote_average: 6 },
                { id: 2, release_date: '2017', vote_average: 7 },
                { id: 1, release_date: '2016', vote_average: 9 },
                { id: 4, release_date: '2015', vote_average: 8 },
            ]
        });

        action.payload = 'rating';

        result = moviesReducer({ movies: testData }, action)
        expect(result).toMatchObject({
            movies: [
                { id: 1, release_date: '2016', vote_average: 9 },
                { id: 4, release_date: '2015', vote_average: 8 },
                { id: 2, release_date: '2017', vote_average: 7 },
                { id: 3, release_date: '2018', vote_average: 6 },
            ]
        });
    });
});