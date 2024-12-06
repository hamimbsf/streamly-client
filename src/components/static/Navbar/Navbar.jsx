import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { RiMenu2Line } from "react-icons/ri";

export const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save theme preference
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const navItems = (
    <>
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
        <NavLink to="/upcomming-movies">Upcoming Movies</NavLink>
      </li>
    </>
  );

  const image = (
    <img
      className="rounded-full w-10"
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
    <div className="navbar text-white bg-[#0000007c] relative z-[99] px-[5%]">
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
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={handleThemeToggle}
            checked={theme === "dark"}
          />
          {/* Sun Icon */}
          <svg
            className="swap-on text-orange-500 fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64 17.36a9 9 0 1112.72 0 9 9 0 01-12.72 0zM12 4V2m0 20v-2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M4 12H2m20 0h-2m-2.78-7.78l-1.42 1.42M6.64 19.78l-1.42-1.42" />
          </svg>
          {/* Moon Icon */}
          <svg
            className="swap-off fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.4 13.3a9 9 0 11-8.7-8.7 7 7 0 108.7 8.7z" />
          </svg>
        </label>
        <details className="dropdown dropdown-end">
          <summary className="btn btn-circle btn-ghost avatar m-1">
            {user ? (
              <img
                className="rounded-full w-10"
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
