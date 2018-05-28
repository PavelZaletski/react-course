import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './movieItem';
import MovieNotFound from './movieNotFound';
import { RadioInput } from './radioInput';
import { sortMovies, fetchMovies, moviesFetched } from '../actions/movies-actions';
import { connect } from 'react-redux';

export class MoviesListClass extends React.Component {
    static propTypes = {
        movies: PropTypes.array
    };

    changeSorting = (value) => {
        this.props.sortMovies(value);
    }

    componentDidMount() {
        if (this.props.match) {
            const { search } = this.props.match.params;
            this.props.fetchMovies({ search, searchBy: this.props.searchBy });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.match) {
            const curr = this.props.match.params;
            const prev = prevProps.match.params;
    
            if (prev.search !== curr.search || prevProps.searchBy !== this.props.searchBy) {
                this.props.fetchMovies({ search: curr.search, searchBy: this.props.searchBy });
            }
        }
    }

    render() {
        const { movies, sortBy, errorMessage } = (this.props);
        const Items = movies.map(item => <MovieItem item={item} key={item.id}/>);

        return (
            errorMessage ?
                <div>{errorMessage}</div>
            :
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
        );
    }
}

const mapStateToProps = (store) => ({
    sortBy: store.movies.sortBy,
    movies: store.movies.movies,
    errorMessage: store.movies.errorMessage,
    searchBy: store.movies.searchBy
});

const mapDispatchToProps = (dispatch) => ({
    sortMovies: (value) => {
        dispatch(sortMovies(value))
    },

    fetchMovies: (params) => {
        dispatch(fetchMovies(params))
    },

    moviesFetched: (params) => {
        dispatch(moviesFetched(params))
    }
});

export const MoviesList = connect(mapStateToProps, mapDispatchToProps)(MoviesListClass);