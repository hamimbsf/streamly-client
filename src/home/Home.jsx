import { Link, useLoaderData } from "react-router-dom";
import FeaturedMovies from "../components/FeaturedMovies/FeaturedMovies";
import Banner from "../components/static/Banner";
import Answer from "../components/static/ExtraSection/Answer";
import SpecialFeatures from "../components/static/ExtraSection/SpecialFeatures";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <Banner />
      {user ? (
        <p></p>
      ) : (
        <div className="space-y-4 my-5">
          <p className="text-center">
            Ready to watch? create an account or login.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/login"
              className="bg-red-600 rounded-full px-10 btn btn-md transition-all duration-300"
            >
              Login
            </Link>
            <p>or</p>
            <Link
              to="/register"
              className="btn btn-md btn-neutral rounded-full px-10 transition-all duration-300"
            >
              Register
            </Link>
          </div>
        </div>
      )}

      <FeaturedMovies />
      <SpecialFeatures />
      <Answer />
    </div>
  );
};

export default Home;
