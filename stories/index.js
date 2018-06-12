import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withInfo } from '@storybook/addon-info';
import Footer from '../shared/components/footer';
import { getStore } from '../shared/store';
import SearchForm from '../shared/components/searchForm';
import MovieNotFound from '../shared/components/movieNotFound';
import MovieItem, { MovieItemComponent} from '../shared/components/movieItem';
import '../client/less/style.less'

const store = getStore({});

storiesOf('Footer', module)
    .add('Footer', () => (
        <Footer />
    ))
    .add('SearchForm', () => (
        <Provider store={store}>
            <BrowserRouter>
                <SearchForm />
            </BrowserRouter>
        </Provider>
    ))
    .add('MovieNotFound', () => (
         <MovieNotFound />
    ))
    .add('MovieItem', withInfo({
        text: 'Simple MovieItem description',
        source: false,
        propTables: [MovieItemComponent],
        propTablesExclude: [MovieItem],
    })(() => (
        <Provider store={store}>
            <BrowserRouter>
                <MovieItem item={{ title: 'test', genres: ['comedy'], release_date: Date.now() }} />
            </BrowserRouter>
        </Provider>
    )));