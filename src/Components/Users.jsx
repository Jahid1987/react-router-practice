import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h3 className="text-3xl text-center mb-10">All users: </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {users.map((user) => (
          <User user={user} key={user.id}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
