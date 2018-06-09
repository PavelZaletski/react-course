import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import App from './app';

const Loading = () => <div>Loading...</div>;

const MoviePage = Loadable({
  loader: () => import('./pages/moviePage'),
  loading: Loading,
});

const MovieSearchPage = Loadable({
  loader: () => import('./pages/movieSearchPage'),
  loading: Loading,
});

const MovieNotFoundPage = Loadable({
  loader: () => import('./pages/movieNotFoundPage'),
  loading: Loading,
});

const NotFound = Loadable({
  loader: () => import('./pages/NotFound'),
  loading: Loading,
});

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
