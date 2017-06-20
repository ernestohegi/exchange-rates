import Link from 'next/link';
import Currency from './Currency';
import ExchangeRates from './ExchangeRates';
import CurrencyDropdown from './CurrencyDropdown';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

const EXCHANGE_RATE_BASE_URL = 'http://api.fixer.io/latest?base=';

const titleStyle = {
    margin: 0
};

class RatesContent extends Component {
    constructor(props) {
        super(props);

        this.state = Object.assign({}, props);
    }

    componentDidMount() {
        this.props.store.subscribe(() => this.getExchangeRate(this.props.store.getState().currency));
    }

    getExchangeRate(currency) {
        return fetch(EXCHANGE_RATE_BASE_URL + currency)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    rates: Object.assign({}, data)
                });
            })
        ;
    }

    render() {
        return (
            <div>
                <h1 style={titleStyle}>Rates</h1>

                <Currency base={this.props.rates.base} store={this.props.store} />
                <CurrencyDropdown store={this.props.store}/>
                <ExchangeRates rates={this.state.rates.rates} />
            </div>
        );
    }
}

export default RatesContent;
