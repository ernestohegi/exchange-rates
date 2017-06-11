import Layout from '../components/Layout';
import IndexContent from '../components/IndexContent';
import fetch from 'isomorphic-unfetch';

const Index = props => (
    <Layout>
        <IndexContent shows={props.shows}/>
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await fetch('http://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data
    };
};

export default Index;