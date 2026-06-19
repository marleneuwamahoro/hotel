function HotelDetails() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
        alt=""
        className="w-full  object-cover rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-6">
        Kigali Marriott Hotel
      </h1>

      <p className="text-gray-600 mt-2">
        Kigali, Rwanda
      </p>

      <p className="mt-6">
        Luxury hotel with swimming pool,
        restaurant and conference rooms.
      </p>

      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded">
        Reserve Now
      </button>
    </div>
  );
}

export default HotelDetails;