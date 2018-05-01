import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './movieItem';
import MovieNotFound from './movieNotFound';
import { RadioInput } from './radioInput';

export class MoviesList extends React.Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    };

    state = {
        sortValue: 'release'
    };

    sort(arr) {
        if (this.state.sortValue === 'release'){
            return arr.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        } else {
            return arr.sort((a, b) => b.vote_average - a.vote_average);
        }
    }

    changeSorting = (value) => {
        this.setState({
            sortValue: value
        });
    }

    render() {
        const data = this.sort(this.props.data);
        const Items = data.map(item => <MovieItem item={item} key={item.id}/>);
        const { sortValue } = this.state; 

        return (
            data.length ?
            <div className="movies-list">
                <div className="movies-list__header">
                    <span>{data.length} movies found</span>
                    <div className="sortby">
                        <span>Sort by</span>
                        <RadioInput value="release" name="sort" text="Release date" onChange={this.changeSorting} checked={sortValue === 'release'}/>
                        <RadioInput value="rating" name="sort" onChange={this.changeSorting} checked={sortValue === 'rating'} />
                    </div>
                </div>
                <div className="movies-list__items">
                    {Items}
                </div>
            </div>
            :
            <MovieNotFound />
        );
    }
}
