import { Link, useNavigate } from "react-router-dom";

const SinglePost = ({ post }) => {
  const { id, title, body } = post;
  const postStyle = {
    border: "2px solid yellow",
    padding: "10px",
    borderRadius: "20px",
  };
  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div style={postStyle}>
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={`/post/${id}`}>
        <button>See Post Details</button>
      </Link>{" "}
      <br />
      {/* ........ let's also try useNavigate ........ */}
      <button onClick={handleShowDetails}>
        See Post Details (using useNavigate)
      </button>
    </div>
  );
};

export default SinglePost;
