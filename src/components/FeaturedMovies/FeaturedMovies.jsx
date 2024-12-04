import React, { useEffect, useState } from "react";
import Movie from "../content/Movie";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/all-movies")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data);
      });
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-4 container mx-auto my-16">
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default FeaturedMovies;
