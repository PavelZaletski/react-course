import 'isomorphic-fetch';
import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import RootRouter from './rootRouter';

const Root = ({
  Router, location, context, store,
}) => (
    <Provider store={store}>
        <Router history={browserHistory} context={context} location={location}>
            <RootRouter />
        </Router>
    </Provider>
);

export default Root;