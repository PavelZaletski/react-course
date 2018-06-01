import React from 'react';
import ReactDOM from 'react-dom';
import { SearchForm } from './components/searchForm';
import { MoviesList } from './components/moviesList';
import { fetchMovies, moviesFetched } from './actions/movies-actions';
import { ErrorBoundary } from './components/errorBoundary';
import Footer from './components/footer';

export default class App extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <div>{this.props.children}</div>
                <Footer />
            </ErrorBoundary>
        );
    }
}



