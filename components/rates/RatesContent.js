import Link from 'next/link';
import Currency from './Currency';
import ExchangeRates from './ExchangeRates';
import CurrencyDropdown from './CurrencyDropdown';
import { Component } from 'react';

class RatesContent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Rates</h1>

                <Currency base={this.props.rates.base} store={this.props.store} />
                <CurrencyDropdown store={this.props.store}/>
                <ExchangeRates rates={this.props.rates.rates} />
            </div>
        );
    }
}

export default RatesContent;
