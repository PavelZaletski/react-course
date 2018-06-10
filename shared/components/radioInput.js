
import React from 'react';

export default class RadioInput extends React.Component {
    onChange = (e) => {
      this.props.onChange(e.target.value);
    }

    render() {
      const className = `${this.props.checked ? 'checked' : ''}`;

      return (
            <label className={className}>
                <input name={this.props.name} type="radio" onChange={this.onChange} value={this.props.value} />
                <span>{this.props.text || this.props.value}</span>
            </label>
      );
    }
}
