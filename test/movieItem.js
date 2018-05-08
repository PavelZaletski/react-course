import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import React from 'react';
import MovieItem from '../client/js/components/movieItem';

describe('MovieItem', () => {
    it('should match snapshot', () => {
        const item = {
            genres: ['comedy', 'drama'],
            poster_path: 'test',
            title: 'title',
            release_date: '2015-01-01'
        };

        const component = renderer.create(<MovieItem item={item} />).toJSON();

        expect(component).toMatchSnapshot();
    });
});