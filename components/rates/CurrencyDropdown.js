import React from 'react';
import { config } from '../../config';

const STORE_ACTION_BY_CURRENCY = {
    EUR: 'SET_CURRENCY_EUR',
    GBP: 'SET_CURRENCY_GBP',
    USD: 'SET_CURRENCY_USD'
};

let store;

class CurrencyDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            base: props.base
        };
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }

    handleDropdownChange(event) {
        this.props.store.dispatch({type: event.target.value});
        this.setState({
            base: event.target.value
        });
    }

    render() {
        const { CURRENCIES } = config;

        return (
            <select onChange={this.handleDropdownChange} value={STORE_ACTION_BY_CURRENCY[this.state.base]}>
                {
                    CURRENCIES.map((currency, index) => (
                        <option
                            key={index}
                            value={STORE_ACTION_BY_CURRENCY[currency]}
                        > {currency} </option>
                    ))
                }
            </select>
        );
    }
}

export default CurrencyDropdown;
