function Offers() {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-4">
        Offers
      </h2>

      <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center">
        <div>
          <h3 className="font-bold text-2xl">
            No catch. Just getaways.
          </h3>

          <p className="mt-2">
            At least 15% off select stays worldwide.
          </p>

          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
            Save with a Deal
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt=""
          className="w-40 rounded"
        />
      </div>
    </div>
  );
}

export default Offers;