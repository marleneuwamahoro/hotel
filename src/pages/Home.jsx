export default function Home({ hotels }) {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Book Your Stay
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold">{hotel.name}</h2>

              <p className="text-gray-500 mt-2">
                📍 {hotel.location}
              </p>

              <div className="flex justify-between items-center mt-4">
                <p className="text-blue-600 font-bold">
                  ${hotel.pricePerNight}/night
                </p>

                <p className="text-yellow-500">
                  ⭐ {hotel.rating}
                </p>
              </div>

              <button className="w-full mt-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}