import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './movieItem';
import MovieNotFound from './movieNotFound';
import { RadioInput } from './radioInput';
import { sortMovies } from '../actions/movies-actions';
import { connect } from 'react-redux';
import { store } from '../store';

export class MoviesListClass extends React.Component {
    static propTypes = {
        movies: PropTypes.array
    };

    changeSorting = (value) => {
        store.dispatch(sortMovies(value));
    }

    render() {
        const { movies, sortBy } = (this.props);
        const Items = movies.map(item => <MovieItem item={item} key={item.id}/>);

        return (
            movies.length ?
            <div className="movies-list">
                <div className="movies-list__header">
                    <span>{movies.length} movies found</span>
                    <div className="sortby">
                        <span>Sort by</span>
                        <RadioInput value="release" name="sort" text="Release date" onChange={this.changeSorting} checked={sortBy === 'release'}/>
                        <RadioInput value="rating" name="sort" onChange={this.changeSorting} checked={sortBy === 'rating'} />
                    </div>
                </div>
                <div className="movies-list__items">
                    {Items}
                </div>
            </div>
            :
            <MovieNotFound />
        );
    }
}

function mapStateToProps(store) {
    return {
        sortBy: store.movies.sortBy,
        movies: store.movies.movies
    }
}

export const MoviesList = connect(mapStateToProps)(MoviesListClass);