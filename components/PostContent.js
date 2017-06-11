const PostContent = props => (
    <div key={props.show.id}>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium} />
    </div>
);

export default PostContent;