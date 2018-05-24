import React from 'react';
import ReactDOM from 'react-dom';
import { SearchForm } from './components/searchForm';
import { MoviesList } from './components/moviesList';
import { fetchMovies, moviesFetched } from './actions/movies-actions';
import { MoviePage } from './components/moviePage';
import { ErrorBoundary } from './components/errorBoundary';
import Footer from './components/footer';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import movieSearchPage from './pages/movieSearchPage';
import moviePage from './pages/moviePage';

export class AppClass extends React.Component {


    render() {
        return (
            <ErrorBoundary>
                <Switch>
                    <Route path="/film/:id" component={moviePage}></Route>
                    <Route exact path="/" component={movieSearchPage}></Route>
                </Switch>
            </ErrorBoundary>
        );
    }
}


export default AppClass;
