import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Footer from '../shared/components/footer';
import MovieItem from '../shared/components/movieItem';
import { Provider } from 'react-redux';
import { getStore } from '../shared/store';
import { BrowserRouter } from 'react-router-dom';
import { SearchForm } from '../shared/components/searchForm';

storiesOf('Footer', module)
    .add('Footer', () => (
        <Footer />
    ));

const store = getStore({});

storiesOf('MovieItem', module)
    .add('MovieItem', () => (
        <Provider store={store}>
            <BrowserRouter>
                <MovieItem item={{ title: 'test', genres: ['comedy'], release_date: Date.now() }} />
            </BrowserRouter>
        </Provider>
    ));

storiesOf('SearchForm', module)
    .add('SearchForm', () => (
        <Provider store={store}>
            <BrowserRouter>
                <SearchForm />
            </BrowserRouter>
        </Provider>
    ));