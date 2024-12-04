const AddMovie = () => {
  const handleAddMovies = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.movieTitle.value;
    const poster = form.posterLink.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    const summary = form.summary.value;
    const movieDetails = {
      title,
      poster,
      genre,
      duration,
      releaseYear,
      summary,
    };
    /*  */
    console.log(movieDetails);
  };
  return (
    <>
      <div
        className="hero absolute top-0 min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/VNk0gDB/330744315-716972846472643-4555137785825918072-n.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="md:w-[30vw] w-[90vw] mt-12 mx-auto bg-[#00000078] text-white p-4 rounded shadow-lg">
          <h1 className="text-xl font-bold mb-4">Add Movie</h1>
          <form onSubmit={handleAddMovies}>
            {/* Movie Poster */}
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Movie Poster (Image Link)
              </label>
              <input
                type="url"
                name="posterLink"
                className="w-full p-2 border-neutral border bg-transparent rounded"
                required
              />
            </div>

            {/* Movie Title */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Movie Title</label>
              <input
                type="text"
                name="movieTitle"
                className="w-full p-2 border-neutral border bg-transparent rounded"
                required
              />
            </div>

            {/* Genre */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Genre</label>
              <select className="bg-transparent py-4" name="genre">
                <option value="">Select Genre</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
              </select>
            </div>

            {/* Duration */}
            <div className="mb-4">
              <label className="block text-sm font-medium">
                Duration (in minutes)
              </label>
              <input
                type="number"
                name="duration"
                className="w-full p-2 bg-transparent border-neutral border rounded"
              />
            </div>

            {/* Release Year */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Release Year</label>
              <select
                name="releaseYear"
                required
                className="w-full bg-transparent p-2 border-neutral border rounded"
              >
                <option value="">Select Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>

            {/* Rating */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Rating</label>
            </div>

            {/* Summary */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Summary</label>
              <textarea
                name="summary"
                required
                className="w-full bg-transparent p-2 border-neutral border rounded"
                rows="4"
              />
            </div>

            <button
              type="submit"
              className="w-full btn text-white bg-red-600 hover:bg-red-500"
            >
              Add Movie
            </button>
          </form>
        </div>
      </div>
      <div className="pt-[90vh]"></div>
    </>
  );
};

export default AddMovie;
