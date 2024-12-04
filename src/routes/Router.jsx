import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import ErrorPage from "../page/ErrorPage";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import AddMovie from "../page/AddMovies";
import AllMovies from "../page/AllMovies";
import MovieDetails from "../components/content/MovieDetails";
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
        path: "/add-movies",
        element: <AddMovie />,
      },
      {
        path: "/all-movies",
        element: <AllMovies />,
        loader: () => fetch("http://localhost:3000/all-movies"),
      },
      {
        path: "/movie",
        element: <MovieDetails />,
        // loader: () => fetch("http://localhost:3000/all-movies"),
      },
    ],
  },
]);
export default router;
