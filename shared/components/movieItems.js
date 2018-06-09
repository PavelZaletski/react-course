import React from 'react';
import { connect } from 'react-redux';
import MovieItem from './movieItem';

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

const mapStateToProps = store => ({
  relatedMovies: store.movies.relatedMovies,
});

export default connect(mapStateToProps)(MovieItems);
