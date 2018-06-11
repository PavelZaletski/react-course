import React from 'react';
import { SearchForm } from '../components/searchForm';
import { MoviesList } from '../components/moviesList';

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
