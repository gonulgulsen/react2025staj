import { useEffect, useState } from "react";
import { Link } from "react-router";

export type User = {
  id: string;
  name: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const API_URL = "http://localhost:3001";

    fetch(`${API_URL}/users`)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div className="flex flex-col">
      {users.map((user) => (
        <Link to={"/users/" + user.id}>
          {user.id} - {user.name}
        </Link>
      ))}
    </div>
  );
};

export default Users;
