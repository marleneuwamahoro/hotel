const homes = [
  {
    name: "Luxury Apartment",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    location: "Kigali",
  },
  {
    name: "Ocean Resort",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    location: "Zanzibar",
  },
  {
    name: "Modern Suite",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    location: "Nairobi",
  },
  {
    name: "Villa Paradise",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    location: "Cape Town",
  },
];

function HomeGuestsLove() {
  return (
    <section className="mt-14">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">
          Homes guests love
        </h2>

        <button className="text-blue-600">
          Discover Homes
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-5 mt-6">
        {homes.map((home, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow"
          >
            <img
              src={home.image}
              alt=""
              className="w-full h-60 object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold">
                {home.name}
              </h3>

              <p className="text-gray-500">
                {home.location}
              </p>

              <button className="bg-blue-600 text-white px-3 py-1 rounded mt-3">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeGuestsLove;