import { useQuery } from "@tanstack/react-query";

type Movie = {
    id: "string";
    title: "string";
}

const API_URL = "http://localhost:3001";

export const useMovies = () => {
    return useQuery<Movie[]>({
    queryKey: ["moviesKey"],
    queryFn: () =>
      fetch(`${API_URL}/movies`).then((res) => res.json()),
  });
}