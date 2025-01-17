import { useLoaderData } from "react-router-dom";
import Movie from "../components/content/Movie";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const AllMovies = () => {
  const movies = useLoaderData();
  const [search, setSearch] = useState("");
  const [allMovies, setAllMovies] = useState(movies);
  // console.log(search);
  useEffect(() => {
    fetch(`https://streamly-puce.vercel.app/all-movies?search=${search}`)
      .then((res) => res.json())
      .then((data) => setAllMovies(data));
  }, [search]);

  return (
    <>
      <Helmet>
        <title>Streamly || All Movies</title>
      </Helmet>
      <div className="container mx-auto my-10 space-y-6">
        <div className="form-control w-[20%] mx-auto">
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="grid px-4 md:px-0 md:grid-cols-4 grid-cols-1 gap-4">
          {allMovies.length === 0 ? (
            <p> </p>
          ) : (
            allMovies.map((movie) => <Movie key={movie._id} movie={movie} />)
          )}
        </div>
      </div>
    </>
  );
};

export default AllMovies;
