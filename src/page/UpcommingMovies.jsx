import { useLoaderData } from "react-router-dom";
import Movie from "../components/content/Movie";
import { Helmet } from "react-helmet";

const UpcommingMovies = () => {
  const movies = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Streamly||Upcomming Movies</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto px-4 md:px-0 my-8 gap-4">
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default UpcommingMovies;
