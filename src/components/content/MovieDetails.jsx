import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const singleMovie = useLoaderData();
  // console.log(singleMovie);

  const { title, poster, genre, duration, releaseYear, summary, _id } =
    singleMovie;
  return (
    <>
      <div className="bg-transparent container mx-auto my-8 text-white rounded-lg overflow-hidden">
        {/* Movie Poster */}
        <img
          src={poster}
          alt={title}
          className="w-full h-[60vh] object-cover object-fit"
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
          <p className="mb-4">{summary}</p>
          {/* See Details Button */}
          <div className="flex justify-between gap-4">
            <button className="btn w-[50%] bg-red-600 text-white hover:bg-red-500">
              Delete Movie
            </button>
            <button className="btn w-[50%] bg-red-600 text-white hover:bg-red-500">
              Add to Favorite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
