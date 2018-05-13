import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import React from 'react';
import { MoviesList } from '../client/js/components/moviesList';
import { Provider } from 'react-redux';
import { getStore } from '../client/js/store';

describe('MoviesList', () => {
    it('should match snapshot', () => {
        const data = [{ id: 1, genres: [] }, { id: 2, genres: [] }];

        let initialState = {
            movies: {
                movies: data
            }
        };

        const store = getStore(initialState);

        const component = renderer.create(
            <Provider store={store}>
                <MoviesList />
            </Provider>
        ).toJSON();

        expect(component).toMatchSnapshot();
    });
});