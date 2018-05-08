import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import React from 'react';
import { RadioInput } from '../client/js/components/radioInput';

describe('RadioInput', () => {
    it('should change data', () => {
        const eventMock = {
            target: {}
        };

        const mockCallback = jest.fn();
        const value = 'test1';
        const name = 'test2';
        const component = shallow(<RadioInput onChange={mockCallback} name={name} value={value} />);

        component.find('input').simulate('change', eventMock);
        expect(mockCallback).toHaveBeenCalled();

        const textValue = component
            .find('span')
            .text();

        expect(textValue).toEqual(value);
    });
});