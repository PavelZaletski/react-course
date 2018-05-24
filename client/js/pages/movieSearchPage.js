import React from 'react';
import ReactDOM from 'react-dom';
import { SearchForm } from '../components/searchForm';
import { MoviesList } from '../components/moviesList';
import { fetchMovies, moviesFetched } from '../actions/movies-actions';
import { MoviePage } from '../components/moviePage';
import { ErrorBoundary } from '../components/errorBoundary';
import Footer from '../components/footer';
import { connect } from 'react-redux';

class movieSearchPage extends React.Component {
    searchHandler = (params) => {
        this.props.fetchMovies(params);
    }

    render() {
        return (
            <div>
                <SearchForm onSearch={this.searchHandler} />
                {this.props.fetched && <MoviesList />}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    fetched: store.movies.fetched,
    movies: store.movies.movies
});

const mapDispatchToProps = (dispatch) => ({
    fetchMovies: (params) => {
        dispatch(fetchMovies(params))
    },

    moviesFetched: (params) => {
        dispatch(moviesFetched(params))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(movieSearchPage);
