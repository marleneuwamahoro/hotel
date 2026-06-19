const properties = [
  {
    name: "Hotels",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    name: "Apartments",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    name: "Resorts",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
  },
  {
    name: "Villas",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
  },
];

function PropertyTypes() {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">
        Browse by property type
      </h2>

      <div className="grid md:grid-cols-4 gap-5">
        {properties.map((property, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow"
          >
            <img
              src={property.image}
              alt=""
              className="h-52 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold">
                {property.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyTypes;