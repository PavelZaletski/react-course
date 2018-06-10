// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';
import injectSheet from 'react-jss';

const styles = {
  img: {
    width: '100%',
  },
  releaseDate: {
    display: 'inline - block',
    border: '1px solid @gray',
    padding: '2px',
    borderRadius: '2px',
    fontSize: '12px',
  },
  title: {
    margin: '10px 0',
    fontWeight: 'bold',
  },
  description: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

type Props = {
  item: Movie,
  classes: any
}

const movieItem = function ({ item, classes }: Props) {
  const Genres = item.genres.map(genre => <span key={genre}>{genre}</span>);

  return (
        <div className="movie-item">
          <Link className="btn btn-default" to={`/film/${item.id}`}>
            <img className={classes.img} src={item.poster_path} />
          </Link>
          <div className={classes.description}>
            <h4 className={classes.title}>{item.title}</h4>
              <span className={classes.releaseDate}>{new Date(item.release_date).getFullYear()}</span>
          </div>
          <div className="movie-item__genres">{Genres}</div>
        </div>
  );
};

export default injectSheet(styles)(movieItem);
