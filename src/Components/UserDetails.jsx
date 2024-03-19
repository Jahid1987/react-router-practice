import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, username, phone, email, website } = user;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="w-[70%] mx-auto text-center">
      <div className="bg-base-300 text-center p-10 space-y-2  rounded-lg mt-10">
        <h3 className="text-2xl">Details about - {name}</h3>
        <p>User Name: {username}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Website: {website}</p>
      </div>
      <button onClick={handleGoBack} className="btn border-t-neutral-600 mt-10">
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
