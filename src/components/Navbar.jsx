function Navbar() {
  return (
    <nav className="bg-blue-800 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-5 px-4">
        <h1 className="text-3xl font-bold">Booking.com</h1>

        <div className="flex gap-4">
          <button className="border px-4 py-2 rounded">
            Register
          </button>

          <button className="bg-white text-blue-800 px-4 py-2 rounded">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;