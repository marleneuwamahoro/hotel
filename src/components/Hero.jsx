import {
  FaBed,
  FaPlane,
  FaCar,
  FaTaxi,
  FaCalendarAlt,
  FaUser
} from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-blue-800 text-white pb-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Navigation */}
        <div className="flex gap-6 py-8">
          <button className="border border-white px-5 py-2 rounded-full flex items-center gap-2">
            <FaBed />
            Stays
          </button>

          <button className="flex items-center gap-2">
            <FaPlane />
            Flights
          </button>

          <button className="flex items-center gap-2">
            <FaCar />
            Car Rental
          </button>

          <button className="flex items-center gap-2">
            <FaTaxi />
            Airport Taxi
          </button>
        </div>

        <h1 className="text-6xl font-bold">
          Find your next stay
        </h1>

        <p className="mt-4 text-xl">
          Search deals on hotels, homes, and much more...
        </p>

        {/* Search Form */}
        <div className="bg-white mt-10 rounded-lg flex flex-wrap shadow-xl border-4 border-yellow-400">

          <div className="flex items-center flex-1 border-r px-4">
            <FaBed className="text-gray-500" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full p-4 outline-none text-black"
            />
          </div>

          <div className="flex items-center border-r px-4">
            <FaCalendarAlt className="text-gray-500" />
            <input
              type="date"
              className="p-4 text-black outline-none"
            />
          </div>

          <div className="flex items-center border-r px-4">
            <FaUser className="text-gray-500" />
            <select className="p-4 text-black outline-none">
              <option>2 adults · 1 room</option>
            </select>
          </div>

          <button className="bg-blue-600 text-white px-10 py-4 font-semibold">
            Search
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;