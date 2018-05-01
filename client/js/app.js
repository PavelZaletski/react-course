import React from 'react';
import ReactDOM from 'react-dom';
import '../less/style';
import { SearchForm } from './components/searchForm';
import { MoviesList } from './components/moviesList';
import { fetchMovies } from './actions/movies-actions';
import { MoviePage } from './components/moviePage';
import { ErrorBoundary } from './components/errorBoundary';
import Footer from './components/footer';

class App extends React.Component {
    state = {
        movies: [],
        fetched: false
    };

    searchHandler = (params) => {
        fetchMovies(params).then(({data: {data}}) => {
            this.setState({
                movies: data,
                fetched: true
            });
        });
    }

    render() {
        return (
            <ErrorBoundary>
                <SearchForm onSearch={this.searchHandler}/>
                {this.state.fetched && <MoviesList data={this.state.movies} /> }
                {this.state.fetched && <MoviePage movie={this.state.movies[0]} />}
                <Footer />
            </ErrorBoundary>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
