import { Component } from 'react';

class CurrencyOption extends Component {
    render() {
        return (
            <option value={this.props.value}>{this.props.name}</option>
        );
    }
}

export default CurrencyOption;
