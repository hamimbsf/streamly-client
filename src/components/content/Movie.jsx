import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const Movie = ({ movie }) => {
  const { title, poster, genre, duration, releaseYear, _id, numberRating } =
    movie;
  // console.log(numberRating);
  const [rating, setRating] = useState(numberRating || 0);
  const handleRating = (rate) => {
    setRating(rate);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-transparent text-white rounded-lg overflow-hidden hover:scale-105 duration-500">
        {/* Movie Poster */}
        <img
          src={poster}
          alt={title}
          className="w-full h-48 object-center object-cover"
        />
        {/* Movie Info */}
        <div className="p-4 h-[35vh] lg:h-[35vh] md:h-[20vh] flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="mb-1">
            {genre?.map((category, index) => (
              <span key={index}>Genre: {category}</span>
            ))}
          </p>
          <p className="mb-1">
            <strong>Duration:</strong> {duration} Minutes
          </p>
          <p className="mb-1">
            <strong>Release Year:</strong> {releaseYear}
          </p>
          <div className="mb-4">
            <p>
              <strong>Rating:</strong> {numberRating}/5
            </p>
            <div className="flex items-center">
              {/* <Rating
                onClick={handleRating}
                initialValue={numberRating}
                size={16}
                allowHalfIcon 
                style={{ display: "inline-flex", gap: "5px" }}
                
              /> */}
            </div>
          </div>
          {/* See Details Button */}
          <Link
            to={`/movie/${_id}`}
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
