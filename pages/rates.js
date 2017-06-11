import Layout from '../components/Layout';
import RatesContent from '../components/RatesContent';
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