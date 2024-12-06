import React, { useEffect, useState } from "react";
import Movie from "../content/Movie";
import { Link } from "react-router-dom";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://streamly-puce.vercel.app/limited-movies")
      .then((res) => res.json())
      .then((data) => {
        const sortedMovies = data.sort(
          (a, b) => b.numberRating - a.numberRating
        );
        setMovies(sortedMovies);
      });
  }, []);
  return (
    <>
      <div className="grid md:grid-cols-3 px-4 md:px-0 gap-4 container mx-auto mt-16">
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center mt-10 mb-14">
        <Link to="/all-movies" className="btn w-[30%] bg-red-600">
          All Movies
        </Link>
      </div>
    </>
  );
};

export default FeaturedMovies;
