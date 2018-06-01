import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import RootRouter from './rootRouter';

export default ({
  Router, location, context, store,
}) => (
    <Provider store={store}>
        <Router history={browserHistory} context={context} location={location}>
            <RootRouter />
        </Router>
    </Provider>
);

