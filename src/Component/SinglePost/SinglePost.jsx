import { Link } from "react-router-dom";

const SinglePost = ({ post }) => {
  const { id, title, body } = post;
  const postStyle = {
    border: "2px solid yellow",
    padding: "10px",
    borderRadius: "20px",
  };
  return (
    <div style={postStyle}>
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={`/post/${id}`}>
        <button>See Post Details</button>
      </Link>
    </div>
  );
};

export default SinglePost;
