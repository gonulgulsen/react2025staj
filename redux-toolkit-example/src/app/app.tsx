import { useGetTodosQuery, useGetUserQuery, useGetUsersQuery } from "./api";

const App = () => {
  const { data } = useGetUsersQuery();
  const { data: todos } = useGetTodosQuery();
  const { data: user } = useGetUserQuery(8);
  return (
    <div>
      <h1 className="text-red-500">USER</h1>
      {user?.name}
      <h1 className="text-red-500">USERS</h1>
      <ul>{data?.map((user) => <li>{user.name}</li>)}</ul>
      <h1 className="text-red-500">TODOS</h1>
      <ul>{todos?.map((todo) => <li>{todo.title}</li>)}</ul>
    </div>
  );
};

export default App;
