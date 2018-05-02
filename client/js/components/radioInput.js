import React from 'react';
import PropTypes from 'prop-types';

export class RadioInput extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    onChange = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        const className = `${this.props.checked ? 'checked' : ''}`;

        return (
            <label className={className}>
                <input name={this.props.name} type="radio" onChange={this.onChange} value={this.props.value} />
                {this.props.text || this.props.value}
            </label>
        );
    }
}