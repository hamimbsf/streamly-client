import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { RiMenu2Line } from "react-icons/ri";

export const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      html.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-movies">All Movies</NavLink>
      </li>
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
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  const image = (
    <img
      className="rounded-full w-10"
      referrerPolicy="no-refferer"
      src="https://i.ibb.co/kgSRLGw/mysterious-mafia-man-smoking-cigarette-52683-34828.jpg"
      alt="default-avatar"
    />
  );

  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // console.error(error);
      });
  };

  return (
    <div className="navbar sticky top-0 text-white bg-[#0000007c] z-[99] px-[5%]">
      <div className="drawer navbar-start">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex items-center gap-4">
          <label
            htmlFor="my-drawer"
            className="btn btn-circle drawer-button lg:hidden"
          >
            <RiMenu2Line className="text-2xl transition-all hover:scale-110 duration-300 cursor-pointer" />
          </label>
          <Link to="/" className="text-3xl font-extrabold">
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
      <div className="navbar-end flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center w-10 h-10 transition"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {isDark ? (
            // Moon Icon for Dark Mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0112 20.25 9.718 9.718 0 012.248 15.002M15.002 2.248A9.718 9.718 0 0112 3.75a9.718 9.718 0 01-3.002-1.502"
              />
            </svg>
          ) : (
            // Sun Icon for Light Mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1.5m0 13V21m9-9h-1.5m-13 0H3m15.364 6.364l-1.06-1.06m-10.606 0l-1.06 1.06m12.728-12.728l-1.06 1.06M6.364 5.636l-1.06-1.06M15.25 12a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z"
              />
            </svg>
          )}
        </button>
        <details className="dropdown dropdown-end">
          <summary className="btn btn-circle btn-ghost avatar m-1">
            {user ? (
              <img
                className="rounded-full w-10"
                referrerPolicy="no-referrer"
                src={user.photoURL}
                alt="user-avatar"
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
  );
};
