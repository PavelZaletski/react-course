// @flow

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TopContainer from './topContainer';
import RadioInput from './radioInput';
import { changeSearchBy } from '../actions/movies-actions';

type Props = {
  searchBy: number,
  classes: any,
  history: any,
  changeSearchBy: (str: string) => void
};

type State = {
  searchBy: string,
  searchText: string
};

class SearchFormComponent extends React.Component<Props, State> {
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
      const { searchBy, classes } = this.props;
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchFormComponent));
