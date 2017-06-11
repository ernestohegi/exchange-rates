import Link from 'next/link';

const IndexContent = props => (
    <div>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(({show}) => {
                let showId = show.id,
                    showName = show.name
                ;

                return (
                    <li key={showId}>
                        <Link as={`/p/${showId}`} href={`/post?id=${showId}`}>
                            <a>{showName}</a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    </div>
);

export default IndexContent;