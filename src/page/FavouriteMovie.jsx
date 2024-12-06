import { useContext, useEffect, useState } from "react";
import Movie from "../components/content/Movie";
import { AuthContext } from "../provider/AuthProvider";

const FavouriteMovie = () => {
  const [movies, setMovies] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchFavorites = async () => {
      const res = await fetch(
        `https://streamly-puce.vercel.app/favorites?email=${user?.email}`
      );
      const data = await res.json();
      setMovies(data);
    };
    fetchFavorites();
  }, []);

  // handle delete favorite
  const handleDelteFavorite = async (id) => {
    console.log(id);
    try {
      const res = await fetch(
        `https://streamly-puce.vercel.app/favorites?id=${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await res.json();
      if (result?.message) {
        setMovies((prev) => prev.filter((movie) => movie._id !== id));
        console.log(result?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {movies.map((movie) => (
        <Movie
          key={movie._id}
          movie={movie}
          isBtn={true}
          handleDelteFavorite={handleDelteFavorite}
        ></Movie>
      ))}
    </div>
  );
};

export default FavouriteMovie;
