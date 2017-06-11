import Layout from '../components/Layout';
import PostContent from '../components/PostContent';
import fetch from 'isomorphic-unfetch';

const Post = props => (
    <Layout>
        <PostContent show={props.show} />
    </Layout>
);

Post.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch(`http://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
}

export default Post;