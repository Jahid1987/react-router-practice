import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const { userId, title, body, id } = post;
  return (
    <div className="card w-full max-w-[425px] bg-base-200">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          User id: <small>{userId}</small>
        </p>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <Link to={`/post/${id}`}>
            <button className="btn btn-link">Read Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Post;
