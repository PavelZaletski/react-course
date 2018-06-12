import React from 'react';
import MovieNotFound from '../components/movieNotFound';
import SearchForm from '../components/searchForm';

export default class MovieNotFoundPage extends React.Component {
  render() {
    return (
            <div>
                <SearchForm />
                <MovieNotFound />
            </div>
    );
  }
}

