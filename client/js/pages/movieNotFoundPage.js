import React from 'react';
import { TopContainer } from '../components/topContainer';
import MovieNotFound from '../components/movieNotFound';
import { connect } from 'react-redux';
import { fetchMovieById, fetchMoviesByGenres } from '../actions/movies-actions';
import MovieItems from '../components/movieItems';
import { SearchForm } from '../components/searchForm';

export class MovieNotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <SearchForm />
                <MovieNotFound />
            </div>
        );
    }
}


