import React from 'react';
import { TopContainer } from './topContainer';

export class MoviePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movie } = this.props;
        const { poster_path, title, tagline, release_date, runtime, overview  } = movie;

        return (
            movie ?
                <TopContainer>
                    <div className="movie-page__info">
                        <div className="movie-page__img-wrapper">
                            <img src={poster_path} className="movie-page__img"/>
                        </div>
                        <div className="movie-page__description">
                            <h2 className="movie-page__title">{title}</h2>
                            <div className="movie-page__tagline"> {tagline}</div>
                            <span className="movie-page__year">{new Date(release_date).getFullYear()}</span>
                            { runtime && <span className="movie-page__runtime">{`${runtime} min`}</span> }
                            <div className="movie-page__overview"> {overview}</div>
                        </div>
                    </div>
                </TopContainer>
            :
            null
        );
    }
}