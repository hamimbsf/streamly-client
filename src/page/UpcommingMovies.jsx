import { useLoaderData } from "react-router-dom";
import Movie from "../components/content/Movie";

const UpcommingMovies = () => {
  const movies = useLoaderData();
  //   console.log(movies);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto my-8 gap-4">
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default UpcommingMovies;
