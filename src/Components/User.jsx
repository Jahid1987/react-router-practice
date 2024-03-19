import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const User = ({ user }) => {
  const { name, username, phone, email, website, id } = user;
  const navigate = useNavigate();
  function handleShowDetails() {
    navigate(`/user/${id}`);
  }
  return (
    <div className="card w-full max-w-[425px] bg-base-100 shadow-xl">
      <figure>
        <img src="/user.png" alt={`Image of ${name}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
        <div className="card-actions justify-end">
          <button onClick={handleShowDetails} className="btn btn-primary">
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};
export default User;
