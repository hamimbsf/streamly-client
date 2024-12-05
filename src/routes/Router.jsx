import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import ErrorPage from "../page/ErrorPage";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import AddMovie from "../page/AddMovies";
import AllMovies from "../page/AllMovies";
import MovieDetails from "../components/content/MovieDetails";
import PrivateRoute from "../components/Private/PrivateRoute";
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
        path: "/upcomming-movies",
        element: <UpcommingMovies />,
        loader: () => fetch("http://localhost:3000/upcomming-movies"),
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
        loader: () => fetch("http://localhost:3000/all-movies"),
      },
      {
        path: "/movie/:id",
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-movies/${params.id}`),
      },
    ],
  },
]);
export default router;
