import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { TopContainer } from './topContainer';
import { RadioInput } from './radioInput';
import { changeSearchBy } from '../actions/movies-actions';

class SearchFormComponent extends React.Component {
    state = {
      searchBy: 'title',
      searchText: '',
    };

    onSearchTextChange = (e) => {
      this.setState({
        searchText: e.target.value,
      });
    }

    onRadioButtonChange = (searchBy) => {
      this.props.changeSearchBy(searchBy);
    }

    onSubmit = (e) => {
      e.preventDefault();
      let { searchText } = this.state;
      searchText = searchText.replace(' ', '-');

      this.props.history.push(`/search/${searchText}`);
    }

    render() {
      const { searchBy } = this.props;
      return (
            <TopContainer>
                <form onSubmit={this.onSubmit}>
                    <div className="search-hint">Find Your movie</div>
                    <input
                      className="search-input"
                      type="text" name="title"
                      required="required"
                      placeholder="Quentin Tarantino"
                      onChange={this.onSearchTextChange}
                    />

                    <div className="form-footer">
                        <div className="searchby">
                            <span className="filter-text">Search by</span>
                            <RadioInput
                              value="title"
                              name="search"
                              onChange={this.onRadioButtonChange}
                              checked={searchBy === 'title'}
                            />
                            <RadioInput
                              value="genres"
                              name="search"
                              onChange={this.onRadioButtonChange}
                              checked={searchBy === 'genres'}
                            />
                        </div>
                        <input className="search-button btn" type="submit" value="search" required="required" />
                    </div>
                </form>
            </TopContainer>
      );
    }
}

const mapStateToProps = store => ({
  searchBy: store.movies.searchBy,
});

const mapDispatchToProps = dispatch => ({
  changeSearchBy: (value) => {
    dispatch(changeSearchBy(value));
  },
});

export const SearchForm = withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchFormComponent));
