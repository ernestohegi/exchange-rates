import { Component } from 'react';
import CurrencyOption from './CurrencyOption';

const CURRENCIES = [
    'EUR',
    'GBP',
    'USD'
];

class CurrencyDropdown extends Component {
    handleDropdownChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <select onChange={this.handleDropdownChange}>
                {
                    CURRENCIES.map((currency, index) => (
                        <CurrencyOption key={index} name={currency} />
                    ))
                }
            </select>
        );
    }
}

export default CurrencyDropdown;