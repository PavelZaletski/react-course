// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieItem from './movieItem';
import RadioInput from './radioInput';
import { sortMovies, fetchMovies } from '../actions/movies-actions';
import { Movie } from '../types/movie';

type Props = {
  movies: Movie[],
  sortMovies: (value: string) => void,
  fetchMovies: ({search: string, searchBy: string}) => void,
  sortBy: string,
  searchBy: string,
  errorMessage: string,
  urlParams: {search: string}
};

export class MoviesListClass extends React.Component<Props> {
    static propTypes = {
      movies: PropTypes.array,
    };

    changeSorting = (value: string) => {
      this.props.sortMovies(value);
    }

    componentWillMount() {
      if (this.props.urlParams) {
        let { search } = this.props.urlParams;
        search = search.replace('-', ' ');

        this.props.fetchMovies({ search, searchBy: this.props.searchBy });
      }
    }

    componentDidUpdate(prevProps: Props) {
      if (this.props.urlParams) {
        const curr = this.props.urlParams;
        const prev = prevProps.urlParams;

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
                            <RadioInput
                              value="release"
                              name="sort"
                              text="Release date"
                              onChange={this.changeSorting}
                              checked={sortBy === 'release'}
                            />
                            <RadioInput
                              value="rating"
                              name="sort"
                              onChange={this.changeSorting}
                              checked={sortBy === 'rating'}
                            />
                        </div>
                    </div>
                    <div className="movies-list__items">
                        {Items}
                    </div>
                </div>
      );
    }
}

const mapStateToProps = store => ({
  sortBy: store.movies.sortBy,
  movies: store.movies.movies,
  errorMessage: store.movies.errorMessage,
  searchBy: store.movies.searchBy,
});

const mapDispatchToProps = dispatch => ({
  sortMovies: (value) => {
    dispatch(sortMovies(value));
  },

  fetchMovies: (params) => {
    dispatch(fetchMovies(params));
  },

});

export const MoviesList = connect(mapStateToProps, mapDispatchToProps)(MoviesListClass);
