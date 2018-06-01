import React from 'react';
import { TopContainer } from './topContainer';

export class MoviePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movie } = this.props;

        return (
            movie ?
                <TopContainer>
                    <div className="movie-page__info">
                        <div className="movie-page__img-wrapper">
                            <img src={movie.poster_path} className="movie-page__img"/>
                        </div>
                        <div className="movie-page__description">
                            <h2 className="movie-page__title">{movie.title}</h2>
                            <div className="movie-page__tagline"> {movie.tagline}</div>
                            <span className="movie-page__year">{new Date(movie.release_date).getFullYear()}</span>
                            { movie.runtime && <span className="movie-page__runtime">{`${movie.runtime} min`}</span> }
                            <div className="movie-page__overview"> {movie.overview}</div>
                        </div>
                    </div>
                </TopContainer>
            :
            null
        );
    }
}