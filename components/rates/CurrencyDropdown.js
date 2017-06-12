import { Component } from 'react';
import CurrencyOption from './CurrencyOption';

const CURRENCIES = [
    'EUR',
    'GBP',
    'USD'
];

const STORE_ACTION_BY_CURRENCY = {
    EUR: 'SET_CURRENCY_EUR',
    GBP: 'SET_CURRENCY_GBP',
    USD: 'SET_CURRENCY_USD'
};

let store;

class CurrencyDropdown extends Component {
    constructor() {
        super();

        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }

    handleDropdownChange(event) {
        this.props.store.dispatch({type: event.target.value});
    }

    render() {
        return (
            <select onChange={this.handleDropdownChange}>
                {
                    CURRENCIES.map((currency, index) => (
                        <CurrencyOption key={index} value={STORE_ACTION_BY_CURRENCY[currency]} name={currency} />
                    ))
                }
            </select>
        );
    }
}

export default CurrencyDropdown;
