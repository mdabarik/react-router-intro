import { Link, useNavigate } from "react-router-dom";
import Posts from "../Posts/Posts";

const Post = ({post}) => {
    const { id, title } = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '10px'
    }

    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }
    
    return (
        <div style={postStyle}>
            <h3>post of id: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>
                <button>Post Detail</button>
            </Link>
            <button onClick={handleShowDetail}>Details</button>
        </div>
    );
};

export default Post;