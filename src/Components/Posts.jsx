import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h3 className="text-2xl text-center mb-10">All posts: {posts.length}</h3>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Post post={post} key={post.id}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
