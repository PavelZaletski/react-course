import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import React from 'react';
import { MoviePage } from '../client/js/components/moviePage';

describe('MoviePage', () => {
    it('should match snapshot', () => {
        let component = renderer.create(<MoviePage />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('should match snapshot', () => {
        const item = {
            poster_path: 'test',
            title: 'title',
            release_date: '2015-01-01',
            tagline: 'some description...',
            overview: 'lorem ipsum dolor'
        };

        let component = renderer.create(<MoviePage item={item} />).toJSON();
        expect(component).toMatchSnapshot();

        item.runtime = 100;

        component = renderer.create(<MoviePage item={item} />).toJSON();
        expect(component).toMatchSnapshot();
    });
});