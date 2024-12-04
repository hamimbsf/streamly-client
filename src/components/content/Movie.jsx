import { Link, useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {
  const { title, poster, genre, duration, releaseYear, summary, _id } = movie;
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-transparent text-white rounded-lg overflow-hidden hover:scale-105 duration-500">
        {/* Movie Poster */}
        <img
          src={poster}
          alt={title}
          className="w-full h-48 object-cover object-fit"
        />
        {/* Movie Info */}
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="mb-1">
            <strong>Genre:</strong> {genre}
          </p>
          <p className="mb-1">
            <strong>Duration:</strong> {duration} Minutes
          </p>
          <p className="mb-1">
            <strong>Release Year:</strong> {releaseYear}
          </p>
          <p className="mb-4">
            <strong>Rating:</strong>/10
          </p>
          {/* See Details Button */}
          <Link
            to={"/movie"}
            className="px-4 border-none w-full py-2 btn text-white bg-red-600 transition duration-300"
          >
            See Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default Movie;
