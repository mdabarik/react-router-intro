import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div>
            <h2>Post Detail about id: {id}</h2>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default PostDetails;