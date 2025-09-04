import { useNavigate } from "react-router";

const UserAdd = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //Sayfanın yenilenmesini engeller

    const formData = new FormData(e.currentTarget); //form elementinden veriyi al

    const name = formData.get("name");

    const API_URL = "http://localhost:3001";

    fetch(`${API_URL}/users`, {
      method: "POST",
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
        <input type="text" name="name" />
      </label>
      <button type="submit">Ekle</button>
    </form>
  );
};

export default UserAdd;
