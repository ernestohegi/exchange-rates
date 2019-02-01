import Layout from '../components/common/Layout';
import RatesContent from '../components/rates/RatesContent';
import fetch from 'isomorphic-unfetch';
import { initStore } from '../store';
import { Provider } from 'react-redux';
import { config } from '../config';
import { getCleanCurrencies } from '../helpers/currency';

const BASE_CURRENCY = 'GBP'

const Index = props => (
    <Layout>
        <RatesContent rates={props.rates} store={initStore()}/>
    </Layout>
);

Index.getInitialProps = async function () {
    const currencies = getCleanCurrencies(config.CONVERSION_CURRENCIES, BASE_CURRENCY);
    const res = await fetch(`${config.API_URL}?base=${BASE_CURRENCY}&symbols=${currencies.join(',')}`);
    const data = await res.json();

    return {
        rates: data
    };
};

export default Index;
