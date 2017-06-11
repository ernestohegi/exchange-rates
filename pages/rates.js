import Layout from '../components/common/Layout';
import RatesContent from '../components/rates/RatesContent';
import fetch from 'isomorphic-unfetch';

const Rates = props => (
    <Layout>
        <RatesContent rates={props.rates}/>
    </Layout>
);

Rates.getInitialProps = async function () {
    const res = await fetch('http://api.fixer.io/latest');
    const data = await res.json();

    return {
        rates: data
    };
};

export default Rates;