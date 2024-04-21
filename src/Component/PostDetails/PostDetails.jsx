import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  const { userId, id, title, body } = postDetails;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const { postID } = useParams();
  console.log(postID);

  return (
    <div>
      <h2>{title}</h2>
      <h6>Post ID: {id}</h6>
      <p>{body}</p>
      <small>This is a post by user with ID {userId}.</small>
      <br /> <br />
      <button onClick={handleGoBack}>Return to see posts</button>
    </div>
  );
};

export default PostDetails;
