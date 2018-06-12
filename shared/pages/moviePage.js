// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TopContainer from '../components/topContainer';
import { fetchMovieById, fetchMoviesByGenres } from '../actions/movies-actions';
import MovieItems from '../components/movieItems';
import { Movie } from '../types/movie';

type Props = {
  match: any,
  movie: Movie,
  fetchMovieById: (value: number) => void,
  fetchMoviesByGenres: (value: string) => void,
  errorMessage: string,
  fetched: boolean
};

export class MoviePageComponent extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.props.fetchMovieById(this.props.match.params.id);
  }

  render() {
    const { movie, errorMessage } = this.props;
    const genre = movie && movie.genres && movie.genres[0];

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
                            <span className="movie-page__year">
                              {new Date(movie.release_date).getFullYear().toString()}
                            </span>
                            {movie.runtime && <span className="movie-page__runtime">{`${movie.runtime} min`}</span>}
                            <div className="movie-page__overview"> {movie.overview}</div>
                            <Link className="home-btn" to='/' >Search</Link>
                        </div>
                    </div>
                </TopContainer>

                {genre && <MovieItems genre={genre}/> }
            </div>
        :
        null
    );
  }
}

const mapStateToProps = store => ({
  movie: store.movies.selectedMovie,
  fetched: store.movies.selectedMovieFetched,
  errorMessage: store.movies.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchMovieById: (id) => {
    dispatch(fetchMovieById(id));
  },

  fetchMoviesByGenres: (genres) => {
    dispatch(fetchMoviesByGenres(genres));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageComponent);

