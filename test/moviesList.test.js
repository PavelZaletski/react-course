import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import React from 'react';
import { MoviesList } from '../client/js/components/moviesList';
import { Provider } from 'react-redux';
import { getStore } from '../client/js/store';
import { BrowserRouter as Router, MemoryRouter  } from 'react-router-dom';

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
                <MemoryRouter>
                    <MoviesList initialEntries={['/search/title/rocky']}/>
                </MemoryRouter>
            </Provider>
        ).toJSON();

        expect(component).toMatchSnapshot();
    });
});