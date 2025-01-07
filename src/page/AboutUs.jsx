import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Streamly || About Us</title>
      </Helmet>
      <div className="container mx-auto my-16 space-y-4 px-4 md:px-0">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p>
          Welcome to Streamly, your ultimate destination for everything movies!
          Whether you're a passionate cinephile, a casual viewer, or just
          looking for the next great film to watch, we've got you covered. Our
          mission is simple: to bring the magic of cinema closer to you. We
          provide a curated platform where you can explore movies, from the
          latest blockbusters to timeless classics, across every genre and
          language.
        </p>
        <h1 className="text-2xl font-bold pt-6">What We Offer:</h1>
        <ul className=" space-y-3">
          <li>
            <span className=" font-bold">Comprehensive Movie Database:</span>{" "}
            Dive into detailed information about your favorite films, directors,
            actors, and behind-the-scenes stories.
          </li>
          <li>
            <span className=" font-bold">Reviews and Ratings:</span> Get
            authentic reviews and ratings from fellow movie lovers.
          </li>
          <li>
            <span className=" font-bold">Personalized Recommendations:</span>{" "}
            Discover movies tailored to your unique taste.
          </li>
          <li>
            <span className=" font-bold">Trending News:</span> Stay updated with
            the latest in the world of cinema, from upcoming releases to
            exclusive interviews and more.
          </li>
        </ul>
        <p className=" pt-6">
          At <span className=" font-bold">Streamly</span>, we believe movies
          aren't just entertainment—they're experiences, stories, and emotions
          that connect us all. Our platform is designed to celebrate this
          universal love for storytelling through film.
        </p>
        <h2 className=" font-bold text-2xl pt-6">Join Our Community!</h2>
        <p>
          Become part of a growing community that celebrates movies and shares
          insights, opinions, and recommendations. Whether you're into Hollywood
          hits, indie gems, or international cinema, there's something here for
          everyone.
        </p>
        <p>
          So grab some popcorn, sit back, and start your cinematic journey with
          us today!
        </p>
      </div>
    </>
  );
};

export default AboutUs;
