import { Component } from 'react';

class CurrencyOption extends Component {
    render() {
        return (
            <option>{this.props.name}</option>
        );
    }
}

export default CurrencyOption;