import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { RiMenu2Line } from "react-icons/ri";

export const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const navItems = (
    <>
      {" "}
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/all-movies">All Movies</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/add-movies">Add Movies</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/favourite-movies">My Favorites</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/upcomming-movies">Upcomming Movie</NavLink>
      </li>
    </>
  );
  const image = (
    <img
      className="rounded-full w-10"
      src="https://i.ibb.co.com/kgSRLGw/mysterious-mafia-man-smoking-cigarette-52683-34828.jpg"
    />
  );
  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <>
      <div className="navbar text-white relative z-[99] px-[5%]">
        <div className="drawer navbar-start">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content flex items-center gap-4">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-circle drawer-button lg:hidden"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 80"
                fill="currentColor"
                className="w-8 h-8 hover:scale-110 transition-transform duration-300"
              >
                <rect y="10" width="100" height="10" rx="5" />
                <rect y="35" width="100" height="10" rx="5" />
                <rect y="60" width="100" height="10" rx="5" />
              </svg> */}
              <RiMenu2Line className="text-2xl transition-all hover:scale-110 duration-300 cursor-pointer" />
            </label>
            <Link to="/" className="text-3xl text-white font-extrabold">
              STREAMLY
            </Link>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {navItems}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <details className="dropdown dropdown-end">
            <summary className="btn btn-circle btn-ghost avatar m-1">
              {user ? (
                <img
                  className="rounded-full w-10"
                  src={user && user.photoURL}
                />
              ) : (
                image
              )}
            </summary>

            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              {user ? (
                <li>
                  <button onClick={handleSignOut} className="btn">
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link to="/login" className="btn">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </details>
        </div>
      </div>
    </>
  );
};
