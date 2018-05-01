import React from 'react';
import { TopContainer } from './topContainer';
import { RadioInput } from './radioInput';

export class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.searchText = React.createRef();
        this.searchRadio = React.createRef();
    }

    state = {
        searchBy: 'title',
    };

    onChange = (searchBy) => {
        this.setState({
            searchBy
        });
    }

    componentDidMount() {
        window.addEventListener('keyup', this.enterHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.enterHandler);
    }

    enterHandler = (e) => {
        if (e.keyCode === 13) {
            this.onSubmit(e);
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onSearch({
            search: this.searchText.current.value,
            searchBy: this.state.searchBy
        });
    }

    render() {
        const { searchBy } = this.state;
        return (
            <TopContainer>
                <form>
                    <div className="search-hint">Find Your movie</div>
                    <input className="search-input" type="text" name="title" required="required" placeholder="Quentin Tarantino" ref={this.searchText}/>

                    <div className="form-footer">
                        <div className="searchby">
                            <span className="filter-text">Search by</span>
                            <RadioInput value="title" name="search" onChange={this.onChange} checked={searchBy === 'title'} />
                            <RadioInput value="genres" name="search" onChange={this.onChange} checked={searchBy === 'genres'} />
                        </div>
                        <input className="search-button btn" type="submit" value="search" required="required" onClick={this.onSubmit} />
                    </div>
                </form>
            </TopContainer>
        );
    }
}