import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SearchForm } from '../components/searchForm';
import { MoviesList } from '../components/moviesList';
import MovieNotFound from '../components/movieNotFound';

class movieSearchPage extends React.Component {
  render() {
    return (
            <div>
                <SearchForm onSearch={this.searchHandler} />
                <MoviesList urlParams={this.props.match.params}/>
            </div>
    );
  }
}

export default movieSearchPage;
