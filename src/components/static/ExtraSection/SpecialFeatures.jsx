const SpecialFeatures = () => {
  return (
    <div className=" container mx-auto text-white">
      <h1 className="text-4xl font-bold mb-4">More Reasons to Join</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card border-2 border-neutral">
          <div className="card-body">
            <h2 className="card-title">Stories tailored to your taste</h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card border-2 border-neutral">
          <div className="card-body ">
            <h2 className="card-title">Cancel or switch plans anytime</h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card border-2 border-neutral">
          <div className="card-body ">
            <h2 className="card-title">A place just for kids</h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card border-2 border-neutral">
          <div className="card-body ">
            <h2 className="card-title">
              For your phone, tablet, laptop and TV
            </h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialFeatures;
