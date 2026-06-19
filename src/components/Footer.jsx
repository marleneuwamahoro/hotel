function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="max-w-6xl mx-auto py-10 px-4">

        <div className="grid md:grid-cols-4 gap-6">

          <div>
            <h3 className="font-bold mb-4">
              Support
            </h3>

            <p>Help Center</p>
            <p>Contact Us</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Company
            </h3>

            <p>About Us</p>
            <p>Careers</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Discover
            </h3>

            <p>Hotels</p>
            <p>Apartments</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Booking Clone
            </h3>

            <p>
              Built with React & Tailwind CSS
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;