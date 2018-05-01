import React from 'react';

export default function ({ item }) {
    const Genres = item.genres.map(genre => <span key={genre}>{genre}</span>);

    return (
        <div className="movie-item">
            <img className="movie-item__img" src={item.poster_path} />
            <div className="movie-item__description">
                <h4 className="movie-item__title">{item.title}</h4>
                <span className="movie-item__release-date">{new Date(item.release_date).getFullYear()}</span>
            </div>
            <div className="movie-item__genres">{Genres}</div>
        </div>
    );
}