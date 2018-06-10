// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';

type Props = {
  item: Movie
}

export default function ({item}: Props) {
  const Genres = item.genres.map(genre => <span key={genre}>{genre}</span>);

  return (
        <div className="movie-item">
            <Link className="btn btn-default" to={`/film/${item.id}`}>
                <img className="movie-item__img" src={item.poster_path} />
            </Link>
            <div className="movie-item__description">
                <h4 className="movie-item__title">{item.title}</h4>
                <span className="movie-item__release-date">{new Date(item.release_date).getFullYear()}</span>
            </div>
            <div className="movie-item__genres">{Genres}</div>
        </div>
  );
}
