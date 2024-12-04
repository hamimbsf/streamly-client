import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navItems = (
    <>
      {" "}
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="*">All Movies</NavLink>
      </li>
      <li>
        <NavLink to="/add-movies">Add Movies</NavLink>
      </li>
      <li>
        <NavLink to="*">My Favorites</NavLink>
      </li>
      <li>
        <NavLink to="*">Upcomming Movie</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar text-white relative z-[99]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl text-white font-extrabold">
            STREAMLY
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end ">
          <button className="btn btn-circle btn-ghost avatar">
            <img
              className="rounded-full w-10"
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </button>
        </div>
        {/* <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle navbar-end avatar"
        ></div> */}
      </div>
    </>
  );
};
