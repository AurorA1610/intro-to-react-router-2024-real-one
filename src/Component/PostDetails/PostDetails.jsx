import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  const { userId, id, title, body } = postDetails;
  return (
    <div>
      <h2>{title}</h2>
      <h6>Post ID: {id}</h6>
      <p>{body}</p>
      <small>This is a post by user with ID {userId}.</small>
    </div>
  );
};

export default PostDetails;
