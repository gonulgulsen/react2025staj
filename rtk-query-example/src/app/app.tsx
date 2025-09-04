import { useAddUserMutation, useGetUsersQuery } from "./api";

const App = () => {
  const { data: users, isLoading } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();

  if (isLoading) {
    return <span>Yükleniyor...</span>;
  }

  const handleAddUser = () => {
    addUser({
      name: "Tavuk",
    });
  };

  return (
    <div>
      <button onClick={handleAddUser}>Kullanıcı Ekle</button>
      <ul>{users?.map((user) => <li>{user.name}</li>)}</ul>
    </div>
  );
};

export default App;
