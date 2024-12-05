const Answer = () => {
  return (
    <>
      <div className="my-6 px-4 md:px-0 container mx-auto space-y-4 text-white">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <details className="collapse bg-base-200">
          <summary className="collapse-title text-xl font-medium">
            What is Streamly?
          </summary>
          <div className="collapse-content">
            <p>
              Streamly is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want without a single commercial - all for
              one low monthly price. There's always something new to discover
              and new TV shows and movies are added every week!
            </p>
          </div>
        </details>
        <details className="collapse bg-base-200">
          <summary className="collapse-title text-xl font-medium">
            Where can I watch?
          </summary>
          <div className="collapse-content">
            <p>
              Watch anywhere, anytime. Sign in with your Streamly account to
              watch instantly on the web at Streamly.com from your personal
              computer or on any internet-connected device that offers the
              Streamly app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favorite shows with the iOS or Android app. Use downloads to watch
              while you're on the go and without an internet connection. Take
              Streamly with you anywhere.
            </p>
          </div>
        </details>
        <details className="collapse bg-base-200">
          <summary className="collapse-title text-xl font-medium">
            Is Streamly good for kids?
          </summary>
          <div className="collapse-content">
            <p>
              The Streamly Kids experience is included in your membership to
              give parents control while kids enjoy family-friendly TV shows and
              movies in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don't want
              kids to see.
            </p>
          </div>
        </details>
      </div>
    </>
  );
};

export default Answer;
