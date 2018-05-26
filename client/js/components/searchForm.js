import React from 'react';
import { TopContainer } from './topContainer';
import { RadioInput } from './radioInput';
import { withRouter } from 'react-router';

class SearchFormComponent extends React.Component {
    state = {
        searchBy: 'title',
        searchText: ''
    };

    onSearchTextChange = (e) => {
        this.setState({
            searchText: e.target.value
        });
    }

    onRadioButtonChange = (searchBy) => {
        this.setState({
            searchBy
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { searchBy, searchText } = this.state;

        this.props.history.push(`/search/${searchBy}/${searchText}`);
    }

    render() {
        const { searchBy } = this.state;
        return (
            <TopContainer>
                <form onSubmit={this.onSubmit}>
                    <div className="search-hint">Find Your movie</div>
                    <input className="search-input" type="text" name="title" required="required" placeholder="Quentin Tarantino" onChange={this.onSearchTextChange}/>

                    <div className="form-footer">
                        <div className="searchby">
                            <span className="filter-text">Search by</span>
                            <RadioInput value="title" name="search" onChange={this.onRadioButtonChange} checked={searchBy === 'title'} />
                            <RadioInput value="genres" name="search" onChange={this.onRadioButtonChange} checked={searchBy === 'genres'} />
                        </div>
                        <input className="search-button btn" type="submit" value="search" required="required" />
                    </div>
                </form>
            </TopContainer>
        );
    }
}

export const SearchForm = withRouter(SearchFormComponent);