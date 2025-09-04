import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { User } from "./Users";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const API_URL = "http://localhost:3001";

    fetch(`${API_URL}/users/${id}`)
      .then((res) => res.json())
      .then((user) => setUser(user));
  }, [id]);

  const handleDelete = () => {
    const isDelete = confirm(user?.name + " " + "silinsin mi?");
    if (!isDelete) {
      return;
    }

    const API_URL = "http://localhost:3001";

    fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => navigate("/users"));
  };

  return (
    <div>
      <li>ID: {user?.id}</li>
      <li>Name: {user?.name}</li>
      <button
        onClick={() => navigate("/users/" + user?.id + "/edit")}
        className="bg-blue-500 px-4 py-2 rounded text-white"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-500 px-4 py-2 rounded text-white"
      >
        Delete
      </button>
    </div>
  );
};

export default UserDetail;
