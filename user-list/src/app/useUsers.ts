import { useQuery } from "@tanstack/react-query";

type User = {
    id: "string";
    name: "string";
}

const API_URL = "http://localhost:3001";

export const useUsers = () => {
    return useQuery<User[]>({
    queryKey: ["usersKey"],
    queryFn: () =>
      fetch(`${API_URL}/users`).then((res) => res.json()),
  });
}