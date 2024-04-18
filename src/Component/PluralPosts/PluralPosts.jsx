import { useLoaderData } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";

const PluralPosts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h2>See all posts</h2>
      <div className="users">
        {posts.map((post) => (
          <SinglePost key={post.id} post={post}></SinglePost>
        ))}
      </div>
    </div>
  );
};

export default PluralPosts;
