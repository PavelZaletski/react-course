import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import React from 'react';
import { MoviesList } from '../client/js/components/moviesList';

describe('MoviesList', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<MoviesList data={[]} />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('should match snapshot', () => {
        const data = [{ id: 1, genres: [] }, { id: 2, genres: [] }]
        const component = renderer.create(<MoviesList data={data} />).toJSON();
        expect(component).toMatchSnapshot();
    });
});