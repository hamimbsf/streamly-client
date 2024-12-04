import { data, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MovieDetails = () => {
  const singleMovie = useLoaderData();
  const { title, poster, genre, duration, releaseYear, summary, _id } =
    singleMovie;
  const navigate = useNavigate();
  const handleDelete = (id) => {
    // console.log(id);
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
          fetch(`http://localhost:3000/all-movies/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
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
            <button
              onClick={() => handleDelete(_id)}
              className="btn w-[50%] bg-red-600 text-white hover:bg-red-500"
            >
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
