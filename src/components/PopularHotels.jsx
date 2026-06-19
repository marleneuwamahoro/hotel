import hotels from "../data/hotels";
import HotelCard from "./HotelCard";

function PopularHotels() {
  return (
    <section className="mt-14">
      <h2 className="text-3xl font-bold mb-6">
        Popular Hotels
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularHotels;