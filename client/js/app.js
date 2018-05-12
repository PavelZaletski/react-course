import React from 'react';
import ReactDOM from 'react-dom';
import { SearchForm } from './components/searchForm';
import { MoviesList } from './components/moviesList';
import { fetchMovies } from './actions/movies-actions';
import { MoviePage } from './components/moviePage';
import { ErrorBoundary } from './components/errorBoundary';
import Footer from './components/footer';

import { connect } from 'react-redux';
import { store } from './store';

export class AppClass extends React.Component {
    searchHandler = (params) => {
        store.dispatch(fetchMovies(params));
    }

    render() {
        return (
            <ErrorBoundary>
                <SearchForm onSearch={this.searchHandler}/>
                {this.props.fetched && <MoviesList /> }
                {this.props.fetched && <MoviePage movie={this.props.movies[0]} />}
                <Footer />
            </ErrorBoundary>
        );
    }
}

function mapStateToProps(store) {
    return {
        fetched: store.movies.fetched,
        movies: store.movies.movies
    }
}

export default connect(mapStateToProps)(AppClass);
