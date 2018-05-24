import React from 'react';
import { TopContainer } from './topContainer';
import MovieItem from './movieItem';
import { connect } from 'react-redux';
import { fetchMovieById, fetchMoviesByGenres } from '../actions/movies-actions';

class MovieItems extends React.Component {
    render() {
        const { relatedMovies } = this.props;
        const Items = relatedMovies && relatedMovies.map(item => <MovieItem item={item} key={item.id} />);

        return (
            <div className="movies-list">
                <div className="movies-list__header">
                    <span>Films by {this.props.genre} genre</span>
                    
                </div>
                <div className="movies-list__items">
                    {Items}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    relatedMovies: store.movies.relatedMovies
});

export default connect(mapStateToProps)(MovieItems);