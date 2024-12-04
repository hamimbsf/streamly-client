import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import ErrorPage from "../page/ErrorPage";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import AddMovie from "../page/AddMovies";
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
    ],
  },
]);
export default router;
