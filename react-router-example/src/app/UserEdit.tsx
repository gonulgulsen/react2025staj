import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { User } from "./Users";

const UserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const API_URL = "http://localhost:3001";

    fetch(`${API_URL}/users/${id}`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((res) => res.json())
      .then((user) => setUser(user));
  }, [id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //Sayfanın yenilenmesini engeller

    const formData = new FormData(e.currentTarget); //form elementinden veriyi al

    const name = formData.get("name");

    const API_URL = "http://localhost:3001";

    fetch(`${API_URL}/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify({ name: name }),
    })
      .then((res) => res.json())
      .then(() => navigate("/users"));
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label>
        Isim:
        <input type="text" name="name" defaultValue={user?.name} />
      </label>
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default UserEdit;
