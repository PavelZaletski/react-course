import React from 'react';
import PropTypes from 'prop-types';

export class RadioInput extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.radio = React.createRef();
    }

    onChange = () => {
        this.props.onChange(this.props.value);
    }

    render() {
        const className = `${this.props.checked ? 'checked' : ''}`;

        return (
            <label className={className}>
                <input name={this.props.name} type="radio" ref={this.radio} onChange={this.onChange} />
                {this.props.text || this.props.value}
            </label>
        );
    }
}