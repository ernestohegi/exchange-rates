import Link from 'next/link';
import ExchangeRates from './ExchangeRates';
import CurrencyDropdown from './CurrencyDropdown';
import React from 'react';
import fetch from 'isomorphic-unfetch';
import { config } from '../../config';
import { getCleanCurrencies } from '../../helpers/currency';

const EXCHANGE_RATE_BASE_URL = config.API_URL;

const titleStyle = {
    margin: 0
};

class RatesContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = Object.assign({}, props);
        this.state.currency = props.rates.base;
    }

    componentDidMount() {
        this.props.store.subscribe(() => {
            const { currency } = this.props.store.getState();
            this.setCurrency(currency);
            this.getExchangeRate(currency);
        });
    }

    getExchangeRate(currency) {
        const currencies = getCleanCurrencies(config.CONVERSION_CURRENCIES, currency);
        const currencyUrl = `${EXCHANGE_RATE_BASE_URL}?base=${currency}&symbols=${currencies.join(',')}`;

        return fetch(currencyUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    rates: Object.assign({}, data)
                });
            })
        ;
    }

    setCurrency(currency) {
        this.setState({
            currency
        });
    }

    render() {
        return (
            <div>
                <h1 style={titleStyle}>Exchange Rates for { this.state.currency }</h1>

                <CurrencyDropdown base={this.state.rates.base} store={this.props.store}/>
                <ExchangeRates rates={this.state.rates.rates} />
            </div>
        );
    }
}

export default RatesContent;
