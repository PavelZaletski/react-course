import React from 'react';
import { TopContainer } from '../components/topContainer';
import { connect } from 'react-redux';
import { fetchMovieById, fetchMoviesByGenres } from '../actions/movies-actions';
import MovieItems from '../components/movieItems';

export class MoviePageComponent extends React.Component {
    componentDidMount() {
        this.props.fetchMovieById(this.props.match.params.id);
    }

    render() {
        const { movie, errorMessage } = this.props;
        let genre = movie && movie.genres && movie.genres[0];

        return (
            movie ?
            <div>
                {errorMessage && <div>{errorMessage}</div>}
                <TopContainer>
                    <div className="movie-page__info">
                        <div className="movie-page__img-wrapper">
                            <img src={movie.poster_path} className="movie-page__img" />
                        </div>
                        <div className="movie-page__description">
                            <h2 className="movie-page__title">{movie.title}</h2>
                            <div className="movie-page__tagline"> {movie.tagline}</div>
                            <span className="movie-page__year">{new Date(movie.release_date).getFullYear()}</span>
                            {movie.runtime && <span className="movie-page__runtime">{`${movie.runtime} min`}</span>}
                            <div className="movie-page__overview"> {movie.overview}</div>
                        </div>
                    </div>
                </TopContainer>

                <MovieItems genre={genre}/>
            </div>
            :
            null
        );
    }
}

const mapStateToProps = (store) => ({
    movie: store.movies.selectedMovie,
    fetched: store.movies.selectedMovieFetched,
    errorMessage: store.movies.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
    fetchMovieById: (id) => {
        dispatch(fetchMovieById(id))
    },

    fetchMoviesByGenres: (genres) => {
        dispatch(fetchMoviesByGenres(genres))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageComponent);

