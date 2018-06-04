import React from 'react';
import { ErrorBoundary } from './components/errorBoundary';
import { Route, Switch } from 'react-router-dom';
// import MovieSearchPage from './pages/movieSearchPage';
// import MoviePage from './pages/moviePage';
import NotFound from './pages/NotFound';
import App from './app';
import { MovieNotFoundPage } from './pages/movieNotFoundPage';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const MoviePage = Loadable({
    loader: () => import('./pages/moviePage'),
    loading: Loading,
});

const MovieSearchPage = Loadable({
    loader: () => import('./pages/movieSearchPage'),
    loading: Loading,
});

// const MovieNotFoundPage = Loadable({
//     loader: () => import('./pages/movieNotFoundPage'),
//     loading: Loading,
// });

// const NotFound = Loadable({
//     loader: () => import('./pages/NotFound'),
//     loading: Loading,
// });

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
