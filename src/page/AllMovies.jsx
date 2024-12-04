import { useLoaderData } from "react-router-dom";
import Movie from "../components/content/Movie";

const AllMovies = () => {
  const movies = useLoaderData();
  //   console.log(movies);

  return (
    <div>
      <div className="grid md:grid-cols-3 container mx-auto my-10 grid-cols-1 gap-4">
        {movies.length === 0 ? (
          <p> </p>
        ) : (
          movies.map((movie) => <Movie key={movie._id} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default AllMovies;
