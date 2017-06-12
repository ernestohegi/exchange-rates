import Link from 'next/link';
import Currency from './Currency';
import ExchangeRates from './ExchangeRates';
import CurrencyDropdown from './CurrencyDropdown';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

class RatesContent extends Component {
    constructor(props) {
        super(props);

        this.state = {rates:{rates:{}}};
        this.state.rates.rates = props.rates.rates;
    }

    componentDidMount() {
        this.props.store.subscribe(() => {
            fetch('http://api.fixer.io/latest?base=' + this.props.store.getState().currency)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        rates: {
                            rates: data.rates
                        }
                    });
                });
        });
    }

    render() {
        return (
            <div>
                <h1>Rates</h1>

                <Currency base={this.props.rates.base} store={this.props.store} />
                <CurrencyDropdown store={this.props.store}/>
                <ExchangeRates rates={this.state.rates.rates} />
            </div>
        );
    }
}

export default RatesContent;
