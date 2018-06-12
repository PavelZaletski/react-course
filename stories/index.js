import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Footer from '../shared/components/footer';
import MovieItem from '../shared/components/movieItem';
import { getStore } from '../shared/store';
import SearchForm from '../shared/components/searchForm';
import MovieNotFound from '../shared/components/movieNotFound';
import '../client/less/style.less'

const store = getStore({});

storiesOf('Footer', module)
    .add('Footer', () => (
        <Footer />
    ))
    .add('MovieItem', () => (
        <Provider store={store}>
            <BrowserRouter>
                <MovieItem item={{ title: 'test', genres: ['comedy'], release_date: Date.now() }} />
            </BrowserRouter>
        </Provider>
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
    ));