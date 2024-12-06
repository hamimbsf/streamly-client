import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ForgetPass from "../authentication/ForgetPass";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import MovieDetails from "../components/content/MovieDetails";
import PrivateRoute from "../components/Private/PrivateRoute";
import Home from "../home/Home";
import AddMovie from "../page/AddMovies";
import AllMovies from "../page/AllMovies";
import ErrorPage from "../page/ErrorPage";
import FavouriteMovie from "../page/FavouriteMovie";
import UpcommingMovies from "../page/UpcommingMovies";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgetPass />,
      },
      {
        path: "/favourite-movies",
        element: (
          <PrivateRoute>
            <FavouriteMovie />
          </PrivateRoute>
        ),
      },
      {
        path: "/upcomming-movies",
        element: <UpcommingMovies />,
        loader: () =>
          fetch("https://streamly-puce.vercel.app/upcomming-movies"),
      },
      {
        path: "/add-movies",
        element: (
          <PrivateRoute>
            <AddMovie />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-movies",
        element: (
          <PrivateRoute>
            <AllMovies />
          </PrivateRoute>
        ),
        loader: () => fetch("https://streamly-puce.vercel.app/all-movies"),
      },
      {
        path: "/movie/:id",
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://streamly-puce.vercel.app/all-movies/${params.id}`),
      },
    ],
  },
]);
export default router;
