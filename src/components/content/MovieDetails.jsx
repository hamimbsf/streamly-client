import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet";

const MovieDetails = () => {
  const { user } = useContext(AuthContext);
  const singleMovie = useLoaderData();
  const {
    title,
    poster,
    genre,
    duration,
    releaseYear,
    summary,
    _id,
    numberRating,
  } = singleMovie;
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          fetch(`https://streamly-puce.vercel.app/all-movies/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                navigate("/all-movies");
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  // handle add favorite
  const handleAddFavorite = async () => {
    const favorite = {
      userEmail: user.email,
      title,
      poster,
      genre,
      duration,
      releaseYear,
      numberRating,
    };
    try {
      const res = await fetch("https://streamly-puce.vercel.app/favorites", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(favorite),
      });
      const result = await res.json();
      if (result?.message) {
        // console.log(result.message);
        Swal.fire({
          // title: "Congrats",
          text: "Added to your favourite movie section!",
          icon: "success",
        });
      }
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <>
      <Helmet>
        <title>Streamly || {title}</title>
      </Helmet>
      <div className="bg-transparent container mx-auto my-8  rounded-lg overflow-hidden">
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
          <div className="md:flex justify-between gap-4">
            <button
              onClick={() => handleDelete(_id)}
              className="btn md:w-[30%] text-white bg-red-600  hover:bg-red-500"
            >
              Delete Movie
            </button>
            <Link
              to={`/update/${_id}`}
              className="btn md:w-[30%] text-white bg-red-600  hover:bg-red-500"
            >
              Update Movie
            </Link>
            <button
              onClick={handleAddFavorite}
              className="btn md:w-[30%] text-white bg-red-600  hover:bg-red-500"
            >
              Add to Favorite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
