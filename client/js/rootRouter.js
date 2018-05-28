import React from 'react';
import ReactDOM from 'react-dom';
import { SearchForm } from './components/searchForm';
import { MoviesList } from './components/moviesList';
import { fetchMovies, moviesFetched } from './actions/movies-actions';
import { ErrorBoundary } from './components/errorBoundary';
import Footer from './components/footer';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import MovieSearchPage from './pages/movieSearchPage';
import MoviePage from './pages/moviePage';
import NotFound from './pages/NotFound';
import App from './app';
import { MovieNotFoundPage } from './pages/movieNotFoundPage';

export default class RootRouter extends React.Component {
    render() {
        return (
            <App>
                <Switch>
                    <Route path="/film/:id" component={MoviePage}></Route>
                    <Route path="/search/:search" component={MovieSearchPage}></Route>
                    <Route exact path="/" component={MovieNotFoundPage}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </App>
        );
    }
}

