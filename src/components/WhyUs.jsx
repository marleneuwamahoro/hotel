const features = [
  {
    title: "Book now, pay at property",
    text: "FREE cancellation on most rooms",
  },
  {
    title: "300M+ reviews",
    text: "Trusted information from guests",
  },
  {
    title: "2+ million properties",
    text: "Hotels, apartments and more",
  },
  {
    title: "24/7 customer service",
    text: "Always here to help",
  },
];

function WhyUs() {
  return (
    <>
      <h2 className="text-4xl font-bold mb-6">
        Why Booking.com?
      </h2>

      <div className="grid md:grid-cols-4 gap-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow"
          >
            <h3 className="font-bold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default WhyUs;