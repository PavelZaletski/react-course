import React from 'react';
import { SearchForm } from '../components/searchForm';
import { MoviesList } from '../components/moviesList';
import MovieNotFound from '../components/movieNotFound';
import { Route, Switch } from 'react-router-dom';

class movieSearchPage extends React.Component {
    render() {
        return (
            <div>
                <SearchForm onSearch={this.searchHandler} />
                <Switch>
                    <Route path="/search/:searchBy/:query" component={MoviesList}></Route>
                    <Route path="/" component={MovieNotFound}></Route>
                </Switch>
            </div>
        );
    }
}

export default movieSearchPage;
