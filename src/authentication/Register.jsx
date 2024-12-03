import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, photoURL, password);
  };
  return (
    <>
      <div
        className="hero absolute top-0 min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/JpsTjYf/BD-en-20241125-TRIFECTA-perspective-27f3ce45-f067-41fa-962f-9812262a5ba4-large.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-full max-w-md p-8 space-y-8 bg-[#00000078] rounded-lg shadow-lg">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-white">
              Register Your Account
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Full Name"
                  className="input input-bordered w-full bg-transparent text-white"
                />
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="input input-bordered w-full bg-transparent text-white"
                />
              </div>

              {/* Photo URL Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photoURL"
                  placeholder="Photo URL"
                  required
                  className="input input-bordered w-full bg-transparent text-white"
                />
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="input input-bordered w-full bg-transparent text-white"
                />
              </div>

              {/* Register Button */}
              <button className="btn w-full bg-red-600 hover:bg-red-500 text-white">
                Register
              </button>
            </form>
            {/* Sign In Link */}
            <p className="text-sm text-center text-gray-400">
              If you have already an account?{" "}
              <Link to="/login" className="text-red-500 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[90vh]"></div>
    </>
  );
};

export default Register;
