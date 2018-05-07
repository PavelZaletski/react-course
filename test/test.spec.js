import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import React from 'react';
import Footer from '../client/js/components/footer';
import { RadioInput } from '../client/js/components/radioInput';
import MovieItem from '../client/js/components/movieItem';
import { MoviePage } from '../client/js/components/moviePage';
import { TopContainer } from '../client/js/components/topContainer';
import { SearchForm } from '../client/js/components/searchForm';
import MovieNotFound from '../client/js/components/movieNotFound';
import { ErrorBoundary } from '../client/js/components/errorBoundary';
import { MoviesList } from '../client/js/components/moviesList';
import { App } from '../client/js/app';
import Adapter from 'enzyme-adapter-react-16';
import { fetchMovies } from '../client/js/actions/movies-actions';

Enzyme.configure({ adapter: new Adapter()})

describe('Footer', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<Footer />).toJSON();

        expect(component).toMatchSnapshot();
    });

    it('should change data', () => {
        const eventMock = {
            target: {}
        };

        const mockCallback = jest.fn();
        const value = 'test1';
        const name = 'test2';
        const component = shallow(<RadioInput onChange={mockCallback} name={name} value={value} />);

        component.find('input').simulate('change', eventMock);
        expect(mockCallback.mock.calls.length).toBe(1);

        const textValue = component
            .find('span')
            .text();

        expect(textValue).toEqual(value);
    });
});

describe('MovieItem', () => {
    it('should match snapshot', () => {
        const item = {
            genres: ['comedy', 'drama'],
            poster_path: 'test',
            title: 'title',
            release_date: '2015-01-01'
        };

        const component = renderer.create(<MovieItem item={item}/>).toJSON();

        expect(component).toMatchSnapshot();
    });
});

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

describe('MovieNotFound', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<MovieNotFound />).toJSON();
        expect(component).toMatchSnapshot();
    });
});

describe('ErrorBoundary', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<ErrorBoundary><div>movies</div></ErrorBoundary>).toJSON();
        expect(component).toMatchSnapshot();
    });
});

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

describe('TopContainer', () => {
    it('should match snapshot call callback with proper param', () => {
        const eventMock = {
            preventDefault() {}
        };

        const mockCallback = jest.fn();
        let component = shallow(<SearchForm onSearch={mockCallback} />);

        component.find('form').simulate('submit', eventMock);
        expect(mockCallback.mock.calls.length).toBe(1);
        expect(mockCallback.mock.calls[0][0]).toMatchObject({ searchBy: 'title' });
        
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
        expect(mockCallback.mock.calls.length).toBe(1);
        expect(mockCallback.mock.calls[0][0]).toMatchObject({ searchBy: 'genres'});

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
        expect(mockCallback.mock.calls.length).toBe(1);
        expect(mockCallback.mock.calls[0][0]).toMatchObject({ search: 'test' });

    });
});

