import React, { useEffect, useState } from "react";
import Movie from "../content/Movie";
import { Link } from "react-router-dom";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/limited-movies")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data);
      });
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-4 container mx-auto mt-16">
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center mt-10 mb-14">
        <Link to="/all-movies" className="btn text-white w-[30%] bg-red-600">
          All Movies
        </Link>
      </div>
    </>
  );
};

export default FeaturedMovies;
