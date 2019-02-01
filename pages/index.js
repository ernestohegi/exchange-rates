import Layout from '../components/common/Layout';
import RatesContent from '../components/rates/RatesContent';
import fetch from 'isomorphic-unfetch';
import { initStore } from '../store';
import { Provider } from 'react-redux';
import { config } from '../config';

const BASE_CURRENCY = 'GBP'
const RATES_API_URL = config.API_URL;
const RATES_API_BASE_PARAMETER = '?base=';

const Index = props => (
    <Layout>
        <RatesContent rates={props.rates} store={initStore()}/>
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await fetch(`${RATES_API_URL}${RATES_API_BASE_PARAMETER}${BASE_CURRENCY}`);
    const data = await res.json();

    return {
        rates: data
    };
};

export default Index;
