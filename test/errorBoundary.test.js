import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import React from 'react';
import { ErrorBoundary } from '../client/js/components/errorBoundary';

describe('ErrorBoundary', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<ErrorBoundary><div>movies</div></ErrorBoundary>).toJSON();
        expect(component).toMatchSnapshot();
    });
});