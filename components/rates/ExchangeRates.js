import Rate from './Rate';
import { Component } from 'react';

const ratesContainerStyle = {
    listStyle: 'none',
    margin: '0',
    padding: '0'
};

const rateStyle = {};

class ExchangeRates extends Component {
    render() {
        return (
            <ul style={ratesContainerStyle}>
                {
                    Object.keys(this.props.rates).map(currency => (
                        <li style={rateStyle} key={currency}>
                            <Rate
                                currency={currency}
                                value={this.props.rates[currency]}
                            />
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default ExchangeRates;
