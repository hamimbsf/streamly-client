import React from "react";

const Banner = () => {
  return (
    <div className="">
      {/* Add a slider (you can use any type of static slider/carousel)  with a minimum of 3 slides and  meaningful information */}
      <div>
        <div className="carousel absolute top-0 text-white w-full h-[100vh]">
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/Pxw6gs9/59514054-2004-4425-8c72-cc6a5c0f8f48.jpg"
              className="w-full object-cover"
            />
            <div className="absolute left-20 right-5 top-[55%] flex -translate-y-1/2 transform">
              <h1 className="text-5xl font-extrabold">
                Unlimited movies,
                <br />
                tv shows, and more
                <p className="text-lg py-6 font-normal">
                  To watch you need to login
                </p>
              </h1>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide3"
                className="btn rounded-full h-[10vh]  md:btn-ghost btn-neutral border md:border-none border-white text-white text-lg"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn rounded-full h-[10vh]  md:btn-ghost btn-neutral border md:border-none border-white text-white text-lg"
              >
                ❯
              </a>
            </div>
            <div className="absolute left-20 -bottom-5 flex -translate-y-1/2 transform">
              {/* <p className="text-5xl text-red-500">h</p> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[25vh] w-20 text-white hover:text-red-600 transition animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10l7 7m0 0l7-7m-7 7V2"
                />
              </svg>
            </div>
          </div>
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/C6BmdYg/34f24458-1135-482d-9940-6dcb62472af4.jpg"
              className="w-full object-cover"
            />
            <div className="absolute left-20 right-5 top-[55%] flex -translate-y-1/2 transform">
              <h1 className="text-5xl font-extrabold">
                Only on Streamly
                <br />
                <p className="text-lg py-6 font-normal">
                  Unlock access to shows, movies and specials that you can't
                  find anywhere else.
                </p>
              </h1>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide4"
                className="btn rounded-full h-[10vh]  md:btn-ghost btn-neutral border md:border-none border-white text-white text-lg"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn rounded-full h-[10vh]  md:btn-ghost btn-neutral border md:border-none border-white text-white text-lg"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/mcq17JJ/213228c5-3690-48fb-84a7-8dd248d993f5.jpg"
              className="w-full object-cover"
            />
            <div className="absolute left-20 right-5 top-[55%] flex -translate-y-1/2 transform">
              <h1 className="text-5xl font-extrabold">
                Bring on the drama
                <br />
                <p className="text-lg py-6 font-normal">
                  Dramas for any mood, from the riveting to the heartfelt to
                  those based on real life.
                </p>
              </h1>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide1"
                className="btn rounded-full h-[10vh]  md:btn-ghost btn-neutral border md:border-none border-white text-white text-lg"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn rounded-full h-[10vh]  md:btn-ghost btn-neutral border md:border-none border-white text-white text-lg"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/23nn1x3/rob-laughter-WW1js-In-Xgw-M-unsplash.jpg"
              className="w-full object-cover"
            />
            <div className="absolute left-20 right-5 top-[55%] flex -translate-y-1/2 transform">
              <h1 className="text-5xl font-extrabold">
                Ready, set, action
                <br />
                <p className="text-lg py-6 font-normal">
                  Excitement. Adrenaline. Adventure. All here to keep you on the
                  edge of your seat.
                </p>
              </h1>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide2"
                className="btn rounded-full h-[10vh]  md:btn-ghost btn-neutral border md:border-none border-white text-white text-lg"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn rounded-full h-[10vh]  md:btn-ghost btn-neutral border md:border-none border-white text-white text-lg"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="pt-[100vh]"></div>
      </div>
    </div>
  );
};

export default Banner;
