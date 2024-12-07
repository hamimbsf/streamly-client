import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateForm = () => {
  const { id } = useParams();
  const movies = useLoaderData();
  const navigate = useNavigate();

  const [title, setTitle] = useState(movies?.title || "");
  const [poster, setPoster] = useState(movies?.poster || "");
  const [genre, setGenre] = useState(movies?.genre || "");
  const [duration, setDuration] = useState(movies?.duration || 0);
  const [releaseYear, setReleaseYear] = useState(movies?.releaseYear || "");
  const [summary, setSummary] = useState(movies?.summary || "");
  const [numberRating, setNumberRating] = useState(movies?.numberRating || 1);
  const [error, setError] = useState("");
  //   console.log(title);
  const handleUpdateMovie = async (event) => {
    event.preventDefault();
    if (title.length <= 2) {
      return setError("Title length should be greater than 2 characters");
    }
    if (duration < 60) {
      return setError("Duration should be at least 60 minutes");
    }
    if (summary.length <= 10) {
      return setError("Summary length should be greater than 10 characters");
    }
    if (isNaN(numberRating) || numberRating < 1 || numberRating > 5) {
      return setError("Please enter a rating between 1 and 5.");
    }
    const updatedMovie = {
      title,
      poster,
      genre: [genre],
      duration,
      releaseYear,
      numberRating,
      summary,
    };
    try {
      const res = await fetch(
        `https://streamly-puce.vercel.app/all-movies/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedMovie),
        }
      );

      const result = await res.json();
      if (result.modifiedCount > 0) {
        Swal.fire("Data Updated Successfully", "", "success");
        // Redirect or reset the form
        navigate("/");
      } else {
        Swal.fire("No Changes Detected", "", "info");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while updating the movie.");
    }
  };

  return (
    <div
      className="hero absolute top-0 min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/VNk0gDB/330744315-716972846472643-4555137785825918072-n.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="md:w-[30vw] w-[90vw] mt-16 mx-auto bg-[#00000078] text-white p-4 rounded shadow-lg">
        <h1 className="text-xl font-bold mb-2">Update Movie</h1>
        <form onSubmit={handleUpdateMovie}>
          <div className="mb-2">
            <label className="block text-sm font-medium">
              Movie Poster (Image Link)
            </label>
            <input
              type="url"
              name="posterLink"
              value={poster}
              onChange={(e) => setPoster(e.target.value)}
              className="w-full p-2 border-neutral border bg-transparent rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium">Movie Title</label>
            <input
              type="text"
              name="movieTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border-neutral border bg-transparent rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium">Genre</label>
            <select
              className="bg-transparent py-4 w-full border-neutral border rounded"
              name="genre"
              value={genre} // Bind state to the select value
              onChange={(e) => setGenre(e.target.value)} // Update state on change
            >
              <option value="" disabled>
                Select Genre
              </option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="horror">Horror</option>
              <option value="si-fi">Si-Fi</option>
              <option value="action">Action</option>
              <option value="romantic">Romantic</option>
            </select>
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium">
              Duration (in minutes)
            </label>
            <input
              type="number"
              name="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-2 bg-transparent border-neutral border rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium">Release Year</label>
            <select
              name="releaseYear"
              value={releaseYear}
              onChange={(e) => setReleaseYear(e.target.value)}
              className="w-full bg-transparent p-2 border-neutral border rounded"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium">Rating</label>
            <input
              type="number"
              name="rating"
              value={numberRating}
              onChange={(e) => setGenre(parseInt(e.target.value))}
              className="w-full p-2 bg-transparent border-neutral border rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium">Summary</label>
            <textarea
              name="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full bg-transparent p-2 border-neutral border rounded"
              rows="4"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full btn border-none text-white bg-red-600 hover:bg-red-500"
          >
            Update Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
