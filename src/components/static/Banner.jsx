import React from "react";

const Banner = () => {
  return (
    <div className="">
      {/* Add a slider (you can use any type of static slider/carousel)  with a minimum of 3 slides and  meaningful information */}
      <div>
        <div className="carousel absolute top-0 text-white w-full h-[100vh]">
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/9HMFCqB/MLP-ROW-Muti-title-Mag1-CB1564087979.jpg"
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
              src="https://i.ibb.co.com/VNk0gDB/330744315-716972846472643-4555137785825918072-n.jpg"
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
              src="https://i.ibb.co.com/jJszm9s/BD-en-20241125-TRIFECTA-658e7f25-278b-487a-b0b6-d0a41dcfbf34-large.jpg"
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
              src="https://i.ibb.co.com/jJszm9s/BD-en-20241125-TRIFECTA-658e7f25-278b-487a-b0b6-d0a41dcfbf34-large.jpg"
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
