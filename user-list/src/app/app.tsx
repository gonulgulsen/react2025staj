import { useMovies } from "./useMovies";

const App = () => {
  const { data: movies } = useMovies();

  return <ul>{movies?.map((movie) => <li key={movie.id}>{movie.title}</li>)} </ul>;
};

export default App;
