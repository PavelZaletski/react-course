import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import React from 'react';
import Footer from '../client/js/components/footer';

describe('Footer', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<Footer />).toJSON();

        expect(component).toMatchSnapshot();
    });
});