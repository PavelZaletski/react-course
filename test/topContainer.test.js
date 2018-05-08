import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import React from 'react';
import { TopContainer } from '../client/js/components/topContainer';
import { SearchForm } from '../client/js/components/searchForm';

describe('TopContainer', () => {
    it('should match snapshot call callback with proper param', () => {
        const eventMock = {
            preventDefault() { }
        };

        const mockCallback = jest.fn();
        let component = shallow(<SearchForm onSearch={mockCallback} />);

        component.find('form').simulate('submit', eventMock);
        expect(mockCallback).toHaveBeenCalled();
        expect(mockCallback).toHaveBeenCalledWith({search: '', searchBy: 'title' });

        component = renderer.create(<SearchForm />).toJSON();

        expect(component).toMatchSnapshot();
    });

    it('should call callback with proper param', () => {
        const eventMock = {
            target: {
                value: 'genres'
            }
        };

        const mockCallback = jest.fn();
        let component = mount(<SearchForm onSearch={mockCallback} />);

        component.find("input[value='genres']").simulate('change', eventMock);

        component.find('form').simulate('submit', eventMock);
        expect(mockCallback).toHaveBeenCalled();
        expect(mockCallback).toHaveBeenCalledWith({ search: '', searchBy: 'genres' });
    });

    it('should match snapshot', () => {
        const eventMock = {
            target: {
                value: 'test'
            }
        };

        const mockCallback = jest.fn();
        let component = mount(<SearchForm onSearch={mockCallback} />);

        component.find(".search-input").simulate('change', eventMock);

        component.find('form').simulate('submit', eventMock);
        expect(mockCallback).toHaveBeenCalled();
        expect(mockCallback).toHaveBeenCalledWith({ search: 'test', searchBy: 'title' });
    });
});