import { Link, useLoaderData } from "react-router-dom";
import FeaturedMovies from "../components/FeaturedMovies/FeaturedMovies";
import Banner from "../components/static/Banner";
import Answer from "../components/static/ExtraSection/Answer";
import SpecialFeatures from "../components/static/ExtraSection/SpecialFeatures";

const Home = () => {
  // const movies = useLoaderData();
  // console.log(movies);

  return (
    <div className="">
      <Banner />
      <div className="space-y-4 text-white my-5">
        <p className="text-center text-white">
          Ready to watch? create an account or login.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            to="/login"
            className="bg-red-600 rounded-full px-10 text-white btn btn-md transition-all duration-300"
          >
            Login
          </Link>
          <p>or</p>
          <Link
            to="/register"
            className="btn btn-md rounded-full px-10 text-white transition-all duration-300"
          >
            Register
          </Link>
        </div>
      </div>
      <FeaturedMovies />
      <SpecialFeatures />
      <Answer />
    </div>
  );
};

export default Home;
