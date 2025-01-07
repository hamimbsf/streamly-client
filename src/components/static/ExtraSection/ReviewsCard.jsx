const ReviewsCard = ({ item }) => {
  const { avatar, name, movie, review } = item;
  return (
    <div className="w-full border border-gray-300 rounded-lg shadow-lg p-6 container mx-auto">
      <div className="flex flex-col justify-center items-center text-center mb-4">
        <img
          src={avatar}
          alt="Reviewer avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm">{movie}</p>
        </div>
      </div>
      <p className="text-base text-center">{review}</p>
    </div>
  );
};

export default ReviewsCard;
