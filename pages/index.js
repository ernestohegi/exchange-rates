import Layout from '../components/common/Layout';
import IndexContent from '../components/index/IndexContent';
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