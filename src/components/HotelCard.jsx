function HotelCard({ hotel }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-xl">
          {hotel.name}
        </h3>

        <p className="text-gray-500 mt-1">
          {hotel.location}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-blue-700">
            ${hotel.price}
          </span>

          <span className="bg-blue-700 text-white px-2 py-1 rounded">
            {hotel.rating}
          </span>
        </div>

        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded">
          View Details
        </button>
      </div>
    </div>
  );
}

export default HotelCard;