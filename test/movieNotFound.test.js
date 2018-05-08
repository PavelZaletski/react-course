import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import React from 'react';
import MovieNotFound from '../client/js/components/movieNotFound';

describe('MovieNotFound', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<MovieNotFound />).toJSON();
        expect(component).toMatchSnapshot();
    });
});